import Link from "next/link"

// Internal link from a blog article to the shared tours (ramassage) page.
// Shared tours are a cheaper, per-person alternative to the private tour described in the article.
export function SharedTourLink({ title, price }: { title: string; price: number }) {
  return (
    <Link
      href="/shared-tours-marrakech"
      className="mt-6 flex items-center justify-between gap-4 p-6 rounded-2xl border border-border hover:border-secondary hover:bg-secondary/5 transition-colors"
    >
      <span>
        <span className="block text-sm text-muted-foreground">Travelling on a budget?</span>
        <span className="block font-serif text-xl font-bold text-foreground">
          {title} - shared tour from &euro;{price} per person
        </span>
      </span>
      <span className="text-secondary-foreground/80 font-semibold whitespace-nowrap">See prices &rarr;</span>
    </Link>
  )
}
