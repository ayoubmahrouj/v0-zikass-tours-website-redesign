import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Users, ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LanguageProvider } from "@/lib/language-context"

export const metadata: Metadata = {
  title: "Ourika Valley Day Trip - Waterfalls & Berber Villages | ZikassTours",
  description: "Explore the stunning Ourika Valley, just 1 hour from Marrakech. Visit Setti-Fatma waterfalls, authentic Berber villages, and enjoy traditional Moroccan lunch by the river. Perfect day trip for European & American tourists.",
  keywords: [
    "Ourika Valley", "Ourika Valley tour", "Setti Fatma waterfalls", "Marrakech day trip",
    "Berber villages Morocco", "Atlas Mountains tour", "Morocco nature trip",
    "Ourika excursion", "Marrakech excursion", "best day trips Marrakech",
    "Morocco waterfall", "traditional Moroccan lunch", "Berber experience"
  ],
  openGraph: {
    title: "Ourika Valley Day Trip - Waterfalls & Berber Villages",
    description: "Discover the stunning Ourika Valley with waterfalls, Berber villages & traditional cuisine.",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ourika%201-nKn8FAwTcOOxozvIZIM3z5ft0ELoit.jpeg",
        width: 1200,
        height: 630,
        alt: "Ourika Valley waterfalls",
      },
    ],
  },
}

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ourika%201-nKn8FAwTcOOxozvIZIM3z5ft0ELoit.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ourika%202-iwdeUj9NfNjsDVe1ZV6jkpLWrtZEQy.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ourika%203-6EUF4VQgLJ2wTV2naeV3Xob64SrEGZ.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ourika%204-8NgjOt8qhcirKDjW3rRLN2flzQj2Ix.jpeg",
]

export default function OurikaBlogPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="relative h-[60vh] min-h-[400px]">
            <Image
              src={images[0]}
              alt="Ourika Valley waterfalls cascading through rocky terrain"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="container mx-auto">
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">
                  Nature & Culture
                </span>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                  Ourika Valley: A Refreshing Escape to the Atlas Mountains
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6-7 hours</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 1 hour from Marrakech</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> All group sizes</span>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <article className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Intro */}
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Escape the bustling streets of Marrakech and discover the <strong>Ourika Valley</strong>, one of the most beautiful and authentic destinations in the Atlas Mountains. Just one hour from the city, this lush valley offers a refreshing retreat with stunning waterfalls, traditional Berber villages, and unforgettable mountain scenery.
                  </p>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image src={img} alt={`Ourika Valley view ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Why Visit Ourika Valley?</h2>
                  <p>
                    The Ourika Valley is the <strong>perfect day trip</strong> for travelers who want to experience Morocco&apos;s natural beauty without venturing too far from Marrakech. The valley follows the Ourika River through terraced hillsides, traditional mud-brick villages, and eventually leads to the famous <strong>Setti-Fatma waterfalls</strong>.
                  </p>
                  <p>
                    For <strong>European and American tourists</strong>, this excursion offers an authentic glimpse into Berber culture and daily life in the Atlas Mountains, all within easy reach of Marrakech.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Highlights of Our Ourika Tour</h2>
                  <ul className="space-y-3">
                    {[
                      "Scenic drive through the Atlas Mountain foothills",
                      "Visit to traditional Berber villages",
                      "Hike to the Setti-Fatma waterfalls",
                      "Traditional Moroccan lunch by the river",
                      "Visit to an Argan oil cooperative",
                      "Photo stops at panoramic viewpoints",
                      "Private transport with English/French speaking driver"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">The Setti-Fatma Waterfalls</h2>
                  <p>
                    The highlight of the Ourika Valley is the series of <strong>seven waterfalls</strong> at Setti-Fatma. A moderate hike takes you to the first waterfall, which is accessible to most visitors. More adventurous travelers can continue to higher falls with stunning views of the valley below.
                  </p>
                  <p>
                    Along the way, you&apos;ll cross traditional rope bridges and pass through lush vegetation. Local guides are available at the trailhead for those who want assistance.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Riverside Dining Experience</h2>
                  <p>
                    One of the most memorable parts of visiting Ourika is enjoying a <strong>traditional Moroccan lunch</strong> at one of the riverside restaurants. Sit on colorful cushions with your feet dangling over the rushing water while enjoying tagine, couscous, and fresh mint tea.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Best Time to Visit</h2>
                  <p>
                    The best time to visit Ourika Valley is during <strong>spring (March-May)</strong> when the waterfalls are at their most powerful and the valley is lush and green. <strong>Autumn (September-November)</strong> is also excellent with pleasant temperatures and fewer crowds.
                  </p>
                </div>

                {/* CTA Box */}
                <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    Ready to Explore Ourika Valley?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                    Book your private Ourika Valley excursion today. Starting from just 60 euros per group.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://wa.me/212661377597?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Ourika%20Valley%20day%20trip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/90 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Book on WhatsApp
                    </a>
                    <span className="text-primary-foreground/60">or call +212 661 377 597</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  )
}
