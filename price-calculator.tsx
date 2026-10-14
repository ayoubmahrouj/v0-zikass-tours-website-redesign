"use client"

import { useMemo, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { CITIES, DESTINATIONS, cityByKey, formatHours, quote, routePath } from "@/lib/routes"

const T = {
  en: {
    badge: "Instant price",
    title: "Price calculator",
    sub: "Choose your route: private car with driver, fixed price per car (1-7 people).",
    from: "From",
    to: "To",
    people: "Passengers",
    km: "km",
    fixed: "Fixed price per car. Pay on arrival.",
    est: "Estimated price per car. We confirm the final price on WhatsApp in a few minutes.",
    book: "Book this trip",
    pick: "Pick two different cities",
  },
  fr: {
    badge: "Prix instantané",
    title: "Calculateur de prix",
    sub: "Choisissez votre trajet : voiture privée avec chauffeur, prix fixe par voiture (1 à 7 personnes).",
    from: "Départ",
    to: "Arrivée",
    people: "Passagers",
    km: "km",
    fixed: "Prix fixe par voiture. Paiement sur place.",
    est: "Prix estimé par voiture. Nous confirmons le prix final sur WhatsApp en quelques minutes.",
    book: "Réserver ce trajet",
    pick: "Choisissez deux villes différentes",
  },
}

export function PriceCalculator({ defaultFrom = "marrakech", defaultTo = "casablanca" }: { defaultFrom?: string; defaultTo?: string }) {
  const { language } = useLanguage()
  const l = language === "fr" ? "fr" : "en"
  const t = T[l]
  const [from, setFrom] = useState(defaultFrom)
  const [to, setTo] = useState(defaultTo)
  const [people, setPeople] = useState("2")
  const a = cityByKey(from)!
  const b = cityByKey(to)!
  const q = useMemo(() => quote(a, b), [a, b])
  const sel = "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary mt-1"

  const book = () => {
    if (!q) return
    const trip = `${a[l]} → ${b[l]}`
    window.dispatchEvent(new CustomEvent("zt-prefill", { detail: { trip, people, quote: `${q.confirmed ? "" : "≈ "}${q.price}€` } }))
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="calculator" className="py-12 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto rounded-2xl border bg-card shadow-lg p-6 md:p-8">
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wide">{t.badge}</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-3">{t.title}</h2>
            <p className="text-sm text-muted-foreground mt-2">{t.sub}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <label className="text-sm font-medium">{t.from}
              <select value={from} onChange={(e) => setFrom(e.target.value)} className={sel}>
                {CITIES.map((c) => <option key={c.key} value={c.key}>{c[l]}</option>)}
              </select>
            </label>
            <label className="text-sm font-medium">{t.to}
              <select value={to} onChange={(e) => setTo(e.target.value)} className={sel}>
                {CITIES.map((c) => <option key={c.key} value={c.key}>{c[l]}</option>)}
              </select>
            </label>
            <label className="text-sm font-medium">{t.people}
              <select value={people} onChange={(e) => setPeople(e.target.value)} className={sel}>
                {[1, 2, 3, 4, 5, 6, 7].map((n) => <option key={n}>{n}</option>)}
              </select>
            </label>
          </div>
          <div className="mt-6 rounded-xl bg-primary text-primary-foreground p-6 text-center" aria-live="polite">
            {q ? (
              <>
                <div className="text-4xl font-bold text-secondary">{q.confirmed ? "" : "≈ "}{q.price}€</div>
                <p className="mt-1 text-sm text-primary-foreground/80">{q.km} {t.km} · ≈ {formatHours(q.hours, l)}</p>
                <p className="mt-2 text-xs text-primary-foreground/70">{q.confirmed ? t.fixed : t.est}</p>
                <button onClick={book} className="mt-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 transition-colors">
                  {t.book}
                </button>
              </>
            ) : (
              <p className="text-sm">{t.pick}</p>
            )}
          </div>
          <nav aria-label="Routes" className="mt-6 flex flex-wrap justify-center gap-2">
            {DESTINATIONS.map((c) => (
              <Link key={c.key} href={routePath(c, l)} className="px-3 py-1.5 rounded-full border text-xs text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                Marrakech → {c[l]}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
