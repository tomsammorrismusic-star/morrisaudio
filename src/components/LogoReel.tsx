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
    const halfScrollWidth = container.scrollWidth / 2
    let scrollPos = 0

    const scroll = () => {
      scrollPos += 1
      if (scrollPos >= halfScrollWidth) {
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
                <span className="text-4xl">{item.logo}</span>
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
