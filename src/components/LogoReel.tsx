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
      className="logo-reel-container relative w-full py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollContainer}
        className="logo-reel-scroll flex gap-12 overflow-y-visible overflow-x-hidden"
        style={{
          scrollBehavior: 'auto',
          scrollbarWidth: 'none',
          overflowX: 'auto',
        }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="logo-item flex-shrink-0 flex items-center justify-center px-8 py-6 rounded-xl border border-gray-300 bg-gray-50 hover:border-yellow-500/50 hover:bg-gray-100 transition-all duration-300 min-w-max bubble-hover"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{item.logo}</span>
              <span className="text-lg font-semibold text-gray-700">{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  )
}
