"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"
import { useLanguage, WHATSAPP_NUMBER, EMAIL, INSTAGRAM } from "@/lib/language-context"
import { tours, LICENSE_NUMBER } from "@/lib/tours"

export function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()
  const locale = language === "fr" ? "fr" : "en"

  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <Image
              src="/images/logo.jpeg"
              alt="ZikassTours"
              width={180}
              height={80}
              className="h-20 w-auto mb-4"
            />
            <p className="text-primary-foreground/70 leading-relaxed">
              {t("footer.tagline")}
            </p>
            {LICENSE_NUMBER && (
              <p className="text-primary-foreground/60 text-sm mt-3">
                {locale === "fr" ? "Agrément transport touristique" : "Tourist transport licence"} : {LICENSE_NUMBER}
              </p>
            )}
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-serif text-xl font-bold text-secondary mb-4">
              {t("footer.destinations")}
            </h3>
            <nav className="flex flex-col gap-2">
              {tours.map((tour) => (
                <Link
                  key={tour.id}
                  href={tour.path[locale]}
                  className="text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {tour.name[locale]}
                </Link>
              ))}
              <Link href="/blog" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                Blog
              </Link>
              <Link href={locale === "fr" ? "/fr/avis" : "/review"} className="text-primary-foreground/70 hover:text-secondary transition-colors">
                {locale === "fr" ? "Laisser un avis" : "Leave a review"}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold text-secondary mb-4">
              {t("footer.contact")}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                {WHATSAPP_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @zikasstours
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} ZikassTours. {t("footer.rights")}.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/terms" className="text-primary-foreground/60 hover:text-secondary">{locale === "fr" ? "Conditions" : "Terms"}</Link>
              <Link href="/privacy" className="text-primary-foreground/60 hover:text-secondary">{locale === "fr" ? "Confidentialité" : "Privacy"}</Link>
              <Link href="/" hrefLang="en" className="text-primary-foreground/60 hover:text-secondary">English</Link>
              <Link href="/fr" hrefLang="fr" className="text-primary-foreground/60 hover:text-secondary">Français</Link>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-secondary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
