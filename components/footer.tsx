"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"
import { useLanguage, WHATSAPP_NUMBER, EMAIL, INSTAGRAM } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold text-secondary mb-4">
              {t("footer.quicklinks")}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#home"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="#excursions"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {t("nav.excursions")}
              </Link>
              <Link
                href="#tarifs"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {t("nav.tarifs")}
              </Link>
              <Link
                href="#contact"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {t("nav.contact")}
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
            <div className="flex items-center gap-4">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-secondary" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-secondary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
