import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, X, Clock, MapPin, Users, ArrowRight, Globe } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LeadTracker } from "@/components/lead-tracker"
import { LanguageProvider } from "@/lib/language-context"
import { SITE_URL, PHONE_DISPLAY, tours, excursions, waLink, type Tour, type Locale } from "@/lib/tours"

const ui = {
  en: {
    from: "From",
    perCar: "per private car · 1-7 people",
    book: "Book on WhatsApp",
    ask: "Ask a question",
    highlights: "Highlights",
    included: "Included",
    notIncluded: "Not included",
    faq: "Frequently asked questions",
    other: "Other trips from Marrakech",
    guide: "Read our full travel guide",
    how: "How to book",
    steps: [
      "Send us a WhatsApp message with your date, number of people and hotel.",
      "We confirm the price and pickup time, usually within minutes.",
      "Your private driver picks you up at your hotel or riad.",
    ],
    ctaTitle: "Ready to book?",
    ctaText: "Message us on WhatsApp. We answer 7 days a week.",
    orCall: "or call",
    home: "Home",
    lang: "Version française",
    msgBook: (n: string) => `Hello, I would like to book: ${n}. Date: ... Number of people: ... Hotel: ...`,
    msgAsk: (n: string) => `Hello, I have a question about: ${n}.`,
    airport: "Airport transfer",
  },
  fr: {
    from: "À partir de",
    perCar: "par voiture privée · 1 à 7 personnes",
    book: "Réserver sur WhatsApp",
    ask: "Poser une question",
    highlights: "Points forts",
    included: "Inclus",
    notIncluded: "Non inclus",
    faq: "Questions fréquentes",
    other: "Autres excursions depuis Marrakech",
    guide: "Lire notre guide complet",
    how: "Comment réserver",
    steps: [
      "Envoyez-nous un message WhatsApp avec la date, le nombre de personnes et votre hôtel.",
      "Nous confirmons le prix et l'heure de prise en charge, souvent en quelques minutes.",
      "Votre chauffeur privé vient vous chercher à votre hôtel ou riad.",
    ],
    ctaTitle: "Prêt à réserver ?",
    ctaText: "Écrivez-nous sur WhatsApp. Nous répondons 7j/7.",
    orCall: "ou appelez le",
    home: "Accueil",
    lang: "English version",
    msgBook: (n: string) => `Bonjour, je souhaite réserver : ${n}. Date : ... Nombre de personnes : ... Hôtel : ...`,
    msgAsk: (n: string) => `Bonjour, j'ai une question sur : ${n}.`,
    airport: "Transfert aéroport",
  },
}

export function tourMetadata(tour: Tour, locale: Locale): Metadata {
  const url = SITE_URL + tour.path[locale]
  const image = tour.images[0] || SITE_URL + "/images/logo.jpeg"
  return {
    title: { absolute: tour.metaTitle[locale] + " | ZikassTours" },
    description: tour.metaDesc[locale],
    alternates: {
      canonical: url,
      languages: {
        en: SITE_URL + tour.path.en,
        fr: SITE_URL + tour.path.fr,
        "x-default": SITE_URL + tour.path.en,
      },
    },
    openGraph: {
      title: tour.metaTitle[locale],
      description: tour.metaDesc[locale],
      url,
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: "ZikassTours",
      images: [{ url: image, width: 1200, height: 630, alt: tour.name[locale] }],
    },
  }
}

