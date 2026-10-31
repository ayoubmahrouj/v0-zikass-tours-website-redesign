import type { Metadata } from "next"
import { AboutPage } from "@/components/about-page"
import { SITE_URL } from "@/lib/tours"

export const metadata: Metadata = {
  title: "About ZikassTours — Private Driver in Marrakech Since 2005",
  description:
    "Meet Zakaria, your private driver in Marrakech. One recent air-conditioned van, fixed prices per car, cash on arrival, tourist transport licensed. Real photos of the driver and the vehicle.",
  alternates: {
    canonical: SITE_URL + "/about",
    languages: { en: SITE_URL + "/about", fr: SITE_URL + "/fr/a-propos" },
  },
  openGraph: {
    title: "About ZikassTours — Private Driver in Marrakech",
    description: "One driver, one recent van, fixed prices and payment on arrival. Real photos, no stock images.",
    url: SITE_URL + "/about",
    images: [{ url: "/images/real/zikasstours-driver-portrait-marrakech.webp", width: 959, height: 1280, alt: "Zakaria, private driver in Marrakech" }],
  },
}

export default function Page() {
  return <AboutPage locale="en" />
}
