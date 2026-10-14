// Single source of truth for tour / transfer landing pages (EN + FR)
export const SITE_URL = "https://www.zikasstours.com"
export const WA_NUMBER = "212669994837"
export const PHONE_DISPLAY = "+212 669 994 837"
export const CONTACT_EMAIL = "info@zikasstours.com"
// Tourist transport licence number (agrément). Leave empty until you have it: it is shown in the footer when set.
export const LICENSE_NUMBER = ""

export type Locale = "en" | "fr"
type L = Record<Locale, string>
type LL = Record<Locale, string[]>
type FAQ = Record<Locale, { q: string; a: string }[]>

export interface Tour {
  id: string
  kind: "excursion" | "transfer"
  path: L
  name: L
  metaTitle: L
  metaDesc: L
  h1: L
  intro: L
  body: LL
  duration: L
  distance: L
  price: number
  images: string[]
  highlights: LL
  included: LL
  notIncluded: LL
  faq: FAQ
  blogUrl?: string
}

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

const B = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/"

const commonIncluded: LL = {
  en: [
    "Private air-conditioned car with professional driver (1-7 people)",
    "Pickup and drop-off at your hotel or riad in Marrakech",
    "Fuel and parking",
    "Flexible timing and photo stops on request",
    "Driver speaks English, French and Arabic",
  ],
  fr: [
    "Voiture privée climatisée avec chauffeur professionnel (1 à 7 personnes)",
    "Prise en charge et retour à votre hôtel ou riad à Marrakech",
    "Carburant et parking",
    "Horaires flexibles et arrêts photo à la demande",
    "Chauffeur parlant français, anglais et arabe",
  ],
}

const commonNotIncluded: LL = {
  en: ["Meals and drinks", "Entrance fees and optional activities", "Local guides (can be arranged on request)"],
  fr: ["Repas et boissons", "Droits d'entrée et activités optionnelles", "Guides locaux (sur demande)"],
}

