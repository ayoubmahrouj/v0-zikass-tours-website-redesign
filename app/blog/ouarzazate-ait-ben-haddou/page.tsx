import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Users, ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LanguageProvider } from "@/lib/language-context"

export const metadata: Metadata = {
  title: "Ouarzazate & Ait Ben Haddou Tour - Gateway to the Sahara | ZikassTours",
  description: "Visit the UNESCO World Heritage Kasbah of Ait Ben Haddou and explore Ouarzazate, Morocco's Hollywood. See where Game of Thrones, Gladiator and more were filmed. Epic day trip for European & American tourists.",
  keywords: [
    "Ait Ben Haddou", "Ouarzazate tour", "UNESCO Morocco", "Game of Thrones Morocco",
    "Gladiator filming location", "Morocco film studios", "Kasbah Morocco",
    "Sahara gateway", "Morocco Hollywood", "best day trips Marrakech"
  ],
  openGraph: {
    title: "Ouarzazate & Ait Ben Haddou - Gateway to the Sahara",
    description: "Visit the UNESCO Kasbah of Ait Ben Haddou and Morocco's Hollywood.",
    type: "article",
    locale: "en_US",
    images: [{ url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouarzazate%201-PNTwunWyPnmq529bUtTaNUPpZyHNZW.jpeg", width: 1200, height: 630, alt: "Ait Ben Haddou Kasbah" }],
  },
}

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouarzazate%201-PNTwunWyPnmq529bUtTaNUPpZyHNZW.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouarzazate%202-7cKdN6QuRJJbo9ARYLd4GRmL0OUgCz.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouarzazate%203-4esDgX3C74lXW80OKsebVvEsjsoJ9V.jpeg",
]

export default function OuarzazateBlogPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="relative h-[60vh] min-h-[400px]">
            <Image src={images[0]} alt="Ait Ben Haddou Kasbah UNESCO site" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="container mx-auto">
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">Culture & History</span>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                  Ouarzazate & Ait Ben Haddou: Gateway to the Sahara
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 hours</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 4 hours from Marrakech</span>
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
                    Journey across the High Atlas Mountains to discover <strong>Ait Ben Haddou</strong>, a UNESCO World Heritage site and one of Morocco&apos;s most iconic landmarks. Combined with a visit to <strong>Ouarzazate</strong>, Morocco&apos;s film capital, this is an epic day trip that takes you to the gateway of the Sahara Desert.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-12">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image src={img} alt={`Ouarzazate view ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">A UNESCO World Heritage Site</h2>
                  <p>
                    <strong>Ait Ben Haddou</strong> is a stunning example of traditional earthen architecture. This fortified village (ksar) has been inhabited for centuries and represents the finest example of Moroccan kasbahs. Its dramatic appearance has made it a favorite location for filmmakers from around the world.
                  </p>
                  <p>
                    For <strong>European and American tourists</strong>, especially film enthusiasts, walking through Ait Ben Haddou is like stepping onto a movie set - because it literally is one!
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Famous Films Shot Here</h2>
                  <ul className="space-y-3">
                    {[
                      "Game of Thrones (Yunkai & Pentos)",
                      "Gladiator",
                      "Lawrence of Arabia",
                      "The Mummy",
                      "Prince of Persia",
                      "Kingdom of Heaven",
                      "Babel",
                      "And many more..."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">The Journey Over the Atlas</h2>
                  <p>
                    The drive to Ouarzazate is an adventure in itself. You&apos;ll cross the <strong>Tizi n&apos;Tichka pass</strong> at 2,260 meters, one of the highest in North Africa. The road winds through spectacular mountain scenery with stops at panoramic viewpoints.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Ouarzazate - Morocco&apos;s Hollywood</h2>
                  <p>
                    Ouarzazate is home to <strong>Atlas Studios</strong>, one of the world&apos;s largest film studios. The city&apos;s dramatic landscapes and year-round sunshine have attracted filmmakers for decades. An optional visit to the studios lets you see sets from famous productions.
                  </p>
                </div>

                <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    Ready for an Epic Adventure?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                    Book your private Ouarzazate & Ait Ben Haddou excursion today. An unforgettable 12-hour journey through Morocco&apos;s most dramatic landscapes.
                  </p>
                  <a
                    href="https://wa.me/212661377597?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Ouarzazate%20and%20Ait%20Ben%20Haddou%20excursion"
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
