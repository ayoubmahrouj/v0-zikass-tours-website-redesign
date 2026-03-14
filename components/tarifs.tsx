"use client"

import { Plane, Car, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage, getWhatsAppUrl } from "@/lib/language-context"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

interface TarifCategory {
  id: string
  titleKey: string
  icon: React.ReactNode
  services: { name: string; price: string }[]
  fromPrice: string
  waKey: string
}

export function Tarifs() {
  const { t } = useLanguage()

  const tarifCategories: TarifCategory[] = [
    {
      id: "airport",
      titleKey: "tarifs.airport.title",
      icon: <Plane className="w-6 h-6" />,
      services: [
        { name: t("tarifs.airport.medina"), price: "10" },
        { name: "Oukaimden", price: "90" },
        { name: "Agafay Transfer", price: "50" },
        { name: t("tarifs.airport.agafay_soiree"), price: "70" },
      ],
      fromPrice: "10",
      waKey: "wa.tarif.airport",
    },
    {
      id: "regional",
      titleKey: "tarifs.regional.title",
      icon: <Car className="w-6 h-6" />,
      services: [
        { name: "Marrakech - Casablanca", price: "150" },
        { name: t("tarifs.regional.3vallees"), price: "110" },
        { name: "Essaouira", price: "130" },
        { name: "Ouarzazate", price: "130" },
        { name: "Agadir", price: "150" },
        { name: "Rabat", price: "190" },
      ],
      fromPrice: "110",
      waKey: "wa.tarif.regional",
    },
    {
      id: "excursions",
      titleKey: "tarifs.excursions.title",
      icon: <Mountain className="w-6 h-6" />,
      services: [
        { name: "Ourika", price: "60" },
        { name: "Ouzoud", price: "90" },
        { name: "Agafay", price: "70" },
        { name: "Imlil / Haut Atlas", price: "80" },
      ],
      fromPrice: "60",
      waKey: "wa.tarif.excursion",
    },
  ]

  return (
    <section 
      id="tarifs" 
      className="py-20 md:py-32 bg-primary"
      aria-labelledby="tarifs-title"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
            {t("tarifs.badge")}
          </span>
          <h2 
            id="tarifs-title"
            className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance"
          >
            {t("tarifs.title")}
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            {t("tarifs.subtitle")}
          </p>
        </header>

        {/* Tarif Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tarifCategories.map((category) => (
            <Card 
              key={category.id} 
              className="bg-card/10 backdrop-blur-sm border-secondary/20 overflow-hidden hover:bg-card/20 transition-colors"
            >
              <CardHeader className="bg-secondary/10 border-b border-secondary/20 pb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 bg-secondary rounded-lg text-secondary-foreground">
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-primary-foreground/60 uppercase tracking-wide">{t("tarifs.from")}</span>
                    <div className="text-2xl font-bold text-secondary">{category.fromPrice}<span className="text-lg ml-0.5">{"€"}</span></div>
                  </div>
                </div>
                <CardTitle className="font-serif text-xl text-primary-foreground">
                  {t(category.titleKey)}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-4 pb-6">
                {/* Header Row */}
                <div className="flex justify-between text-xs font-medium text-primary-foreground/50 uppercase tracking-wide border-b border-secondary/10 pb-2 mb-2">
                  <span>{t("tarifs.service")}</span>
                  <span>1-7 PAX</span>
                </div>
                
                {/* Services */}
                <div className="space-y-0">
                  {category.services.map((service, idx) => (
                    <div 
                      key={idx} 
                      className="flex justify-between py-2.5 border-b border-secondary/10 last:border-0"
                    >
                      <span className="text-primary-foreground/90 text-sm">{service.name}</span>
                      <span className="font-semibold text-secondary">
                        <span className="text-xs text-primary-foreground/50 mr-1">{t("tarifs.from")}</span>
                        {service.price}{"€"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <Button
                  asChild
                  className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold"
                >
                  <a
                    href={getWhatsAppUrl(t(category.waKey))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    {t("tarifs.reserve")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
