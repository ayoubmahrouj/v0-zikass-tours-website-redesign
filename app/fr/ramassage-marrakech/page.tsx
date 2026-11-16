import type { Metadata } from "next"
import { RamassagePage } from "@/components/ramassage-page"
import { SITE_URL } from "@/lib/tours"
import { RAMASSAGE_PATH } from "@/lib/ramassage"

export const revalidate = 600

const url = SITE_URL + RAMASSAGE_PATH.fr
const title = "Ramassage Marrakech : Ourika, Ouzoud, Essaouira dès 15€/pers"
const description =
  "Excursions en ramassage (transport partagé) depuis Marrakech : Ourika 25€ avec déjeuner et guide, Ouzoud 30€ avec barque et guide, Essaouira 25€. Prix par personne."

export const metadata: Metadata = {
  title: { absolute: title + " | ZikassTours" },
  description,
  alternates: {
    canonical: url,
    languages: {
      en: SITE_URL + RAMASSAGE_PATH.en,
      fr: url,
      "x-default": SITE_URL + RAMASSAGE_PATH.en,
    },
  },
  openGraph: {
    title,
    description,
    url,
    locale: "fr_FR",
    type: "website",
    siteName: "ZikassTours",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ramassage ZikassTours Marrakech" }],
  },
}

export default function RamassagePageFr() {
  return <RamassagePage locale="fr" />
}
