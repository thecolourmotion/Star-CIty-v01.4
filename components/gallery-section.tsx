'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/language-context'

const galleryImages = [
  {
    src: '/images/gallery-pizza.png',
    alt: 'People enjoying delicious pizza at Pizza Hot',
    span: 'md:col-span-2',
  },
  {
    src: '/images/gallery-arcade.png',
    alt: 'Friends playing arcade games at Game City',
    span: '',
  },
  {
    src: '/images/gallery-lounge.png',
    alt: 'Guests relaxing in the Private Lounge',
    span: '',
  },
  {
    src: '/images/gallery-pool.png',
    alt: 'People enjoying the luxury pool area',
    span: 'md:col-span-2',
  },
]

export function GallerySection() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">
          {t('gallery.title')}
        </h2>
        <p className="text-center text-[#d7cc32] text-lg mb-12 max-w-2xl mx-auto">
          {t('home.experiences.discover')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className={`relative rounded-lg overflow-hidden group cursor-pointer ${
                image.span
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
