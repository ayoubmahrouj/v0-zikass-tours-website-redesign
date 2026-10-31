import type { Metadata } from "next"
import { DriverPage } from "@/components/driver-page"
import { SITE_URL } from "@/lib/tours"

export const metadata: Metadata = {
  title: "Chauffeur privé à Marrakech — francophone et anglophone | ZikassTours",
  description:
    "Chauffeur privé à Marrakech : transferts aéroport, excursions Agafay, Ourika, Ouzoud, Essaouira et Atlas, mise à disposition à l'heure et circuits de plusieurs jours. Prix fixe par voiture pour 1 à 7 personnes, paiement à l'arrivée.",
  alternates: {
    canonical: SITE_URL + "/fr/chauffeur-prive-marrakech",
    languages: {
      en: SITE_URL + "/private-driver-marrakech",
      fr: SITE_URL + "/fr/chauffeur-prive-marrakech",
    },
  },
  openGraph: {
    title: "Chauffeur privé à Marrakech — ZikassTours",
    description: "Chauffeur francophone et anglophone, prix fixe par voiture, paiement en espèces à l'arrivée. Transferts aéroport et excursions depuis Marrakech.",
    url: SITE_URL + "/fr/chauffeur-prive-marrakech",
    images: [{ url: "/images/real/private-van-riad-marrakech-sunset.webp", width: 591, height: 1280, alt: "Van privé ZikassTours à Marrakech" }],
  },
}

export default function Page() {
  return <DriverPage locale="fr" />
}
