import { cookies } from "next/headers"
import { createHmac, timingSafeEqual } from "crypto"

// Env var: ADMIN_PASSWORD (choose a long password, set it in Vercel)
const COOKIE = "zt_admin"
const MAX_AGE = 60 * 60 * 24 * 14 // 14 days

function sign(value: string) {
  const secret = process.env.ADMIN_PASSWORD || ""
  return createHmac("sha256", secret).update(value).digest("hex")
}

export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD.length >= 8)
}

export function checkPassword(input: string) {
  const pw = process.env.ADMIN_PASSWORD || ""
  const a = Buffer.from(sign(input))
  const b = Buffer.from(sign(pw))
  return adminConfigured() && a.length === b.length && timingSafeEqual(a, b)
}

export async function startSession() {
  const exp = String(Date.now() + MAX_AGE * 1000)
  ;(await cookies()).set(COOKIE, `${exp}.${sign(exp)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  })
}

export async function endSession() {
  ;(await cookies()).delete(COOKIE)
}

export async function isAdmin() {
  if (!adminConfigured()) return false
  const raw = (await cookies()).get(COOKIE)?.value
  if (!raw) return false
  const [exp, sig] = raw.split(".")
  if (!exp || !sig || Number(exp) < Date.now()) return false
  const a = Buffer.from(sig)
  const b = Buffer.from(sign(exp))
  return a.length === b.length && timingSafeEqual(a, b)
}
