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

// SSR - This page is rendered on the server for better SEO
export const dynamic = "force-static"
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: "ZikassTours - Private Driver & Day Trips from Marrakech",
  description: "Private driver, airport transfers and day trips from Marrakech: Agafay Desert, Ourika Valley, Ouzoud, Essaouira, Imlil, Ouarzazate. Private car for 1-7 people. Book on WhatsApp.",
  alternates: {
    canonical: "https://zikasstours.com",
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
