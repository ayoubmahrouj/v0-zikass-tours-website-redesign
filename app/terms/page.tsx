import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { CONTACT_EMAIL, PHONE_DISPLAY, SITE_URL } from "@/lib/tours"

export const metadata: Metadata = {
  title: "Terms & Booking Conditions",
  description: "Booking, payment and cancellation conditions for ZikassTours private transfers and day trips from Marrakech.",
  alternates: { canonical: SITE_URL + "/terms" },
}

export default function Page() {
  return (
    <LegalPage
      title="Terms & Booking Conditions / Conditions de réservation"
      updated="Last updated: October 2026"
      en={[
        { h: "Booking", p: ["You send a request through the website form, WhatsApp, phone or email. Your booking is confirmed only when we send you a written confirmation (WhatsApp or email) with the date, pickup time and price."] },
        { h: "Prices", p: ["Prices are per private vehicle for 1 to 7 people, not per person, unless stated otherwise. They include the vehicle, the driver, fuel and hotel/riad pickup in Marrakech. Meals, entrance fees, activities (camel ride, quad, etc.) and local guides are not included unless written in your confirmation."] },
        { h: "Payment", p: ["No deposit is required. You pay the driver in cash (euros or dirhams) on the day of the trip."] },
        { h: "Cancellation", p: ["Cancellation is free up to 24 hours before the pickup time. Please tell us by WhatsApp or email. For repeated no-shows we may refuse future bookings."] },
        { h: "Delays & changes", p: ["Please be ready at the pickup time. Itineraries can change because of weather, road or safety conditions; in that case we will propose an alternative or a fair adjustment."] },
        { h: "Contact", p: [`${PHONE_DISPLAY} · ${CONTACT_EMAIL}`] },
      ]}
      fr={[
        { h: "Réservation", p: ["Vous envoyez une demande via le formulaire du site, WhatsApp, téléphone ou email. La réservation est confirmée uniquement après notre confirmation écrite (WhatsApp ou email) indiquant la date, l'heure de prise en charge et le prix."] },
        { h: "Prix", p: ["Les prix sont par véhicule privé pour 1 à 7 personnes, et non par personne, sauf mention contraire. Ils incluent le véhicule, le chauffeur, le carburant et la prise en charge à votre hôtel/riad à Marrakech. Repas, droits d'entrée, activités (dromadaire, quad, etc.) et guides locaux ne sont pas inclus sauf mention dans la confirmation."] },
        { h: "Paiement", p: ["Aucun acompte n'est demandé. Vous payez le chauffeur en espèces (euros ou dirhams) le jour de l'excursion."] },
        { h: "Annulation", p: ["L'annulation est gratuite jusqu'à 24 heures avant l'heure de prise en charge. Prévenez-nous par WhatsApp ou email. En cas d'absences répétées, nous pouvons refuser de futures réservations."] },
        { h: "Retards et modifications", p: ["Merci d'être prêts à l'heure prévue. L'itinéraire peut changer pour des raisons de météo, de route ou de sécurité ; nous proposerons alors une alternative ou un ajustement équitable."] },
        { h: "Contact", p: [`${PHONE_DISPLAY} · ${CONTACT_EMAIL}`] },
      ]}
    />
  )
}
