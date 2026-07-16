import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="w-full relative h-screen overflow-hidden">
      <Image
        src="/images/hero-building.png"
        alt="Star City Complex exterior and front view"
        fill
        className="object-cover w-full h-full"
        priority
        sizes="100vw"
      />
    </section>
  )
}
