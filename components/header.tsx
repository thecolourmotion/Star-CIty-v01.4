import Image from 'next/image'

export function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center">
          <Image
            src="/star-city-logo.png"
            alt="Star City Complex Logo"
            width={133}
            height={80}
            className="h-auto w-auto"
            priority
          />
        </div>
      </div>
    </header>
  )
}
