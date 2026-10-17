import Link from "next/link"
import { Star } from "lucide-react"
import { getApprovedReviews, getReviewStats } from "@/lib/reviews"
import type { Locale } from "@/lib/tours"

const T = {
  en: {
    badge: "Client reviews",
    title: "What our travelers say",
    empty: "Travelled with us? Your review helps other travelers choose with confidence.",
    based: (n: number) => `based on ${n} verified review${n > 1 ? "s" : ""}`,
    cta: "Leave a review",
    link: "/review",
  },
  fr: {
    badge: "Avis clients",
    title: "Ce que disent nos voyageurs",
    empty: "Vous avez voyagé avec nous ? Votre avis aide d'autres voyageurs à choisir en confiance.",
    based: (n: number) => `sur ${n} avis vérifié${n > 1 ? "s" : ""}`,
    cta: "Laisser un avis",
    link: "/fr/avis",
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

        <div className="text-center mt-10">
          <Link
            href={t.link}
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
