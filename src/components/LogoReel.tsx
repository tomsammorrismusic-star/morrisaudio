import { useRef, useEffect, useState } from 'react'

interface LogoItem {
  id: string
  name: string
  logo: React.ReactNode
}

const GoogleLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#F1F1F1" />
    <path d="M12 21c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9z" fill="#4285F4" />
    <path d="M16.51 12.27c0-.79-.71-1.56-1.84-1.84v-1.03c.73.03 1.43.27 2.04.65.43.28.75.67.96 1.12.21.45.31.93.31 1.43 0 .5-.1.98-.31 1.43-.21.45-.53.84-.96 1.12-.61.38-1.31.62-2.04.65v-1.03c1.13-.28 1.84-1.05 1.84-1.84z" fill="#EA4335" />
    <path d="M12 18.5c-3.59 0-6.5-2.91-6.5-6.5S8.41 5.5 12 5.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" fill="none" stroke="#34A853" strokeWidth="1.5" />
  </svg>
)

const EELogo = () => (
  <img
    src="https://cdn.builder.io/api/v1/image/assets%2F1a8d84947e9444f98df7c975eda41851%2F85b0e76edc2c47ab841aa836b8576d83"
    alt="EE"
    className="w-10 h-10 object-contain"
  />
)

const ManchesterUnitedLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#DA291C" />
    <path d="M12 3 L15.5 9.5 L22.5 9.5 L17.25 14 L19.75 20.5 L12 16 L4.25 20.5 L6.75 14 L1.5 9.5 L8.5 9.5 Z" fill="white" />
    <circle cx="12" cy="12" r="11" fill="none" stroke="#FFD100" strokeWidth="0.8" />
  </svg>
)

const NewcastleLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="black" />
    <path d="M12 3 L15.5 9.5 L22.5 9.5 L17.25 14 L19.75 20.5 L12 16 L4.25 20.5 L6.75 14 L1.5 9.5 L8.5 9.5 Z" fill="white" />
    <circle cx="12" cy="12" r="11" fill="none" stroke="white" strokeWidth="0.8" />
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
