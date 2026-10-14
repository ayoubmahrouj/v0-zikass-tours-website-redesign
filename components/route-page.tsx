import type { Metadata } from "next"
import Link from "next/link"
import { Clock, MapPin, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LeadTracker } from "@/components/lead-tracker"
import { PriceCalculator } from "@/components/price-calculator"
import { BookingForm, FAQ } from "@/components/conversion"
import { ReviewsSection } from "@/components/reviews-section"
import { LanguageProvider } from "@/lib/language-context"
import { SITE_URL, type Locale } from "@/lib/tours"
import { DESTINATIONS, MARRAKECH, formatHours, quote, routePath, type City } from "@/lib/routes"

function copy(c: City, l: Locale) {
  const q = quote(MARRAKECH, c)!
  const price = `${q.confirmed ? "" : "≈ "}${q.price}€`
  const dur = formatHours(q.hours, l)
  if (l === "fr") {
    return {
      title: `Chauffeur privé Marrakech → ${c.fr} : ${q.confirmed ? "" : "environ "}${q.price}€ | ZikassTours`,
      desc: `Transfert privé Marrakech → ${c.fr} en voiture climatisée avec chauffeur : ${q.confirmed ? "prix fixe" : "environ"} ${q.price}€ par voiture (1-7 personnes), ${q.km} km, environ ${dur}. Paiement sur place. Réservez sur WhatsApp.`,
      h1: `Chauffeur privé de Marrakech à ${c.fr}`,
      intro: `Voyagez de Marrakech à ${c.fr} en voiture privée climatisée avec chauffeur professionnel. ${q.confirmed ? "Prix fixe" : "Prix estimé"} : ${price} par voiture pour 1 à 7 personnes, soit ${q.km} km et environ ${dur} de route. Prise en charge à votre hôtel ou riad, arrêts photo possibles, paiement sur place.`,
      price,
      km: `${q.km} km`,
      dur,
      faq: [
        [`Combien coûte un taxi privé de Marrakech à ${c.fr} ?`, `${q.confirmed ? "Le prix est fixe" : "Le prix est estimé"} : ${price} par voiture (1 à 7 personnes), pas par personne. ${q.confirmed ? "" : "Nous confirmons le prix final sur WhatsApp. "}Paiement en espèces à l'arrivée.`],
        [`Combien de temps dure le trajet Marrakech - ${c.fr} ?`, `Environ ${dur} pour ${q.km} km, selon la circulation et les arrêts.`],
        ["Puis-je faire des arrêts en route ?", "Oui, nos chauffeurs s'arrêtent pour les photos, un café ou un déjeuner. Dites-le-nous à la réservation."],
        ["Faut-il payer à l'avance ?", "Non, aucun acompte. Vous payez le chauffeur à l'arrivée."],
      ] as [string, string][],
      home: "Accueil",
      more: "Autres trajets depuis Marrakech",
    }
  }
  return {
    title: `Private Driver Marrakech to ${c.en}: ${q.confirmed ? "" : "about "}${q.price}€ | ZikassTours`,
    desc: `Private transfer from Marrakech to ${c.en} in an air-conditioned car with driver: ${q.confirmed ? "fixed price" : "about"} ${q.price}€ per car (1-7 people), ${q.km} km, around ${dur}. Pay on arrival. Book on WhatsApp.`,
    h1: `Private driver from Marrakech to ${c.en}`,
    intro: `Travel from Marrakech to ${c.en} in a private air-conditioned car with a professional driver. ${q.confirmed ? "Fixed price" : "Estimated price"}: ${price} per car for 1 to 7 people, ${q.km} km and about ${dur} on the road. Pickup at your hotel or riad, photo stops on request, pay on arrival.`,
    price,
    km: `${q.km} km`,
    dur,
    faq: [
      [`How much is a private taxi from Marrakech to ${c.en}?`, `${q.confirmed ? "The price is fixed" : "The price is estimated"}: ${price} per car (1-7 people), not per person. ${q.confirmed ? "" : "We confirm the final price on WhatsApp. "}Pay in cash on arrival.`],
      [`How long is the drive from Marrakech to ${c.en}?`, `About ${dur} for ${q.km} km, depending on traffic and stops.`],
      ["Can we stop on the way?", "Yes, our drivers stop for photos, coffee or lunch. Just tell us when you book."],
      ["Do I need to pay in advance?", "No deposit. You pay the driver on arrival."],
    ] as [string, string][],
    home: "Home",
    more: "More routes from Marrakech",
  }
}

