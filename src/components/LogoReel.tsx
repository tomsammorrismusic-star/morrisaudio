import { useRef, useEffect, useState } from 'react'

interface LogoItem {
  id: string
  name: string
  logo: React.ReactNode
}

const GoogleLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="18" fontSize="16" fontWeight="bold" fill="#4285F4">G</text>
    <text x="8" y="18" fontSize="16" fontWeight="bold" fill="#EA4335">o</text>
    <text x="13" y="18" fontSize="16" fontWeight="bold" fill="#FBBC04">o</text>
    <text x="18" y="18" fontSize="16" fontWeight="bold" fill="#4285F4">g</text>
  </svg>
)

const EELogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="5" height="12" fill="#FF6B00" />
    <rect x="10" y="6" width="5" height="12" fill="#FF6B00" />
    <line x1="4" y1="10" x2="7" y2="10" stroke="white" strokeWidth="1.5" />
    <line x1="4" y1="14" x2="7" y2="14" stroke="white" strokeWidth="1.5" />
    <line x1="12" y1="10" x2="15" y2="10" stroke="white" strokeWidth="1.5" />
    <line x1="12" y1="14" x2="15" y2="14" stroke="white" strokeWidth="1.5" />
  </svg>
)

const ManchesterUnitedLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#DA291C" />
    <path d="M12 4 L14 8 L18 8 L15 11 L16 15 L12 12 L8 15 L9 11 L6 8 L10 8 Z" fill="white" />
  </svg>
)

const NewcastleLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="black" />
    <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="0.5" />
    <path d="M12 6 L14 10 L18 10 L15 13 L16 17 L12 14 L8 17 L9 13 L6 10 L10 10 Z" fill="white" />
  </svg>
)

const logos: LogoItem[] = [
  { id: '1', name: 'Google', logo: <GoogleLogo /> },
  { id: '2', name: 'EE', logo: <EELogo /> },
  { id: '3', name: 'Manchester United', logo: <ManchesterUnitedLogo /> },
  { id: '4', name: 'Newcastle United', logo: <NewcastleLogo /> },
]

export default function LogoReel() {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!scrollContainer.current) return

    const container = scrollContainer.current
    if (isPaused) {
      container.style.animationPlayState = 'paused'
    } else {
      container.style.animationPlayState = 'running'
    }
  }, [isPaused])

  return (
    <div
      className="logo-reel-container relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer scroll container with overflow-x-auto */}
      <div className="overflow-x-auto py-8">
        {/* Inner scroll container without overflow clipping */}
        <div
          ref={scrollContainer}
          className="logo-reel-scroll flex gap-12"
          style={{
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="logo-item flex-shrink-0 flex items-center justify-center px-8 py-6 rounded-xl border border-gray-300 bg-gray-50 hover:border-yellow-500/50 hover:bg-gray-100 transition-all duration-300 min-w-max bubble-hover"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">{item.logo}</div>
                <span className="text-lg font-semibold text-gray-700">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  )
}
