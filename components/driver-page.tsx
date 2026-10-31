import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, Clock, MapPin, Plane, Route, Sun, Wallet } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LanguageProvider } from "@/lib/language-context"
import { TrustBar, HowItWorks, PriceNote, BookingForm } from "@/components/conversion"
import { Fleet } from "@/components/fleet"
import { PriceCalculator } from "@/components/price-calculator"
import { ReviewsSection } from "@/components/reviews-section"
import { CITIES, MARRAKECH } from "@/lib/routes"
import { excursions, airportTransfer, waLink } from "@/lib/tours"

type Locale = "en" | "fr"

const T = {
  en: {
    kicker: "Private driver · Marrakech",
    h1: "Private driver in Marrakech",
    h1b: "English-speaking chauffeur, fixed price per car",
    lead: "Airport transfers, day trips to the Atlas and the desert, hourly hire and multi-day tours. One private van for 1 to 7 passengers, a price agreed before you travel, and payment in cash when you arrive.",
    cta1: "Check your price",
    cta2: "Message on WhatsApp",
    heroAlt: "ZikassTours private van in front of a riad in Marrakech at sunset",
    servicesTitle: "What we do",
    services: [
      {
        icon: "plane",
        title: "Airport transfers",
        text: "Menara (RAK), Casablanca Mohammed V (CMN) and Agadir. Your driver tracks your flight and waits in the arrivals hall with your name, even if you are delayed.",
      },
      {
        icon: "sun",
        title: "Day trips from Marrakech",
        text: "Agafay desert, Ourika valley, Ouzoud waterfalls, Imlil and the High Atlas, Essaouira, Ouarzazate and Aït Ben Haddou. Leave when you want, stop where you want.",
      },
      {
        icon: "clock",
        title: "Hourly and daily hire",
        text: "A driver and a car at your disposal for a few hours or a full day: restaurants, shopping, golf, spa, medical appointments or business meetings.",
      },
      {
        icon: "route",
        title: "Multi-day tours",
        text: "Sahara and Merzouga, Fes, Chefchaouen, the Atlantic coast. Two to seven days with the same driver, at your own pace.",
      },
    ],
    pricesTitle: "Example prices",
    pricesSub: "Per private car, 1 to 7 passengers — not per person. Final price confirmed on WhatsApp before you book.",
    pricesCol1: "Trip",
    pricesCol2: "Price / car",
    from: "from",
    excursionsLabel: "Day trips from Marrakech",
    transfersLabel: "Transfers from Marrakech",
    morePrices: "See all prices",
    whyTitle: "Why travellers book with us",
    why: [
      ["Fixed price, no meter", "The price is agreed before the trip. No surprise at the end, no extra for luggage or waiting."],
      ["Cash on arrival", "No deposit and no online payment. You pay the driver in cash on the day of your trip."],
      ["English, French, Arabic", "Your driver speaks the languages you need, and answers WhatsApp within minutes."],
      ["Licensed tourist transport", "A registered tourist transport vehicle, insured, with a professional driver — not an unlicensed taxi."],
      ["Hotel or riad pickup", "We collect you at your door in Marrakech and bring you back at the end of the day."],
      ["Available 24/7", "Late landing, early departure, last-minute change: we adapt."],
    ],
    faqTitle: "Private driver in Marrakech — questions",
    faq: [
      ["How much does a private driver cost in Marrakech?", "A day trip by private car starts at €70 per vehicle for 1 to 7 people. Airport transfers start at €10. Long-distance transfers, such as Marrakech to Casablanca, start at €150. The exact price is confirmed on WhatsApp before you book."],
      ["Do I need to pay in advance?", "No. There is no deposit and no online payment. You pay the driver in cash on the day of your trip, in EUR, USD, CAD, GBP or MAD."],
      ["Will the driver wait if my flight is delayed?", "Yes. We follow your flight number and wait for you in the arrivals hall, with no extra charge for a delayed landing."],
      ["How many people can travel in the van?", "The van takes 1 to 7 passengers, plus the driver. The price is per car, so a family of six pays the same as a solo traveller."],
      ["Can we customise the itinerary?", "Yes. Tell us what you want to see on WhatsApp and we build the day around it — extra stops, a later start, a different return time."],
      ["Do you drive outside Marrakech?", "Yes. We cover all of Morocco: the Atlas, the Sahara, Fes, Chefchaouen, Casablanca, Rabat, Agadir and the Atlantic coast."],
    ],
  },
  fr: {
    kicker: "Chauffeur privé · Marrakech",
    h1: "Chauffeur privé à Marrakech",
    h1b: "Francophone et anglophone, prix fixe par voiture",
    lead: "Transferts aéroport, excursions dans l'Atlas et le désert, mise à disposition à l'heure et circuits de plusieurs jours. Un van privé pour 1 à 7 passagers, un prix convenu avant le départ, et le paiement en espèces à votre arrivée.",
    cta1: "Voir votre prix",
    cta2: "Écrire sur WhatsApp",
    heroAlt: "Van privé ZikassTours devant un riad à Marrakech au coucher du soleil",
    servicesTitle: "Ce que nous faisons",
    services: [
      {
        icon: "plane",
        title: "Transferts aéroport",
        text: "Ménara (RAK), Casablanca Mohammed V (CMN) et Agadir. Votre chauffeur suit votre vol et vous attend dans le hall des arrivées avec votre nom, même en cas de retard.",
      },
      {
        icon: "sun",
        title: "Excursions depuis Marrakech",
        text: "Désert d'Agafay, vallée de l'Ourika, cascades d'Ouzoud, Imlil et le Haut Atlas, Essaouira, Ouarzazate et Aït Ben Haddou. Vous partez quand vous voulez, vous vous arrêtez où vous voulez.",
      },
      {
        icon: "clock",
        title: "Mise à disposition",
        text: "Un chauffeur et une voiture à votre disposition pour quelques heures ou une journée entière : restaurants, shopping, golf, spa, rendez-vous médicaux ou professionnels.",
      },
      {
        icon: "route",
        title: "Circuits de plusieurs jours",
        text: "Sahara et Merzouga, Fès, Chefchaouen, la côte atlantique. De deux à sept jours avec le même chauffeur, à votre rythme.",
      },
    ],
    pricesTitle: "Exemples de prix",
    pricesSub: "Par voiture privée, 1 à 7 passagers — pas par personne. Prix final confirmé sur WhatsApp avant la réservation.",
    pricesCol1: "Trajet",
    pricesCol2: "Prix / voiture",
    from: "dès",
    excursionsLabel: "Excursions depuis Marrakech",
    transfersLabel: "Transferts depuis Marrakech",
    morePrices: "Voir tous les prix",
    whyTitle: "Pourquoi les voyageurs nous choisissent",
    why: [
      ["Prix fixe, sans compteur", "Le prix est convenu avant le trajet. Aucune surprise à l'arrivée, aucun supplément pour les bagages ou l'attente."],
      ["Paiement à l'arrivée", "Sans acompte et sans paiement en ligne. Vous payez le chauffeur en espèces le jour de l'excursion."],
      ["Français, anglais, arabe", "Votre chauffeur parle les langues dont vous avez besoin et répond sur WhatsApp en quelques minutes."],
      ["Transport touristique agréé", "Un véhicule de transport touristique enregistré, assuré, avec un chauffeur professionnel — pas un taxi non autorisé."],
      ["Prise en charge hôtel ou riad", "Nous venons vous chercher à votre porte à Marrakech et vous ramenons en fin de journée."],
      ["Disponible 24h/24", "Atterrissage tardif, départ matinal, changement de dernière minute : nous nous adaptons."],
    ],
    faqTitle: "Chauffeur privé à Marrakech — questions",
    faq: [
      ["Combien coûte un chauffeur privé à Marrakech ?", "Une excursion en voiture privée démarre à 70 € par véhicule pour 1 à 7 personnes. Les transferts aéroport démarrent à 10 €. Les transferts longue distance, comme Marrakech–Casablanca, démarrent à 150 €. Le prix exact est confirmé sur WhatsApp avant la réservation."],
      ["Faut-il payer à l'avance ?", "Non. Aucun acompte et aucun paiement en ligne. Vous payez le chauffeur en espèces le jour du trajet, en EUR, USD, CAD, GBP ou MAD."],
      ["Le chauffeur attend-il si mon vol est retardé ?", "Oui. Nous suivons votre numéro de vol et vous attendons dans le hall des arrivées, sans supplément en cas de retard."],
      ["Combien de personnes peuvent monter dans le van ?", "Le van accueille 1 à 7 passagers, en plus du chauffeur. Le prix est par voiture : une famille de six paie autant qu'un voyageur seul."],
      ["Peut-on personnaliser l'itinéraire ?", "Oui. Dites-nous sur WhatsApp ce que vous souhaitez voir et nous construisons la journée autour : arrêts supplémentaires, départ plus tard, retour à une autre heure."],
      ["Conduisez-vous en dehors de Marrakech ?", "Oui. Nous couvrons tout le Maroc : l'Atlas, le Sahara, Fès, Chefchaouen, Casablanca, Rabat, Agadir et la côte atlantique."],
    ],
  },
}

