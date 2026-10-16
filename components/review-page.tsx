import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ReviewForm } from "@/components/review-form"
import { ReviewsSection } from "@/components/reviews-section"
import { LanguageProvider } from "@/lib/language-context"
import { SITE_URL, type Locale } from "@/lib/tours"

const T = {
  en: {
    title: "Leave a review",
    meta: "Share your experience with ZikassTours: private driver and day trips from Marrakech.",
    h1: "How was your trip with ZikassTours?",
    sub: "Your feedback helps us improve and helps other travelers choose. It takes 1 minute.",
  },
  fr: {
    title: "Laisser un avis",
    meta: "Partagez votre expérience avec ZikassTours : chauffeur privé et excursions depuis Marrakech.",
    h1: "Comment s'est passée votre excursion ?",
    sub: "Votre avis nous aide à nous améliorer et aide d'autres voyageurs à choisir. Cela prend 1 minute.",
  },
}

export function reviewMetadata(locale: Locale): Metadata {
  return {
    title: T[locale].title,
    description: T[locale].meta,
    robots: { index: false, follow: true },
    alternates: {
      canonical: SITE_URL + (locale === "fr" ? "/fr/avis" : "/review"),
      languages: { en: SITE_URL + "/review", fr: SITE_URL + "/fr/avis", "x-default": SITE_URL + "/review" },
    },
  }
}

export function ReviewPage({ locale }: { locale: Locale }) {
  const t = T[locale]
  return (
    <LanguageProvider initialLanguage={locale}>
      <div className="min-h-screen bg-background" lang={locale}>
        <Header />
        <main className="pt-28 pb-8">
          <div className="container mx-auto px-4 max-w-2xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center">{t.h1}</h1>
            <p className="text-muted-foreground text-center mt-3 mb-8">{t.sub}</p>
            <div className="rounded-2xl border shadow-lg p-6 md:p-8 bg-card">
              <ReviewForm locale={locale} />
            </div>
          </div>
          <div className="mt-16">
            <ReviewsSection locale={locale} limit={9} />
          </div>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  )
}
