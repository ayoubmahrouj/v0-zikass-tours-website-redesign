"use client"

import { useState, type FormEvent } from "react"
import { Star } from "lucide-react"
import type { Locale } from "@/lib/tours"

const TRIPS = {
  en: ["Agafay Desert", "Ourika Valley", "Ouzoud Waterfalls", "Essaouira", "High Atlas & Imlil", "Ouarzazate & Ait Ben Haddou", "Airport transfer", "Regional transfer", "Other"],
  fr: ["Désert d'Agafay", "Vallée de l'Ourika", "Cascades d'Ouzoud", "Essaouira", "Haut Atlas & Imlil", "Ouarzazate & Aït Ben Haddou", "Transfert aéroport", "Transfert régional", "Autre"],
}

const T = {
  en: {
    rating: "Your rating",
    name: "First name",
    country: "Country",
    trip: "Your trip",
    text: "Your experience",
    textPh: "How was your driver, the car, the day?",
    photo: "Add a photo of your trip (optional)",
    photoHint: "JPG, PNG or WEBP, max 5 MB",
    consent: "I agree that my first name, country, review and photo are published on zikasstours.com.",
    send: "Send my review",
    sending: "Sending...",
    thanks: "Thank you! Your review was received and will be published after a quick check.",
    tooBig: "The photo is larger than 5 MB.",
    pickRating: "Please choose a rating.",
  },
  fr: {
    rating: "Votre note",
    name: "Prénom",
    country: "Pays",
    trip: "Votre excursion",
    text: "Votre expérience",
    textPh: "Comment étaient le chauffeur, la voiture, la journée ?",
    photo: "Ajoutez une photo de votre excursion (optionnel)",
    photoHint: "JPG, PNG ou WEBP, 5 Mo max",
    consent: "J'accepte que mon prénom, mon pays, mon avis et ma photo soient publiés sur zikasstours.com.",
    send: "Envoyer mon avis",
    sending: "Envoi...",
    thanks: "Merci ! Votre avis a bien été reçu et sera publié après vérification.",
    tooBig: "La photo dépasse 5 Mo.",
    pickRating: "Merci de choisir une note.",
  },
}

export function ReviewForm({ locale }: { locale: Locale }) {
  const t = T[locale]
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [state, setState] = useState<"idle" | "sending" | "done">("idle")
  const [error, setError] = useState("")
  const field = "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    if (!rating) return setError(t.pickRating)
    const data = new FormData(e.currentTarget)
    const photo = data.get("photo") as File | null
    if (photo && photo.size > 5 * 1024 * 1024) return setError(t.tooBig)
    data.set("rating", String(rating))
    data.set("locale", locale)
    setState("sending")
    try {
      const res = await fetch("/api/reviews", { method: "POST", body: data })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || "Error")
      setState("done")
    } catch (err) {
      setError((err as Error).message)
      setState("idle")
    }
  }

  if (state === "done") {
    return <div className="rounded-2xl border border-green-600/30 bg-green-50 text-green-900 p-8 text-center text-lg">{t.thanks}</div>
  }

  return (
    <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-medium">{t.rating}</legend>
        <div className="flex gap-1 mt-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              aria-label={`${i}/5`}
              onClick={() => setRating(i)}
              onMouseEnter={() => setHover(i)}
              className="p-1"
            >
              <Star className={`w-9 h-9 transition-colors ${(hover || rating) >= i ? "text-secondary fill-secondary" : "text-muted-foreground/30"}`} />
            </button>
          ))}
        </div>
      </fieldset>
      <label className="text-sm font-medium">
        {t.name}
        <input name="name" required minLength={2} maxLength={60} className={field} />
      </label>
      <label className="text-sm font-medium">
        {t.country}
        <input name="country" maxLength={60} className={field} />
      </label>
      <label className="sm:col-span-2 text-sm font-medium">
        {t.trip}
        <select name="trip" className={field} defaultValue="">
          <option value="">—</option>
          {TRIPS[locale].map((x) => <option key={x}>{x}</option>)}
        </select>
      </label>
      <label className="sm:col-span-2 text-sm font-medium">
        {t.text}
        <textarea name="text" required minLength={10} maxLength={1500} rows={5} placeholder={t.textPh} className={field} />
      </label>
      <label className="sm:col-span-2 text-sm font-medium">
        {t.photo}
        <input name="photo" type="file" accept="image/jpeg,image/png,image/webp" className={field + " file:mr-3 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:px-3 file:py-1.5"} />
        <span className="block text-xs text-muted-foreground mt-1 font-normal">{t.photoHint}</span>
      </label>
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="sm:col-span-2 flex items-start gap-3 text-sm">
        <input type="checkbox" name="consent" required className="mt-1 w-4 h-4" />
        <span className="text-muted-foreground">{t.consent}</span>
      </label>
      {error && <p className="sm:col-span-2 text-sm text-red-600">{error}</p>}
      <button
        disabled={state === "sending"}
        className="sm:col-span-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 text-lg disabled:opacity-60"
      >
        {state === "sending" ? t.sending : t.send}
      </button>
    </form>
  )
}
