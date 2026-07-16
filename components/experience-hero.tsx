import Image from 'next/image'

interface ExperienceHeroProps {
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

export function ExperienceHero({
  title,
  subtitle,
  image,
  imageAlt,
}: ExperienceHeroProps) {
  return (
    <section className="w-full relative h-96 overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover w-full h-full"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-2">{title}</h1>
          <p className="text-xl text-balance">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
