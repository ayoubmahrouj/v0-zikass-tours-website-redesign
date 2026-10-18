// French travel guides (blog). Each article maps to its English twin (enSlug) for hreflang, and to a tour page (tourId) for the booking link.
export interface BlogFr {
  slug: string
  enSlug: string
  tourId: string
  title: string
  metaTitle: string
  metaDesc: string
  lead: string
  image: string
  duration: string
  location: string
  category: string
  sections: { h: string; p: string[] }[]
  tips: string[]
  faq: { q: string; a: string }[]
}

const B = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/"

export const blogFr: BlogFr[] = [
  {
    slug: "desert-agafay-excursion-marrakech",
    enSlug: "agafay-desert-experience",
    tourId: "agafay",
    title: "Désert d'Agafay : le guide pour une excursion depuis Marrakech",
    metaTitle: "Désert d'Agafay depuis Marrakech : guide pratique",
    metaDesc: "Désert d'Agafay à 45 minutes de Marrakech : quand partir, quoi faire (quad, dromadaire, dîner) et combien coûte une excursion en voiture privée.",
    lead: "À environ 45 minutes de Marrakech, le désert d'Agafay offre des paysages lunaires et une vue sur l'Atlas, sans la longue route vers le Sahara. C'est l'excursion idéale quand on manque de temps.",
    image: B + "Agafay%204-6TVB2ytuBOTGbhxXC1cGv5IfQVN438.jpeg",
    duration: "4 à 5 h",
    location: "Agafay, Maroc",
    category: "Désert",
    sections: [
      {
        h: "Un désert de pierres, pas de dunes",
        p: [
          "Agafay est un désert rocailleux : collines ocre, plateaux de pierre et lits de rivières asséchés, avec les sommets de l'Atlas à l'horizon. Ce ne sont pas les dunes de sable de Merzouga, mais le décor est spectaculaire, surtout au coucher du soleil.",
          "Sa proximité est son grand atout. Vous quittez la médina et, moins d'une heure plus tard, vous êtes en plein désert, ce qui permet de faire l'excursion sur une demi-journée ou en soirée.",
        ],
      },
      {
        h: "Que faire sur place",
        p: [
          "Les activités se choisissent à la carte : balade à dromadaire, quad ou buggy, puis dîner marocain dans un camp, souvent avec de la musique traditionnelle. Beaucoup de voyageurs choisissent simplement un coucher de soleil suivi d'un dîner.",
          "Les activités et les repas sont payés sur place et varient selon le camp. Dites-nous ce que vous voulez et nous vous indiquons le prix avant de réserver.",
        ],
      },
      {
        h: "Quand partir",
        p: [
          "Le coucher du soleil est le meilleur moment : lumière dorée, températures plus douces et ciel étoilé pour le dîner. En été, évitez le milieu de journée : il fait très chaud et il y a peu d'ombre.",
          "En hiver, les soirées sont fraîches. Prévoyez une veste, même si la journée a été agréable.",
        ],
      },
      {
        h: "Venir en voiture privée",
        p: [
          "Avec un chauffeur privé, vous êtes pris à votre hôtel ou riad à l'heure de votre choix et ramené après le dîner, sans vous soucier de la route de nuit. Le prix est par voiture (1 à 7 personnes), pas par personne.",
        ],
      },
    ],
    tips: [
      "Prévoyez des chaussures fermées pour le quad et la marche sur les cailloux.",
      "Prenez une veste légère pour la soirée, même en été.",
      "Précisez à l'avance si vous voulez quad, dromadaire ou simplement le dîner.",
    ],
    faq: [
      { q: "Combien de temps faut-il pour aller à Agafay ?", a: "Environ 45 minutes depuis Marrakech, selon votre hôtel et la circulation." },
      { q: "Quelle est la différence avec le Sahara ?", a: "Agafay est un désert de pierres proche de Marrakech. Le Sahara, avec ses grandes dunes, demande plusieurs jours de route aller-retour." },
      { q: "Le prix est-il par personne ?", a: "Non, notre tarif est par voiture privée, pour 1 à 7 personnes. Les activités et le dîner se paient sur place." },
    ],
  },
  {
    slug: "vallee-ourika-excursion-marrakech",
    enSlug: "ourika-valley-day-trip",
    tourId: "ourika",
    title: "Vallée de l'Ourika : excursion d'une journée depuis Marrakech",
    metaTitle: "Vallée de l'Ourika : excursion depuis Marrakech",
    metaDesc: "Vallée de l'Ourika à environ 1 h de Marrakech : cascades de Setti Fatma, villages berbères et déjeuner au bord de la rivière. Conseils et prix.",
    lead: "La vallée de l'Ourika est la sortie fraîcheur préférée des habitants de Marrakech : une rivière, des villages berbères accrochés à la montagne et les cascades de Setti Fatma au bout de la route.",
    image: B + "Ourika%201-nKn8FAwTcOOxozvIZIM3z5ft0ELoit.jpeg",
    duration: "6 à 7 h",
    location: "Vallée de l'Ourika, Maroc",
    category: "Nature",
    sections: [
      {
        h: "Un décor de montagne à une heure de la ville",
        p: [
          "La route longe l'oued Ourika, bordé de vergers, de terrasses cultivées et de villages berbères aux maisons de terre. Plus on monte, plus l'air se rafraîchit : c'est une vraie parenthèse après la chaleur de Marrakech.",
        ],
      },
      {
        h: "Setti Fatma et les cascades",
        p: [
          "Setti Fatma, au bout de la vallée, est le point de départ de la balade vers les cascades. Le sentier est accessible à la plupart des voyageurs, mais il faut franchir des rochers : de bonnes chaussures sont plus sûres que des tongs.",
          "Au bord de l'eau, des restaurants servent tajines et grillades, avec des tables parfois installées directement au-dessus de la rivière.",
        ],
      },
      {
        h: "Visites possibles en chemin",
        p: [
          "Sur le trajet, il est facile de s'arrêter dans un jardin ou un marché berbère, ou dans une coopérative de produits locaux, comme l'huile d'argan ou le miel. Nous nous adaptons à votre rythme et à vos envies.",
        ],
      },
      {
        h: "Quand y aller",
        p: [
          "Le printemps est la meilleure saison : l'eau coule bien et les paysages sont verts. En été, la vallée reste agréable parce qu'elle est plus fraîche que la ville. Après de fortes pluies, le sentier peut être glissant ou fermé.",
        ],
      },
    ],
    tips: [
      "Mettez des chaussures de marche ou de bonnes baskets pour le sentier des cascades.",
      "Emportez un maillot et une serviette léger si vous voulez vous rafraîchir.",
      "Partez tôt pour profiter de la vallée avant l'affluence du week-end.",
    ],
    faq: [
      { q: "Quelle est la distance depuis Marrakech ?", a: "Environ 1 heure de route pour rejoindre la vallée, un peu plus jusqu'à Setti Fatma selon la circulation." },
      { q: "Peut-on se baigner aux cascades ?", a: "L'eau est fraîche et souvent forte au printemps. Soyez prudent et suivez les conseils des habitants." },
      { q: "L'excursion convient-elle aux enfants ?", a: "Oui, avec de bonnes chaussures. Le sentier des cascades demande de marcher sur des rochers, il faut donc surveiller les plus petits." },
    ],
  },
  {
    slug: "cascades-ouzoud-excursion-marrakech",
    enSlug: "ouzoud-waterfalls-guide",
    tourId: "ouzoud",
    title: "Cascades d'Ouzoud : le guide de l'excursion depuis Marrakech",
    metaTitle: "Cascades d'Ouzoud depuis Marrakech : guide complet",
    metaDesc: "Cascades d'Ouzoud (110 m) à environ 2 h 30 de Marrakech : singes magots, balade en barque et conseils pour organiser votre journée en voiture privée.",
    lead: "Avec environ 110 mètres de chute, les cascades d'Ouzoud comptent parmi les plus hautes du Maroc. C'est une longue journée depuis Marrakech, mais l'une des plus mémorables.",
    image: B + "Ouzoud%202-YxD3VGMdx69zPeW0pmwNlPLsp39xRv.jpeg",
    duration: "8 à 9 h",
    location: "Ouzoud, Maroc",
    category: "Nature",
    sections: [
      {
        h: "Un site naturel à voir au moins une fois",
        p: [
          "Les cascades se jettent dans un canyon bordé d'oliviers, de rochers rouges et de petits moulins. Selon la saison, le débit peut être très impressionnant : le printemps, après les pluies, est souvent le meilleur moment.",
        ],
      },
      {
        h: "Les singes magots et la balade en barque",
        p: [
          "Le site abrite des macaques de Barbarie (singes magots), que l'on croise sur les sentiers. Observez-les à distance et ne les nourrissez pas.",
          "Au pied des chutes, de petites barques permettent de s'approcher de la brume. C'est une activité facultative, payée sur place.",
        ],
      },
      {
        h: "Organiser la journée",
        p: [
          "Il faut compter environ 2 h 30 à 3 heures de route dans chaque sens. Le mieux est de partir tôt le matin, de visiter les cascades, de déjeuner sur place, puis de rentrer en fin d'après-midi.",
          "Avec un chauffeur privé, vous profitez du trajet sans conduire, et nous pouvons prévoir un arrêt photo en chemin si vous le souhaitez.",
        ],
      },
    ],
    tips: [
      "Partez tôt : la route est longue et vous aurez plus de temps sur le site.",
      "Portez de bonnes chaussures : les marches et les rochers sont humides.",
      "Gardez la nourriture hors de vue des singes.",
    ],
    faq: [
      { q: "Combien de temps dure la route ?", a: "Environ 2 h 30 à 3 h dans chaque sens depuis Marrakech." },
      { q: "Quand les cascades sont-elles les plus belles ?", a: "Au printemps, quand le débit est important. En fin d'été, il peut être plus faible." },
      { q: "Peut-on le faire dans la journée ?", a: "Oui, en partant tôt le matin. C'est une journée complète." },
    ],
  },
  {
    slug: "essaouira-excursion-marrakech",
    enSlug: "essaouira-coastal-escape",
    tourId: "essaouira",
    title: "Essaouira : excursion d'une journée depuis Marrakech",
    metaTitle: "Essaouira depuis Marrakech : excursion d'une journée",
    metaDesc: "Essaouira à environ 2 h 30 de Marrakech : médina classée UNESCO, port de pêche, remparts et plage. Idées de visite et prix en voiture privée.",
    lead: "Essaouira, ville du vent et de l'Atlantique, contraste avec Marrakech : médina blanche et bleue, remparts face à l'océan et port de pêche animé. On peut la découvrir en une journée.",
    image: B + "Essaouira%202-f846BdGpGEiRJ2RpV1SafNl71Wvt0D.jpeg",
    duration: "10 à 12 h",
    location: "Essaouira, Maroc",
    category: "Côte",
    sections: [
      {
        h: "Une médina classée au patrimoine mondial",
        p: [
          "La médina d'Essaouira est classée à l'UNESCO. Ses ruelles régulières, ses boutiques d'artisans (bois de thuya, bijoux, peintures) et ses murs blanchis en font une visite plus facile et plus calme que Marrakech.",
        ],
      },
      {
        h: "Le port, les remparts et la plage",
        p: [
          "Ne manquez pas le port de pêche, où l'on mange du poisson grillé frais, ni la Skala, les remparts face à l'océan, pour la vue. La plage de la ville est souvent venteuse : c'est un lieu réputé pour le kitesurf et le windsurf.",
        ],
      },
      {
        h: "Organiser la journée",
        p: [
          "La route dure environ 2 h 30 à 3 h. Partez le matin, déjeuner à Essaouira, puis rentrez dans l'après-midi ou en début de soirée. Si vous avez du temps, une nuit sur place laisse plus de souplesse.",
          "Nous pouvons aussi prévoir un arrêt chez une coopérative d'huile d'argan sur la route, si cela vous intéresse.",
        ],
      },
    ],
    tips: [
      "Prenez une veste : il y a souvent du vent, même en été.",
      "Demandez le prix avant de commander au port, ou choisissez un restaurant affiché.",
      "Prévoyez du temps pour flâner : la médina se visite à pied.",
    ],
    faq: [
      { q: "Peut-on visiter Essaouira en une journée ?", a: "Oui, c'est une longue journée mais très faisable, avec départ tôt le matin." },
      { q: "Quelle est la distance depuis Marrakech ?", a: "Environ 180 km, soit 2 h 30 à 3 h de route." },
      { q: "Quel est le prix ?", a: "130 € par voiture privée, pour 1 à 7 personnes. Les repas et les achats sont en plus." },
    ],
  },
  {
    slug: "imlil-haut-atlas-excursion-marrakech",
    enSlug: "atlas-mountains-imlil",
    tourId: "imlil",
    title: "Imlil et le Haut Atlas : excursion depuis Marrakech",
    metaTitle: "Imlil et Haut Atlas depuis Marrakech : guide",
    metaDesc: "Imlil, village berbère au pied du Toubkal, à environ 1 h 30 de Marrakech : randonnées faciles, thé chez l'habitant et prix de l'excursion.",
    lead: "Imlil est le village de départ vers le Toubkal, le plus haut sommet d'Afrique du Nord. Même sans faire d'alpinisme, on y trouve des sentiers faciles, des vallées vertes et l'accueil des familles berbères.",
    image: B + "Haut%20Atlas%20et%20Imlil%201-wla7Ea7HsgpZMeArvcPHLS50Qdn9zW.jpeg",
    duration: "8 h",
    location: "Imlil, Maroc",
    category: "Montagne",
    sections: [
      {
        h: "Au pied du Toubkal",
        p: [
          "Le village d'Imlil se trouve à environ 1 h 30 de Marrakech, à environ 1 700 m d'altitude. Il est entouré de vergers, de cascades et de crêtes enneigées une grande partie de l'année.",
        ],
      },
      {
        h: "Des randonnées pour tous les niveaux",
        p: [
          "Sans guide d'expédition, vous pouvez faire une balade d'une à trois heures vers des villages voisins comme Aremd, avec des vues superbes. Pour une randonnée plus longue, nous pouvons organiser un guide local.",
          "Beaucoup de familles proposent un thé à la menthe ou un déjeuner simple : c'est une belle façon de rencontrer les habitants.",
        ],
      },
      {
        h: "Meilleure période",
        p: [
          "Le printemps et l'automne sont les plus agréables : températures douces et sentiers secs. En été, la montagne est fraîche par rapport à Marrakech. En hiver, il peut y avoir de la neige : renseignez-vous avant de partir.",
        ],
      },
    ],
    tips: [
      "Portez de vraies chaussures de marche et des couches de vêtements.",
      "Emportez de l'eau et de la crème solaire, l'altitude intensifie le soleil.",
      "Dites-nous votre niveau pour adapter la balade.",
    ],
    faq: [
      { q: "Faut-il être sportif ?", a: "Non, il existe des balades faciles de quelques heures. Pour le Toubkal, il faut un guide et plusieurs jours." },
      { q: "Quelle est la distance depuis Marrakech ?", a: "Environ 1 h 30 de route jusqu'à Imlil." },
      { q: "Combien coûte l'excursion ?", a: "90 € par voiture privée, pour 1 à 7 personnes, hors repas et guide." },
    ],
  },
  {
    slug: "ouarzazate-ait-ben-haddou-excursion-marrakech",
    enSlug: "ouarzazate-ait-ben-haddou",
    tourId: "ouarzazate",
    title: "Ouarzazate et Aït Ben Haddou : excursion depuis Marrakech",
    metaTitle: "Aït Ben Haddou et Ouarzazate depuis Marrakech",
    metaDesc: "Aït Ben Haddou (UNESCO) et Ouarzazate à la journée depuis Marrakech : col du Tizi n'Tichka, kasbahs et studios de cinéma. Conseils et prix.",
    lead: "Franchir le Haut Atlas par le col du Tizi n'Tichka pour atteindre Aït Ben Haddou, un ksar de terre classé à l'UNESCO, est l'une des plus belles journées possibles depuis Marrakech.",
    image: B + "Ouarzazate%201-PNTwunWyPnmq529bUtTaNUPpZyHNZW.jpeg",
    duration: "12 h",
    location: "Ouarzazate, Maroc",
    category: "Culture",
    sections: [
      {
        h: "La route du Tizi n'Tichka",
        p: [
          "Le trajet traverse le Haut Atlas par le col du Tizi n'Tichka, à plus de 2 000 m d'altitude. La route est spectaculaire : lacets, villages de montagne et changement brutal de paysage, des sommets à la vallée du Drâa.",
        ],
      },
      {
        h: "Aït Ben Haddou, un ksar de terre",
        p: [
          "Aït Ben Haddou est un village fortifié en pisé, classé à l'UNESCO, qui a servi de décor à de nombreux films. On le visite à pied en montant jusqu'au sommet pour la vue.",
        ],
      },
      {
        h: "Ouarzazate, la ville du cinéma",
        p: [
          "Ouarzazate est connue pour ses studios de cinéma, tandis que la kasbah de Taourirt présente l'architecture traditionnelle de la région. On peut y faire une pause déjeuner avant de repartir.",
        ],
      },
      {
        h: "Une longue journée",
        p: [
          "Comptez environ 4 heures de route dans chaque sens : le départ est donc très tôt le matin. Si vous voulez moins de route, une nuit sur place ou un circuit vers le désert est une bonne option.",
        ],
      },
    ],
    tips: [
      "Partez dès 7 h pour avoir du temps sur place.",
      "Emportez une veste : il peut faire frais au col, même en été.",
      "Prévoyez un déjeuner au village, avec vue sur le ksar.",
    ],
    faq: [
      { q: "Peut-on faire Aït Ben Haddou dans la journée ?", a: "Oui, mais c'est une très longue journée, avec environ 4 h de route dans chaque sens." },
      { q: "Quel est le meilleur moment ?", a: "Le matin et en fin d'après-midi, quand la lumière est douce et qu'il fait moins chaud." },
      { q: "Quel est le prix ?", a: "130 € par voiture privée, pour 1 à 7 personnes, hors repas et entrées." },
    ],
  },
]

export const findBlogFr = (slug: string) => blogFr.find((b) => b.slug === slug)
