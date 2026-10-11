import { TourPage, tourMetadata } from "@/components/tour-page"
import { airportTransfer } from "@/lib/tours"

export const metadata = tourMetadata(airportTransfer, "fr")

export default function Page() {
  return <TourPage tour={airportTransfer} locale="fr" />
}
