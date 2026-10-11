import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { TourPage, tourMetadata } from "@/components/tour-page"
import { excursions, findBySlug, slugOf } from "@/lib/tours"

export const dynamicParams = false

export function generateStaticParams() {
  return excursions.map((t) => ({ slug: slugOf(t, "fr") }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tour = findBySlug(slug, "fr")
  return tour ? tourMetadata(tour, "fr") : {}
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = findBySlug(slug, "fr")
  if (!tour) notFound()
  return <TourPage tour={tour} locale="fr" />
}
