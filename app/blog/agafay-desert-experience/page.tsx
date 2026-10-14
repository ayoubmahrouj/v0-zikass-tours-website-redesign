import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Users, ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LanguageProvider } from "@/lib/language-context"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.zikasstours.com/blog/agafay-desert-experience" },
  title: "Agafay Desert Experience - Best Desert Tour Near Marrakech",
  description: "Discover the Agafay Desert, just 45 minutes from Marrakech. Experience quad biking, camel rides, and magical dinner under the stars. A perfect half-day desert escape. Book your private tour today!",
  keywords: [
    "Agafay desert", "Agafay desert tour", "desert near Marrakech", "Marrakech desert experience",
    "quad biking Marrakech", "camel ride Morocco", "dinner under stars Morocco",
    "Agafay glamping", "Morocco desert tour", "best desert trip from Marrakech",
    "Agafay day trip", "Marrakech excursion", "Morocco adventure tour"
  ],
  openGraph: {
    title: "Agafay Desert Experience - Best Desert Tour Near Marrakech",
    description: "Experience the magic of Agafay Desert with quad biking, camel rides & dinner under the stars.",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%204-6TVB2ytuBOTGbhxXC1cGv5IfQVN438.jpeg",
        width: 1200,
        height: 630,
        alt: "Agafay Desert at sunset with tent and campfire",
      },
    ],
  },
}

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%201-xgUT88Q06ArclrCtCPYodpnOPQkZiA.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%202-WYCvFoltROTV48UKLq1577BL5KuYtR.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%203-g0MdGQTLdiIVneifekEUHMqyLGrQ4h.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%204-6TVB2ytuBOTGbhxXC1cGv5IfQVN438.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%205-weOoQawpTLizlvdazeYVxuynQqcHgK.jpeg",
]

export default function AgafayBlogPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="relative h-[60vh] min-h-[400px]">
            <Image
              src={images[3]}
              alt="Agafay Desert sunset with tent and campfire"
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
                  Desert Adventure
                </span>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                  Agafay Desert: The Perfect Desert Experience Near Marrakech
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4-5 hours</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 45 min from Marrakech</span>
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
                    Looking for the ultimate desert experience without the long drive to the Sahara? The <strong>Agafay Desert</strong> is your answer. Located just 45 minutes from Marrakech, this stunning rocky desert offers all the magic of a Moroccan desert adventure in a fraction of the time.
                  </p>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {images.slice(0, 3).map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image src={img} alt={`Agafay Desert view ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Why Choose Agafay Desert?</h2>
                  <p>
                    Unlike the sandy dunes of the Sahara, Agafay is a <strong>stone desert</strong> with dramatic lunar landscapes that have been featured in numerous Hollywood films. The terrain is dotted with rocky hills, dried riverbeds, and stunning views of the snow-capped Atlas Mountains in the distance.
                  </p>
                  <p>
                    For travelers with limited time in Morocco, Agafay offers the perfect compromise: an authentic desert experience that fits easily into a half-day or evening excursion from Marrakech.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">What&apos;s Included in Our Agafay Tour</h2>
                  <ul className="space-y-3">
                    {[
                      "Private pickup from your hotel or riad in Marrakech",
                      "Quad biking adventure through the desert (optional)",
                      "Camel ride at sunset with stunning photo opportunities",
                      "Traditional Moroccan dinner under the stars",
                      "Live Berber music and entertainment",
                      "Comfortable transport in air-conditioned vehicle",
                      "English and French speaking driver"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Best Time to Visit</h2>
                  <p>
                    The magic of Agafay truly comes alive at <strong>sunset</strong>. We recommend the afternoon/evening tour that allows you to witness the desert bathed in golden light, followed by dinner under a canopy of stars. The desert sky, free from light pollution, offers incredible stargazing opportunities.
                  </p>
                  <p>
                    The best months to visit are <strong>March to May</strong> and <strong>September to November</strong> when temperatures are comfortable. Summer evenings can be pleasant, while winters offer crisp, clear nights.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">Perfect for All Travelers</h2>
                  <p>
                    Whether you&apos;re a <strong>solo traveler</strong>, a <strong>romantic couple</strong>, a <strong>family with kids</strong>, or a <strong>group of friends</strong>, our Agafay experience is tailored to your needs. We offer private tours exclusively, ensuring a personalized experience without the crowds of large tour groups.
                  </p>
                </div>

                {/* Tour page link */}
              <Link href="/excursions/agafay-desert-tour-from-marrakech" className="mt-10 flex items-center justify-between gap-4 p-6 rounded-2xl border-2 border-secondary hover:bg-secondary/10 transition-colors">
                <span>
                  <span className="block text-sm text-muted-foreground">Prices, what's included & booking</span>
                  <span className="block font-serif text-xl font-bold text-foreground">Agafay Desert Tour - private car</span>
                </span>
                <span className="text-secondary font-semibold whitespace-nowrap">See the tour &rarr;</span>
              </Link>

              {/* CTA Box */}
                <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    Ready for Your Desert Adventure?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                    Book your private Agafay Desert experience today. Available 7 days a week with flexible departure times.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://wa.me/212669994837?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Agafay%20Desert%20experience"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/90 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Book on WhatsApp
                    </a>
                    <span className="text-primary-foreground/60">or call +212 669 994 837</span>
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
