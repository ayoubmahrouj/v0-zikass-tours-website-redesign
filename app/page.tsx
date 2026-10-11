import { Metadata } from "next"
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

// SSR - This page is rendered on the server for better SEO
export const dynamic = "force-static"
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: { absolute: "ZikassTours - Private Driver & Day Trips from Marrakech" },
  description:
    "Private driver, airport transfers and day trips from Marrakech: Agafay Desert, Ourika Valley, Ouzoud, Essaouira, Imlil, Ouarzazate. Private car for 1-7 people. Book on WhatsApp.",
  alternates: {
    canonical: SITE_URL + "/",
    languages: { en: SITE_URL + "/", fr: SITE_URL + "/fr", "x-default": SITE_URL + "/" },
  },
  openGraph: {
    title: "ZikassTours - Private Driver & Day Trips from Marrakech",
    description: "Private day trips and transfers from Marrakech. Private car with driver for 1-7 people.",
    url: SITE_URL + "/",
    locale: "en_US",
    type: "website",
    siteName: "ZikassTours",
    images: [{ url: "/images/logo.jpeg", width: 1200, height: 630, alt: "ZikassTours Marrakech" }],
  },
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
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
