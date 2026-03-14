"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { Tarifs } from "@/components/tarifs"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
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
