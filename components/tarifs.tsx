"use client"

import { Plane, Car, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage, getWhatsAppUrl } from "@/lib/language-context"

interface TarifItem {
  route: string
  price: number
}

const airportTransfers: TarifItem[] = [
  { route: "Aéroport → Medina / Gueliz", price: 10 },
  { route: "Transfert Agafay", price: 50 },
  { route: "Soirée Agafay", price: 70 },
  { route: "Oukaïmeden", price: 90 },
]

const regionalTransfers: TarifItem[] = [
  { route: "Marrakech → Casablanca", price: 150 },
  { route: "3 Vallées", price: 110 },
  { route: "Essaouira", price: 130 },
  { route: "Ouarzazate", price: 130 },
  { route: "Agadir", price: 150 },
  { route: "Rabat", price: 190 },
]

export function Tarifs() {
  const { t } = useLanguage()

  return (
    <section id="tarifs" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
            {t("tarifs.title")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            {t("tarifs.title")}
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            {t("tarifs.subtitle")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Airport Transfers */}
          <Card className="bg-card/10 backdrop-blur-sm border-secondary/20 overflow-hidden">
            <CardHeader className="bg-secondary/10 border-b border-secondary/20">
              <CardTitle className="flex items-center gap-3 text-primary-foreground font-serif text-2xl">
                <div className="p-2 bg-secondary rounded-lg">
                  <Plane className="w-6 h-6 text-secondary-foreground" />
                </div>
                {t("tarifs.airport")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {airportTransfers.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border-b border-secondary/10 last:border-0 group hover:bg-secondary/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-primary-foreground/90">{item.route}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-secondary font-bold text-lg">{item.price}€</span>
                    <Button
                      asChild
                      size="sm"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <a
                        href={getWhatsAppUrl(t("wa.airport"))}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("tarifs.book")}
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Regional Transfers */}
          <Card className="bg-card/10 backdrop-blur-sm border-secondary/20 overflow-hidden">
            <CardHeader className="bg-secondary/10 border-b border-secondary/20">
              <CardTitle className="flex items-center gap-3 text-primary-foreground font-serif text-2xl">
                <div className="p-2 bg-secondary rounded-lg">
                  <Car className="w-6 h-6 text-secondary-foreground" />
                </div>
                {t("tarifs.regional")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {regionalTransfers.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border-b border-secondary/10 last:border-0 group hover:bg-secondary/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-primary-foreground/90">{item.route}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-secondary font-bold text-lg">{item.price}€</span>
                    <Button
                      asChild
                      size="sm"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <a
                        href={getWhatsAppUrl(t("wa.transfer"))}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("tarifs.book")}
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-primary-foreground/70 mb-4">
            {t("contact.subtitle")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8"
          >
            <a
              href={getWhatsAppUrl(t("wa.general"))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("nav.reserve")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
