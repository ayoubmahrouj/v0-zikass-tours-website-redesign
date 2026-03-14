"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage, getWhatsAppUrl } from "@/lib/language-context"

interface Destination {
  id: string
  images: string[]
  duration: string
  waKeyReserve: string
  waKeyContact: string
}

const destinations: Destination[] = [
  {
    id: "agafay",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%201-xgUT88Q06ArclrCtCPYodpnOPQkZiA.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%202-WYCvFoltROTV48UKLq1577BL5KuYtR.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%203-g0MdGQTLdiIVneifekEUHMqyLGrQ4h.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%204-6TVB2ytuBOTGbhxXC1cGv5IfQVN438.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agafay%205-weOoQawpTLizlvdazeYVxuynQqcHgK.jpeg",
    ],
    duration: "4-5h",
    waKeyReserve: "wa.agafay.reserve",
    waKeyContact: "wa.agafay.contact",
  },
  {
    id: "essaouira",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira%201-1o2U922jKgunuFd4xqcG1qp8v1SuFp.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira%202-f846BdGpGEiRJ2RpV1SafNl71Wvt0D.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira%203-q6GnDEH91L2FNismn6mpAD1vFjbF6h.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira%204-5OFUeGBUrv4Q5XlBHMjO17MU8X14Ff.jpeg",
    ],
    duration: "10-12h",
    waKeyReserve: "wa.essaouira.reserve",
    waKeyContact: "wa.essaouira.contact",
  },
  {
    id: "ouarzazate",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouarzazate%201-PNTwunWyPnmq529bUtTaNUPpZyHNZW.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouarzazate%202-7cKdN6QuRJJbo9ARYLd4GRmL0OUgCz.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ouarzazate%203-4esDgX3C74lXW80OKsebVvEsjsoJ9V.jpeg",
    ],
    duration: "12h",
    waKeyReserve: "wa.ouarzazate.reserve",
    waKeyContact: "wa.ouarzazate.contact",
  },
  {
    id: "imlil",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haut%20Atlas%20et%20Imlil%201-wla7Ea7HsgpZMeArvcPHLS50Qdn9zW.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haut%20Atlas%20et%20Imlil%202-weyetxMYFnOPZ320AZjP83mgjWasiR.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haut%20Atlas%20et%20Imlil%203-REROscKav4bKRZ5zspWEQwu8eMkBS3.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haut%20Atlas%20et%20Imlil%204-JrA8M2gLjsiJXhv6GRowUMEsLsxCJF.jpeg",
    ],
    duration: "8h",
    waKeyReserve: "wa.imlil.reserve",
    waKeyContact: "wa.imlil.contact",
  },
]

function ImageGallery({ images, altBase }: { images: string[]; altBase: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      {/* Main Gallery */}
      <div className="relative">
        {/* Main Image */}
        <div 
          className="relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer group"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={images[currentIndex]}
            alt={`${altBase} - Image ${currentIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </>
          )}
          
          {/* Image Counter */}
          <div className="absolute bottom-3 right-3 px-3 py-1 bg-foreground/70 text-background text-sm rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all ${
                idx === currentIndex 
                  ? "ring-2 ring-secondary ring-offset-2 ring-offset-background" 
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${altBase} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 text-background hover:text-secondary transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 p-3 text-background hover:text-secondary transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-[16/10]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[currentIndex]}
              alt={`${altBase} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 p-3 text-background hover:text-secondary transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/20 text-background text-sm rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Destinations() {
  const { t } = useLanguage()

  return (
    <section id="excursions" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
            {t("destinations.badge")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("destinations.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("destinations.subtitle")}
          </p>
        </div>

        {/* Destinations */}
        <div className="space-y-24">
          {destinations.map((destination, index) => (
            <article 
              key={destination.id} 
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Gallery - Alternating sides */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <ImageGallery 
                  images={destination.images} 
                  altBase={t(`destination.${destination.id}.name`)} 
                />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <h3 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4">
                    {t(`destination.${destination.id}.name`)}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-secondary" />
                      {destination.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-secondary" />
                      Marrakech
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t(`destination.${destination.id}.desc`)}
                  </p>
                </div>

                {/* WhatsApp Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold"
                  >
                    <a
                      href={getWhatsAppUrl(t(destination.waKeyReserve))}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="w-5 h-5 mr-2" />
                      {t("destinations.reserve")}
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 font-semibold"
                  >
                    <a
                      href={getWhatsAppUrl(t(destination.waKeyContact))}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="w-5 h-5 mr-2" />
                      {t("destinations.contact")}
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
