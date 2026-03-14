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
    "hero.title": "Chauffeur Privé & Excursions à Marrakech",
    "hero.subtitle": "Services de transport premium et excursions inoubliables au départ de Marrakech.",
    "hero.cta.whatsapp": "Réserver sur WhatsApp",
    "hero.cta.call": "Appeler maintenant",
    
    // Excursions
    "excursions.title": "Excursions Populaires",
    "excursions.subtitle": "Découvrez les merveilles du Maroc avec nos excursions privées",
    "excursions.from": "À partir de",
    "excursions.duration": "Durée",
    "excursions.book": "Réserver",
    
    // Excursion descriptions
    "excursion.agafay.name": "Désert d'Agafay",
    "excursion.agafay.desc": "Découvrez le désert de pierres aux portes de Marrakech avec ses paysages lunaires spectaculaires.",
    "excursion.ourika.name": "Vallée de l'Ourika",
    "excursion.ourika.desc": "Explorez les cascades et villages berbères traditionnels au cœur de l'Atlas.",
    "excursion.imlil.name": "Imlil",
    "excursion.imlil.desc": "Randonnée au pied du mont Toubkal dans des paysages montagneux à couper le souffle.",
    "excursion.oukaimeden.name": "Oukaïmeden",
    "excursion.oukaimeden.desc": "La station de ski la plus haute d'Afrique avec des vues panoramiques exceptionnelles.",
    "excursion.ouzoud.name": "Cascades d'Ouzoud",
    "excursion.ouzoud.desc": "Les plus belles cascades du Maroc, une merveille naturelle de 110 mètres de hauteur.",
    "excursion.merzouga.name": "Désert de Merzouga",
    "excursion.merzouga.desc": "Aventure dans les dunes dorées du Sahara avec nuit sous les étoiles.",
    "excursion.zagora.name": "Zagora",
    "excursion.zagora.desc": "Porte du désert, découvrez les premières dunes du Sahara marocain.",
    "excursion.essaouira.name": "Essaouira",
    "excursion.essaouira.desc": "Ville côtière fortifiée, connue pour son port, ses plages et son ambiance artistique.",
    "excursion.palmeraie.name": "Palmeraie",
    "excursion.palmeraie.desc": "Oasis verdoyante aux portes de Marrakech, parfaite pour une balade en chameau.",
    
    // Tarifs
    "tarifs.title": "Nos Tarifs",
    "tarifs.subtitle": "Tarifs transparents pour tous vos trajets et excursions",
    "tarifs.airport": "Transfert Aéroport",
    "tarifs.regional": "Transferts Régionaux",
    "tarifs.book": "Réserver",
    
    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Nous sommes à votre disposition 24h/24, 7j/7",
    "contact.form.name": "Votre nom",
    "contact.form.email": "Votre email",
    "contact.form.message": "Votre message",
    "contact.form.submit": "Envoyer",
    "contact.location": "Marrakech, Maroc",
    
    // Footer
    "footer.tagline": "Luxury Adventure",
    "footer.rights": "Tous droits réservés",
    "footer.quicklinks": "Liens rapides",
    "footer.contact": "Contact",
    
    // WhatsApp messages
    "wa.general": "Bonjour, je souhaite obtenir des informations sur vos services depuis votre site.",
    "wa.agafay": "Bonjour, je souhaite réserver l'excursion Désert d'Agafay depuis votre site.",
    "wa.ourika": "Bonjour, je souhaite réserver l'excursion Vallée de l'Ourika depuis votre site.",
    "wa.imlil": "Bonjour, je souhaite réserver l'excursion Imlil depuis votre site.",
    "wa.oukaimeden": "Bonjour, je souhaite réserver l'excursion Oukaïmeden depuis votre site.",
    "wa.ouzoud": "Bonjour, je souhaite réserver l'excursion Cascades d'Ouzoud depuis votre site.",
    "wa.merzouga": "Bonjour, je souhaite réserver l'excursion Désert de Merzouga depuis votre site.",
    "wa.zagora": "Bonjour, je souhaite réserver l'excursion Zagora depuis votre site.",
    "wa.essaouira": "Bonjour, je souhaite réserver l'excursion Essaouira depuis votre site.",
    "wa.palmeraie": "Bonjour, je souhaite réserver l'excursion Palmeraie depuis votre site.",
    "wa.airport": "Bonjour, je souhaite réserver un transfert aéroport depuis votre site.",
    "wa.transfer": "Bonjour, je souhaite réserver un transfert depuis votre site.",
    
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
    "hero.title": "Private Driver & Excursions in Marrakech",
    "hero.subtitle": "Premium transport services and unforgettable excursions from Marrakech.",
    "hero.cta.whatsapp": "Reserve on WhatsApp",
    "hero.cta.call": "Call now",
    
    // Excursions
    "excursions.title": "Popular Excursions",
    "excursions.subtitle": "Discover the wonders of Morocco with our private excursions",
    "excursions.from": "From",
    "excursions.duration": "Duration",
    "excursions.book": "Book",
    
    // Excursion descriptions
    "excursion.agafay.name": "Agafay Desert",
    "excursion.agafay.desc": "Discover the stone desert at the gates of Marrakech with its spectacular lunar landscapes.",
    "excursion.ourika.name": "Ourika Valley",
    "excursion.ourika.desc": "Explore waterfalls and traditional Berber villages in the heart of the Atlas.",
    "excursion.imlil.name": "Imlil",
    "excursion.imlil.desc": "Hiking at the foot of Mount Toubkal in breathtaking mountain landscapes.",
    "excursion.oukaimeden.name": "Oukaïmeden",
    "excursion.oukaimeden.desc": "The highest ski resort in Africa with exceptional panoramic views.",
    "excursion.ouzoud.name": "Ouzoud Waterfalls",
    "excursion.ouzoud.desc": "The most beautiful waterfalls in Morocco, a natural wonder 110 meters high.",
    "excursion.merzouga.name": "Merzouga Desert",
    "excursion.merzouga.desc": "Adventure in the golden dunes of the Sahara with a night under the stars.",
    "excursion.zagora.name": "Zagora",
    "excursion.zagora.desc": "Gateway to the desert, discover the first dunes of the Moroccan Sahara.",
    "excursion.essaouira.name": "Essaouira",
    "excursion.essaouira.desc": "Fortified coastal town, known for its port, beaches and artistic atmosphere.",
    "excursion.palmeraie.name": "Palmeraie",
    "excursion.palmeraie.desc": "Green oasis at the gates of Marrakech, perfect for a camel ride.",
    
    // Tarifs
    "tarifs.title": "Our Prices",
    "tarifs.subtitle": "Transparent prices for all your trips and excursions",
    "tarifs.airport": "Airport Transfer",
    "tarifs.regional": "Regional Transfers",
    "tarifs.book": "Book",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We are at your service 24/7",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.message": "Your message",
    "contact.form.submit": "Send",
    "contact.location": "Marrakech, Morocco",
    
    // Footer
    "footer.tagline": "Luxury Adventure",
    "footer.rights": "All rights reserved",
    "footer.quicklinks": "Quick Links",
    "footer.contact": "Contact",
    
    // WhatsApp messages
    "wa.general": "Hello, I would like to get information about your services from your website.",
    "wa.agafay": "Hello, I would like to book the Agafay Desert excursion from your website.",
    "wa.ourika": "Hello, I would like to book the Ourika Valley excursion from your website.",
    "wa.imlil": "Hello, I would like to book the Imlil excursion from your website.",
    "wa.oukaimeden": "Hello, I would like to book the Oukaïmeden excursion from your website.",
    "wa.ouzoud": "Hello, I would like to book the Ouzoud Waterfalls excursion from your website.",
    "wa.merzouga": "Hello, I would like to book the Merzouga Desert excursion from your website.",
    "wa.zagora": "Hello, I would like to book the Zagora excursion from your website.",
    "wa.essaouira": "Hello, I would like to book the Essaouira excursion from your website.",
    "wa.palmeraie": "Hello, I would like to book the Palmeraie excursion from your website.",
    "wa.airport": "Hello, I would like to book an airport transfer from your website.",
    "wa.transfer": "Hello, I would like to book a transfer from your website.",
    
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
