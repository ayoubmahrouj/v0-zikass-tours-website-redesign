"use client"

import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    id: 1,
    nameKey: "testimonial.1.name",
    locationKey: "testimonial.1.location",
    textKey: "testimonial.1.text",
    rating: 5,
    excursion: "Agafay",
  },
  {
    id: 2,
    nameKey: "testimonial.2.name",
    locationKey: "testimonial.2.location",
    textKey: "testimonial.2.text",
    rating: 5,
    excursion: "Essaouira",
  },
  {
    id: 3,
    nameKey: "testimonial.3.name",
    locationKey: "testimonial.3.location",
    textKey: "testimonial.3.text",
    rating: 5,
    excursion: "Ourika",
  },
  {
    id: 4,
    nameKey: "testimonial.4.name",
    locationKey: "testimonial.4.location",
    textKey: "testimonial.4.text",
    rating: 5,
    excursion: "Ouzoud",
  },
  {
    id: 5,
    nameKey: "testimonial.5.name",
    locationKey: "testimonial.5.location",
    textKey: "testimonial.5.text",
    rating: 5,
    excursion: "Ouarzazate",
  },
  {
    id: 6,
    nameKey: "testimonial.6.name",
    locationKey: "testimonial.6.location",
    textKey: "testimonial.6.text",
    rating: 5,
    excursion: "Imlil",
  },
]

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section 
      id="testimonials" 
      className="py-20 md:py-32 bg-muted/50"
      aria-labelledby="testimonials-title"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
            {t("testimonials.badge")}
          </span>
          <h2 
            id="testimonials-title"
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <article 
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-secondary fill-secondary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {t(testimonial.textKey)}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {t(testimonial.nameKey).charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t(testimonial.nameKey)}</p>
                  <p className="text-sm text-muted-foreground">{t(testimonial.locationKey)}</p>
                </div>
              </div>

              {/* Excursion Badge */}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                  {testimonial.excursion}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