const ICONS = { plane: Plane, sun: Sun, clock: Clock, route: Route }

export function DriverPage({ locale }: { locale: Locale }) {
  const d = T[locale]
  const withPrice = CITIES.filter((c) => c.key !== MARRAKECH.key && typeof c.price === "number")
  const transferRows = withPrice.slice(0, 8)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }

  return (
    <LanguageProvider initialLanguage={locale}>
      <div className="min-h-screen bg-background" lang={locale}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <Header />
        <main role="main">
          {/* Hero */}
          <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-secondary/10 to-background">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center max-w-6xl">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                  {d.kicker}
                </span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-4 leading-tight">{d.h1}</h1>
                <p className="text-lg md:text-xl font-semibold text-secondary mt-2">{d.h1b}</p>
                <p className="text-muted-foreground mt-4 leading-relaxed">{d.lead}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-7">
                  <Link
                    href="#calculator"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                  >
                    {d.cta1}
                  </Link>
                  <a
                    href={waLink(locale === "fr" ? "Bonjour, je cherche un chauffeur privé à Marrakech." : "Hello, I am looking for a private driver in Marrakech.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    {d.cta2}
                  </a>
                </div>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-sm text-muted-foreground">
                  <li className="inline-flex items-center gap-1.5"><Wallet className="h-4 w-4 text-secondary" /> {locale === "fr" ? "Paiement à l'arrivée" : "Cash on arrival"}</li>
                  <li className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-secondary" /> {locale === "fr" ? "Transport agréé" : "Licensed transport"}</li>
                  <li className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-secondary" /> {locale === "fr" ? "Prise en charge hôtel" : "Hotel pickup"}</li>
                </ul>
              </div>
              <div className="relative aspect-[4/5] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/real/private-van-riad-marrakech-sunset.webp"
                  alt={d.heroAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <TrustBar />

          {/* Services */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-10">{d.servicesTitle}</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {d.services.map((s) => {
                  const Icon = ICONS[s.icon as keyof typeof ICONS]
                  return (
                    <article key={s.title} className="rounded-2xl border bg-card p-6">
                      <Icon className="h-7 w-7 text-secondary" />
                      <h3 className="font-serif text-xl font-bold text-primary mt-3">{s.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.text}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Prices */}
          <section className="py-16 md:py-20 bg-muted/40">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center">{d.pricesTitle}</h2>
              <p className="text-muted-foreground text-center mt-3 mb-8">{d.pricesSub}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border bg-card overflow-hidden">
                  <h3 className="px-5 py-3 bg-primary text-primary-foreground font-semibold text-sm">{d.excursionsLabel}</h3>
                  <table className="w-full text-sm">
                    <thead className="sr-only">
                      <tr><th>{d.pricesCol1}</th><th>{d.pricesCol2}</th></tr>
                    </thead>
                    <tbody>
                      {excursions.map((t) => (
                        <tr key={t.id} className="border-t">
                          <td className="px-5 py-2.5">{t.name[locale]}</td>
                          <td className="px-5 py-2.5 text-right font-semibold whitespace-nowrap">{t.price} €</td>
                        </tr>
                      ))}
                      <tr className="border-t">
                        <td className="px-5 py-2.5">{airportTransfer.name[locale]}</td>
                        <td className="px-5 py-2.5 text-right font-semibold whitespace-nowrap">{d.from} {airportTransfer.price} €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl border bg-card overflow-hidden">
                  <h3 className="px-5 py-3 bg-primary text-primary-foreground font-semibold text-sm">{d.transfersLabel}</h3>
                  <table className="w-full text-sm">
                    <thead className="sr-only">
                      <tr><th>{d.pricesCol1}</th><th>{d.pricesCol2}</th></tr>
                    </thead>
                    <tbody>
                      {transferRows.map((c) => (
                        <tr key={c.key} className="border-t">
                          <td className="px-5 py-2.5">Marrakech → {c[locale]}</td>
                          <td className="px-5 py-2.5 text-right font-semibold whitespace-nowrap">{c.price} €</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="text-center mt-6">
                <Link href={locale === "fr" ? "/fr#tarifs" : "/#tarifs"} className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-secondary">
                  {d.morePrices}
                </Link>
              </div>
              <div className="mt-6"><PriceNote /></div>
            </div>
          </section>

          {/* Why us */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-10">{d.whyTitle}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {d.why.map(([h, p]) => (
                  <div key={h} className="rounded-2xl border bg-card p-5">
                    <h3 className="font-semibold text-primary">{h}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Fleet />
          <HowItWorks />
          <ReviewsSection locale={locale} />
          <PriceCalculator />
          <BookingForm />

          {/* FAQ */}
          <section className="py-16 md:py-20 bg-muted/40">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-8">{d.faqTitle}</h2>
              <div className="space-y-3">
                {d.faq.map(([q, a]) => (
                  <details key={q} className="rounded-xl border bg-card p-5 group">
                    <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                      {q}
                      <span className="text-secondary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                    </summary>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  )
}
