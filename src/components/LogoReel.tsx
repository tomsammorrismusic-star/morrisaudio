import { useRef, useEffect, useState } from 'react'

interface LogoItem {
  id: string
  name: string
  logo: string
  isImage?: boolean
  bg?: string
}

const logos: LogoItem[] = [
  { id: '1', name: 'Google', logo: 'https://cdn.builder.io/api/v1/image/assets%2F1a8d84947e9444f98df7c975eda41851%2Fc9df219b912547e183a428606a5457c7', isImage: true },
  { id: '2', name: 'EE', logo: 'https://cdn.builder.io/api/v1/image/assets%2F1a8d84947e9444f98df7c975eda41851%2Fc48271bcac514f62a44ec3bfb21dcae2', isImage: true },
  { id: '3', name: 'Manchester United', logo: 'https://cdn.builder.io/api/v1/image/assets%2F1a8d84947e9444f98df7c975eda41851%2F5a2c905ae39d4e0685007a989717d45b', isImage: true },
  { id: '4', name: 'Newcastle United', logo: 'https://cdn.builder.io/api/v1/image/assets%2F1a8d84947e9444f98df7c975eda41851%2F07095ea69744465dbbd66041d74fd75e', isImage: true },
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
            className="logo-item flex-shrink-0 flex items-center justify-center px-6 py-6 rounded-3xl transition-all duration-300 min-w-max bubble-hover"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center gap-3">
              {item.isImage ? (
                <img src={item.logo} alt={item.name} className="w-24 h-24 object-contain rounded-2xl" />
              ) : (
                <span className="text-4xl">{item.logo}</span>
              )}
              <span className="text-2xl font-semibold text-slate-700">{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F5F0E8] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F5F0E8] to-transparent pointer-events-none" />
    </div>
  )
}
