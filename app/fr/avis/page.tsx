import { ReviewPage, reviewMetadata } from "@/components/review-page"

export const revalidate = 600
export const metadata = reviewMetadata("fr")

export default function Page() {
  return <ReviewPage locale="fr" />
}
