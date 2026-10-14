import type { MetadataRoute } from "next"
import { SITE_URL, tours } from "@/lib/tours"
import { DESTINATIONS, routePath } from "@/lib/routes"

const blogPosts = [
  "agafay-desert-experience",
  "ourika-valley-day-trip",
  "ouzoud-waterfalls-guide",
  "essaouira-coastal-escape",
  "atlas-mountains-imlil",
  "ouarzazate-ait-ben-haddou",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pair = (en: string, fr: string, priority: number): MetadataRoute.Sitemap => {
    const languages = { en: SITE_URL + en, fr: SITE_URL + fr }
    return [
      { url: SITE_URL + en, lastModified, changeFrequency: "weekly", priority, alternates: { languages } },
      { url: SITE_URL + fr, lastModified, changeFrequency: "weekly", priority, alternates: { languages } },
    ]
  }

  return [
    ...pair("/", "/fr", 1),
    ...tours.flatMap((t) => pair(t.path.en, t.path.fr, 0.9)),
    ...DESTINATIONS.flatMap((c) => pair(routePath(c, "en"), routePath(c, "fr"), 0.8)),
    ...pair("/review", "/fr/avis", 0.5),
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    ...blogPosts.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
