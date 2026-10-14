import { NextResponse } from "next/server"
import { bookingsEnabled, insertBooking, notifyOwner } from "@/lib/bookings"

export const runtime = "nodejs"

const hits = new Map<string, number[]>()
function limited(ip: string, max: number) {
  const now = Date.now()
  const list = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000)
  list.push(now)
  hits.set(ip, list)
  return list.length > max
}
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "")

export async function POST(req: Request) {
  if (!bookingsEnabled()) return NextResponse.json({ ok: true })
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  let body: Record<string, unknown>
  try {
    body = JSON.parse(await req.text())
  } catch {
    return NextResponse.json({ error: "Invalid" }, { status: 400 })
  }
  if (clean(body.website, 50)) return NextResponse.json({ ok: true }) // honeypot

  const source = body.source === "whatsapp_click" ? "whatsapp_click" : "form"
  if (limited(ip, source === "form" ? 5 : 20)) return NextResponse.json({ ok: true })

  const b = {
    source: source as "form" | "whatsapp_click",
    name: clean(body.name, 80) || null,
    phone: clean(body.phone, 40) || null,
    trip: clean(body.trip, 100) || null,
    trip_date: clean(body.date, 20) || null,
    people: clean(body.people, 5) || null,
    hotel: clean(body.hotel, 120) || null,
    message: clean(body.msg, 1000) || null,
    page: clean(body.page, 200) || null,
    ref: clean(body.ref, 40).toLowerCase().replace(/[^a-z0-9_-]/g, "") || null,
    locale: body.locale === "fr" ? "fr" : "en",
  }
  if (source === "form" && !b.name) return NextResponse.json({ error: "Name required" }, { status: 400 })

  try {
    await insertBooking(b)
  } catch (e) {
    console.error("insertBooking", e)
    return NextResponse.json({ ok: true })
  }

  if (source === "form") {
    await notifyOwner(
      [
        "NOUVELLE RESERVATION zikasstours.com",
        `Nom: ${b.name}`,
        `Tel: ${b.phone || "-"}`,
        `Trajet: ${b.trip || "-"}`,
        `Date: ${b.trip_date || "-"}`,
        `Personnes: ${b.people || "-"}`,
        `Hotel: ${b.hotel || "-"}`,
        b.ref ? `Partenaire: ${b.ref}` : "",
        b.message ? `Msg: ${b.message}` : "",
        "Admin: zikasstours.com/admin?view=bookings",
      ].filter(Boolean).join("\n"),
    )
  }
  return NextResponse.json({ ok: true })
}
