'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

interface ExperienceCardProps {
  title: string
  image: string
  description: string
  href?: string
}

export function ExperienceCard({
  title,
  image,
  description,
  href = '#',
}: ExperienceCardProps) {
  const { t } = useLanguage()

  return (
    <div className="group h-full">
      <div className="relative h-72 sm:h-80 overflow-hidden rounded-2xl mb-5 transition-all duration-500 ease-out">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="px-2">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#d7cc32] mb-2 group-hover:text-[#d7cc32]/80 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
          {description}
        </p>
        <Link href={href}>
          <Button className="w-full gap-2 bg-[#d7cc32] hover:bg-[#d7cc32]/90 text-slate-900">
            {t('buttons.explore')}
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </div>
  )
}
