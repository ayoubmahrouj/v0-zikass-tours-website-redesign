import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zikasstours.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}#excursions`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}#tarifs`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}#contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Destination-specific URLs for better SEO
    {
      url: `${siteUrl}?destination=agafay`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}?destination=essaouira`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}?destination=ourika`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}?destination=ouzoud`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}?destination=ouarzazate`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}?destination=imlil`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Blog pages
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog/agafay-desert-experience`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/ourika-valley-day-trip`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/ouzoud-waterfalls-guide`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/essaouira-coastal-escape`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/atlas-mountains-imlil`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/ouarzazate-ait-ben-haddou`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
