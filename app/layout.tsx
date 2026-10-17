import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL, WA_NUMBER, CONTACT_EMAIL } from '@/lib/tours'
import { ClickTracker } from '@/components/click-tracker'
import { ConsentAnalytics } from '@/components/consent-analytics'
import { RatingSchema } from '@/components/rating-schema'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap'
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap'
});

// Optional tracking: add these in Vercel > Settings > Environment Variables
const GA_ID = process.env.NEXT_PUBLIC_GA_ID // e.g. G-XXXXXXXXXX
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID // Microsoft Clarity project id
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID // e.g. 1234567890
const GSC_CODE = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Private Driver & Day Trips from Marrakech | ZikassTours',
    template: '%s | ZikassTours'
  },
  description: 'Private driver, airport transfers and day trips from Marrakech. Private car for 1-7 people, fixed prices, book on WhatsApp.',
  authors: [{ name: 'ZikassTours' }],
  creator: 'ZikassTours',
  publisher: 'ZikassTours',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'ZikassTours',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZikassTours - Private Driver & Excursions in Marrakech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(GSC_CODE ? { verification: { google: GSC_CODE } } : {}),
  category: 'travel',
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#0a5c36',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// Organization data shown to Google on every page
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      '@id': `${SITE_URL}/#organization`,
      name: 'ZikassTours',
      alternateName: 'Zikass Tours Marrakech',
      description: 'Private driver, airport transfers and private day trips from Marrakech',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.jpeg` },
      image: `${SITE_URL}/og-image.jpg`,
      telephone: `+${WA_NUMBER}`,
      email: CONTACT_EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Marrakech',
        addressRegion: 'Marrakech-Safi',
        addressCountry: 'MA',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 31.6295, longitude: -7.9811 },
      areaServed: [
        { '@type': 'City', name: 'Marrakech' },
        { '@type': 'City', name: 'Essaouira' },
        { '@type': 'City', name: 'Ouarzazate' },
        { '@type': 'Place', name: 'Agafay Desert' },
        { '@type': 'Place', name: 'Atlas Mountains' },
        { '@type': 'Place', name: 'Ourika Valley' },
        { '@type': 'Place', name: 'Ouzoud Waterfalls' },
      ],
      priceRange: '€€',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: ['https://www.instagram.com/zikasstours'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'ZikassTours',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['en', 'fr'],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "if(location.pathname==='/fr'||location.pathname.startsWith('/fr/'))document.documentElement.lang='fr'" }} />
        <RatingSchema />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <ClickTracker />
        <Analytics />
        <ConsentAnalytics gaId={GA_ID} pixelId={PIXEL_ID} clarityId={CLARITY_ID} />
      </body>
    </html>
  )
}
