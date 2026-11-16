import Image from "next/image"
import Link from "next/link"
import { Check, Clock, Globe, MapPin, Phone, Sparkles, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LeadTracker } from "@/components/lead-tracker"
import { LanguageProvider } from "@/lib/language-context"
import { PHONE_DISPLAY, SITE_URL, waLink, type Locale } from "@/lib/tours"
import { ramassageFaq, ramassageTrips, ramassageWaMessage, RAMASSAGE_PATH } from "@/lib/ramassage"

const ui = {
  en: {
    home: "Home",
    badge: "Shared tours · Ramassage",
    h1: "Ramassage: shared day trips from Marrakech",
    subtitle:
      "Ourika, Ouzoud and Essaouira at the best price. Same excursions as our private tours, in a comfortable van with a small group. All prices are per person.",
    from: "From",
    perPerson: "per person",
    pricesTitle: "Pickup prices per person",
    pricesSubtitle: "Choose your formula: transport only, or transport + lunch/boat + guide.",
    recommended: "Most popular",
    included: "Included",
    book: "Book on WhatsApp",
    ask: "Ask a question",
    goodTitle: "Good to know",
    good: [
      ["Price per person", "Not per vehicle: the more you are, the simpler it is."],
      ["Departure from Marrakech", "Pickup at your hotel or riad, time confirmed on WhatsApp."],
      ["Small group", "Comfortable air-conditioned van with a local driver."],
      ["Easy booking", "No deposit. You pay on the day of the trip."],
    ],
    privateTitle: "Prefer a private car?",
    privateText: "Our private tours with your own driver, pickup at your hotel and flexible timing.",
    privateCta: "See private tours",
    faqTitle: "Frequently asked questions",
    ctaTitle: "Ready to book your shared tour?",
    ctaText: "Send us a WhatsApp message with your date and the number of people. We confirm availability right away.",
    call: "or call",
    lang: "Version française",
    generalWa: "Hello, I would like information about the shared tours (ramassage) from Marrakech.",
    perPersonShort: "/ person",
  },
  fr: {
    home: "Accueil",
    badge: "Ramassage · Transport partagé",
    h1: "Ramassage : excursions partagées depuis Marrakech",
    subtitle:
      "Ourika, Ouzoud et Essaouira au meilleur prix. Les mêmes excursions que nos circuits privés, dans un van confortable en petit groupe. Tous les tarifs sont par personne.",
    from: "Dès",
    perPerson: "par personne",
    pricesTitle: "Tarifs ramassage par personne",
    pricesSubtitle: "Choisissez votre formule : transport seul, ou transport + déjeuner/barque + guide.",
    recommended: "Le plus choisi",
    included: "Inclus",
    book: "Réserver sur WhatsApp",
    ask: "Poser une question",
    goodTitle: "Bon à savoir",
    good: [
      ["Prix par personne", "Pas par véhicule : idéal pour les petits budgets et les voyageurs seuls."],
      ["Départ de Marrakech", "Prise en charge à votre hôtel ou riad, heure confirmée sur WhatsApp."],
      ["Petit groupe", "Van climatisé et confortable avec chauffeur local."],
      ["Réservation simple", "Sans acompte. Vous payez le jour de l'excursion."],
    ],
    privateTitle: "Vous préférez une voiture privée ?",
    privateText: "Nos excursions privées avec votre propre chauffeur, prise en charge à l'hôtel et horaires flexibles.",
    privateCta: "Voir les excursions privées",
    faqTitle: "Questions fréquentes",
    ctaTitle: "Prêt à réserver votre ramassage ?",
    ctaText: "Envoyez-nous un message WhatsApp avec la date et le nombre de personnes. Nous confirmons la disponibilité tout de suite.",
    call: "ou appelez le",
    lang: "English version",
    generalWa: "Bonjour, je souhaite des informations sur les excursions en ramassage depuis Marrakech.",
    perPersonShort: "/ pers.",
  },
}

function WaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function jsonLd(locale: Locale) {
  const url = SITE_URL + RAMASSAGE_PATH[locale]
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...ramassageTrips.map((trip) => ({
        "@type": "TouristTrip",
        "@id": `${url}#${trip.id}`,
        name: `${trip.name[locale]} - ${locale === "fr" ? "ramassage" : "shared tour"}`,
        description: trip.intro[locale],
        image: trip.image.startsWith("http") ? trip.image : SITE_URL + trip.image,
        provider: { "@id": "https://www.zikasstours.com/#organization" },
        offers: trip.options.map((option) => ({
          "@type": "Offer",
          name: option.label[locale],
          price: option.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url,
          description:
            locale === "fr"
              ? `Prix par personne : ${option.label[locale]}`
              : `Price per person: ${option.label[locale]}`,
        })),
      })),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: ui[locale].home, item: SITE_URL + (locale === "fr" ? "/fr" : "/") },
          { "@type": "ListItem", position: 2, name: "Ramassage", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: ramassageFaq[locale].map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }
}

