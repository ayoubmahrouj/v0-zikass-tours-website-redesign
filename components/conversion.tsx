"use client"

import { useState, type FormEvent } from "react"
import { useLanguage, getWhatsAppUrl, EMAIL } from "@/lib/language-context"

type L = "fr" | "en"

const TXT = {
  trust: {
    en: [
      ["Pay on arrival", "No deposit, cash on the day"],
      ["Free cancellation", "Up to 24h before"],
      ["Private car", "1-7 people, price per car"],
      ["Hotel pickup", "From your hotel or riad"],
      ["Fast reply", "On WhatsApp"],
    ],
    fr: [
      ["Paiement sur place", "Sans acompte, le jour même"],
      ["Annulation gratuite", "Jusqu'à 24h avant"],
      ["Voiture privée", "1-7 personnes, prix par voiture"],
      ["Prise en charge", "À votre hôtel ou riad"],
      ["Réponse rapide", "Sur WhatsApp"],
    ],
  },
  how: {
    en: {
      title: "How it works",
      steps: [
        ["Send your request", "Choose your trip, date and number of people."],
        ["We confirm on WhatsApp", "You get the pickup time and final price per car."],
        ["Enjoy your day", "We pick you up at your hotel. You pay on arrival."],
      ],
    },
    fr: {
      title: "Comment ça marche",
      steps: [
        ["Envoyez votre demande", "Choisissez l'excursion, la date et le nombre de personnes."],
        ["Confirmation sur WhatsApp", "Vous recevez l'heure de prise en charge et le prix par voiture."],
        ["Profitez de votre journée", "Nous venons vous chercher à votre hôtel. Vous payez sur place."],
      ],
    },
  },
  price: {
    en: {
      note: "All prices are per private vehicle (1-7 people), not per person. You pay in cash on the day. Free cancellation up to 24h before.",
      inc: "Included: private vehicle with driver, pickup & drop-off at your hotel/riad in Marrakech.",
      exc: "Not included: meals, activities (camel ride, quad...), entrance fees, local guide.",
    },
    fr: {
      note: "Tous les prix sont par véhicule privé (1-7 personnes), pas par personne. Paiement en espèces le jour même. Annulation gratuite jusqu'à 24h avant.",
      inc: "Inclus : véhicule privé avec chauffeur, prise en charge et retour à votre hôtel/riad à Marrakech.",
      exc: "Non inclus : repas, activités (dromadaire, quad...), droits d'entrée, guide local.",
    },
  },
  form: {
    en: {
      badge: "Booking request",
      title: "Request your trip",
      sub: "No payment now. We reply on WhatsApp to confirm your booking.",
      trip: "Excursion / transfer",
      date: "Date",
      people: "Number of people",
      hotel: "Hotel / riad",
      name: "Full name",
      phone: "Your WhatsApp number",
      msg: "Message (optional)",
      send: "Send request on WhatsApp",
      email: "No WhatsApp? Send the same request by email",
      subject: "Booking request",
      hello: "Hello, I would like to book from your website:",
    },
    fr: {
      badge: "Demande de réservation",
      title: "Réservez votre excursion",
      sub: "Aucun paiement maintenant. Nous vous répondons sur WhatsApp pour confirmer.",
      trip: "Excursion / transfert",
      date: "Date",
      people: "Nombre de personnes",
      hotel: "Hôtel / riad",
      name: "Nom complet",
      phone: "Votre numéro WhatsApp",
      msg: "Message (optionnel)",
      send: "Envoyer la demande sur WhatsApp",
      email: "Pas de WhatsApp ? Envoyez la demande par email",
      subject: "Demande de réservation",
      hello: "Bonjour, je souhaite réserver depuis votre site :",
    },
  },
  faq: {
    en: {
      title: "Frequently asked questions",
      items: [
        ["Do I need to pay in advance?", "No. There is no deposit: you pay the driver in cash on the day of your trip."],
        ["Can I cancel my booking?", "Yes, cancellation is free up to 24 hours before your trip. Just send us a message on WhatsApp."],
        ["Is the price per person or per car?", "Prices are per private car for 1 to 7 people, not per person."],
        ["Where do you pick us up?", "We pick you up at your hotel or riad in Marrakech and drop you back at the end of the day."],
        ["Can we customize the itinerary?", "Yes. Tell us what you want to see on WhatsApp and we will adapt the day for you."],
      ],
    },
    fr: {
      title: "Questions fréquentes",
      items: [
        ["Dois-je payer à l'avance ?", "Non. Aucun acompte : vous payez le chauffeur en espèces le jour de l'excursion."],
        ["Puis-je annuler ma réservation ?", "Oui, l'annulation est gratuite jusqu'à 24h avant. Envoyez-nous simplement un message sur WhatsApp."],
        ["Le prix est-il par personne ou par voiture ?", "Les prix sont par voiture privée pour 1 à 7 personnes, pas par personne."],
        ["Où venez-vous nous chercher ?", "Nous venons vous chercher à votre hôtel ou riad à Marrakech et vous y ramenons en fin de journée."],
        ["Peut-on personnaliser l'itinéraire ?", "Oui. Dites-nous sur WhatsApp ce que vous souhaitez voir et nous adaptons la journée."],
      ],
    },
  },
}

