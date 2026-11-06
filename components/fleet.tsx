"use client"

import Image from "next/image"
import { BadgeCheck, Luggage, Snowflake, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const INTERIOR = "/images/real/private-van-interior-black-leather-seats.webp"

const TXT = {
  en: {
    badge: "Real photos",
    title: "The car you will actually travel in",
    sub: "A recent Fiat private van — not a stock photo, not a shared bus. Same vehicle for every trip, cleaned before each pickup.",
    photos: [
      { src: INTERIOR, alt: "Interior of the private van with black leather seats and curtains, Marrakech" },
      { src: "/images/real/private-van-luggage-airport-transfer.webp", alt: "Luggage space in the private van for an airport transfer in Marrakech" },
      { src: "/images/real/private-van-riad-marrakech-sunset.webp", alt: "ZikassTours private van parked in front of a riad in Marrakech at sunset" },
      { src: "/images/real/black-fiat-van-marrakech-street.webp", alt: "Black Fiat private van used for day trips from Marrakech" },
      { src: "/images/real/private-van-door-open-riad-marrakech.webp", alt: "Private van with the door open, ready for hotel pickup in Marrakech" },
    ],
    points: [
      { icon: "users", label: "1 to 7 passengers", sub: "Price per car, not per person" },
      { icon: "snow", label: "Air conditioning", sub: "Comfortable in summer" },
      { icon: "luggage", label: "Large luggage space", sub: "Suitcases, strollers, golf bags" },
      { icon: "check", label: "Tourist transport licensed", sub: "Insured vehicle and driver" },
    ],
  },
  fr: {
    badge: "Photos réelles",
    title: "La voiture dans laquelle vous voyagerez vraiment",
    sub: "Un van Fiat récent — pas une photo de banque d'images, pas un bus partagé. Le même véhicule à chaque trajet, nettoyé avant chaque prise en charge.",
    photos: [
      { src: INTERIOR, alt: "Intérieur du van privé avec sièges en cuir noir et rideaux, Marrakech" },
      { src: "/images/real/private-van-luggage-airport-transfer.webp", alt: "Coffre du van privé pour un transfert aéroport à Marrakech" },
      { src: "/images/real/private-van-riad-marrakech-sunset.webp", alt: "Van privé ZikassTours devant un riad à Marrakech au coucher du soleil" },
      { src: "/images/real/black-fiat-van-marrakech-street.webp", alt: "Van Fiat noir privé utilisé pour les excursions depuis Marrakech" },
      { src: "/images/real/private-van-door-open-riad-marrakech.webp", alt: "Van privé porte ouverte, prêt pour la prise en charge à l'hôtel à Marrakech" },
    ],
    points: [
      { icon: "users", label: "1 à 7 passagers", sub: "Prix par voiture, pas par personne" },
      { icon: "snow", label: "Climatisation", sub: "Confortable en été" },
      { icon: "luggage", label: "Grand coffre", sub: "Valises, poussettes, sacs de golf" },
      { icon: "check", label: "Transport touristique agréé", sub: "Véhicule et chauffeur assurés" },
    ],
  },
}

const ICONS = {
  users: Users,
  snow: Snowflake,
  luggage: Luggage,
  check: BadgeCheck,
}

export function Fleet() {
  const { language } = useLanguage()
  const d = TXT[language === "fr" ? "fr" : "en"]

  return (
    <section id="vehicle" className="py-16 md:py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
            <BadgeCheck className="h-3.5 w-3.5" />
            {d.badge}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-4">{d.title}</h2>
          <p className="text-muted-foreground mt-3">{d.sub}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          <div className="relative col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[340px] rounded-2xl overflow-hidden">
            <Image
              src={d.photos[0].src}
              alt={d.photos[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {d.photos.slice(1, 5).map((p) => (
            <div key={p.src} className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mt-6">
          {d.points.map((p) => {
            const Icon = ICONS[p.icon as keyof typeof ICONS]
            return (
              <li key={p.label} className="flex items-start gap-3 rounded-xl bg-background border p-4">
                <Icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-primary leading-tight">{p.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.sub}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