export function RamassagePage({ locale }: { locale: Locale }) {
  const u = ui[locale]
  const other = locale === "fr" ? "en" : "fr"
  const cheapest = Math.min(...ramassageTrips.flatMap((t) => t.options.map((o) => o.price)))
  const privateToursHref = locale === "fr" ? "/fr#tarifs" : "/#tarifs"

  return (
    <LanguageProvider initialLanguage={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }} />
      <div className="min-h-screen bg-background" lang={locale}>
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="relative overflow-hidden bg-primary py-14 md:py-20">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
            />
            <div className="container relative mx-auto px-4">
              <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/60 mb-4">
                <Link href={locale === "fr" ? "/fr" : "/"} className="hover:text-primary-foreground">
                  {u.home}
                </Link>
                <span className="mx-2">/</span>
                <span className="text-primary-foreground/90">Ramassage</span>
              </nav>
              <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-5 tracking-wide uppercase">
                {u.badge}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 max-w-4xl text-balance">
                {u.h1}
              </h1>
              <p className="text-primary-foreground/75 text-lg max-w-2xl mb-6">{u.subtitle}</p>
              <div className="flex flex-wrap items-center gap-3 mb-8 text-sm text-primary-foreground/80">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
                  <Users className="w-4 h-4 text-secondary" /> {u.from} {cheapest}€ {u.perPerson}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
                  <MapPin className="w-4 h-4 text-secondary" /> Marrakech
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
                  <Sparkles className="w-4 h-4 text-secondary" /> {locale === "fr" ? "Petit groupe" : "Small group"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={waLink(u.generalWa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors"
                >
                  <WaIcon className="w-5 h-5 mr-2" /> {u.book}
                </a>
                <a
                  href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-secondary/40 hover:bg-secondary/10 text-primary-foreground font-semibold rounded-full transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </section>

          {/* Prices per trip */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4">
              <header className="text-center mb-10 md:mb-14">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
                  {u.pricesTitle}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{u.pricesSubtitle}</p>
              </header>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {ramassageTrips.map((trip) => (
                  <article
                    key={trip.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-52">
                      <Image
                        src={trip.image}
                        alt={trip.name[locale]}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 right-4 font-serif text-2xl font-bold text-white">
                        {trip.name[locale]}
                      </h3>
                      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        <Clock className="w-3.5 h-3.5" /> {trip.duration[locale]}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <p className="text-muted-foreground text-sm mb-5">{trip.intro[locale]}</p>

                      <div className="space-y-3">
                        {trip.options.map((option) => (
                          <div
                            key={option.id}
                            className={`rounded-xl border p-4 ${
                              option.recommended ? "border-secondary bg-secondary/5" : "border-border"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <p className="font-semibold text-sm leading-snug">
                                {option.label[locale]}
                                {option.recommended && (
                                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-wide text-secondary-foreground/70">
                                    {u.recommended}
                                  </span>
                                )}
                              </p>
                              <p className="whitespace-nowrap text-right">
                                <span className="text-2xl font-bold text-primary">{option.price}€</span>
                                <span className="block text-[11px] text-muted-foreground">{u.perPersonShort}</span>
                              </p>
                            </div>

                            <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                              {u.included}
                            </p>
                            <ul className="mt-1.5 space-y-1">
                              {option.includes[locale].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                                  {item}
                                </li>
                              ))}
                            </ul>

                            <a
                              href={waLink(ramassageWaMessage(locale, trip.name[locale], option.label[locale], option.price))}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                            >
                              <WaIcon className="w-4 h-4 mr-2" /> {u.book}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Good to know */}
          <section className="bg-muted/40 py-14 md:py-20">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">{u.goodTitle}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {u.good.map(([title, text]) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-5">
                    <Check className="w-5 h-5 text-secondary mb-3" />
                    <p className="font-semibold mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* FAQ */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-5">{u.faqTitle}</h2>
                <div className="space-y-3">
                  {ramassageFaq[locale].map((f) => (
                    <details key={f.q} className="group rounded-xl border border-border p-5 open:bg-muted/40">
                      <summary className="cursor-pointer font-semibold list-none flex justify-between gap-4">
                        {f.q}
                        <span className="text-secondary group-open:rotate-45 transition-transform text-xl leading-none">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside>
                <div className="lg:sticky lg:top-28 rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl">
                  <p className="text-sm text-primary-foreground/70">{u.from}</p>
                  <p className="text-4xl font-bold text-secondary">
                    {cheapest}€<span className="text-base font-medium text-primary-foreground/70"> {u.perPersonShort}</span>
                  </p>
                  <p className="text-sm text-primary-foreground/70 mb-6">
                    {locale === "fr"
                      ? "Ourika, Ouzoud, Essaouira - transport partagé."
                      : "Ourika, Ouzoud, Essaouira - shared transport."}
                  </p>
                  <a
                    href={waLink(u.generalWa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors mb-3"
                  >
                    <WaIcon className="w-5 h-5 mr-2" /> {u.book}
                  </a>
                  <p className="text-center text-sm text-primary-foreground/60 mt-4">
                    {u.call}{" "}
                    <a href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`} className="underline">
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                  <Link
                    href={RAMASSAGE_PATH[other]}
                    hrefLang={other}
                    className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary"
                  >
                    <Globe className="w-4 h-4" /> {u.lang}
                  </Link>
                </div>
              </aside>
            </div>

            {/* Cross-sell: private tours */}
            <section className="mt-14 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <h2 className="font-serif text-xl md:text-2xl font-bold mb-1">{u.privateTitle}</h2>
                <p className="text-muted-foreground">{u.privateText}</p>
              </div>
              <Link
                href={privateToursHref}
                className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors"
              >
                {u.privateCta}
              </Link>
            </section>

            {/* Final CTA */}
            <section className="mt-10 p-8 md:p-12 bg-primary rounded-2xl text-center">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-3 text-balance">
                {u.ctaTitle}
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">{u.ctaText}</p>
              <a
                href={waLink(u.generalWa)}
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
