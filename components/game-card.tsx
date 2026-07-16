'use client'

import Image from 'next/image'
import { Users, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

interface GameCardProps {
  name: string
  image: string
  players: string
  points: number
}

export function GameCard({ name, image, players, points }: GameCardProps) {
  const { t } = useLanguage()

  return (
    <div className="bg-background rounded-xl overflow-hidden border border-border transition-all duration-300 hover:shadow-xl hover:scale-105 group">
      {/* Game Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Game Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{name}</h3>
        
        <div className="space-y-3">
          {/* Players */}
          <div className="flex items-center gap-3 text-sm">
            <Users size={18} />
            <span>{players}</span>
          </div>

          {/* Points */}
          <div className="flex items-center gap-3 text-sm">
            <Zap size={18} style={{ color: 'rgb(215, 204, 50)' }} />
            <span>{points} {t('gameCard.pointsPerRound')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