export const tours: Tour[] = [
  {
    id: "agafay",
    kind: "excursion",
    path: { en: "/excursions/agafay-desert-tour-from-marrakech", fr: "/fr/excursions/excursion-desert-agafay-marrakech" },
    name: { en: "Agafay Desert Tour", fr: "Excursion Désert d'Agafay" },
    metaTitle: {
      en: "Agafay Desert Tour from Marrakech - Private Car from 70€",
      fr: "Excursion Désert d'Agafay depuis Marrakech - Privé dès 70€",
    },
    metaDesc: {
      en: "Private Agafay Desert trip from Marrakech: sunset, camel ride, quad and dinner under the stars. Private car with driver for 1-7 people from 70€. Book on WhatsApp.",
      fr: "Excursion privée au désert d'Agafay depuis Marrakech : coucher de soleil, dromadaire, quad et dîner sous les étoiles. Voiture privée 1-7 pers. dès 70€. Réservez sur WhatsApp.",
    },
    h1: { en: "Agafay Desert Tour from Marrakech", fr: "Excursion au Désert d'Agafay depuis Marrakech" },
    intro: {
      en: "The Agafay Desert is the closest desert to Marrakech: only 45 minutes from the Medina. A private trip with ZikassTours takes you to its lunar landscape of stone hills, with views of the Atlas Mountains, for a sunset you will never forget.",
      fr: "Le désert d'Agafay est le désert le plus proche de Marrakech : à seulement 45 minutes de la Médina. Avec ZikassTours, partez en privé découvrir ses paysages lunaires face aux montagnes de l'Atlas, pour un coucher de soleil inoubliable.",
    },
    body: {
      en: [
        "Agafay is a stone desert, not a sand desert. That makes it perfect if you do not have time for the 2-day trip to the Sahara. You get the silence, the space and the golden light of the desert in half a day.",
        "Most travelers choose the afternoon trip: we pick you up at your riad, drive to the desert, and you can add a camel ride, a quad session or a traditional dinner with music in a desert camp. Tell us what you want on WhatsApp and we organize everything.",
        "Because the car is private, you leave when you want and stop where you want. It is ideal for couples, families and small groups up to 7 people.",
      ],
      fr: [
        "Agafay est un désert de pierre et non de sable. C'est l'option idéale si vous n'avez pas le temps de faire les 2 jours de route jusqu'au Sahara : le silence, l'espace et la lumière dorée du désert en une demi-journée.",
        "La plupart des voyageurs choisissent l'après-midi : nous venons vous chercher à votre riad, direction le désert, puis vous pouvez ajouter une balade à dromadaire, du quad ou un dîner traditionnel avec musique dans un camp. Dites-nous ce que vous souhaitez sur WhatsApp, nous organisons tout.",
        "La voiture est privée : vous partez quand vous voulez et vous vous arrêtez où vous voulez. Parfait pour les couples, les familles et les petits groupes jusqu'à 7 personnes.",
      ],
    },
    duration: { en: "4-5 hours", fr: "4-5 heures" },
    distance: { en: "45 min from Marrakech", fr: "45 min de Marrakech" },
    price: 70,
    images: [
      B + "Agafay%204-6TVB2ytuBOTGbhxXC1cGv5IfQVN438.jpeg",
      B + "Agafay%201-xgUT88Q06ArclrCtCPYodpnOPQkZiA.jpeg",
      B + "Agafay%202-WYCvFoltROTV48UKLq1577BL5KuYtR.jpeg",
      B + "Agafay%203-g0MdGQTLdiIVneifekEUHMqyLGrQ4h.jpeg",
    ],
    highlights: {
      en: ["Sunset over the desert and the Atlas Mountains", "Camel ride or quad biking (optional)", "Dinner under the stars in a desert camp (optional)", "Only 45 minutes from Marrakech"],
      fr: ["Coucher de soleil sur le désert et l'Atlas", "Balade à dromadaire ou quad (en option)", "Dîner sous les étoiles dans un camp (en option)", "À seulement 45 minutes de Marrakech"],
    },
    included: commonIncluded,
    notIncluded: commonNotIncluded,
    faq: {
      en: [
        { q: "How far is the Agafay Desert from Marrakech?", a: "About 40 km, around 45 minutes by car from the Medina or Gueliz." },
        { q: "What is the best time for Agafay?", a: "Late afternoon, to watch the sunset. Spring and autumn have the most pleasant temperatures." },
        { q: "Can you add camel ride, quad or dinner?", a: "Yes. Tell us on WhatsApp which activities you want and we send you the full price before you book." },
        { q: "How many people fit in the car?", a: "Our private cars take 1 to 7 people. The price is per car, not per person." },
      ],
      fr: [
        { q: "À quelle distance se trouve le désert d'Agafay ?", a: "Environ 40 km, soit 45 minutes en voiture depuis la Médina ou Guéliz." },
        { q: "Quel est le meilleur moment pour Agafay ?", a: "En fin d'après-midi pour le coucher du soleil. Le printemps et l'automne offrent les températures les plus agréables." },
        { q: "Peut-on ajouter dromadaire, quad ou dîner ?", a: "Oui. Indiquez-nous sur WhatsApp les activités souhaitées et nous vous envoyons le prix total avant réservation." },
        { q: "Combien de personnes par voiture ?", a: "Nos voitures privées accueillent de 1 à 7 personnes. Le prix est par voiture, pas par personne." },
      ],
    },
    blogUrl: "/blog/agafay-desert-experience",
  },
  {
    id: "ourika",
    kind: "excursion",
    path: { en: "/excursions/ourika-valley-day-trip-from-marrakech", fr: "/fr/excursions/excursion-vallee-ourika-marrakech" },
    name: { en: "Ourika Valley Day Trip", fr: "Excursion Vallée de l'Ourika" },
    metaTitle: {
      en: "Ourika Valley Day Trip from Marrakech - Private Car from 70€",
      fr: "Excursion Vallée de l'Ourika depuis Marrakech - Privé dès 70€",
    },
    metaDesc: {
      en: "Private Ourika Valley day trip from Marrakech: Berber villages, Setti Fatma waterfalls and lunch by the river. Private car with driver for 1-7 people from 70€. Book on WhatsApp.",
      fr: "Excursion privée dans la vallée de l'Ourika : villages berbères, cascades de Setti Fatma et déjeuner au bord de la rivière. Voiture privée 1-7 pers. dès 70€. Réservez sur WhatsApp.",
    },
    h1: { en: "Ourika Valley Day Trip from Marrakech", fr: "Excursion dans la Vallée de l'Ourika depuis Marrakech" },
    intro: {
      en: "Just one hour from Marrakech, the Ourika Valley is the easiest way to see the Atlas Mountains. Green terraces, Berber villages, a river and the Setti Fatma waterfalls: a perfect day in nature with your own private driver.",
      fr: "À une heure de Marrakech, la vallée de l'Ourika est la façon la plus simple de découvrir l'Atlas. Terrasses verdoyantes, villages berbères, rivière et cascades de Setti Fatma : une journée nature parfaite avec votre chauffeur privé.",
    },
    body: {
      en: [
        "On the road we can stop at a traditional Berber house for mint tea, at an argan oil cooperative, and at viewpoints over the valley.",
        "In Setti Fatma you can walk up to the waterfalls with a local guide, then have lunch on a terrace right by the river. The walk is easy for most people, with a few rocky parts.",
        "The car is private, so the program is yours: shorter, longer, more stops or fewer. Perfect for families and couples.",
      ],
      fr: [
        "Sur la route, nous pouvons nous arrêter dans une maison berbère pour un thé à la menthe, dans une coopérative d'huile d'argan et aux points de vue sur la vallée.",
        "À Setti Fatma, vous pouvez monter vers les cascades avec un guide local, puis déjeuner sur une terrasse au bord de la rivière. La marche est accessible à la plupart des personnes, avec quelques passages rocheux.",
        "La voiture est privée : le programme est le vôtre, plus court, plus long, avec plus ou moins d'arrêts. Idéal pour les familles et les couples.",
      ],
    },
    duration: { en: "6-7 hours", fr: "6-7 heures" },
    distance: { en: "1 hour from Marrakech", fr: "1 h de Marrakech" },
    price: 70,
    images: [
      B + "Ourika%201-nKn8FAwTcOOxozvIZIM3z5ft0ELoit.jpeg",
      B + "Ourika%202-iwdeUj9NfNjsDVe1ZV6jkpLWrtZEQy.jpeg",
      B + "Ourika%203-6EUF4VQgLJ2wTV2naeV3Xob64SrEGZ.jpeg",
      B + "Ourika%204-8NgjOt8qhcirKDjW3rRLN2flzQj2Ix.jpeg",
    ],
    highlights: {
      en: ["Setti Fatma waterfalls", "Berber villages and mint tea", "Argan oil cooperative", "Lunch by the river"],
      fr: ["Cascades de Setti Fatma", "Villages berbères et thé à la menthe", "Coopérative d'huile d'argan", "Déjeuner au bord de la rivière"],
    },
    included: commonIncluded,
    notIncluded: commonNotIncluded,
    faq: {
      en: [
        { q: "How long is the drive to the Ourika Valley?", a: "About 1 hour from Marrakech to the valley, and a bit more to Setti Fatma village." },
        { q: "Is the waterfall walk difficult?", a: "It is easy to moderate, with some rocks. Wear good shoes. You can also stay by the river and relax." },
        { q: "Can we combine Ourika with other places?", a: "Yes, for example the 3 Valleys tour. Ask us on WhatsApp for a custom program." },
        { q: "Is the price per person?", a: "No, the price is per private car for 1 to 7 people." },
      ],
      fr: [
        { q: "Combien de temps de route jusqu'à l'Ourika ?", a: "Environ 1 heure depuis Marrakech jusqu'à la vallée, un peu plus jusqu'au village de Setti Fatma." },
        { q: "La marche vers les cascades est-elle difficile ?", a: "Facile à modérée, avec quelques rochers. Prévoyez de bonnes chaussures. Vous pouvez aussi rester au bord de la rivière." },
        { q: "Peut-on combiner l'Ourika avec d'autres lieux ?", a: "Oui, par exemple le circuit des 3 Vallées. Demandez-nous un programme sur mesure sur WhatsApp." },
        { q: "Le prix est-il par personne ?", a: "Non, le prix est par voiture privée de 1 à 7 personnes." },
      ],
    },
    blogUrl: "/blog/ourika-valley-day-trip",
  },
  {
    id: "ouzoud",
    kind: "excursion",
    path: { en: "/excursions/ouzoud-waterfalls-day-trip-from-marrakech", fr: "/fr/excursions/excursion-cascades-ouzoud-marrakech" },
    name: { en: "Ouzoud Waterfalls Day Trip", fr: "Excursion Cascades d'Ouzoud" },
    metaTitle: {
      en: "Ouzoud Waterfalls Day Trip from Marrakech - Private from 120€",
      fr: "Excursion Cascades d'Ouzoud depuis Marrakech - Privé dès 120€",
    },
    metaDesc: {
      en: "Private day trip to Ouzoud Waterfalls from Marrakech: the highest falls in Morocco, Barbary monkeys and boat ride. Private car with driver for 1-7 people from 120€. Book on WhatsApp.",
      fr: "Excursion privée aux cascades d'Ouzoud : les plus hautes chutes du Maroc, singes magots et balade en barque. Voiture privée avec chauffeur 1-7 pers. dès 120€. Réservez sur WhatsApp.",
    },
    h1: { en: "Ouzoud Waterfalls Day Trip from Marrakech", fr: "Excursion aux Cascades d'Ouzoud depuis Marrakech" },
    intro: {
      en: "The Ouzoud Waterfalls are the highest in Morocco, about 110 meters. In one day from Marrakech you see the falls from above and below, meet the wild Barbary monkeys and can take a small boat ride at the bottom.",
      fr: "Les cascades d'Ouzoud sont les plus hautes du Maroc, environ 110 mètres. En une journée depuis Marrakech, vous les admirez d'en haut et d'en bas, rencontrez les singes magots et pouvez faire une balade en barque au pied des chutes.",
    },
    body: {
      en: [
        "The drive takes around 2h30 to 3 hours through the countryside and olive groves. With a private car, you can leave early and arrive before the crowds.",
        "A path goes down to the bottom of the falls, with small restaurants where you can eat a tajine with a view of the water. Local guides are available at the site if you want one.",
        "This is a long day, so a comfortable private car makes a big difference, especially for families.",
      ],
      fr: [
        "La route dure environ 2h30 à 3 heures à travers la campagne et les oliveraies. En voiture privée, vous pouvez partir tôt et arriver avant la foule.",
        "Un sentier descend jusqu'au pied des cascades, avec de petits restaurants où déguster un tajine face à l'eau. Des guides locaux sont disponibles sur place si vous le souhaitez.",
        "C'est une longue journée : une voiture privée confortable fait toute la différence, surtout en famille.",
      ],
    },
    duration: { en: "8-9 hours", fr: "8-9 heures" },
    distance: { en: "2h30-3h from Marrakech", fr: "2h30-3h de Marrakech" },
    price: 120,
    images: [
      B + "Ouzoud%201-xRi6pLtsw9wofIQ1jOU5ZNXvpcudgi.jpeg",
      B + "Ouzoud%202-YxD3VGMdx69zPeW0pmwNlPLsp39xRv.jpeg",
      B + "Ouzoud%203-gsHz9FQsnrOqhXRpnxGwAQ7X3qGOgx.jpeg",
      B + "Ouzoud%204-rFurSUKGi3kdeBq09gbX8LOUfGXa0M.jpeg",
    ],
    highlights: {
      en: ["Highest waterfalls in Morocco (110 m)", "Wild Barbary monkeys", "Boat ride at the foot of the falls (optional)", "Lunch with a view of the falls"],
      fr: ["Les plus hautes cascades du Maroc (110 m)", "Singes magots en liberté", "Balade en barque au pied des chutes (en option)", "Déjeuner face aux cascades"],
    },
    included: commonIncluded,
    notIncluded: commonNotIncluded,
    faq: {
      en: [
        { q: "How far is Ouzoud from Marrakech?", a: "About 150 km, 2h30 to 3 hours by car each way." },
        { q: "Can we swim at Ouzoud?", a: "Swimming is possible in some areas in summer. Bring a towel and good shoes." },
        { q: "What time do we leave?", a: "We usually leave around 8:00 to avoid the heat and the crowds, but the time is up to you." },
        { q: "Is the price per person?", a: "No, the price is per private car for 1 to 7 people." },
      ],
      fr: [
        { q: "Quelle distance entre Marrakech et Ouzoud ?", a: "Environ 150 km, soit 2h30 à 3 heures de route dans chaque sens." },
        { q: "Peut-on se baigner à Ouzoud ?", a: "La baignade est possible à certains endroits en été. Prévoyez une serviette et de bonnes chaussures." },
        { q: "À quelle heure part-on ?", a: "Généralement vers 8h pour éviter la chaleur et la foule, mais l'horaire est à votre choix." },
        { q: "Le prix est-il par personne ?", a: "Non, le prix est par voiture privée de 1 à 7 personnes." },
      ],
    },
    blogUrl: "/blog/ouzoud-waterfalls-guide",
  },
  {
    id: "essaouira",
    kind: "excursion",
    path: { en: "/excursions/essaouira-day-trip-from-marrakech", fr: "/fr/excursions/excursion-essaouira-marrakech" },
    name: { en: "Essaouira Day Trip", fr: "Excursion Essaouira" },
    metaTitle: {
      en: "Essaouira Day Trip from Marrakech - Private Car from 130€",
      fr: "Excursion Essaouira depuis Marrakech - Voiture Privée dès 130€",
    },
    metaDesc: {
      en: "Private Essaouira day trip from Marrakech: UNESCO medina, fishing port, beach and argan trees with goats. Private car with driver for 1-7 people from 130€. Book on WhatsApp.",
      fr: "Excursion privée à Essaouira depuis Marrakech : médina UNESCO, port de pêche, plage et arganiers. Voiture privée avec chauffeur 1-7 pers. dès 130€. Réservez sur WhatsApp.",
    },
    h1: { en: "Essaouira Day Trip from Marrakech", fr: "Excursion à Essaouira depuis Marrakech" },
    intro: {
      en: "Essaouira is the relaxed ocean town of Morocco. Its white and blue medina is a UNESCO World Heritage site, with a busy fishing port, ramparts over the Atlantic and a long sandy beach. Your private driver takes you there and back in comfort.",
      fr: "Essaouira est la ville océane et paisible du Maroc. Sa médina blanche et bleue est classée au patrimoine mondial de l'UNESCO, avec son port de pêche animé, ses remparts face à l'Atlantique et sa longue plage. Votre chauffeur privé vous y emmène en tout confort.",
    },
    body: {
      en: [
        "The road takes about 2h45 to 3 hours. On the way you can stop to see the famous goats in the argan trees and visit a women's argan oil cooperative.",
        "In Essaouira you have free time to walk in the medina, eat fresh grilled fish at the port and enjoy the beach. You decide how long you stay.",
        "A private car means no group bus, no waiting and a return time that suits you.",
      ],
      fr: [
        "La route dure environ 2h45 à 3 heures. En chemin, vous pouvez voir les célèbres chèvres dans les arganiers et visiter une coopérative féminine d'huile d'argan.",
        "À Essaouira, vous avez du temps libre pour flâner dans la médina, manger du poisson grillé au port et profiter de la plage. Vous décidez de la durée.",
        "Une voiture privée, c'est pas de bus de groupe, pas d'attente et un retour à l'heure qui vous convient.",
      ],
    },
    duration: { en: "10-12 hours", fr: "10-12 heures" },
    distance: { en: "2h45-3h from Marrakech", fr: "2h45-3h de Marrakech" },
    price: 130,
    images: [
      B + "Essaouira%201-1o2U922jKgunuFd4xqcG1qp8v1SuFp.jpeg",
      B + "Essaouira%202-f846BdGpGEiRJ2RpV1SafNl71Wvt0D.jpeg",
      B + "Essaouira%203-q6GnDEH91L2FNismn6mpAD1vFjbF6h.jpeg",
      B + "Essaouira%204-5OFUeGBUrv4Q5XlBHMjO17MU8X14Ff.jpeg",
    ],
    highlights: {
      en: ["UNESCO-listed medina and ramparts", "Fishing port and fresh seafood", "Goats in the argan trees", "Free time on the beach"],
      fr: ["Médina et remparts classés UNESCO", "Port de pêche et fruits de mer frais", "Chèvres dans les arganiers", "Temps libre à la plage"],
    },
    included: commonIncluded,
    notIncluded: commonNotIncluded,
    faq: {
      en: [
        { q: "How long is the drive to Essaouira?", a: "About 190 km, 2h45 to 3 hours each way." },
        { q: "Can we stay overnight in Essaouira?", a: "Yes, we can do a one-way transfer or pick you up another day. Ask us on WhatsApp." },
        { q: "How much free time do we have?", a: "Usually 4 to 5 hours, but it is your private trip, so you choose." },
        { q: "Is the price per person?", a: "No, the price is per private car for 1 to 7 people." },
      ],
      fr: [
        { q: "Combien de temps de route jusqu'à Essaouira ?", a: "Environ 190 km, soit 2h45 à 3 heures dans chaque sens." },
        { q: "Peut-on dormir à Essaouira ?", a: "Oui, nous faisons aussi le transfert aller simple ou le retour un autre jour. Demandez-nous sur WhatsApp." },
        { q: "Combien de temps libre sur place ?", a: "En général 4 à 5 heures, mais c'est votre excursion privée : vous choisissez." },
        { q: "Le prix est-il par personne ?", a: "Non, le prix est par voiture privée de 1 à 7 personnes." },
      ],
    },
    blogUrl: "/blog/essaouira-coastal-escape",
  },
  {
    id: "imlil",
    kind: "excursion",
    path: { en: "/excursions/imlil-atlas-mountains-day-trip-from-marrakech", fr: "/fr/excursions/excursion-imlil-haut-atlas-marrakech" },
    name: { en: "Imlil & Atlas Mountains Day Trip", fr: "Excursion Imlil & Haut Atlas" },
    metaTitle: {
      en: "Imlil & Atlas Mountains Day Trip from Marrakech - From 90€",
      fr: "Excursion Imlil & Haut Atlas depuis Marrakech - Privé dès 90€",
    },
    metaDesc: {
      en: "Private day trip to Imlil and the High Atlas from Marrakech: Berber villages, mountain walks and views of Toubkal. Private car with driver for 1-7 people from 90€. Book on WhatsApp.",
      fr: "Excursion privée à Imlil et dans le Haut Atlas : villages berbères, randonnée et vue sur le Toubkal. Voiture privée avec chauffeur 1-7 pers. dès 90€. Réservez sur WhatsApp.",
    },
    h1: { en: "Imlil & Atlas Mountains Day Trip from Marrakech", fr: "Excursion à Imlil et dans le Haut Atlas depuis Marrakech" },
    intro: {
      en: "Imlil is a mountain village at the foot of Mount Toubkal, the highest peak in North Africa. About 1h30 from Marrakech, it is the best place for a day of fresh air, Berber villages and easy walks in the High Atlas.",
      fr: "Imlil est un village de montagne au pied du Toubkal, le plus haut sommet d'Afrique du Nord. À environ 1h30 de Marrakech, c'est l'endroit idéal pour une journée au grand air, entre villages berbères et randonnées faciles dans le Haut Atlas.",
    },
    body: {
      en: [
        "On the way we pass through Asni and its weekly market area, with great viewpoints over the valleys.",
        "In Imlil you can walk with a local mountain guide to nearby villages and waterfalls, then share a tajine and mint tea in a Berber house.",
        "Walks can be short and easy or longer for active travelers. Tell us your level and we adapt the day.",
      ],
      fr: [
        "En route, nous passons par Asni et ses points de vue magnifiques sur les vallées.",
        "À Imlil, vous pouvez marcher avec un guide de montagne local vers les villages et cascades voisins, puis partager un tajine et un thé à la menthe chez l'habitant.",
        "Les balades peuvent être courtes et faciles, ou plus longues pour les sportifs. Indiquez-nous votre niveau, nous adaptons la journée.",
      ],
    },
    duration: { en: "8 hours", fr: "8 heures" },
    distance: { en: "1h30 from Marrakech", fr: "1h30 de Marrakech" },
    price: 90,
    images: [
      B + "Haut%20Atlas%20et%20Imlil%201-wla7Ea7HsgpZMeArvcPHLS50Qdn9zW.jpeg",
      B + "Haut%20Atlas%20et%20Imlil%202-weyetxMYFnOPZ320AZjP83mgjWasiR.jpeg",
      B + "Haut%20Atlas%20et%20Imlil%203-REROscKav4bKRZ5zspWEQwu8eMkBS3.jpeg",
      B + "Haut%20Atlas%20et%20Imlil%204-JrA8M2gLjsiJXhv6GRowUMEsLsxCJF.jpeg",
    ],
    highlights: {
      en: ["Views of Mount Toubkal", "Traditional Berber villages", "Easy or longer mountain walks", "Lunch in a Berber house"],
      fr: ["Vue sur le mont Toubkal", "Villages berbères traditionnels", "Randonnées faciles ou plus longues", "Déjeuner chez l'habitant"],
    },
    included: commonIncluded,
    notIncluded: commonNotIncluded,
    faq: {
      en: [
        { q: "How far is Imlil from Marrakech?", a: "About 65 km, around 1h30 by car." },
        { q: "Do I need to be fit?", a: "No. Easy walks are possible for most people. Longer hikes can be arranged for active travelers." },
        { q: "Is it cold in Imlil?", a: "It is cooler than Marrakech, and there can be snow in winter. Bring a warm layer." },
        { q: "Is the price per person?", a: "No, the price is per private car for 1 to 7 people." },
      ],
      fr: [
        { q: "Quelle distance entre Marrakech et Imlil ?", a: "Environ 65 km, soit 1h30 de route." },
        { q: "Faut-il être sportif ?", a: "Non. Des balades faciles sont possibles pour la plupart des personnes. Des randonnées plus longues sont possibles pour les sportifs." },
        { q: "Fait-il froid à Imlil ?", a: "Il fait plus frais qu'à Marrakech, avec parfois de la neige en hiver. Prévoyez une couche chaude." },
        { q: "Le prix est-il par personne ?", a: "Non, le prix est par voiture privée de 1 à 7 personnes." },
      ],
    },
    blogUrl: "/blog/atlas-mountains-imlil",
  },
  {
    id: "ouarzazate",
    kind: "excursion",
    path: { en: "/excursions/ouarzazate-ait-ben-haddou-day-trip-from-marrakech", fr: "/fr/excursions/excursion-ouarzazate-ait-ben-haddou-marrakech" },
    name: { en: "Ouarzazate & Ait Ben Haddou Day Trip", fr: "Excursion Ouarzazate & Aït Ben Haddou" },
    metaTitle: {
      en: "Ait Ben Haddou & Ouarzazate Day Trip from Marrakech - 130€",
      fr: "Excursion Aït Ben Haddou & Ouarzazate depuis Marrakech - 130€",
    },
    metaDesc: {
      en: "Private day trip from Marrakech to Ait Ben Haddou (UNESCO) and Ouarzazate over the Tizi n'Tichka pass. Private car with driver for 1-7 people from 130€. Book on WhatsApp.",
      fr: "Excursion privée de Marrakech à Aït Ben Haddou (UNESCO) et Ouarzazate par le col du Tizi n'Tichka. Voiture privée avec chauffeur 1-7 pers. dès 130€. Réservez sur WhatsApp.",
    },
    h1: { en: "Ouarzazate & Ait Ben Haddou Day Trip from Marrakech", fr: "Excursion à Ouarzazate et Aït Ben Haddou depuis Marrakech" },
    intro: {
      en: "Cross the High Atlas over the Tizi n'Tichka pass and discover Ait Ben Haddou, a UNESCO-listed fortified village used in many famous films, then Ouarzazate, the gateway to the desert.",
      fr: "Traversez le Haut Atlas par le col du Tizi n'Tichka et découvrez Aït Ben Haddou, ksar classé à l'UNESCO et décor de nombreux films célèbres, puis Ouarzazate, la porte du désert.",
    },
    body: {
      en: [
        "This is a long but spectacular day: about 4 hours of mountain road each way, with many photo stops at the pass and in the valleys.",
        "In Ait Ben Haddou you can walk up through the earthen kasbah to the top for a great view. In Ouarzazate you can visit the Taourirt Kasbah or the film studios.",
        "With a private car you can leave very early and take breaks whenever you want. You can also turn it into a 2-3 day desert trip: ask us on WhatsApp.",
      ],
      fr: [
        "Une longue journée mais spectaculaire : environ 4 heures de route de montagne dans chaque sens, avec de nombreux arrêts photo au col et dans les vallées.",
        "À Aït Ben Haddou, vous montez à travers le ksar en terre jusqu'au sommet pour une vue superbe. À Ouarzazate, vous pouvez visiter la kasbah de Taourirt ou les studios de cinéma.",
        "En voiture privée, vous partez tôt et faites des pauses quand vous voulez. Vous pouvez aussi en faire un circuit désert de 2-3 jours : demandez-nous sur WhatsApp.",
      ],
    },
    duration: { en: "12 hours", fr: "12 heures" },
    distance: { en: "About 4h from Marrakech", fr: "Environ 4h de Marrakech" },
    price: 130,
    images: [
      B + "Ouarzazate%201-PNTwunWyPnmq529bUtTaNUPpZyHNZW.jpeg",
      B + "Ouarzazate%202-7cKdN6QuRJJbo9ARYLd4GRmL0OUgCz.jpeg",
      B + "Ouarzazate%203-4esDgX3C74lXW80OKsebVvEsjsoJ9V.jpeg",
    ],
    highlights: {
      en: ["Tizi n'Tichka mountain pass", "Ait Ben Haddou, UNESCO World Heritage", "Film locations and kasbahs", "Ouarzazate, gateway to the desert"],
      fr: ["Col du Tizi n'Tichka", "Aït Ben Haddou, patrimoine mondial UNESCO", "Lieux de tournage et kasbahs", "Ouarzazate, porte du désert"],
    },
    included: commonIncluded,
    notIncluded: commonNotIncluded,
    faq: {
      en: [
        { q: "Is a day trip to Ait Ben Haddou too long?", a: "It is a full day (about 12 hours), but very scenic. If you have time, a 2-day trip is more relaxed." },
        { q: "What time do we leave Marrakech?", a: "Usually around 7:00 so you have enough time on site." },
        { q: "Can we continue to the Sahara?", a: "Yes, we organize multi-day trips to Zagora or Merzouga. Ask us on WhatsApp." },
        { q: "Is the price per person?", a: "No, the price is per private car for 1 to 7 people." },
      ],
      fr: [
        { q: "Une journée à Aït Ben Haddou, est-ce trop long ?", a: "C'est une journée complète (environ 12 heures) mais très belle. Si vous avez le temps, 2 jours c'est plus reposant." },
        { q: "À quelle heure part-on de Marrakech ?", a: "Généralement vers 7h pour avoir assez de temps sur place." },
        { q: "Peut-on continuer vers le Sahara ?", a: "Oui, nous organisons des circuits de plusieurs jours vers Zagora ou Merzouga. Demandez-nous sur WhatsApp." },
        { q: "Le prix est-il par personne ?", a: "Non, le prix est par voiture privée de 1 à 7 personnes." },
      ],
    },
    blogUrl: "/blog/ouarzazate-ait-ben-haddou",
  },
  {
    id: "airport",
    kind: "transfer",
    path: { en: "/airport-transfer-marrakech", fr: "/fr/transfert-aeroport-marrakech" },
    name: { en: "Marrakech Airport Transfer", fr: "Transfert Aéroport Marrakech" },
    metaTitle: {
      en: "Marrakech Airport Transfer - Private Driver from 10€ | 24/7",
      fr: "Transfert Aéroport Marrakech - Chauffeur Privé dès 10€ | 24h/24",
    },
    metaDesc: {
      en: "Private transfer from Marrakech Menara Airport (RAK) to your riad or hotel in the Medina, Gueliz, Agafay and more. Available 24/7. From 10€ per car. Book on WhatsApp.",
      fr: "Transfert privé depuis l'aéroport de Marrakech Menara (RAK) vers votre riad ou hôtel : Médina, Guéliz, Agafay... Disponible 24h/24. Dès 10€ par voiture. Réservez sur WhatsApp.",
    },
    h1: { en: "Private Airport Transfer in Marrakech", fr: "Transfert Privé Aéroport de Marrakech" },
    intro: {
      en: "Land in Marrakech without stress. Your private driver waits for you at Menara Airport (RAK), helps with your luggage and takes you directly to your riad or hotel. Day or night, 7 days a week.",
      fr: "Arrivez à Marrakech sans stress. Votre chauffeur privé vous attend à l'aéroport Menara (RAK), vous aide avec vos bagages et vous conduit directement à votre riad ou hôtel. De jour comme de nuit, 7j/7.",
    },
    body: {
      en: [
        "Send us your flight number and arrival time on WhatsApp so your driver is ready when you land.",
        "Many riads in the Medina are in small streets where cars cannot enter. Your driver takes you to the closest point and shows you the way to your riad.",
        "We also do transfers to Agafay camps, Oukaimeden, Essaouira, Casablanca, Agadir, Rabat and other cities.",
      ],
      fr: [
        "Envoyez-nous votre numéro de vol et votre heure d'arrivée sur WhatsApp pour que votre chauffeur soit prêt à l'atterrissage.",
        "Beaucoup de riads de la Médina sont dans des ruelles où les voitures ne passent pas. Votre chauffeur vous dépose au plus près et vous indique le chemin jusqu'à votre riad.",
        "Nous assurons aussi les transferts vers les camps d'Agafay, Oukaïmeden, Essaouira, Casablanca, Agadir, Rabat et d'autres villes.",
      ],
    },
    duration: { en: "20-30 min to the Medina", fr: "20-30 min jusqu'à la Médina" },
    distance: { en: "24/7 service", fr: "Service 24h/24" },
    price: 10,
    images: [],
    highlights: {
      en: ["Driver waiting at arrivals", "Send your flight number, we plan your pickup", "Medina, Gueliz, Palmeraie, Agafay", "Long-distance transfers to all Moroccan cities"],
      fr: ["Chauffeur qui vous attend aux arrivées", "Envoyez votre numéro de vol, on planifie la prise en charge", "Médina, Guéliz, Palmeraie, Agafay", "Transferts longue distance vers toutes les villes"],
    },
    included: {
      en: ["Private air-conditioned car (1-7 people)", "Pickup at the arrivals hall", "Help with luggage", "Fixed price agreed before your trip"],
      fr: ["Voiture privée climatisée (1 à 7 personnes)", "Accueil au hall des arrivées", "Aide avec les bagages", "Prix fixe convenu avant le trajet"],
    },
    notIncluded: {
      en: ["Tips"],
      fr: ["Pourboires"],
    },
    faq: {
      en: [
        { q: "How much is a taxi from Marrakech airport to the Medina?", a: "With ZikassTours, a private transfer to the Medina or Gueliz starts from 10€ per car, fixed price, no negotiation." },
        { q: "What if my flight is late?", a: "Send us your flight number when you book and message us on WhatsApp if anything changes. We adapt the pickup time." },
        { q: "Can you take us to Essaouira or Agadir directly from the airport?", a: "Yes. See our prices or ask us on WhatsApp for any city in Morocco." },
        { q: "How do I book?", a: "Send us your flight number, date, number of people and hotel address on WhatsApp. We confirm quickly." },
      ],
      fr: [
        { q: "Combien coûte un transfert aéroport - Médina ?", a: "Avec ZikassTours, un transfert privé vers la Médina ou Guéliz commence à 10€ par voiture, prix fixe, sans négociation." },
        { q: "Et si mon vol est en retard ?", a: "Donnez-nous votre numéro de vol à la réservation et prévenez-nous sur WhatsApp en cas de changement. Nous adaptons l'heure de prise en charge." },
        { q: "Pouvez-vous nous emmener directement à Essaouira ou Agadir ?", a: "Oui. Consultez nos tarifs ou demandez-nous sur WhatsApp pour toute ville du Maroc." },
        { q: "Comment réserver ?", a: "Envoyez-nous sur WhatsApp votre numéro de vol, la date, le nombre de personnes et l'adresse de votre hôtel. Nous confirmons rapidement." },
      ],
    },
  },
]

export const excursions = tours.filter((t) => t.kind === "excursion")
export const airportTransfer = tours.find((t) => t.id === "airport")!

export function slugOf(t: Tour, locale: Locale) {
  return t.path[locale].split("/").pop() as string
}

export function findBySlug(slug: string, locale: Locale) {
  return excursions.find((t) => slugOf(t, locale) === slug)
}
