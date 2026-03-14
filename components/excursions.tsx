"use client"

import Image from "next/image"
import { Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage, getWhatsAppUrl } from "@/lib/language-context"

interface Excursion {
  id: string
  image: string
  price: number
  duration: string
  waKey: string
}

const excursions: Excursion[] = [
  {
    id: "agafay",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2070&auto=format&fit=crop",
    price: 50,
    duration: "4-5h",
    waKey: "wa.agafay",
  },
  {
    id: "ourika",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop",
    price: 60,
    duration: "6-7h",
    waKey: "wa.ourika",
  },
  {
    id: "imlil",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    price: 80,
    duration: "8h",
    waKey: "wa.imlil",
  },
  {
    id: "oukaimeden",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop",
    price: 90,
    duration: "6h",
    waKey: "wa.oukaimeden",
  },
  {
    id: "ouzoud",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2070&auto=format&fit=crop",
    price: 120,
    duration: "10h",
    waKey: "wa.ouzoud",
  },
  {
    id: "merzouga",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2070&auto=format&fit=crop",
    price: 250,
    duration: "2-3 jours",
    waKey: "wa.merzouga",
  },
  {
    id: "zagora",
    image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=2059&auto=format&fit=crop",
    price: 150,
    duration: "2 jours",
    waKey: "wa.zagora",
  },
  {
    id: "essaouira",
    image: "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?q=80&w=2071&auto=format&fit=crop",
    price: 120,
    duration: "10-12h",
    waKey: "wa.essaouira",
  },
  {
    id: "palmeraie",
    image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?q=80&w=2070&auto=format&fit=crop",
    price: 15,
    duration: "2h",
    waKey: "wa.palmeraie",
  },
]

export function Excursions() {
  const { t } = useLanguage()

  return (
    <section id="excursions" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
            {t("excursions.title")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("excursions.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("excursions.subtitle")}
          </p>
        </div>

        {/* Excursions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {excursions.map((excursion, index) => (
            <Card
              key={excursion.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={excursion.image}
                  alt={t(`excursion.${excursion.id}.name`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full font-bold text-sm shadow-lg">
                  {t("excursions.from")} {excursion.price}€
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-card mb-1">
                    {t(`excursion.${excursion.id}.name`)}
                  </h3>
                  <div className="flex items-center gap-4 text-card/80 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {excursion.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Marrakech
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {t(`excursion.${excursion.id}.desc`)}
                </p>

                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all group-hover:bg-secondary group-hover:text-secondary-foreground"
                >
                  <a
                    href={getWhatsAppUrl(t(excursion.waKey))}
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
                    {t("excursions.book")}
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
