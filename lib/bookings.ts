// Booking requests + WhatsApp click tracking, stored in Supabase (table zt_bookings).
// Instant WhatsApp alert via CallMeBot. Env vars:
//   CALLMEBOT_PHONE   your number with country code, e.g. 2126XXXXXXXX
//   CALLMEBOT_APIKEY  key received from CallMeBot
import { reviewsEnabled } from "./reviews"

export type BookingStatus = "new" | "confirmed" | "done" | "cancelled"

export interface Booking {
  id: string
  created_at: string
  source: "form" | "whatsapp_click"
  name: string | null
  phone: string | null
  trip: string | null
  trip_date: string | null
  people: string | null
  hotel: string | null
  message: string | null
  page: string | null
  locale: string | null
  status: BookingStatus
  price: number | null
  commission_pct: number
  note: string | null
  commission_paid?: boolean
  log?: string | null
  ref?: string | null
}

const URL_ = process.env.SUPABASE_URL?.replace(/\/$/, "")
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

async function rest(path: string, init: RequestInit = {}) {
  const res = await fetch(`${URL_}/rest/v1/${path}`, {
    ...init,
    cache: "no-store",
    headers: { apikey: KEY!, Authorization: `Bearer ${KEY}`, "Content-Type": "application/json", ...(init.headers as Record<string, string>) },
  })
  if (!res.ok) throw new Error(`Supabase ${res.status}: ${await res.text()}`)
  return res
}

export const bookingsEnabled = reviewsEnabled

export async function insertBooking(b: Partial<Omit<Booking, "id" | "created_at" | "status" | "price" | "commission_pct" | "note">>) {
  const post = (body: object) => rest("zt_bookings", { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify(body) })
  try {
    await post(b)
  } catch (e) {
    // "ref" column not created yet (see supabase/bookings.sql): save without it so no booking is lost
    if (!b.ref) throw e
    const { ref: _ref, ...rest_ } = b
    void _ref
    await post({ ...rest_, message: [b.message, `[ref: ${b.ref}]`].filter(Boolean).join(" ") })
  }
}

export async function listBookings(): Promise<Booking[]> {
  const res = await rest("zt_bookings?order=created_at.desc&limit=500")
  return (await res.json()) as Booking[]
}

export async function updateBooking(
  id: string,
  patch: Partial<Pick<Booking, "status" | "price" | "commission_pct" | "note" | "commission_paid" | "log">>,
) {
  const url = `zt_bookings?id=eq.${encodeURIComponent(id)}`
  const send = (body: object) => rest(url, { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify(body) })
  try {
    await send(patch)
  } catch (e) {
    // Migration supabase/partners.sql pas encore exécutée : on sauvegarde le reste
    if (patch.commission_paid === undefined && patch.log === undefined) throw e
    const { commission_paid: _p, log: _l, ...legacy } = patch
    void _p
    void _l
    if (Object.keys(legacy).length === 0) return
    await send(legacy)
  }
}

/** Ajoute une ligne horodatée au journal de suivi d'une réservation. */
export async function appendLog(id: string, entry: string): Promise<boolean> {
  const clean = entry.replace(/\s+/g, " ").trim().slice(0, 400)
  if (!clean) return false
  try {
    const res = await rest(`zt_bookings?id=eq.${encodeURIComponent(id)}&select=log`)
    const rows = (await res.json()) as { log: string | null }[]
    const prev = rows[0]?.log ?? ""
    const now = new Date()
    const stamp = `${now.toISOString().slice(0, 10)} ${now.toTimeString().slice(0, 5)}`
    const line = `${stamp} — ${clean}`
    await updateBooking(id, { log: [prev, line].filter(Boolean).join("\n").slice(-4000) })
    return true
  } catch {
    return false
  }
}

export async function deleteBooking(id: string) {
  await rest(`zt_bookings?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" })
}

/** Instant WhatsApp message to the owner (CallMeBot). Never throws. */
export async function notifyOwner(text: string) {
  const phone = process.env.CALLMEBOT_PHONE
  const apikey = process.env.CALLMEBOT_APIKEY
  if (!phone || !apikey) return
  try {
    await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apikey)}`,
      { signal: AbortSignal.timeout(6000) },
    )
  } catch (e) {
    console.error("notifyOwner", e)
  }
}
