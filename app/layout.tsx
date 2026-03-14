import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zikasstours.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ZikassTours - Chauffeur Privé & Excursions à Marrakech | Luxury Adventure',
    template: '%s | ZikassTours'
  },
  description: 'Services de transport premium et excursions inoubliables au départ de Marrakech. Chauffeur privé, tours du désert, excursions à Essaouira, Vallée de l\'Ourika, Agafay, Cascades d\'Ouzoud, Ouarzazate et plus. Réservez sur WhatsApp.',
  keywords: [
    'Marrakech', 'chauffeur privé Marrakech', 'excursions Marrakech', 'tours désert Maroc',
    'Agafay desert', 'Essaouira day trip', 'Ourika Valley', 'Cascades Ouzoud',
    'Ouarzazate Ait Ben Haddou', 'Atlas Mountains Imlil', 'private driver Morocco',
    'luxury travel Marrakech', 'airport transfer Marrakech', 'Marrakech tours',
    'excursion Marrakech', 'transport privé Maroc', 'voyage luxe Marrakech'
  ],
  authors: [{ name: 'ZikassTours' }],
  creator: 'ZikassTours',
  publisher: 'ZikassTours',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'fr-FR': siteUrl,
      'en-US': `${siteUrl}?lang=en`,
    },
  },
  openGraph: {
    title: 'ZikassTours - Chauffeur Privé & Excursions de Luxe à Marrakech',
    description: 'Découvrez le Maroc avec style. Excursions premium au départ de Marrakech: Agafay, Essaouira, Ourika, Ouzoud, Ouarzazate. Chauffeur privé disponible 24/7.',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'ar_MA'],
    siteName: 'ZikassTours',
    url: siteUrl,
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'ZikassTours - Luxury Adventure Marrakech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZikassTours - Chauffeur Privé & Excursions à Marrakech',
    description: 'Services de transport premium et excursions inoubliables au départ de Marrakech.',
    images: ['/images/logo.jpeg'],
    creator: '@zikasstours',
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'travel',
  icons: {
    icon: [
      { url: '/images/logo.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/logo.jpeg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/images/logo.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/logo.jpeg' },
    ],
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a5c36' },
    { media: '(prefers-color-scheme: dark)', color: '#0a5c36' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      '@id': 'https://zikasstours.com/#organization',
      name: 'ZikassTours',
      alternateName: 'Zikass Tours Marrakech',
      description: 'Services de transport premium et excursions de luxe au départ de Marrakech',
      url: 'https://zikasstours.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zikasstours.com/images/logo.jpeg',
      },
      image: 'https://zikasstours.com/images/logo.jpeg',
      telephone: '+212661377597',
      email: 'zikasstours@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Marrakech',
        addressRegion: 'Marrakech-Safi',
        addressCountry: 'MA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.6295,
        longitude: -7.9811,
      },
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
      sameAs: [
        'https://www.instagram.com/zikasstours',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Excursions et Transferts',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'TouristTrip',
              name: 'Excursion Désert Agafay',
              description: 'Découvrez le désert d\'Agafay avec balade en quad, dromadaire et dîner sous les étoiles',
              touristType: 'Adventure travelers',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'TouristTrip',
              name: 'Excursion Essaouira',
              description: 'Journée à Essaouira, la perle de l\'Atlantique',
              touristType: 'Culture travelers',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'TouristTrip',
              name: 'Excursion Vallée de l\'Ourika',
              description: 'Découvrez les villages berbères et les cascades de Setti-Fatma',
              touristType: 'Nature lovers',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'TouristTrip',
              name: 'Excursion Cascades d\'Ouzoud',
              description: 'Les plus hautes cascades du Maroc avec singes magots',
              touristType: 'Nature lovers',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'TouristTrip',
              name: 'Excursion Ouarzazate & Ait Ben Haddou',
              description: 'Kasbah classée UNESCO et studios de cinéma',
              touristType: 'Culture travelers',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'TouristTrip',
              name: 'Excursion Haut Atlas & Imlil',
              description: 'Randonnée dans les montagnes de l\'Atlas et village berbère d\'Imlil',
              touristType: 'Adventure travelers',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://zikasstours.com/#website',
      url: 'https://zikasstours.com',
      name: 'ZikassTours',
      description: 'Chauffeur privé et excursions de luxe à Marrakech',
      publisher: {
        '@id': 'https://zikasstours.com/#organization',
      },
      inLanguage: ['fr-FR', 'en-US'],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://zikasstours.com/#webpage',
      url: 'https://zikasstours.com',
      name: 'ZikassTours - Chauffeur Privé & Excursions à Marrakech',
      isPartOf: {
        '@id': 'https://zikasstours.com/#website',
      },
      about: {
        '@id': 'https://zikasstours.com/#organization',
      },
      description: 'Services de transport premium et excursions inoubliables au départ de Marrakech',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment réserver une excursion avec ZikassTours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vous pouvez réserver directement via WhatsApp au +212661377597. Notre équipe est disponible 24/7 pour répondre à vos questions et confirmer votre réservation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelles sont les destinations disponibles depuis Marrakech?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nous proposons des excursions vers Agafay, Essaouira, la Vallée de l\'Ourika, les Cascades d\'Ouzoud, Ouarzazate & Ait Ben Haddou, et le Haut Atlas avec Imlil.',
          },
        },
        {
          '@type': 'Question',
          name: 'Les transferts aéroport sont-ils disponibles?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, nous assurons les transferts depuis/vers l\'aéroport de Marrakech Menara vers la Médina, Gueliz et toutes les destinations de la région.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
