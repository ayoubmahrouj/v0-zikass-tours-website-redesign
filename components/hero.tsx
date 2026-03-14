"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage, getWhatsAppUrl } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      {/* Background Image with Next.js Image optimization */}
      <Image
        src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2067&auto=format&fit=crop"
        alt="Vue panoramique de Marrakech avec la Koutoubia - ZikassTours excursions et chauffeur privé"
        fill
        priority
        quality={85}
        className="object-cover object-center"
        sizes="100vw"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-secondary/30 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-secondary/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-secondary/20 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-secondary text-sm font-medium tracking-wide uppercase">
              Luxury Adventure
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 font-semibold shadow-lg shadow-secondary/25 transition-all hover:scale-105"
            >
              <a href="#excursions">
                <ChevronDown className="w-5 h-5 mr-2" />
                {t("hero.cta.excursions")}
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 font-semibold shadow-lg transition-all hover:scale-105"
            >
              <a
                href={getWhatsAppUrl(t("wa.general"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("hero.cta.whatsapp")}
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-secondary/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">10+</div>
              <div className="text-sm text-primary-foreground/70">{t("trust.experience")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">5000+</div>
              <div className="text-sm text-primary-foreground/70">{t("trust.clients")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-primary-foreground/70">{t("trust.available")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm text-primary-foreground/70">{t("trust.safe")}</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-secondary/70" />
        </div>
      </div>
    </section>
  )
}
