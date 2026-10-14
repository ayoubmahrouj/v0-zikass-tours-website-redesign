// Price engine for private transfers between Moroccan cities.
// `price` = price you confirmed (fixed). Cities without `price` use the estimate formula
// (90 EUR + 0.30 EUR/km, rounded to 10) and are shown as "about X EUR, confirmed on WhatsApp".
// To change a price: edit `price` below, or add one for a city that has none.
import type { Locale } from "./tours"

export interface City {
  key: string
  en: string
  fr: string
  lat: number
  lng: number
  km?: number // road km from Marrakech
  price?: number // confirmed price per car (EUR) for Marrakech <-> city
}

export const MARRAKECH: City = { key: "marrakech", en: "Marrakech", fr: "Marrakech", lat: 31.6295, lng: -7.9811 }

export const CITIES: City[] = [
  MARRAKECH,
  { key: "casablanca-airport", en: "Casablanca Airport (CMN)", fr: "Aéroport Casablanca (CMN)", lat: 33.3675, lng: -7.5898, km: 265, price: 150 },
  { key: "casablanca", en: "Casablanca", fr: "Casablanca", lat: 33.5731, lng: -7.5898, km: 240, price: 170 },
  { key: "agadir", en: "Agadir", fr: "Agadir", lat: 30.4278, lng: -9.5981, km: 250, price: 170 },
  { key: "essaouira", en: "Essaouira", fr: "Essaouira", lat: 31.5085, lng: -9.7595, km: 175, price: 130 },
  { key: "ouarzazate", en: "Ouarzazate", fr: "Ouarzazate", lat: 30.9189, lng: -6.8934, km: 200, price: 130 },
  { key: "rabat", en: "Rabat", fr: "Rabat", lat: 34.0209, lng: -6.8416, km: 320, price: 190 },
  { key: "taghazout", en: "Taghazout", fr: "Taghazout", lat: 30.544, lng: -9.7092, km: 260 },
  { key: "zagora", en: "Zagora", fr: "Zagora", lat: 30.3324, lng: -5.8383, km: 350 },
  { key: "meknes", en: "Meknes", fr: "Meknès", lat: 33.8935, lng: -5.5473, km: 460 },
  { key: "fes", en: "Fes", fr: "Fès", lat: 34.0331, lng: -5.0003, km: 530 },
  { key: "merzouga", en: "Merzouga", fr: "Merzouga", lat: 31.0802, lng: -4.0133, km: 560 },
  { key: "chefchaouen", en: "Chefchaouen", fr: "Chefchaouen", lat: 35.1688, lng: -5.2636, km: 640 },
  { key: "tangier", en: "Tangier", fr: "Tanger", lat: 35.7595, lng: -5.834, km: 770 },
]

export const DESTINATIONS = CITIES.filter((c) => c.key !== "marrakech")
export const cityByKey = (k: string) => CITIES.find((c) => c.key === k)

function haversine(a: City, b: City) {
  const R = 6371
  const rad = (d: number) => (d * Math.PI) / 180
  const dLat = rad(b.lat - a.lat)
  const dLng = rad(b.lng - a.lng)
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(x))
}

export interface Quote {
  km: number
  price: number
  confirmed: boolean
  hours: number
}

export function quote(a: City, b: City): Quote | null {
  if (a.key === b.key) return null
  const other = a.key === "marrakech" ? b : b.key === "marrakech" ? a : null
  const km = other ? (other.km ?? Math.round(haversine(a, b) * 1.2)) : Math.round(haversine(a, b) * 1.2)
  const confirmed = Boolean(other?.price)
  const price = other?.price ?? Math.max(60, Math.round((90 + 0.3 * km) / 10) * 10)
  const hours = Math.max(0.5, Math.round((km / 70) * 2) / 2)
  return { km, price, confirmed, hours }
}

export function formatHours(h: number, _locale: Locale) {
  return `${Math.floor(h)}h${h % 1 ? "30" : ""}`
}

export const routeSlug = (c: City, l: Locale) => (l === "fr" ? `marrakech-vers-${c.key}` : `marrakech-to-${c.key}`)
export const routePath = (c: City, l: Locale) => (l === "fr" ? `/fr/transfert/${routeSlug(c, l)}` : `/transfer/${routeSlug(c, l)}`)
