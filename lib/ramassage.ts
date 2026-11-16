// Shared tours ("ramassage") from Marrakech - prices are per person.
import type { Locale } from "./tours"

export interface RamassageOption {
  id: string
  label: Record<Locale, string>
  price: number
  includes: Record<Locale, string[]>
  recommended?: boolean
}

export interface RamassageTrip {
  id: string
  name: Record<Locale, string>
  duration: Record<Locale, string>
  image: string
  intro: Record<Locale, string>
  options: RamassageOption[]
}

export const RAMASSAGE_PATH: Record<Locale, string> = {
  en: "/shared-tours-marrakech",
  fr: "/fr/ramassage-marrakech",
}

export const ramassageTrips: RamassageTrip[] = [
  {
    id: "ourika",
    name: { en: "Ourika Valley", fr: "Vallée de l'Ourika" },
    duration: { en: "6-7 hours", fr: "6-7 heures" },
    image: "/images/real/zikasstours-van-ourika-valley-red-cliffs.webp",
    intro: {
      en: "Berber villages, the river and the Setti Fatma waterfalls, only one hour from Marrakech.",
      fr: "Villages berbères, rivière et cascades de Setti Fatma, à une heure de Marrakech.",
    },
    options: [
      {
        id: "full",
        label: { en: "Transport + lunch + guide", fr: "Transport + déjeuner + guide" },
        price: 25,
        includes: {
          en: ["Shared transport from Marrakech", "Lunch by the river", "Local guide"],
          fr: ["Transport partagé depuis Marrakech", "Déjeuner au bord de la rivière", "Guide local"],
        },
        recommended: true,
      },
      {
        id: "transport",
        label: { en: "Transport only", fr: "Transport seul" },
        price: 15,
        includes: {
          en: ["Shared transport from Marrakech", "Free time in the valley"],
          fr: ["Transport partagé depuis Marrakech", "Temps libre dans la vallée"],
        },
      },
    ],
  },
  {
    id: "ouzoud",
    name: { en: "Ouzoud Waterfalls", fr: "Cascades d'Ouzoud" },
    duration: { en: "10 hours", fr: "10 heures" },
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouzoud%201-xRi6pLtsw9wofIQ1jOU5ZNXvpcudgi.jpeg",
    intro: {
      en: "The highest waterfalls in Morocco (110 m), the Barbary monkeys and a boat ride at the foot of the falls.",
      fr: "Les plus hautes cascades du Maroc (110 m), les singes magots et une balade en barque au pied des chutes.",
    },
    options: [
      {
        id: "full",
        label: { en: "Transport + boat + guide", fr: "Transport + barque + guide" },
        price: 30,
        includes: {
          en: ["Shared transport from Marrakech", "Boat ride at the waterfalls", "Local guide"],
          fr: ["Transport partagé depuis Marrakech", "Balade en barque aux cascades", "Guide local"],
        },
        recommended: true,
      },
      {
        id: "transport",
        label: { en: "Transport only", fr: "Transport seul" },
        price: 20,
        includes: {
          en: ["Shared transport from Marrakech", "Free time at the waterfalls"],
          fr: ["Transport partagé depuis Marrakech", "Temps libre aux cascades"],
        },
      },
    ],
  },
  {
    id: "essaouira",
    name: { en: "Essaouira", fr: "Essaouira" },
    duration: { en: "10-12 hours", fr: "10-12 heures" },
    image: "/images/real/essaouira-day-trip-clients-with-driver.webp",
    intro: {
      en: "The UNESCO medina, the fishing port and the Atlantic beach, with free time to explore at your own pace.",
      fr: "La médina UNESCO, le port de pêche et la plage atlantique, avec du temps libre pour flâner à votre rythme.",
    },
    options: [
      {
        id: "transport",
        label: { en: "Transport", fr: "Transport" },
        price: 25,
        includes: {
          en: ["Shared transport from Marrakech", "Free time in Essaouira"],
          fr: ["Transport partagé depuis Marrakech", "Temps libre à Essaouira"],
        },
      },
    ],
  },
]

export const ramassageFaq: Record<Locale, { q: string; a: string }[]> = {
  en: [
    {
      q: "Are the prices per person?",
      a: "Yes. All the prices on this page are per person, for shared transport. Children and adults pay the same price unless stated otherwise on WhatsApp.",
    },
    {
      q: "What does \"ramassage\" mean?",
      a: "Ramassage is a shared day trip: you travel in a comfortable van with a small group instead of a private car. This is why the price is much lower than a private tour.",
    },
    {
      q: "Where is the pickup in Marrakech?",
      a: "We pick you up at your hotel or riad in Marrakech. The exact time is confirmed on WhatsApp the day before departure.",
    },
    {
      q: "How do I book?",
      a: "Send us a WhatsApp message with the trip, the formula you want (transport only, or transport + lunch/boat + guide), the date and the number of people. We confirm availability right away.",
    },
  ],
  fr: [
    {
      q: "Les prix sont-ils par personne ?",
      a: "Oui. Tous les tarifs de cette page sont par personne, en transport partagé. Enfants et adultes paient le même prix, sauf indication contraire sur WhatsApp.",
    },
    {
      q: "Qu'est-ce que le ramassage ?",
      a: "Le ramassage est une excursion en transport partagé : vous voyagez dans un van confortable avec un petit groupe, au lieu d'une voiture privée. C'est ce qui permet un prix bien plus bas qu'une excursion privée.",
    },
    {
      q: "Où se fait la prise en charge à Marrakech ?",
      a: "Nous venons vous chercher à votre hôtel ou riad à Marrakech. L'heure exacte est confirmée sur WhatsApp la veille du départ.",
    },
    {
      q: "Comment réserver ?",
      a: "Envoyez-nous un message WhatsApp avec l'excursion, la formule choisie (transport seul, ou transport + déjeuner/barque + guide), la date et le nombre de personnes. Nous confirmons la disponibilité tout de suite.",
    },
  ],
}

export function ramassageWaMessage(locale: Locale, tripName: string, optionLabel: string, price: number) {
  return locale === "fr"
    ? `Bonjour, je souhaite réserver le ramassage ${tripName} - ${optionLabel} (${price}€/personne). Date : ... Nombre de personnes : ... Hôtel : ...`
    : `Hello, I would like to book the shared tour ${tripName} - ${optionLabel} (€${price}/person). Date: ... Number of people: ... Hotel: ...`
}