function jsonLd(tour: Tour, locale: Locale) {
  const url = SITE_URL + tour.path[locale]
  const offer = {
    "@type": "Offer",
    price: tour.price,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url,
    description: locale === "fr" ? "Prix par voiture privée (1 à 7 personnes)" : "Price per private car (1-7 people)",
  }
  const main =
    tour.kind === "excursion"
      ? {
          "@type": "TouristTrip",
          "@id": url + "#trip",
          name: tour.h1[locale],
          description: tour.metaDesc[locale],
          image: tour.images,
          touristType: locale === "fr" ? "Voyageurs privés" : "Private travelers",
          provider: { "@id": "https://www.zikasstours.com/#organization" },
          offers: offer,
        }
      : {
          "@type": "TaxiService",
          "@id": url + "#service",
          name: tour.h1[locale],
          description: tour.metaDesc[locale],
          areaServed: { "@type": "City", name: "Marrakech" },
          provider: { "@id": "https://www.zikasstours.com/#organization" },
          offers: offer,
        }
  return {
    "@context": "https://schema.org",
    "@graph": [
      main,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: ui[locale].home, item: SITE_URL + (locale === "fr" ? "/fr" : "/") },
          { "@type": "ListItem", position: 2, name: tour.name[locale], item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: tour.faq[locale].map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }
}

function WaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function TourPage({ tour, locale }: { tour: Tour; locale: Locale }) {
  const u = ui[locale]
  const name = tour.name[locale]
  const others = [...excursions.filter((t) => t.id !== tour.id), ...(tour.kind === "excursion" ? tours.filter((t) => t.kind === "transfer") : [])]
  const other = locale === "fr" ? "en" : "fr"
  const hero = tour.images[0]

  return (
    <LanguageProvider initialLanguage={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(tour, locale)) }} />
      <div className="min-h-screen bg-background" lang={locale}>
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="relative min-h-[460px] h-[65vh] bg-primary">
            {hero && <Image src={hero} alt={tour.h1[locale]} fill priority sizes="100vw" className="object-cover" />}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto">
                <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-3">
                  <Link href={locale === "fr" ? "/fr" : "/"} className="hover:text-white">{u.home}</Link>
                  <span className="mx-2">/</span>
                  <span className="text-white">{name}</span>
                </nav>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl text-balance">
                  {tour.h1[locale]}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/85 mb-6">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {tour.duration[locale]}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {tour.distance[locale]}</span>
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 1-7</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href={waLink(u.msgBook(name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors"
                  >
                    <WaIcon className="w-5 h-5 mr-2" /> {u.book}
                  </a>
                  <div className="text-white">
                    <span className="text-sm text-white/70">{u.from} </span>
                    <span className="text-3xl font-bold text-secondary">{tour.price}€</span>
                    <span className="block text-xs text-white/70">{u.perCar}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Main column */}
              <div className="lg:col-span-2 space-y-10">
                <p className="text-xl text-muted-foreground leading-relaxed">{tour.intro[locale]}</p>

                {tour.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-3">
                    {tour.images.slice(1, 4).map((img, i) => (
                      <div key={img} className="relative aspect-square rounded-xl overflow-hidden">
                        <Image src={img} alt={`${name} ${i + 2}`} fill sizes="(max-width: 768px) 33vw, 260px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                <section>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{u.highlights}</h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {tour.highlights[locale].map((h) => (
                      <li key={h} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-4 text-lg leading-relaxed text-foreground/90">
                  {tour.body[locale].map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </section>

                <section className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-4">{u.included}</h2>
                    <ul className="space-y-2.5">
                      {tour.included[locale].map((i) => (
                        <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />{i}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-4">{u.notIncluded}</h2>
                    <ul className="space-y-2.5">
                      {tour.notIncluded[locale].map((i) => (
                        <li key={i} className="flex items-start gap-3"><X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />{i}</li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{u.how}</h2>
                  <ol className="space-y-3">
                    {u.steps.map((s, i) => (
                      <li key={s} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center">{i + 1}</span>
                        <span className="pt-1">{s}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                <section>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{u.faq}</h2>
                  <div className="space-y-3">
                    {tour.faq[locale].map((f) => (
                      <details key={f.q} className="group rounded-xl border border-border p-5 open:bg-muted/40">
                        <summary className="cursor-pointer font-semibold list-none flex justify-between gap-4">
                          {f.q}
                          <span className="text-secondary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                        </summary>
                        <p className="mt-3 text-muted-foreground">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </section>

                {tour.blogUrl && (
                  <Link href={tour.blogUrl} className="inline-flex items-center gap-2 text-primary hover:text-secondary font-medium">
                    {u.guide} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

              {/* Sticky booking card */}
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-28 rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl">
                  <p className="text-sm text-primary-foreground/70">{u.from}</p>
                  <p className="text-4xl font-bold text-secondary">{tour.price}€</p>
                  <p className="text-sm text-primary-foreground/70 mb-6">{u.perCar}</p>
                  <a
                    href={waLink(u.msgBook(name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors mb-3"
                  >
                    <WaIcon className="w-5 h-5 mr-2" /> {u.book}
                  </a>
                  <a
                    href={waLink(u.msgAsk(name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3 border border-secondary/40 hover:bg-secondary/10 font-semibold rounded-full transition-colors"
                  >
                    {u.ask}
                  </a>
                  <p className="text-center text-sm text-primary-foreground/60 mt-4">
                    {u.orCall} <a href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`} className="underline">{PHONE_DISPLAY}</a>
                  </p>
                  <Link href={tour.path[other]} hrefLang={other} className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary">
                    <Globe className="w-4 h-4" /> {u.lang}
                  </Link>
                </div>
              </aside>
            </div>

            {/* Other trips - internal links */}
            <section className="mt-16">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">{u.other}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {others.map((t) => (
                  <Link key={t.id} href={t.path[locale]} className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-secondary transition-colors">
                    {t.images[0] ? (
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={t.images[0]} alt={t.name[locale]} fill sizes="80px" className="object-cover" />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-lg bg-primary flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-semibold group-hover:text-primary">{t.name[locale]}</p>
                      <p className="text-sm text-muted-foreground">{u.from} {t.price}€</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="mt-16 p-8 md:p-12 bg-primary rounded-2xl text-center">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-3">{u.ctaTitle}</h2>
              <p className="text-primary-foreground/80 mb-6">{u.ctaText}</p>
              <a
                href={waLink(u.msgBook(name))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors"
              >
                <WaIcon className="w-5 h-5 mr-2" /> {u.book}
              </a>
            </section>
          </div>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <LeadTracker />
      </div>
    </LanguageProvider>
  )
}
