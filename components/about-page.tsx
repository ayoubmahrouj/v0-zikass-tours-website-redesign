import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, MapPin, ShieldCheck, Wallet } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LanguageProvider } from "@/lib/language-context"
import { PHONE_DISPLAY, waLink } from "@/lib/tours"

type Locale = "en" | "fr"

const T = {
  en: {
    kicker: "About us",
    h1: "ZikassTours — private driver in Marrakech",
    lead: "We are a small, family-run private transport service based in Marrakech. One driver, one recent van, and a simple promise: a fixed price agreed before you travel, and payment only when you arrive.",
    sections: [
      {
        h: "Who drives you",
        p: [
          "Your driver is Zakaria, born and raised in Marrakech. He has held a Moroccan driving licence since 2005 and has spent the last two decades driving travellers on the roads of the Atlas, the desert and the Atlantic coast.",
          "He speaks Arabic, French and English, and he knows the mountain passes, the parking spots in the medina and the quiet places that tour buses never reach.",
        ],
      },
      {
        h: "The vehicle",
        p: [
          "A recent Fiat private van, air-conditioned, with room for 1 to 7 passengers and a large luggage space — suitcases, strollers, golf bags and hiking gear all fit.",
          "It is the same vehicle on every trip. It is cleaned before each pickup and serviced regularly. The photos on this page are our own, not stock images.",
        ],
      },
      {
        h: "How we work",
        p: [
          "You send your request by WhatsApp or through the booking form. We reply with the pickup time and the final price per car — never per person.",
          "No deposit, no card, no online payment. You pay in cash on the day, directly to your driver. Cancellation is free up to 24 hours before departure.",
        ],
      },
      {
        h: "Where we drive",
        p: [
          "Marrakech and its region: Agafay desert, Ourika valley, Ouzoud waterfalls, Imlil and the Atlas, Essaouira, Ouarzazate and Aït Ben Haddou.",
          "We also cover airport transfers (Marrakech Ménara, Casablanca Mohammed V, Agadir) and long-distance transfers to any city in Morocco.",
        ],
      },
    ],
    facts: [
      { icon: "shield", label: "Tourist transport licensed", sub: "Insured vehicle and professional driver" },
      { icon: "wallet", label: "Cash on arrival", sub: "No deposit, no online payment" },
      { icon: "pin", label: "Based in Marrakech", sub: "Hotel and riad pickup included" },
      { icon: "check", label: "Since 2005 on the road", sub: "Two decades of private driving" },
    ],
    galleryTitle: "Real photos, real driver",
    cta: "Plan your trip on WhatsApp",
    ctaSub: "Reply usually within a few minutes.",
    book: "See prices and book",
  },
  fr: {
    kicker: "À propos",
    h1: "ZikassTours — chauffeur privé à Marrakech",
    lead: "Nous sommes un petit service de transport privé familial basé à Marrakech. Un chauffeur, un van récent, et une promesse simple : un prix fixe convenu avant le départ, et le paiement uniquement à votre arrivée.",
    sections: [
      {
        h: "Qui vous conduit",
        p: [
          "Votre chauffeur est Zakaria, né et grandi à Marrakech. Titulaire du permis marocain depuis 2005, il conduit des voyageurs depuis vingt ans sur les routes de l'Atlas, du désert et de la côte atlantique.",
          "Il parle arabe, français et anglais, et connaît les cols de montagne, les parkings de la médina et les endroits tranquilles que les bus touristiques ne visitent jamais.",
        ],
      },
      {
        h: "Le véhicule",
        p: [
          "Un van Fiat privé récent, climatisé, de 1 à 7 passagers, avec un grand coffre — valises, poussettes, sacs de golf et matériel de randonnée y trouvent leur place.",
          "C'est le même véhicule à chaque trajet. Il est nettoyé avant chaque prise en charge et entretenu régulièrement. Les photos de cette page sont les nôtres, pas des images de banque d'images.",
        ],
      },
      {
        h: "Comment nous travaillons",
        p: [
          "Vous envoyez votre demande par WhatsApp ou via le formulaire. Nous répondons avec l'heure de prise en charge et le prix final par voiture — jamais par personne.",
          "Pas d'acompte, pas de carte, pas de paiement en ligne. Vous payez en espèces le jour même, directement au chauffeur. Annulation gratuite jusqu'à 24 heures avant le départ.",
        ],
      },
      {
        h: "Où nous conduisons",
        p: [
          "Marrakech et sa région : désert d'Agafay, vallée de l'Ourika, cascades d'Ouzoud, Imlil et l'Atlas, Essaouira, Ouarzazate et Aït Ben Haddou.",
          "Nous assurons aussi les transferts aéroport (Marrakech Ménara, Casablanca Mohammed V, Agadir) et les transferts longue distance vers toutes les villes du Maroc.",
        ],
      },
    ],
    facts: [
      { icon: "shield", label: "Transport touristique agréé", sub: "Véhicule assuré et chauffeur professionnel" },
      { icon: "wallet", label: "Paiement à l'arrivée", sub: "Sans acompte, sans paiement en ligne" },
      { icon: "pin", label: "Basés à Marrakech", sub: "Prise en charge hôtel et riad incluse" },
      { icon: "check", label: "Sur la route depuis 2005", sub: "Vingt ans de conduite privée" },
    ],
    galleryTitle: "De vraies photos, un vrai chauffeur",
    cta: "Organiser votre voyage sur WhatsApp",
    ctaSub: "Réponse généralement en quelques minutes.",
    book: "Voir les prix et réserver",
  },
}

