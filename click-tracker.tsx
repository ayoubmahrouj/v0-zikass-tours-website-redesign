"use client"

import { useEffect } from "react"
import { captureRef, getRef } from "@/lib/ref"

/** Logs every click on a WhatsApp link (booking intent) so the owner can follow up. */
export function ClickTracker() {
  useEffect(() => {
    captureRef()
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null
      if (!a || !/wa\.me|api\.whatsapp\.com/.test(a.href)) return
      try {
        navigator.sendBeacon(
          "/api/bookings",
          new Blob([JSON.stringify({ ref: getRef(), source: "whatsapp_click", page: location.pathname, trip: document.title.slice(0, 100), locale: document.documentElement.lang })], { type: "text/plain" }),
        )
      } catch {}
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])
  return null
}
