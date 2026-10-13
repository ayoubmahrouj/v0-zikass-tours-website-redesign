import { ReviewPage, reviewMetadata } from "@/components/review-page"

export const revalidate = 600
export const metadata = reviewMetadata("en")

export default function Page() {
  return <ReviewPage locale="en" />
}
