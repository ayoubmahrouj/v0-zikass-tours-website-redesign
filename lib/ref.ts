// Partner referral: zikasstours.com/?ref=riad-name is remembered for 30 days in the visitor's browser.
const KEY = "zt_ref"
const DAYS = 30

export function captureRef() {
  try {
    const r = new URLSearchParams(location.search).get("ref")
    if (r && /^[a-z0-9_-]{2,40}$/i.test(r)) localStorage.setItem(KEY, JSON.stringify({ r: r.toLowerCase(), t: Date.now() }))
  } catch {}
}

export function getRef(): string {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || "null")
    if (v && Date.now() - v.t < DAYS * 86400000) return v.r
  } catch {}
  return ""
}
