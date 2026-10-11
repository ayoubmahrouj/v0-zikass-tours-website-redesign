import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Users, ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LanguageProvider } from "@/lib/language-context"

export const metadata: Metadata = {
  title: { absolute: "Imlil Atlas Mountains: Village, Altitude, Trekking & Day Trip | ZikassTours" },
  description: "Imlil village in the Atlas Mountains (1,740 m), 1h30 from Marrakech: altitude, Bureau des Guides, trekking routes, Toubkal and how to get there. Private day trip from 80€ per car.",
  keywords: [
    "Atlas Mountains hiking", "Imlil Morocco", "Toubkal trek", "Berber village tour",
    "Morocco trekking", "High Atlas", "Marrakech hiking", "Morocco adventure",
    "Atlas Mountains day trip", "Imlil excursion", "mountain tour Morocco"
  ],
  openGraph: {
    title: "Imlil Atlas Mountains: Village, Altitude, Trekking & Day Trip",
    description: "Trek through stunning Atlas Mountains and visit traditional Berber villages.",
    type: "article",
    locale: "en_US",
    images: [{ url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haut%20Atlas%20et%20Imlil%201-wla7Ea7HsgpZMeArvcPHLS50Qdn9zW.jpeg", width: 1200, height: 630, alt: "Atlas Mountains and Imlil village" }],
  },
}

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haut%20Atlas%20et%20Imlil%201-wla7Ea7HsgpZMeArvcPHLS50Qdn9zW.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haut%20Atlas%20et%20Imlil%202-weyetxMYFnOPZ320AZjP83mgjWasiR.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haut%20Atlas%20et%20Imlil%203-REROscKav4bKRZ5zspWEQwu8eMkBS3.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haut%20Atlas%20et%20Imlil%204-JrA8M2gLjsiJXhv6GRowUMEsLsxCJF.jpeg",
]

const imlilFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the altitude of Imlil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Imlil village is at about 1,740 m above sea level, at the foot of Mount Toubkal (4,167 m), the highest peak in North Africa."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Imlil from Marrakech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "About 65 km, around 1h30 by car via Tahannaout and Asni."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a guide in Imlil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not for easy walks around the village. To climb Toubkal you need a licensed mountain guide, which you can hire at the Bureau des Guides in Imlil."
      }
    },
    {
      "@type": "Question",
      "name": "Can I visit Imlil in one day from Marrakech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A private day trip with ZikassTours starts from 80€ per car (1-7 people), with pickup at your hotel or riad."
      }
    },
    {
      "@type": "Question",
      "name": "Is there snow in Imlil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Snow is possible from December to March, and the peaks around Imlil often stay white until spring. Bring warm clothes in winter."
      }
    }
  ]
}

const imlilFacts = [
  ["Altitude", "About 1,740 m"],
  ["Distance from Marrakech", "65 km, about 1h30 by car"],
  ["Highest peak nearby", "Mount Toubkal, 4,167 m"],
  ["Best months", "March to June, September to November"],
  ["Languages", "Tachelhit (Amazigh), Arabic, French"],
]

const imlilFaqList: [string, string][] = [
  [
    "What is the altitude of Imlil?",
    "Imlil village is at about 1,740 m above sea level, at the foot of Mount Toubkal (4,167 m), the highest peak in North Africa."
  ],
  [
    "How far is Imlil from Marrakech?",
    "About 65 km, around 1h30 by car via Tahannaout and Asni."
  ],
  [
    "Do I need a guide in Imlil?",
    "Not for easy walks around the village. To climb Toubkal you need a licensed mountain guide, which you can hire at the Bureau des Guides in Imlil."
  ],
  [
    "Can I visit Imlil in one day from Marrakech?",
    "Yes. A private day trip with ZikassTours starts from 80€ per car (1-7 people), with pickup at your hotel or riad."
  ],
  [
    "Is there snow in Imlil?",
    "Snow is possible from December to March, and the peaks around Imlil often stay white until spring. Bring warm clothes in winter."
  ]
]

