"use client"

import { createContext, useContext, useState, ReactNode } from "react"

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
    "nav.contact": "Contact",
    "nav.reserve": "Réserver sur WhatsApp",
    
    // Hero
    "hero.title": "Excursions & Aventures au Désert depuis Marrakech",
    "hero.subtitle": "Services de transport premium et excursions inoubliables au départ de Marrakech.",
    "hero.cta.excursions": "Voir les Excursions",
    "hero.cta.whatsapp": "Contacter sur WhatsApp",
    "hero.cta.call": "Appeler maintenant",
    
    // Destinations Section
    "destinations.badge": "Nos Destinations",
    "destinations.title": "Excursions Populaires",
    "destinations.subtitle": "Découvrez les merveilles du Maroc avec nos excursions privées",
    "destinations.reserve": "Réserver sur WhatsApp",
    "destinations.contact": "Contacter sur WhatsApp",
    
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
    
    // WhatsApp messages - Reserve
    "wa.agafay.reserve": "Bonjour, je souhaite réserver l'excursion Agafay depuis votre site.",
    "wa.essaouira.reserve": "Bonjour, je souhaite réserver l'excursion Essaouira depuis votre site.",
    "wa.ouarzazate.reserve": "Bonjour, je souhaite réserver l'excursion Ouarzazate & Aït Ben Haddou depuis votre site.",
    "wa.imlil.reserve": "Bonjour, je souhaite réserver l'excursion Haut Atlas & Imlil depuis votre site.",
    
    // WhatsApp messages - Contact
    "wa.agafay.contact": "Bonjour, je souhaite avoir plus d'informations sur l'excursion Agafay.",
    "wa.essaouira.contact": "Bonjour, je souhaite avoir plus d'informations sur l'excursion Essaouira.",
    "wa.ouarzazate.contact": "Bonjour, je souhaite avoir plus d'informations sur l'excursion Ouarzazate & Aït Ben Haddou.",
    "wa.imlil.contact": "Bonjour, je souhaite avoir plus d'informations sur l'excursion Haut Atlas & Imlil.",
    
    // General WhatsApp
    "wa.general": "Bonjour, je souhaite obtenir des informations sur vos services depuis votre site.",
    
    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Nous sommes à votre disposition 24h/24, 7j/7 depuis Marrakech",
    "contact.location": "Marrakech, Maroc",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Téléphone",
    "contact.email": "Email",
    
    // Footer
    "footer.tagline": "Luxury Adventure",
    "footer.rights": "Tous droits réservés",
    "footer.quicklinks": "Liens rapides",
    "footer.destinations": "Destinations",
    "footer.contact": "Contact",
    
    // Trust badges
    "trust.experience": "10+ ans d'expérience",
    "trust.clients": "5000+ clients satisfaits",
    "trust.available": "Disponible 24/7",
    "trust.safe": "Véhicules récents & sécurisés",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.excursions": "Excursions",
    "nav.tarifs": "Prices",
    "nav.contact": "Contact",
    "nav.reserve": "Reserve on WhatsApp",
    
    // Hero
    "hero.title": "Excursions & Desert Adventures from Marrakech",
    "hero.subtitle": "Premium transport services and unforgettable excursions from Marrakech.",
    "hero.cta.excursions": "View Excursions",
    "hero.cta.whatsapp": "Contact on WhatsApp",
    "hero.cta.call": "Call now",
    
    // Destinations Section
    "destinations.badge": "Our Destinations",
    "destinations.title": "Popular Excursions",
    "destinations.subtitle": "Discover the wonders of Morocco with our private excursions",
    "destinations.reserve": "Reserve on WhatsApp",
    "destinations.contact": "Contact on WhatsApp",
    
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
    
    // WhatsApp messages - Reserve
    "wa.agafay.reserve": "Hello, I would like to book the Agafay excursion from your website.",
    "wa.essaouira.reserve": "Hello, I would like to book the Essaouira excursion from your website.",
    "wa.ouarzazate.reserve": "Hello, I would like to book the Ouarzazate & Ait Ben Haddou excursion from your website.",
    "wa.imlil.reserve": "Hello, I would like to book the High Atlas & Imlil excursion from your website.",
    
    // WhatsApp messages - Contact
    "wa.agafay.contact": "Hello, I would like more information about the Agafay excursion.",
    "wa.essaouira.contact": "Hello, I would like more information about the Essaouira excursion.",
    "wa.ouarzazate.contact": "Hello, I would like more information about the Ouarzazate & Ait Ben Haddou excursion.",
    "wa.imlil.contact": "Hello, I would like more information about the High Atlas & Imlil excursion.",
    
    // General WhatsApp
    "wa.general": "Hello, I would like to get information about your services from your website.",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We are at your service 24/7 from Marrakech",
    "contact.location": "Marrakech, Morocco",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Phone",
    "contact.email": "Email",
    
    // Footer
    "footer.tagline": "Luxury Adventure",
    "footer.rights": "All rights reserved",
    "footer.quicklinks": "Quick Links",
    "footer.destinations": "Destinations",
    "footer.contact": "Contact",
    
    // Trust badges
    "trust.experience": "10+ years of experience",
    "trust.clients": "5000+ satisfied clients",
    "trust.available": "Available 24/7",
    "trust.safe": "Modern & safe vehicles",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")
  
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
export const EMAIL = "zakaria.zikasstours@gmail.com"
export const INSTAGRAM = "https://www.instagram.com/zikasstours"

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`
}
