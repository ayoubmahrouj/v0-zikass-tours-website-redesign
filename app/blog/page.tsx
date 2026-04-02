import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { LanguageProvider } from "@/lib/language-context"

export const metadata: Metadata = {
  title: "Travel Blog - Best Day Trips & Excursions from Marrakech | ZikassTours",
  description: "Discover the best day trips from Marrakech: Agafay Desert, Essaouira, Ourika Valley, Ouzoud Waterfalls, Atlas Mountains & Ouarzazate. Expert travel guides for European & American tourists visiting Morocco.",
  keywords: [
    "Marrakech day trips", "Morocco excursions", "Agafay desert tour", "Essaouira day trip",
    "Ourika Valley excursion", "Ouzoud waterfalls Morocco", "Atlas Mountains hiking",
    "Ouarzazate tour", "Ait Ben Haddou", "Morocco travel guide", "best tours from Marrakech",
    "Morocco vacation", "European tourists Morocco", "American tourists Morocco",
    "things to do in Marrakech", "Morocco travel blog"
  ],
  openGraph: {
    title: "Travel Blog - Best Day Trips from Marrakech | ZikassTours",
    description: "Expert guides for the best excursions from Marrakech. Perfect for European & American tourists.",
    type: "website",
    locale: "en_US",
    alternateLocale: "fr_FR",
  },
}

const blogPosts = [
  {
    slug: "agafay-desert-experience",
    title: "Agafay Desert: The Perfect Desert Experience Near Marrakech",
    titleFr: "Désert d'Agafay : L'Expérience Désertique Parfaite près de Marrakech",
    excerpt: "Discover the magic of the Agafay Desert, just 45 minutes from Marrakech. Quad biking, camel rides, and dinner under the stars await you.",
    excerptFr: "Découvrez la magie du désert d'Agafay, à seulement 45 minutes de Marrakech. Quad, balade en dromadaire et dîner sous les étoiles vous attendent.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%204-6TVB2ytuBOTGbhxXC1cGv5IfQVN438.jpeg",
    duration: "4-5h",
    location: "Agafay, Morocco",
    category: "Desert Adventure",
  },
  {
    slug: "ourika-valley-day-trip",
    title: "Ourika Valley: A Refreshing Escape to the Atlas Mountains",
    titleFr: "Vallée de l'Ourika : Une Escapade Rafraîchissante dans l'Atlas",
    excerpt: "Experience the stunning Ourika Valley with its waterfalls, Berber villages, and traditional Moroccan cuisine by the river.",
    excerptFr: "Découvrez la magnifique vallée de l'Ourika avec ses cascades, villages berbères et cuisine marocaine traditionnelle au bord de la rivière.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ourika%201-nKn8FAwTcOOxozvIZIM3z5ft0ELoit.jpeg",
    duration: "6-7h",
    location: "Ourika Valley, Morocco",
    category: "Nature & Culture",
  },
  {
    slug: "ouzoud-waterfalls-guide",
    title: "Ouzoud Waterfalls: Morocco's Most Spectacular Natural Wonder",
    titleFr: "Cascades d'Ouzoud : La Merveille Naturelle du Maroc",
    excerpt: "Visit the highest waterfalls in Morocco at 110 meters. See wild Barbary macaques and enjoy a boat ride at the base of the falls.",
    excerptFr: "Visitez les plus hautes cascades du Maroc à 110 mètres. Observez les singes magots et profitez d'une balade en barque au pied des chutes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouzoud%202-YxD3VGMdx69zPeW0pmwNlPLsp39xRv.jpeg",
    duration: "8-9h",
    location: "Ouzoud, Morocco",
    category: "Nature",
  },
  {
    slug: "essaouira-coastal-escape",
    title: "Essaouira: The Perfect Coastal Day Trip from Marrakech",
    titleFr: "Essaouira : L'Escapade Côtière Parfaite depuis Marrakech",
    excerpt: "Explore the charming coastal city of Essaouira with its medina, fishing port, and beautiful beaches. A UNESCO World Heritage site.",
    excerptFr: "Explorez la charmante ville côtière d'Essaouira avec sa médina, son port de pêche et ses belles plages. Site classé UNESCO.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira%202-f846BdGpGEiRJ2RpV1SafNl71Wvt0D.jpeg",
    duration: "10-12h",
    location: "Essaouira, Morocco",
    category: "Coastal",
  },
  {
    slug: "atlas-mountains-imlil",
    title: "Atlas Mountains & Imlil: Hiking in Morocco's Highest Peaks",
    titleFr: "Haut Atlas & Imlil : Randonnée dans les Plus Hauts Sommets du Maroc",
    excerpt: "Trek through the stunning Atlas Mountains and visit the traditional Berber village of Imlil. Perfect for adventure seekers.",
    excerptFr: "Randonnez dans les magnifiques montagnes de l'Atlas et visitez le village berbère traditionnel d'Imlil. Parfait pour les aventuriers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haut%20Atlas%20et%20Imlil%201-wla7Ea7HsgpZMeArvcPHLS50Qdn9zW.jpeg",
    duration: "8h",
    location: "Imlil, Morocco",
    category: "Adventure",
  },
  {
    slug: "ouarzazate-ait-ben-haddou",
    title: "Ouarzazate & Ait Ben Haddou: Gateway to the Sahara",
    titleFr: "Ouarzazate & Aït Ben Haddou : Porte du Sahara",
    excerpt: "Visit the famous UNESCO-listed Kasbah of Ait Ben Haddou and explore the Hollywood of Morocco in Ouarzazate.",
    excerptFr: "Visitez la célèbre Kasbah d'Aït Ben Haddou classée UNESCO et explorez le Hollywood du Maroc à Ouarzazate.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouarzazate%201-PNTwunWyPnmq529bUtTaNUPpZyHNZW.jpeg",
    duration: "12h",
    location: "Ouarzazate, Morocco",
    category: "Culture & History",
  },
]

export default function BlogPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-primary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
                Travel Blog
              </span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
                Best Day Trips from Marrakech
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto">
                Expert travel guides for European and American tourists. Discover Morocco&apos;s most stunning destinations with our premium private driver service.
              </p>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article 
                    key={post.slug}
                    className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {post.location}
                          </span>
                        </div>
                        <h2 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Explore Morocco?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Book your private excursion today. Available 24/7 via WhatsApp for instant booking.
              </p>
              <a
                href="https://wa.me/212661377597?text=Hello%2C%20I%20would%20like%20to%20book%20an%20excursion%20from%20Marrakech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/90 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book on WhatsApp
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  )
}
