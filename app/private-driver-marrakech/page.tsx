import type { Metadata } from "next"
import { DriverPage } from "@/components/driver-page"
import { SITE_URL } from "@/lib/tours"

export const metadata: Metadata = {
  title: "Private Driver in Marrakech — English-Speaking Chauffeur | ZikassTours",
  description:
    "Private driver in Marrakech for airport transfers, day trips to Agafay, Ourika, Ouzoud, Essaouira and the Atlas, hourly hire and multi-day tours. Fixed price per car for 1-7 people, cash on arrival.",
  alternates: {
    canonical: SITE_URL + "/private-driver-marrakech",
    languages: {
      en: SITE_URL + "/private-driver-marrakech",
      fr: SITE_URL + "/fr/chauffeur-prive-marrakech",
    },
  },
  openGraph: {
    title: "Private Driver in Marrakech — ZikassTours",
    description: "English-speaking chauffeur, fixed price per car, payment in cash on arrival. Airport transfers and day trips from Marrakech.",
    url: SITE_URL + "/private-driver-marrakech",
    images: [{ url: "/images/real/private-van-riad-marrakech-sunset.webp", width: 591, height: 1280, alt: "ZikassTours private van in Marrakech" }],
  },
}

export default function Page() {
  return <DriverPage locale="en" />
}