const TRIPS: Record<L, string[]> = {
  en: [
    "Agafay Desert",
    "Ourika Valley",
    "Ouzoud Waterfalls",
    "Essaouira",
    "High Atlas & Imlil",
    "Ouarzazate & Ait Ben Haddou",
    "Airport transfer",
    "Regional transfer",
    "Other / custom trip",
  ],
  fr: [
    "Désert d'Agafay",
    "Vallée de l'Ourika",
    "Cascades d'Ouzoud",
    "Essaouira",
    "Haut Atlas & Imlil",
    "Ouarzazate & Aït Ben Haddou",
    "Transfert aéroport",
    "Transfert régional",
    "Autre / sur mesure",
  ],
}

function useLang(): L {
  const { language } = useLanguage()
  return language === "fr" ? "fr" : "en"
}

export function TrustBar() {
  const l = useLang()
  return (
    <section className="bg-primary border-t border-secondary/20" aria-label="Guarantees">
      <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {TXT.trust[l].map(([a, b]) => (
          <div key={a} className="text-center">
            <div className="text-secondary font-semibold flex items-center justify-center gap-1">
              <span aria-hidden="true">✓</span> {a}
            </div>
            <div className="text-xs text-primary-foreground/70 mt-1">{b}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function HowItWorks() {
  const l = useLang()
  const d = TXT.how[l]
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary mb-10">{d.title}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {d.steps.map(([a, b], i) => (
            <div key={a} className="bg-background rounded-xl p-6 shadow-sm border text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold text-lg mb-2">{a}</h3>
              <p className="text-muted-foreground text-sm">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PriceNote() {
  const l = useLang()
  const d = TXT.price[l]
  return (
    <section className="pb-12 -mt-4">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-xl border border-secondary/40 bg-secondary/10 p-6 text-sm space-y-2">
          <p className="font-semibold text-primary">{d.note}</p>
          <p className="text-muted-foreground">{d.inc}</p>
          <p className="text-muted-foreground">{d.exc}</p>
        </div>
      </div>
    </section>
  )
}

export function BookingForm({ defaultTrip }: { defaultTrip?: string }) {
  const l = useLang()
  const d = TXT.form[l]
  const [f, setF] = useState({ trip: defaultTrip ?? "", date: "", people: "2", hotel: "", name: "", phone: "", msg: "" })
  const [hp, setHp] = useState("")
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value })
  const field = "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"

  const buildLines = () => {
    const lines = [
      d.hello,
      "",
      d.trip + ": " + (f.trip || "-"),
      d.date + ": " + (f.date || "-"),
      d.people + ": " + f.people,
      d.hotel + ": " + (f.hotel || "-"),
      d.name + ": " + (f.name || "-"),
      d.phone + ": " + (f.phone || "-"),
    ]
    if (f.msg) lines.push("", f.msg)
    return lines
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const lines = buildLines()
    try {
      const w = window as unknown as { gtag?: (...a: unknown[]) => void }
      w.gtag?.("event", "generate_lead", { method: "booking_form", trip: f.trip })
    } catch {}
    try {
      navigator.sendBeacon(
        "/api/bookings",
        new Blob([JSON.stringify({ ...f, source: "form", website: hp, page: location.pathname, locale: l })], { type: "text/plain" }),
      )
    } catch {}
    window.open(getWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="booking" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto rounded-2xl border shadow-lg p-6 md:p-10 bg-card">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wide">
              {d.badge}
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary mt-3">{d.title}</h2>
            <p className="text-muted-foreground mt-2 text-sm">{d.sub}</p>
          </div>
          <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
            <label className="sm:col-span-2 text-sm font-medium">
              {d.trip}
              <select required value={f.trip} onChange={set("trip")} className={field + " mt-1"}>
                <option value="">—</option>
                {TRIPS[l].map((x) => (
                  <option key={x} value={x}>{x}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium">
              {d.date}
              <input required type="date" value={f.date} onChange={set("date")} className={field + " mt-1"} />
            </label>
            <label className="text-sm font-medium">
              {d.people}
              <select value={f.people} onChange={set("people")} className={field + " mt-1"}>
                {["1", "2", "3", "4", "5", "6", "7"].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium">
              {d.hotel}
              <input value={f.hotel} onChange={set("hotel")} className={field + " mt-1"} />
            </label>
            <label className="text-sm font-medium">
              {d.name}
              <input required value={f.name} onChange={set("name")} className={field + " mt-1"} />
            </label>
            <label className="sm:col-span-2 text-sm font-medium">
              {d.phone}
              <input type="tel" value={f.phone} onChange={set("phone")} className={field + " mt-1"} />
            </label>
            <label className="sm:col-span-2 text-sm font-medium">
              {d.msg}
              <textarea rows={3} value={f.msg} onChange={set("msg")} className={field + " mt-1"} />
            </label>
            <input name="website" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <button
              type="submit"
              className="sm:col-span-2 mt-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg transition-colors"
            >
              {d.send}
            </button>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(buildLines().join("\n"))}`}
              className="sm:col-span-2 text-center text-sm text-primary underline underline-offset-4 hover:text-secondary"
            >
              {d.email}
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const l = useLang()
  const d = TXT.faq[l]
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }
  return (
    <section id="faq" className="py-16 bg-muted/40">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary mb-8">{d.title}</h2>
        <div className="space-y-3">
          {d.items.map(([q, a]) => (
            <details key={q} className="group rounded-lg border bg-background p-4">
              <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                {q}
                <span className="text-secondary group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground text-sm">{a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  )
}