export function routeMetadata(c: City, l: Locale): Metadata {
  const d = copy(c, l)
  const url = SITE_URL + routePath(c, l)
  return {
    title: { absolute: d.title },
    description: d.desc,
    alternates: {
      canonical: url,
      languages: { en: SITE_URL + routePath(c, "en"), fr: SITE_URL + routePath(c, "fr"), "x-default": SITE_URL + routePath(c, "en") },
    },
    openGraph: { title: d.title, description: d.desc, url, type: "website", siteName: "ZikassTours", locale: l === "fr" ? "fr_FR" : "en_US", images: [{ url: SITE_URL + "/og-image.jpg", width: 1200, height: 630 }] },
  }
}

export function RoutePage({ city, locale }: { city: City; locale: Locale }) {
  const d = copy(city, locale)
  const q = quote(MARRAKECH, city)!
  const url = SITE_URL + routePath(city, locale)
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TaxiService",
        "@id": url + "#service",
        name: d.h1,
        description: d.desc,
        areaServed: [{ "@type": "City", name: "Marrakech" }, { "@type": "City", name: city.en }],
        provider: { "@id": "https://www.zikasstours.com/#organization" },
        offers: { "@type": "Offer", price: q.price, priceCurrency: "EUR", availability: "https://schema.org/InStock", url, description: locale === "fr" ? "Prix par voiture privée (1 à 7 personnes)" : "Price per private car (1-7 people)" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: d.home, item: SITE_URL + (locale === "fr" ? "/fr" : "/") },
          { "@type": "ListItem", position: 2, name: d.h1, item: url },
        ],
      },
    ],
  }
  const others = DESTINATIONS.filter((c) => c.key !== city.key)

  return (
    <LanguageProvider initialLanguage={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="min-h-screen bg-background" lang={locale}>
        <Header />
        <main className="pt-20">
          <section className="bg-primary text-primary-foreground py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/70 mb-3">
                <Link href={locale === "fr" ? "/fr" : "/"} className="hover:text-white">{d.home}</Link>
                <span className="mx-2">/</span>
                <span>Marrakech → {city[locale]}</span>
              </nav>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-balance mb-5">{d.h1}</h1>
              <p className="text-primary-foreground/85 leading-relaxed mb-6">{d.intro}</p>
              <div className="flex flex-wrap items-center gap-5 text-primary-foreground/90">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ≈ {d.dur}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {d.km}</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 1-7</span>
                <span className="text-3xl font-bold text-secondary">{d.price}</span>
              </div>
            </div>
          </section>
          <PriceCalculator defaultFrom="marrakech" defaultTo={city.key} />
          <BookingForm defaultTrip={`Marrakech → ${city[locale]}`} />
          <ReviewsSection locale={locale} limit={3} />
          <section className="py-12 bg-muted/40">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 text-center">{locale === "fr" ? "Questions fréquentes" : "Frequently asked questions"}</h2>
              <div className="space-y-3">
                {d.faq.map(([qq, a]) => (
                  <details key={qq} className="rounded-lg border bg-background p-4">
                    <summary className="cursor-pointer font-semibold">{qq}</summary>
                    <p className="mt-3 text-sm text-muted-foreground">{a}</p>
                  </details>
                ))}
              </div>
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: d.faq.map(([n, a]) => ({ "@type": "Question", name: n, acceptedAnswer: { "@type": "Answer", text: a } })) }) }} />
            </div>
          </section>
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-serif text-2xl font-bold text-primary mb-5 text-center">{d.more}</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {others.map((c) => (
                  <Link key={c.key} href={routePath(c, locale)} className="px-4 py-2 rounded-full border text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                    Marrakech → {c[locale]}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <LeadTracker />
      </div>
    </LanguageProvider>
  )
}
