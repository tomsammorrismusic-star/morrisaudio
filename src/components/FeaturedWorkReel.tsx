import { useRef, useEffect, useState } from 'react'
import { Play } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  category: string
}

const videos: VideoItem[] = [
  { id: '1', title: 'Feature Film Location Sound', category: 'Film' },
  { id: '2', title: 'Documentary — Wildlife Series', category: 'Documentary' },
  { id: '3', title: 'TV Commercial — Automotive', category: 'Commercial' },
  { id: '4', title: 'Short Film — Drama', category: 'Drama' },
  { id: '5', title: 'Corporate Interview Package', category: 'Corporate' },
  { id: '6', title: 'Social Commercial — Gold Bullion', category: 'Commercial' },
  { id: '7', title: 'Corporate Podcast — VCL Vintners', category: 'Corporate' },
  { id: '8', title: 'Podcast & Voice Over', category: 'Audio' },
]

const CATEGORY_COLORS: Record<string, string> = {
  Film: 'from-blue-900 to-blue-700',
  Documentary: 'from-green-900 to-green-700',
  Commercial: 'from-purple-900 to-purple-700',
  Drama: 'from-red-900 to-red-700',
  Corporate: 'from-gray-800 to-gray-600',
  Music: 'from-pink-900 to-pink-700',
  News: 'from-orange-900 to-orange-700',
  Audio: 'from-teal-900 to-teal-700',
}

export default function FeaturedWorkReel() {
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
      className="featured-work-reel relative w-full"
      style={{ padding: '3rem 0' }}
    >
      <div
        ref={scrollContainer}
        className="featured-work-scroll flex gap-6 overflow-x-auto items-center"
        style={{
          scrollBehavior: 'auto',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          overflowY: 'visible',
          minHeight: '400px',
        }}
      >
        {/* Duplicate videos for seamless loop */}
        {[...videos, ...videos].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center min-w-max"
            style={{ perspective: '1000px' }}
          >
            <button
              className={`relative w-64 h-64 rounded-xl bg-gradient-to-br ${CATEGORY_COLORS[item.category] ?? 'from-gray-300 to-gray-200'} border border-gray-400 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-yellow-500 transition-all duration-500 ease-out group bubble-hover hover:shadow-2xl hover:scale-110`}
              style={{ transformOrigin: 'center' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              </div>
              <div className="text-center px-3">
                <p className="text-white font-semibold text-xs leading-tight line-clamp-2">{item.title}</p>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  )
}
