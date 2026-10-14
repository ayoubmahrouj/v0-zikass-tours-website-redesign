import { NextResponse } from "next/server"
import { insertReview, reviewsEnabled, uploadPhoto } from "@/lib/reviews"

export const runtime = "nodejs"

const MAX_PHOTO = 5 * 1024 * 1024
const TYPES = ["image/jpeg", "image/png", "image/webp"]

// Very small in-memory rate limit (per server instance): 3 reviews / 10 min / IP
const hits = new Map<string, number[]>()
function limited(ip: string) {
  const now = Date.now()
  const list = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000)
  list.push(now)
  hits.set(ip, list)
  return list.length > 3
}

const clean = (v: FormDataEntryValue | null, max: number) =>
  typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : ""

export async function POST(req: Request) {
  if (!reviewsEnabled()) {
    return NextResponse.json({ error: "Reviews are not configured yet." }, { status: 503 })
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (limited(ip)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })

  let form: FormData
  try {
    form = await req.formData()
  } catch {
    return NextResponse.json({ error: "Invalid form." }, { status: 400 })
  }

  // Honeypot: real visitors never fill this hidden field
  if (clean(form.get("website"), 100)) return NextResponse.json({ ok: true })

  const name = clean(form.get("name"), 60)
  const country = clean(form.get("country"), 60)
  const trip = clean(form.get("trip"), 80)
  const text = typeof form.get("text") === "string" ? String(form.get("text")).trim().slice(0, 1500) : ""
  const rating = Number(form.get("rating"))
  const locale = form.get("locale") === "fr" ? "fr" : "en"
  const consent = form.get("consent") === "on"

  if (name.length < 2 || text.length < 10 || !(rating >= 1 && rating <= 5) || !consent) {
    return NextResponse.json({ error: "Please fill in your name, a rating and at least 10 characters." }, { status: 400 })
  }

  let photo_url: string | null = null
  let photo_path: string | null = null
  const photo = form.get("photo")
  if (photo && typeof photo !== "string" && photo.size > 0) {
    if (!TYPES.includes(photo.type) || photo.size > MAX_PHOTO) {
      return NextResponse.json({ error: "Photo must be JPG, PNG or WEBP and under 5 MB." }, { status: 400 })
    }
    try {
      const up = await uploadPhoto(photo)
      photo_url = up.url
      photo_path = up.path
    } catch (e) {
      console.error(e)
      return NextResponse.json({ error: "Photo upload failed. Try again without the photo." }, { status: 500 })
    }
  }

  try {
    await insertReview({ name, country: country || null, trip: trip || null, rating: Math.round(rating), text, photo_url, photo_path, locale })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Could not save your review. Please try again." }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
