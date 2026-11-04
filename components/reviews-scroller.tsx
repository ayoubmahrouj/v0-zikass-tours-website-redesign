"use client"

import { useRef, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Horizontal scroll-snap row for review cards: swipe on mobile, arrows on desktop.
export function ReviewsScroller({ children, prev, next }: { children: ReactNode; prev: string; next: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const go = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 280), behavior: "smooth" })
  }
  const btn =
    "hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border bg-background/95 text-primary shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"
  return (
    <div className="relative max-w-6xl mx-auto">
      <button type="button" aria-label={prev} onClick={() => go(-1)} className={`${btn} -left-5`}>
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*:first-child]:ml-auto [&>*:last-child]:mr-auto"
        tabIndex={0}
        role="region"
        aria-label="Reviews"
      >
        {children}
      </div>
      <button type="button" aria-label={next} onClick={() => go(1)} className={`${btn} -right-5`}>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
