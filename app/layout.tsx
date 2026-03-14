import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'ZikassTours - Private Driver & Excursions in Marrakech | Luxury Adventure',
  description: 'Premium transport services and unforgettable excursions from Marrakech. Private driver, desert tours, day trips to Essaouira, Ourika Valley, Agafay and more.',
  keywords: 'Marrakech, private driver, excursions, desert tours, Morocco, Agafay, Essaouira, Ourika, luxury travel',
  openGraph: {
    title: 'ZikassTours - Luxury Adventure in Marrakech',
    description: 'Premium transport services and unforgettable excursions from Marrakech',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    siteName: 'ZikassTours',
  },
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
}

export const viewport = {
  themeColor: '#0a5c36',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
