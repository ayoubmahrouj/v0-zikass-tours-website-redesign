"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage, getWhatsAppUrl, WHATSAPP_NUMBER, EMAIL } from "@/lib/language-context"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Contact() {
  const { t } = useLanguage()

  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 bg-muted/30"
      aria-labelledby="contact-title"
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="ZikassTours" />
      <meta itemProp="telephone" content="+212661377597" />
      <meta itemProp="email" content="zikasstours@gmail.com" />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
            {t("contact.title")}
          </span>
          <h2 
            id="contact-title"
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card">
              <CardContent className="p-8 text-center">
                <a
                  href={getWhatsAppUrl(t("wa.general"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <WhatsAppIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">{WHATSAPP_NUMBER}</p>
                </a>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card">
              <CardContent className="p-8 text-center">
                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="group block"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{t("contact.phone")}</h3>
                  <p className="text-muted-foreground text-sm">{WHATSAPP_NUMBER}</p>
                </a>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card">
              <CardContent className="p-8 text-center">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group block"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{t("contact.email")}</h3>
                  <p className="text-muted-foreground text-sm break-all">{EMAIL}</p>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Location & Main CTA */}
          <Card className="border-0 shadow-xl bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-foreground/20 rounded-xl">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-1">{t("contact.location")}</h3>
                    <p className="opacity-80">{t("contact.subtitle")}</p>
                  </div>
                </div>
                
                <Button
                  asChild
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg"
                >
                  <a
                    href={getWhatsAppUrl(t("wa.general"))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="w-6 h-6 mr-2" />
                    {t("hero.cta.whatsapp")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