const ICONS = { shield: ShieldCheck, wallet: Wallet, pin: MapPin, check: BadgeCheck }

const GALLERY = [
  { src: "/images/real/zikasstours-driver-portrait-marrakech.webp", alt: { en: "Zakaria, private driver in Marrakech, next to his van", fr: "Zakaria, chauffeur privé à Marrakech, devant son van" } },
  { src: "/images/real/zikasstours-driver-ourika-valley.webp", alt: { en: "ZikassTours driver in the Ourika valley, van with the website on the side", fr: "Chauffeur ZikassTours dans la vallée de l'Ourika, van avec le site web sur le côté" } },
  { src: "/images/real/zikasstours-driver-atlas-mountains-road.webp", alt: { en: "Private driver on a mountain road in the Atlas, Morocco", fr: "Chauffeur privé sur une route de montagne dans l'Atlas, Maroc" } },
  { src: "/images/real/zikasstours-driver-hassan-ii-mosque-casablanca.webp", alt: { en: "ZikassTours driver at the Hassan II Mosque in Casablanca", fr: "Chauffeur ZikassTours devant la mosquée Hassan II à Casablanca" } },
]

export function AboutPage({ locale }: { locale: Locale }) {
  const d = T[locale]

  return (
    <LanguageProvider initialLanguage={locale}>
      <div className="min-h-screen bg-background" lang={locale}>
        <Header />
        <main className="pt-28 pb-16">
          <article className="container mx-auto px-4 max-w-4xl">
            <header className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wide">
                {d.kicker}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-4 leading-tight">{d.h1}</h1>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{d.lead}</p>
            </header>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {d.facts.map((f) => {
                const Icon = ICONS[f.icon as keyof typeof ICONS]
                return (
                  <li key={f.label} className="flex items-start gap-3 rounded-xl border bg-card p-4">
                    <Icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-primary leading-tight">{f.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{f.sub}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
              {GALLERY.map((g) => (
                <div key={g.src} className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image src={g.src} alt={g.alt[locale]} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">{d.galleryTitle}</p>

            <div className="space-y-8 mt-12">
              {d.sections.map((s) => (
                <section key={s.h}>
                  <h2 className="font-serif text-2xl font-bold text-primary mb-3">{s.h}</h2>
                  {s.p.map((p) => (
                    <p key={p} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border bg-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-serif text-xl font-bold text-primary">{d.cta}</p>
                <p className="text-sm text-muted-foreground mt-1">{d.ctaSub} · {PHONE_DISPLAY}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={waLink(locale === "fr" ? "Bonjour, je souhaite organiser un trajet avec ZikassTours." : "Hello, I would like to plan a trip with ZikassTours.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground hover:opacity-90"
                >
                  WhatsApp
                </a>
                <Link
                  href={locale === "fr" ? "/fr#booking" : "/#booking"}
                  className="inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold hover:bg-muted"
                >
                  {d.book}
                </Link>
              </div>
            </div>
          </article>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  )
}
