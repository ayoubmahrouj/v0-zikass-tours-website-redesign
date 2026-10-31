import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { getApprovedReviews, getReviewStats } from "@/lib/reviews"
import type { Locale } from "@/lib/tours"
import { GOOGLE_REVIEW_URL } from "@/lib/tours"

const T = {
  en: {
    badge: "Client reviews",
    title: "What our travelers say",
    empty: "Travelled with us? Your review helps other travelers choose with confidence.",
    based: (n: number) => `based on ${n} verified review${n > 1 ? "s" : ""}`,
    cta: "Leave a review",
    link: "/review",
    googleCta: "Review us on Google",
    guests: "Real travellers with Zakaria — Agafay desert and Essaouira",
  },
  fr: {
    badge: "Avis clients",
    title: "Ce que disent nos voyageurs",
    empty: "Vous avez voyagé avec nous ? Votre avis aide d'autres voyageurs à choisir en confiance.",
    based: (n: number) => `sur ${n} avis vérifié${n > 1 ? "s" : ""}`,
    cta: "Laisser un avis",
    link: "/fr/avis",
    googleCta: "Laisser un avis sur Google",
    guests: "De vrais voyageurs avec Zakaria — désert d'Agafay et Essaouira",
  },
}

const TRIP_WORDS: Record<string, string[]> = {
  agafay: ["agafay"],
  ourika: ["ourika"],
  ouzoud: ["ouzoud"],
  essaouira: ["essaouira"],
  imlil: ["imlil", "atlas"],
  ouarzazate: ["ouarzazate", "ben haddou", "ait ben", "aït ben"],
  airport: ["airport", "aéroport", "aeroport"],
}

function Stars({ n, className = "w-4 h-4" }: { n: number; className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`${className} ${i <= Math.round(n) ? "text-secondary fill-secondary" : "text-muted-foreground/30"}`} />
      ))}
    </div>
  )
}

export async function ReviewsSection({ locale = "en", limit = 6, tripId }: { locale?: Locale; limit?: number; tripId?: string }) {
  const t = T[locale]
  const words = tripId ? TRIP_WORDS[tripId] : undefined
  const [all, overall] = await Promise.all([getApprovedReviews(words ? 100 : limit), getReviewStats()])
  // On a trip page only show reviews of that trip
  const reviews = words ? all.filter((r) => words.some((w) => (r.trip ?? "").toLowerCase().includes(w))).slice(0, limit) : all
  const stats = words
    ? { count: reviews.length, average: reviews.length ? Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10 : 0 }
    : overall
  const date = (d: string) =>
    new Date(d).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", { month: "long", year: "numeric" })

  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted/40" aria-labelledby="reviews-title">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
            {t.badge}
          </span>
          <h2 id="reviews-title" className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
            {t.title}
          </h2>
          {stats.count > 0 ? (
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <span className="text-2xl font-bold text-foreground">{stats.average.toFixed(1)}</span>
              <Stars n={stats.average} className="w-5 h-5" />
              <span className="text-sm">{t.based(stats.count)}</span>
            </div>
          ) : (
            <p className="text-muted-foreground max-w-xl mx-auto">{t.empty}</p>
          )}
        </header>

        {reviews.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {reviews.map((r) => (
              <article key={r.id} className="rounded-2xl border bg-card overflow-hidden shadow-sm flex flex-col">
                {r.photo_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.photo_url} alt={`${r.name} - ${r.trip ?? "ZikassTours"}`} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover bg-muted" />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <Stars n={r.rating} />
                  <p className="mt-3 text-foreground/85 leading-relaxed whitespace-pre-line flex-1">{r.text}</p>
                  <footer className="mt-5 pt-4 border-t flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">{r.name}{r.country ? ` · ${r.country}` : ""}</p>
                      <p className="text-muted-foreground">{[r.trip, date(r.created_at)].filter(Boolean).join(" · ")}</p>
                    </div>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={t.link}
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {t.cta}
          </Link>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-input text-foreground font-semibold hover:bg-muted transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
              <path fill="#FBBC05" d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" />
            </svg>
            {t.googleCta}
          </a>
        </div>

        <figure className="mt-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/real/agafay-desert-clients-with-driver.webp"
                alt="Travellers with their private driver in the Agafay desert near Marrakech"
                fill
                sizes="(max-width: 768px) 50vw, 384px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/real/essaouira-day-trip-clients-with-driver.webp"
                alt="Travellers with their private driver on a day trip to Essaouira from Marrakech"
                fill
                sizes="(max-width: 768px) 50vw, 384px"
                className="object-cover"
              />
            </div>
          </div>
          <figcaption className="text-center text-xs text-muted-foreground mt-3">{t.guests}</figcaption>
        </figure>
      </div>
    </section>
  )
}
