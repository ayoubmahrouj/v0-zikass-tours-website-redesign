"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

// Sends a "lead" event to GA4 / Meta Pixel (when installed) on every WhatsApp, phone or email click
export function LeadTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const link = target?.closest?.("a") as HTMLAnchorElement | null
      if (!link) return
      const href = link.href || ""
      let method = ""
      if (href.includes("wa.me") || href.includes("whatsapp")) method = "whatsapp"
      else if (href.startsWith("tel:")) method = "phone"
      else if (href.startsWith("mailto:")) method = "email"
      if (!method) return
      const label = (link.textContent || "").trim().slice(0, 80)
      window.gtag?.("event", "generate_lead", { method, link_text: label, page_path: window.location.pathname })
      window.fbq?.("track", "Contact", { method })
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  return null
}
