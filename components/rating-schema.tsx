import { getReviewStats } from "@/lib/reviews"
import { SITE_URL } from "@/lib/tours"

// Adds the average rating of approved reviews to the business schema (Google, Bing, AI assistants).
export async function RatingSchema() {
  const { count, average } = await getReviewStats()
  if (count < 1) return null
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#organization`,
    name: "ZikassTours",
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: average,
      reviewCount: count,
      bestRating: 5,
      worstRating: 1,
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
