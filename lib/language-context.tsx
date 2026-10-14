"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.excursions": "Excursions",
    "nav.tarifs": "Tarifs",
    "nav.blog": "Blog",
    "nav.reviews": "Avis",
    "nav.contact": "Contact",
    "nav.reserve": "Réserver sur WhatsApp",
    
    // Hero
    "hero.title": "Chauffeur Privé & Excursions depuis Marrakech",
    "hero.subtitle": "Transferts aéroport et excursions privées : Agafay, Ourika, Imlil, Essaouira, Ouzoud. Prise en charge à votre hôtel, prix par voiture, annulation gratuite jusqu'à 24h.",
    "hero.cta.excursions": "Voir les Excursions",
    "hero.cta.whatsapp": "Contacter sur WhatsApp",
    "hero.cta.call": "Appeler maintenant",
    
    // Destinations Section
    "destinations.badge": "Nos Destinations",
    "destinations.title": "Excursions Populaires",
    "destinations.subtitle": "Découvrez les merveilles du Maroc avec nos excursions privées",
    "destinations.reserve": "Réserver sur WhatsApp",
    "destinations.contact": "Contacter sur WhatsApp",
    "destinations.readmore": "En savoir plus",
    
    // Destination: Agafay
    "destination.agafay.name": "Désert d'Agafay",
    "destination.agafay.desc": "Situé à quelques kilomètres de Marrakech, le désert d'Agafay est une destination idéale pour vivre une expérience unique au cœur d'un paysage naturel exceptionnel. Les visiteurs peuvent profiter de nombreuses activités telles que les balades à dos de chameau, le quad, ou encore des dîners traditionnels sous les étoiles. Ce lieu magique combine aventure, détente et découverte de la culture marocaine. Une expérience inoubliable pour tous ceux qui souhaitent explorer la beauté du désert près de Marrakech.",
    
    // Destination: Essaouira
    "destination.essaouira.name": "Essaouira",
    "destination.essaouira.desc": "Située sur la côte Atlantique, Essaouira est une destination idéale pour découvrir l'histoire, la culture et la beauté maritime du Maroc. Les visiteurs peuvent flâner dans la médina classée au patrimoine mondial de l'UNESCO, visiter le port animé et profiter de la plage.",
    
    // Destination: Ouarzazate
    "destination.ouarzazate.name": "Ouarzazate & Aït Ben Haddou",
    "destination.ouarzazate.desc": "Partez à la découverte de la porte du désert avec notre excursion à Ouarzazate et la kasbah d'Aït Ben Haddou classée au patrimoine mondial de l'UNESCO. Ce site historique a servi de décor à de nombreux films célèbres et offre des paysages cinématographiques uniques.",
    
    // Destination: Imlil / High Atlas
    "destination.imlil.name": "Haut Atlas & Imlil",
    "destination.imlil.desc": "Partez pour une aventure inoubliable au cœur des montagnes du Haut Atlas avec notre excursion à Imlil au pied du mont Toubkal. Découvrez les villages berbères traditionnels, les paysages montagneux spectaculaires et la culture authentique de cette région préservée.",
    
    // Destination: Ourika
    "destination.ourika.name": "Vallée de l'Ourika",
    "destination.ourika.desc": "Située à environ une heure de Marrakech, la vallée de l'Ourika est l'une des destinations les plus belles et les plus authentiques de la région. Cette excursion d'une journée vous permet de découvrir les paysages magnifiques de l'Atlas, les villages berbères traditionnels et la nature préservée. Les visiteurs peuvent profiter d'une promenade vers les cascades de Setti-Fatma, se détendre au bord de la rivière et goûter à la cuisine marocaine locale. Une escapade idéale pour vivre une expérience naturelle et culturelle inoubliable près de Marrakech.",
    
    // Destination: Ouzoud
    "destination.ouzoud.name": "Cascades d'Ouzoud",
    "destination.ouzoud.desc": "Les cascades d'Ouzoud sont les plus hautes chutes d'eau du Maroc, avec une hauteur de 110 mètres. Situées à environ 2h30 de Marrakech, elles offrent un spectacle naturel époustouflant. Vous pourrez observer les singes magots dans leur habitat naturel, faire une balade en barque au pied des cascades et profiter d'un déjeuner dans les restaurants traditionnels avec vue sur les chutes.",
    
    // WhatsApp messages - Reserve
    "wa.agafay.reserve": "Bonjour, je souhaite réserver l'excursion Agafay depuis votre site.",
    "wa.essaouira.reserve": "Bonjour, je souhaite réserver l'excursion Essaouira depuis votre site.",
    "wa.ouarzazate.reserve": "Bonjour, je souhaite réserver l'excursion Ouarzazate & Aït Ben Haddou depuis votre site.",
    "wa.imlil.reserve": "Bonjour, je souhaite réserver l'excursion Haut Atlas & Imlil depuis votre site.",
    "wa.ourika.reserve": "Bonjour, je souhaite réserver l'excursion Vallée de l'Ourika depuis votre site.",
    "wa.ouzoud.reserve": "Bonjour, je souhaite réserver l'excursion Cascades d'Ouzoud depuis votre site.",
    
    // WhatsApp messages - Contact
    "wa.agafay.contact": "Bonjour, je souhaite avoir plus d'informations sur l'excursion Agafay.",
    "wa.essaouira.contact": "Bonjour, je souhaite avoir plus d'informations sur l'excursion Essaouira.",
    "wa.ouarzazate.contact": "Bonjour, je souhaite avoir plus d'informations sur l'excursion Ouarzazate & Aït Ben Haddou.",
    "wa.imlil.contact": "Bonjour, je souhaite avoir plus d'informations sur l'excursion Haut Atlas & Imlil.",
    "wa.ourika.contact": "Bonjour, je souhaite avoir plus d'informations sur l'excursion Vallée de l'Ourika.",
    "wa.ouzoud.contact": "Bonjour, je souhaite avoir plus d'informations sur l'excursion Cascades d'Ouzoud.",
    
    // WhatsApp messages - Tarifs
    "wa.tarif.airport": "Bonjour, je souhaite réserver un transfert aéroport depuis votre site.",
    "wa.tarif.regional": "Bonjour, je souhaite réserver un transfert régional depuis votre site.",
    "wa.tarif.excursion": "Bonjour, je souhaite réserver une excursion depuis votre site.",
    
    // General WhatsApp
    "wa.general": "Bonjour, je souhaite obtenir des informations sur vos services depuis votre site.",
    
    // Tarifs section
    "tarifs.badge": "Nos Tarifs",
    "tarifs.title": "Nos Tarifs Détaillés",
    "tarifs.subtitle": "Des offres transparentes adaptées à la taille de votre groupe",
    "tarifs.from": "À partir de",
    "tarifs.service": "Service",
    "tarifs.reserve": "Réserver",
    "tarifs.airport.title": "Aéroport & Transferts",
    "tarifs.airport.medina": "Aéroport / Medina ou Gueliz",
    "tarifs.airport.agafay_soiree": "Agafay Soirée",
    "tarifs.excursions.imlil": "Imlil / Haut Atlas",
    "tarifs.airport.agafay": "Transfert Agafay (aller)",
    "tarifs.excursions.agafay": "Agafay (coucher de soleil)",
    "tarifs.excursions.3vallees": "3 Vallées de l'Atlas",
    "tarifs.excursions.essaouira": "Essaouira (journée)",
    "tarifs.excursions.ouarzazate": "Ouarzazate & Aït Ben Haddou",
    "tarifs.regional.title": "Transferts Régionaux",
    "tarifs.regional.3vallees": "3 Vallées",
    "tarifs.excursions.title": "Excursions & Tours",
    
    
    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Nous sommes à votre disposition 24h/24, 7j/7 depuis Marrakech",
    "contact.location": "Marrakech, Maroc",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Téléphone",
    "contact.email": "Email",
    
    // Footer
    "footer.tagline": "Chauffeur privé, transferts aéroport et excursions privées depuis Marrakech. Prise en charge à votre hôtel ou riad, paiement sur place.",
    "footer.rights": "Tous droits réservés",
    "footer.quicklinks": "Liens rapides",
    "footer.destinations": "Destinations",
    "footer.contact": "Contact",
    
    // Trust badges
    "trust.experience": "ans d'expérience",
    "trust.clients": "personnes par voiture privée",
    "trust.available": "Assistance WhatsApp",
    "trust.safe": "Privé : jamais de groupe partagé",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.excursions": "Excursions",
    "nav.tarifs": "Prices",
    "nav.blog": "Blog",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.reserve": "Reserve on WhatsApp",
    
    // Hero
    "hero.title": "Private Driver & Day Trips from Marrakech",
    "hero.subtitle": "Airport transfers and private day trips: Agafay, Ourika, Imlil, Essaouira, Ouzoud. Hotel pickup, price per car, free cancellation up to 24h.",
    "hero.cta.excursions": "View Excursions",
    "hero.cta.whatsapp": "Contact on WhatsApp",
    "hero.cta.call": "Call now",
    
    // Destinations Section
    "destinations.badge": "Our Destinations",
    "destinations.title": "Popular Excursions",
    "destinations.subtitle": "Discover the wonders of Morocco with our private excursions",
    "destinations.reserve": "Reserve on WhatsApp",
    "destinations.contact": "Contact on WhatsApp",
    "destinations.readmore": "Read more",
    
    // Destination: Agafay
    "destination.agafay.name": "Agafay Desert",
    "destination.agafay.desc": "Located just a few kilometers from Marrakech, the Agafay desert is the perfect destination for a unique experience surrounded by stunning natural landscapes. Visitors can enjoy activities such as camel rides, quad biking, and traditional dinners under the stars. This magical place combines adventure, relaxation and Moroccan culture for an unforgettable desert experience near Marrakech.",
    
    // Destination: Essaouira
    "destination.essaouira.name": "Essaouira",
    "destination.essaouira.desc": "Located on the Atlantic coast, Essaouira is a perfect destination to discover Morocco's history, culture and seaside beauty. Visitors can explore the UNESCO-listed medina, visit the vibrant fishing port and enjoy the beach.",
    
    // Destination: Ouarzazate
    "destination.ouarzazate.name": "Ouarzazate & Ait Ben Haddou",
    "destination.ouarzazate.desc": "Discover the gateway to the desert with our Ouarzazate and Ait Ben Haddou excursion, a UNESCO World Heritage site famous for its historic kasbah and cinematic landscapes. This historic site has served as a backdrop for many famous films.",
    
    // Destination: Imlil / High Atlas
    "destination.imlil.name": "High Atlas & Imlil",
    "destination.imlil.desc": "Enjoy an unforgettable adventure in the High Atlas Mountains with our excursion to Imlil at the foot of Mount Toubkal. Discover traditional Berber villages, spectacular mountain landscapes and the authentic culture of this preserved region.",
    
    // Destination: Ourika
    "destination.ourika.name": "Ourika Valley",
    "destination.ourika.desc": "Located about an hour from Marrakech, the Ourika Valley is one of the most beautiful and authentic destinations in the region. This day trip takes you through stunning Atlas landscapes, traditional Berber villages and unspoiled nature. Visitors can enjoy a walk to the Setti-Fatma waterfalls, relax by the river and taste local Moroccan cuisine. An ideal escape for an unforgettable natural and cultural experience near Marrakech.",
    
    // Destination: Ouzoud
    "destination.ouzoud.name": "Ouzoud Waterfalls",
    "destination.ouzoud.desc": "The Ouzoud waterfalls are the highest in Morocco, with a height of 110 meters. Located about 2.5 hours from Marrakech, they offer a breathtaking natural spectacle. You can observe Barbary macaques in their natural habitat, take a boat ride at the foot of the falls and enjoy lunch at traditional restaurants overlooking the cascades.",
    
    // WhatsApp messages - Reserve
    "wa.agafay.reserve": "Hello, I would like to book the Agafay excursion from your website.",
    "wa.essaouira.reserve": "Hello, I would like to book the Essaouira excursion from your website.",
    "wa.ouarzazate.reserve": "Hello, I would like to book the Ouarzazate & Ait Ben Haddou excursion from your website.",
    "wa.imlil.reserve": "Hello, I would like to book the High Atlas & Imlil excursion from your website.",
    "wa.ourika.reserve": "Hello, I would like to book the Ourika Valley excursion from your website.",
    "wa.ouzoud.reserve": "Hello, I would like to book the Ouzoud Waterfalls excursion from your website.",
    
    // WhatsApp messages - Contact
    "wa.agafay.contact": "Hello, I would like more information about the Agafay excursion.",
    "wa.essaouira.contact": "Hello, I would like more information about the Essaouira excursion.",
    "wa.ouarzazate.contact": "Hello, I would like more information about the Ouarzazate & Ait Ben Haddou excursion.",
    "wa.imlil.contact": "Hello, I would like more information about the High Atlas & Imlil excursion.",
    "wa.ourika.contact": "Hello, I would like more information about the Ourika Valley excursion.",
    "wa.ouzoud.contact": "Hello, I would like more information about the Ouzoud Waterfalls excursion.",
    
    // WhatsApp messages - Tarifs
    "wa.tarif.airport": "Hello, I would like to book an airport transfer from your website.",
    "wa.tarif.regional": "Hello, I would like to book a regional transfer from your website.",
    "wa.tarif.excursion": "Hello, I would like to book an excursion from your website.",
    
    // General WhatsApp
    "wa.general": "Hello, I would like to get information about your services from your website.",
    
    // Tarifs section
    "tarifs.badge": "Our Prices",
    "tarifs.title": "Detailed Pricing",
    "tarifs.subtitle": "Transparent offers adapted to your group size",
    "tarifs.from": "Starting from",
    "tarifs.service": "Service",
    "tarifs.reserve": "Reserve",
    "tarifs.airport.title": "Airport & Transfers",
    "tarifs.airport.medina": "Airport / Medina or Gueliz",
    "tarifs.airport.agafay_soiree": "Agafay Evening",
    "tarifs.excursions.imlil": "Imlil / High Atlas",
    "tarifs.airport.agafay": "Agafay transfer (one way)",
    "tarifs.excursions.agafay": "Agafay (sunset)",
    "tarifs.excursions.3vallees": "Atlas 3 Valleys",
    "tarifs.excursions.essaouira": "Essaouira (day trip)",
    "tarifs.excursions.ouarzazate": "Ouarzazate & Ait Ben Haddou",
    "tarifs.regional.title": "Regional Transfers",
    "tarifs.regional.3vallees": "3 Valleys",
    "tarifs.excursions.title": "Excursions & Tours",
    
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We are at your service 24/7 from Marrakech",
    "contact.location": "Marrakech, Morocco",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Phone",
    "contact.email": "Email",
    
    // Footer
    "footer.tagline": "Private driver, airport transfers and private day trips from Marrakech. Pickup at your hotel or riad, pay on arrival.",
    "footer.rights": "All rights reserved",
    "footer.quicklinks": "Quick Links",
    "footer.destinations": "Destinations",
    "footer.contact": "Contact",
    
    // Trust badges
    "trust.experience": "years of experience",
    "trust.clients": "people per private car",
    "trust.available": "WhatsApp support",
    "trust.safe": "Private: never a shared group",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLanguage }: { children: ReactNode; initialLanguage?: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage ?? "en")

  const setLanguage = (lang: Language) => {
    try { sessionStorage.setItem("zt-lang", lang) } catch {}
    setLanguageState(lang)
  }

  // Pages under /fr pass initialLanguage="fr" (server-rendered in French for Google).
  // Elsewhere: keep the visitor's choice, else French for French-language browsers.
  useEffect(() => {
    if (initialLanguage) return
    let saved: string | null = null
    try { saved = sessionStorage.getItem("zt-lang") } catch {}
    if (saved === "fr" || saved === "en") {
      setLanguageState(saved)
      return
    }
    if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("fr")) {
      setLanguageState("fr")
    }
  }, [initialLanguage])

  
  const t = (key: string): string => {
    return translations[language][key] || key
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const WHATSAPP_NUMBER = "+212669994837"
export { CONTACT_EMAIL as EMAIL } from "@/lib/tours"
export const INSTAGRAM = "https://www.instagram.com/zikasstours"

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`
}
