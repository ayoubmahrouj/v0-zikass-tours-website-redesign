import type { Metadata } from "next"
import { RamassagePage } from "@/components/ramassage-page"
import { SITE_URL } from "@/lib/tours"
import { RAMASSAGE_PATH } from "@/lib/ramassage"

export const revalidate = 600

const url = SITE_URL + RAMASSAGE_PATH.en
const title = "Shared Tours from Marrakech: Ourika, Ouzoud, Essaouira from €15"
const description =
  "Shared day trips (ramassage) from Marrakech: Ourika €25 with lunch and guide, Ouzoud €30 with boat and guide, Essaouira €25. Prices per person."

export const metadata: Metadata = {
  title: { absolute: title + " | ZikassTours" },
  description,
  alternates: {
    canonical: url,
    languages: {
      en: url,
      fr: SITE_URL + RAMASSAGE_PATH.fr,
      "x-default": url,
    },
  },
  openGraph: {
    title,
    description,
    url,
    locale: "en_US",
    type: "website",
    siteName: "ZikassTours",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ZikassTours Marrakech shared tours" }],
  },
}

export default function SharedToursPage() {
  return <RamassagePage locale="en" />
}
