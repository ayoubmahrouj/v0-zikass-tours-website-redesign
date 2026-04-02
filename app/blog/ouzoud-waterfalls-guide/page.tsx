import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Users, ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LanguageProvider } from "@/lib/language-context"

export const metadata: Metadata = {
  title: "Ouzoud Waterfalls Guide - Morocco's Highest Waterfalls | ZikassTours",
  description: "Visit the spectacular Ouzoud Waterfalls, Morocco's highest at 110 meters. See wild Barbary macaques, enjoy boat rides, and experience breathtaking natural beauty. Perfect day trip from Marrakech for European & American tourists.",
  keywords: [
    "Ouzoud waterfalls", "Cascades d'Ouzoud", "Morocco waterfalls", "highest waterfall Morocco",
    "Marrakech day trip", "Ouzoud tour", "Barbary macaques Morocco", "Morocco nature",
    "best waterfalls Africa", "Ouzoud excursion", "things to do Marrakech"
  ],
  openGraph: {
    title: "Ouzoud Waterfalls - Morocco's Most Spectacular Natural Wonder",
    description: "Visit Morocco's highest waterfalls at 110 meters. Boat rides, wildlife & stunning scenery.",
    type: "article",
    locale: "en_US",
    images: [{ url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouzoud%202-YxD3VGMdx69zPeW0pmwNlPLsp39xRv.jpeg", width: 1200, height: 630, alt: "Ouzoud Waterfalls" }],
  },
}

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouzoud%201-xRi6pLtsw9wofIQ1jOU5ZNXvpcudgi.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouzoud%202-YxD3VGMdx69zPeW0pmwNlPLsp39xRv.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouzoud%203-gsHz9FQsnrOqhXRpnxGwAQ7X3qGOgx.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouzoud%204-rFurSUKGi3kdeBq09gbX8LOUfGXa0M.jpeg",
]

export default function OuzoudBlogPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="relative h-[60vh] min-h-[400px]">
            <Image src={images[1]} alt="Ouzoud Waterfalls panoramic view" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="container mx-auto">
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">Nature</span>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                  Ouzoud Waterfalls: Morocco&apos;s Most Spectacular Natural Wonder
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8-9 hours</span>
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
                    Standing at an impressive <strong>110 meters</strong>, the <strong>Ouzoud Waterfalls</strong> are the highest and most spectacular waterfalls in Morocco. Located about 2.5 hours from Marrakech, this natural wonder is a must-visit for anyone seeking breathtaking scenery and wildlife encounters.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image src={img} alt={`Ouzoud Waterfalls view ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Why Ouzoud is Worth the Journey</h2>
                  <p>
                    The Cascades d&apos;Ouzoud are not just waterfalls - they&apos;re a complete natural experience. The name &quot;Ouzoud&quot; means &quot;olive trees&quot; in Berber, and the area is surrounded by lush olive groves and natural pools perfect for swimming.
                  </p>
                  <p>
                    For <strong>European and American tourists</strong>, Ouzoud offers one of the best opportunities to witness Morocco&apos;s natural beauty away from the cities.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Tour Highlights</h2>
                  <ul className="space-y-3">
                    {[
                      "Views of Morocco's highest waterfalls (110 meters)",
                      "Wild Barbary macaques in their natural habitat",
                      "Traditional boat ride at the base of the falls",
                      "Swimming in natural pools (seasonal)",
                      "Traditional Moroccan lunch overlooking the falls",
                      "Scenic drive through Moroccan countryside",
                      "Private transport with experienced driver"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Meet the Barbary Macaques</h2>
                  <p>
                    One of the unique attractions of Ouzoud is the population of <strong>Barbary macaques</strong> that live around the falls. These playful monkeys are accustomed to visitors and can often be seen swinging through the trees or sitting by the pathways.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Best Time to Visit</h2>
                  <p>
                    <strong>Spring (March-May)</strong> is the best time when the waterfalls are at full power from winter rains. The area is green and the weather is perfect for hiking and swimming. <strong>Autumn</strong> is also excellent with comfortable temperatures.
                  </p>
                </div>

                <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    Ready to Visit Ouzoud Waterfalls?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                    Book your private Ouzoud excursion today. Starting from just 90 euros per group.
                  </p>
                  <a
                    href="https://wa.me/212661377597?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Ouzoud%20Waterfalls%20day%20trip"
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
