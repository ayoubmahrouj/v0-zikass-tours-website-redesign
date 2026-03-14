import { Metadata } from "next"
import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { Tarifs } from "@/components/tarifs"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

// SSR - This page is rendered on the server for better SEO
export const dynamic = "force-static"
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: "ZikassTours - Chauffeur Prive & Excursions Marrakech",
  description: "Services de transport premium et excursions inoubliables au depart de Marrakech. Chauffeur prive, desert Agafay, Essaouira, Ourika, Ouzoud, Ouarzazate. Reservez sur WhatsApp.",
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
      </div>
    </LanguageProvider>
  )
}
