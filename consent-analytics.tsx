"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

type Props = { gaId?: string; pixelId?: string; clarityId?: string }
const KEY = "zt_consent"

const T = {
  en: { text: "We use cookies to measure visits and improve the site. You can refuse.", ok: "Accept", no: "Refuse", more: "Privacy" },
  fr: { text: "Nous utilisons des cookies pour mesurer les visites et améliorer le site. Vous pouvez refuser.", ok: "Accepter", no: "Refuser", more: "Confidentialité" },
}

/** Loads GA4 / Microsoft Clarity / Meta Pixel only after the visitor accepts cookies. */
export function ConsentAnalytics({ gaId, pixelId, clarityId }: Props) {
  const [choice, setChoice] = useState<"yes" | "no" | null | undefined>(undefined)
  const [lang, setLang] = useState<"en" | "fr">("en")

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY)
      setChoice(v === "yes" || v === "no" ? v : null)
    } catch {
      setChoice(null)
    }
    setLang(location.pathname.startsWith("/fr") || navigator.language?.startsWith("fr") ? "fr" : "en")
  }, [])

  const save = (v: "yes" | "no") => {
    try { localStorage.setItem(KEY, v) } catch {}
    setChoice(v)
  }
  const t = T[lang]
  const any = gaId || pixelId || clarityId

  return (
    <>
      {choice === "yes" && gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}
      {choice === "yes" && clarityId && (
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`}
        </Script>
      )}
      {choice === "yes" && pixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
        </Script>
      )}
      {any && choice === null && (
        <div role="dialog" aria-label="Cookies" className="fixed bottom-3 left-3 right-3 sm:left-auto sm:max-w-sm z-50 rounded-xl border bg-card shadow-lg p-4 text-sm">
          <p className="text-muted-foreground">{t.text} <a href="/privacy" className="underline">{t.more}</a></p>
          <div className="flex gap-2 mt-3">
            <button onClick={() => save("yes")} className="flex-1 rounded-lg bg-primary text-primary-foreground py-2 font-medium">{t.ok}</button>
            <button onClick={() => save("no")} className="flex-1 rounded-lg border py-2 font-medium">{t.no}</button>
          </div>
        </div>
      )}
    </>
  )
}
