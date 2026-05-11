import { useRef, useEffect, useState } from 'react'

interface LogoItem {
  id: string
  name: string
  logo: string
}

const logos: LogoItem[] = [
  { id: '1', name: 'Google', logo: '🔵' },
  { id: '2', name: 'EE', logo: '🟡' },
  { id: '3', name: 'Manchester United', logo: '🔴' },
  { id: '4', name: 'Newcastle United', logo: '⚫' },
]

export default function LogoReel() {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || !scrollContainer.current) return

    const container = scrollContainer.current

    const scroll = () => {
      let scrollPos = container.scrollLeft
      scrollPos += 1
      if (scrollPos > container.scrollWidth - container.clientWidth) {
        scrollPos = 0
      }
      container.scrollLeft = scrollPos
    }

    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      className="logo-reel-container relative w-full"
      style={{ padding: '3rem 0' }}
    >
      <div
        ref={scrollContainer}
        className="logo-reel-scroll flex gap-12 overflow-x-auto items-center"
        style={{
          scrollBehavior: 'auto',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          overflowY: 'visible',
          minHeight: '200px',
        }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="logo-item flex-shrink-0 flex items-center justify-center px-8 py-6 rounded-xl border border-emerald-700 bg-emerald-800 hover:border-emerald-700/50 hover:bg-emerald-800 transition-all duration-300 min-w-max bubble-hover"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{item.logo}</span>
              <span className="text-lg font-semibold text-gray-100">{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
    </div>
  )
}
