import type { Metadata } from "next"
import { AboutPage } from "@/components/about-page"
import { SITE_URL } from "@/lib/tours"

export const metadata: Metadata = {
  title: "À propos de ZikassTours — Chauffeur privé à Marrakech depuis 2005",
  description:
    "Rencontrez Zakaria, votre chauffeur privé à Marrakech. Un van récent climatisé, prix fixe par voiture, paiement à l'arrivée, transport touristique agréé. De vraies photos du chauffeur et du véhicule.",
  alternates: {
    canonical: SITE_URL + "/fr/a-propos",
    languages: { en: SITE_URL + "/about", fr: SITE_URL + "/fr/a-propos" },
  },
  openGraph: {
    title: "À propos de ZikassTours — Chauffeur privé à Marrakech",
    description: "Un chauffeur, un van récent, prix fixes et paiement à l'arrivée. De vraies photos, sans banque d'images.",
    url: SITE_URL + "/fr/a-propos",
    images: [{ url: "/images/real/zikasstours-driver-portrait-marrakech.webp", width: 959, height: 1280, alt: "Zakaria, chauffeur privé à Marrakech" }],
  },
}

export default function Page() {
  return <AboutPage locale="fr" />
}
