import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { CONTACT_EMAIL, SITE_URL } from "@/lib/tours"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ZikassTours collects and uses your personal data.",
  alternates: { canonical: SITE_URL + "/privacy" },
}

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy / Politique de confidentialité"
      updated="Last updated: October 2026"
      en={[
        { h: "What we collect", p: ["Booking requests: the details you choose to send us (name, WhatsApp number, hotel, date, number of people, message). They are sent directly to our WhatsApp or email; the website does not store them.", "Reviews: first name, country, trip, rating, text and optional photo. They are stored securely and published only after you give consent and we approve the review.", "Analytics: anonymous visit statistics (Vercel Analytics, and Google Analytics / Meta Pixel when enabled) to improve the website."] },
        { h: "Why", p: ["To answer your request, organize your transfer or trip, and show genuine customer reviews. We never sell your data."] },
        { h: "How long", p: ["Booking messages are kept as long as needed for your trip and accounting. Reviews stay online until you ask us to remove them."] },
        { h: "Your rights", p: [`You can ask to access, correct or delete your data (including a published review or photo) at any time: ${CONTACT_EMAIL}. Moroccan law 09-08 on personal data protection applies.`] },
      ]}
      fr={[
        { h: "Données collectées", p: ["Demandes de réservation : les informations que vous choisissez de nous envoyer (nom, numéro WhatsApp, hôtel, date, nombre de personnes, message). Elles nous parviennent directement par WhatsApp ou email ; le site ne les enregistre pas.", "Avis : prénom, pays, excursion, note, texte et photo facultative. Ils sont stockés de façon sécurisée et publiés uniquement avec votre accord et après validation.", "Statistiques : mesures de visites anonymes (Vercel Analytics, et Google Analytics / Meta Pixel si activés) pour améliorer le site."] },
        { h: "Finalités", p: ["Répondre à votre demande, organiser votre transfert ou excursion et afficher des avis clients authentiques. Nous ne vendons jamais vos données."] },
        { h: "Durée", p: ["Les messages de réservation sont conservés le temps nécessaire au voyage et à la comptabilité. Les avis restent en ligne jusqu'à ce que vous demandiez leur suppression."] },
        { h: "Vos droits", p: [`Vous pouvez demander l'accès, la correction ou la suppression de vos données (y compris un avis ou une photo publiés) à tout moment : ${CONTACT_EMAIL}. La loi marocaine 09-08 relative à la protection des données personnelles s'applique.`] },
      ]}
    />
  )
}
