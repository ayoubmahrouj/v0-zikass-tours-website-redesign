
// Customer reviews stored in Supabase (free tier).
// Env vars (Vercel > Settings > Environment Variables):
//   SUPABASE_URL               e.g. https://abcd1234.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY  secret "service_role" key (never expose it client-side)
// Run supabase/schema.sql once in the Supabase SQL editor.

export type ReviewStatus = "pending" | "approved" | "hidden"

export interface Review {
  id: string
  created_at: string
  name: string
  country: string | null
  trip: string | null
  rating: number
  text: string
  photo_url: string | null
  photo_path: string | null
  locale: string | null
  status: ReviewStatus
}

const URL_ = process.env.SUPABASE_URL?.replace(/\/$/, "")
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
export const PHOTO_BUCKET = "review-photos"
export const REVIEWS_TAG = "reviews"

export function reviewsEnabled() {
  return Boolean(URL_ && KEY)
}

function headers(extra: Record<string, string> = {}) {
  return { apikey: KEY!, Authorization: `Bearer ${KEY}`, ...extra }
}

async function rest(path: string, init: RequestInit & { next?: { revalidate?: number; tags?: string[] } } = {}) {
  const res = await fetch(`${URL_}/rest/v1/${path}`, {
    ...init,
    headers: headers({ "Content-Type": "application/json", ...(init.headers as Record<string, string>) }),
  })
  if (!res.ok) throw new Error(`Supabase ${res.status}: ${await res.text()}`)
  return res
}

/** Approved reviews for the public site (cached, refreshed when the admin approves/deletes). */
export async function getApprovedReviews(limit = 12): Promise<Review[]> {
  if (!reviewsEnabled()) return []
  try {
    const res = await rest(`reviews?status=eq.approved&order=created_at.desc&limit=${limit}`, {
      next: { revalidate: 600, tags: [REVIEWS_TAG] },
    })
    return (await res.json()) as Review[]
  } catch (e) {
    console.error("getApprovedReviews", e)
    return []
  }
}

export async function getReviewStats(): Promise<{ count: number; average: number }> {
  if (!reviewsEnabled()) return { count: 0, average: 0 }
  try {
    const res = await rest(`reviews?status=eq.approved&select=rating`, {
      next: { revalidate: 600, tags: [REVIEWS_TAG] },
    })
    const rows = (await res.json()) as { rating: number }[]
    const count = rows.length
    const average = count ? rows.reduce((s, r) => s + r.rating, 0) / count : 0
    return { count, average: Math.round(average * 10) / 10 }
  } catch {
    return { count: 0, average: 0 }
  }
}

export async function listReviews(status?: ReviewStatus): Promise<Review[]> {
  const filter = status ? `status=eq.${status}&` : ""
  const res = await rest(`reviews?${filter}order=created_at.desc&limit=500`, { cache: "no-store" })
  return (await res.json()) as Review[]
}

export async function insertReview(r: Omit<Review, "id" | "created_at" | "status">) {
  await rest("reviews", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ ...r, status: "pending" }),
  })
}

export async function setReviewStatus(id: string, status: ReviewStatus) {
  await rest(`reviews?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ status }),
  })
}

export async function deleteReview(id: string) {
  const res = await rest(`reviews?id=eq.${encodeURIComponent(id)}&select=photo_path`, {
    method: "DELETE",
    headers: { Prefer: "return=representation" },
  })
  const rows = (await res.json()) as { photo_path: string | null }[]
  const path = rows[0]?.photo_path
  if (path) {
    await fetch(`${URL_}/storage/v1/object/${PHOTO_BUCKET}/${path}`, { method: "DELETE", headers: headers() }).catch(() => {})
  }
}

/** Uploads a customer photo to the public bucket; returns its path and public URL. */
export async function uploadPhoto(file: File): Promise<{ path: string; url: string }> {
  const ext = (file.type.split("/")[1] || "jpg").replace("jpeg", "jpg").replace(/[^a-z0-9]/g, "")
  const path = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}.${ext}`
  const res = await fetch(`${URL_}/storage/v1/object/${PHOTO_BUCKET}/${path}`, {
    method: "POST",
    headers: headers({ "Content-Type": file.type, "x-upsert": "false" }),
    body: Buffer.from(await file.arrayBuffer()),
  })
  if (!res.ok) throw new Error(`Upload ${res.status}: ${await res.text()}`)
  return { path, url: `${URL_}/storage/v1/object/public/${PHOTO_BUCKET}/${path}` }
}
