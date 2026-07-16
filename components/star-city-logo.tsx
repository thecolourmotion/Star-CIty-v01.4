export function StarCityLogo({ size = 'default' }: { size?: 'default' | 'sm' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    default: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <div className={`${sizeClasses[size]} flex items-center justify-center`}>
      <div className="relative">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="12" fill="currentColor" fillOpacity="0.1" />
          <path
            d="M20 10V30M10 20H30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}
