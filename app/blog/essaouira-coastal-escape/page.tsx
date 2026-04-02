import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Users, ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LanguageProvider } from "@/lib/language-context"

export const metadata: Metadata = {
  title: "Essaouira Day Trip - Coastal Escape from Marrakech | ZikassTours",
  description: "Explore the charming coastal city of Essaouira, a UNESCO World Heritage site. Discover the historic medina, fishing port, beautiful beaches and fresh seafood. Perfect day trip from Marrakech for European & American tourists.",
  keywords: [
    "Essaouira day trip", "Essaouira from Marrakech", "Morocco coast", "Essaouira tour",
    "UNESCO Morocco", "Mogador", "Morocco beaches", "Essaouira medina",
    "Game of Thrones Morocco", "coastal Morocco", "best day trips Marrakech"
  ],
  openGraph: {
    title: "Essaouira - The Perfect Coastal Day Trip from Marrakech",
    description: "Discover the UNESCO-listed coastal city of Essaouira with its medina, port & beaches.",
    type: "article",
    locale: "en_US",
    images: [{ url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira%202-f846BdGpGEiRJ2RpV1SafNl71Wvt0D.jpeg", width: 1200, height: 630, alt: "Essaouira coastal view" }],
  },
}

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira%201-1o2U922jKgunuFd4xqcG1qp8v1SuFp.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira%202-f846BdGpGEiRJ2RpV1SafNl71Wvt0D.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira%203-q6GnDEH91L2FNismn6mpAD1vFjbF6h.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira%204-5OFUeGBUrv4Q5XlBHMjO17MU8X14Ff.jpeg",
]

export default function EssaouiraBlogPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="relative h-[60vh] min-h-[400px]">
            <Image src={images[1]} alt="Essaouira coastal fortress and waves" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="container mx-auto">
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">Coastal</span>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                  Essaouira: The Perfect Coastal Day Trip from Marrakech
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10-12 hours</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 2.5 hours from Marrakech</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> All group sizes</span>
                </div>
              </div>
            </div>
          </section>

          <article className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Escape to the Atlantic coast and discover <strong>Essaouira</strong>, a charming port city with a UNESCO-listed medina, stunning beaches, and a laid-back atmosphere that&apos;s worlds apart from bustling Marrakech. Known historically as Mogador, this coastal gem offers the perfect blend of history, culture, and seaside relaxation.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image src={img} alt={`Essaouira view ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Why Visit Essaouira?</h2>
                  <p>
                    Essaouira is unlike anywhere else in Morocco. The <strong>cool Atlantic breeze</strong> provides welcome relief from the heat, while the whitewashed buildings and blue boats create an Instagram-perfect setting at every turn.
                  </p>
                  <p>
                    For <strong>European and American tourists</strong>, Essaouira offers a more relaxed pace, world-class windsurfing, fresh seafood, and a vibrant arts scene that has attracted musicians and artists for decades.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Tour Highlights</h2>
                  <ul className="space-y-3">
                    {[
                      "Scenic drive through Argan tree forests",
                      "Explore the UNESCO-listed medina",
                      "Visit the historic fishing port",
                      "Fresh seafood lunch at the harbor",
                      "Walk along the beautiful beach",
                      "Browse artisan workshops and galleries",
                      "See the historic ramparts and cannons",
                      "Free time to explore at your own pace"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">A City of Culture & History</h2>
                  <p>
                    Essaouira has a rich history as a trading port and has been influenced by Portuguese, French, and Berber cultures. The medina, with its distinctive blue and white architecture, was designed by a French architect and is one of the best-preserved examples of 18th-century military architecture.
                  </p>
                  <p>
                    Music lovers will appreciate that Essaouira hosts the famous <strong>Gnaoua World Music Festival</strong> each summer, and the city has been a haven for artists including Jimi Hendrix and Bob Marley.
                  </p>
                </div>

                <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    Ready to Discover Essaouira?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                    Book your private Essaouira day trip today and experience Morocco&apos;s most charming coastal city.
                  </p>
                  <a
                    href="https://wa.me/212661377597?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Essaouira%20day%20trip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/90 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Book on WhatsApp
                  </a>
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