export default function ImlilBlogPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="relative h-[60vh] min-h-[400px]">
            <Image src={images[0]} alt="Atlas Mountains panoramic view" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="container mx-auto">
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">Adventure</span>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                  Imlil & the Atlas Mountains: Village, Trekking and Toubkal Guide
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 hours</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 1.5 hours from Marrakech</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> All fitness levels</span>
                </div>
              </div>
            </div>
          </section>

          <article className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Discover the majestic <strong>High Atlas Mountains</strong> and the charming Berber village of <strong>Imlil</strong>. Located just 90 minutes from Marrakech, this is Morocco&apos;s premier destination for hiking, trekking, and experiencing authentic mountain culture.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image src={img} alt={`Atlas Mountains view ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Why Visit Imlil & the Atlas Mountains?</h2>
                  <p>
                    The High Atlas is home to <strong>Jebel Toubkal</strong>, North Africa&apos;s highest peak at 4,167 meters. While conquering Toubkal requires a multi-day trek, our day trip offers accessible hikes with breathtaking views of these legendary mountains.
                  </p>
                  <p>
                    For <strong>European and American tourists</strong> seeking adventure beyond the medinas, the Atlas Mountains provide an unforgettable contrast - cool mountain air, terraced valleys, and warm Berber hospitality.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Tour Highlights</h2>
                  <ul className="space-y-3">
                    {[
                      "Scenic mountain drive with panoramic viewpoints",
                      "Guided walk through Imlil village",
                      "Optional hike to waterfalls or viewpoints",
                      "Traditional Berber lunch in a local home",
                      "Fresh mint tea with mountain views",
                      "Visit to a Berber house museum",
                      "Photo opportunities at stunning vistas",
                      "English/French speaking driver-guide"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Berber Culture & Hospitality</h2>
                  <p>
                    The Berber people have lived in these mountains for thousands of years. A visit to Imlil offers authentic insight into their way of life - from the terraced agriculture on the hillsides to the traditional mud-brick houses and the famous Berber hospitality.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Best Time to Visit</h2>
                  <p>
                    <strong>Spring (March-May)</strong> and <strong>Autumn (September-November)</strong> offer the best hiking conditions. Summer is also popular, though afternoons can be warm. <strong>Winter</strong> brings snow to the higher peaks, creating magical scenery.
                  </p>
                </div>

                {/* Imlil key facts */}
              <section className="mt-12">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Imlil Village at a Glance</h2>
                <div className="overflow-hidden rounded-xl border border-border">
                  {imlilFacts.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 px-5 py-3 border-b border-border last:border-0 odd:bg-muted/40">
                      <span className="font-medium">{k}</span>
                      <span className="text-muted-foreground text-right">{v}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 prose prose-lg max-w-none">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Bureau des Guides d&apos;Imlil</h2>
                <p>
                  In the center of the village you will find the <strong>Bureau des Guides</strong>, the office of the local certified mountain guides. This is where you can hire a guide for a walk, a day hike or a Toubkal trek. A licensed guide is required to climb Toubkal, and for any long hike it is the safest choice: guides know the paths, the weather and the villages.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Imlil Trekking: Best Hikes</h2>
                <ul>
                  <li><strong>Easy (2-3 hours):</strong> walk from Imlil to the Berber village of Aroumd, with views of the valley and the Toubkal massif.</li>
                  <li><strong>Half day:</strong> climb to the Tizi n&apos;Mzik pass for a wide view over the High Atlas.</li>
                  <li><strong>Full day:</strong> loop through several Berber villages, with lunch and mint tea in a local house.</li>
                  <li><strong>2 days:</strong> Mount Toubkal summit (4,167 m), sleeping at the mountain refuge, with a licensed guide.</li>
                </ul>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">How to Get to Imlil from Marrakech</h2>
                <p>
                  The easiest way is a <strong>private car with driver</strong>: about 1h30 on a scenic road via Tahannaout and Asni, with stops at viewpoints on the way. Shared grand taxis also run to Asni and then to Imlil, but they leave only when full and you must return by yourself.
                </p>
              </section>

              {/* FAQ */}
              <section className="mt-12">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imlilFaq) }} />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Imlil FAQ</h2>
                <div className="space-y-3">
                  {imlilFaqList.map(([q, a]) => (
                    <details key={q} className="group rounded-xl border border-border p-5 open:bg-muted/40">
                      <summary className="cursor-pointer font-semibold list-none flex justify-between gap-4">
                        {q}
                        <span className="text-secondary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                      </summary>
                      <p className="mt-3 text-muted-foreground">{a}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Tour page link */}
              <Link href="/excursions/imlil-atlas-mountains-day-trip-from-marrakech" className="mt-10 flex items-center justify-between gap-4 p-6 rounded-2xl border-2 border-secondary hover:bg-secondary/10 transition-colors">
                <span>
                  <span className="block text-sm text-muted-foreground">Private car with driver · from 80€ per car (1-7 people)</span>
                  <span className="block font-serif text-xl font-bold text-foreground">Imlil & Atlas Mountains Day Trip from Marrakech</span>
                </span>
                <span className="text-secondary font-semibold whitespace-nowrap">See prices &rarr;</span>
              </Link>

              <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    Ready for Your Mountain Adventure?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                    Book your private Atlas Mountains excursion today and discover Morocco&apos;s stunning highlands.
                  </p>
                  <a
                    href="https://wa.me/212669994837?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Atlas%20Mountains%20and%20Imlil%20excursion"
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
