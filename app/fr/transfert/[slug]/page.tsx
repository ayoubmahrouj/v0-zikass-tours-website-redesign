export const revalidate = 3600
import { notFound } from "next/navigation"
import { RoutePage, routeMetadata } from "@/components/route-page"
import { DESTINATIONS, cityByKey } from "@/lib/routes"

const PRE = "marrakech-vers-"
export const dynamicParams = false
export function generateStaticParams() {
  return DESTINATIONS.map((c) => ({ slug: PRE + c.key }))
}
const find = (slug: string) => (slug.startsWith(PRE) ? cityByKey(slug.slice(PRE.length)) : undefined)

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const c = find((await params).slug)
  return c ? routeMetadata(c, "fr") : {}
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const c = find((await params).slug)
  if (!c || c.key === "marrakech") notFound()
  return <RoutePage city={c} locale="fr" />
}
