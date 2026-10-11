import type { Metadata } from "next"
import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { Tarifs } from "@/components/tarifs"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LeadTracker } from "@/components/lead-tracker"
import { SITE_URL } from "@/lib/tours"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: { absolute: "ZikassTours - Chauffeur Privé & Excursions depuis Marrakech" },
  description:
    "Chauffeur privé, transferts aéroport et excursions depuis Marrakech : désert d'Agafay, vallée de l'Ourika, Ouzoud, Essaouira, Imlil, Ouarzazate. Voiture privée 1-7 personnes. Réservez sur WhatsApp.",
  alternates: {
    canonical: SITE_URL + "/fr",
    languages: { en: SITE_URL + "/", fr: SITE_URL + "/fr", "x-default": SITE_URL + "/" },
  },
  openGraph: {
    title: "ZikassTours - Chauffeur Privé & Excursions depuis Marrakech",
    description: "Excursions privées et transferts depuis Marrakech. Voiture privée avec chauffeur pour 1 à 7 personnes.",
    url: SITE_URL + "/fr",
    locale: "fr_FR",
    type: "website",
    siteName: "ZikassTours",
    images: [{ url: "/images/logo.jpeg", width: 1200, height: 630, alt: "ZikassTours Marrakech" }],
  },
}

export default function HomePageFr() {
  return (
    <LanguageProvider initialLanguage="fr">
      <div className="min-h-screen bg-background" lang="fr">
        <Header />
        <main role="main">
          <Hero />
          <Destinations />
          <Tarifs />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <LeadTracker />
      </div>
    </LanguageProvider>
  )
}
