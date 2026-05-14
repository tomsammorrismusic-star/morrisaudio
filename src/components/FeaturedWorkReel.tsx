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
  Music: 'from-pink-900 to-emerald-700',
  News: 'from-orange-900 to-orange-700',
  Audio: 'from-teal-900 to-teal-700',
}

export default function FeaturedWorkReel() {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isPaused || !scrollContainer.current || isMobile) return

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
  }, [isPaused, isMobile])

  return (
    <div
      className="featured-work-reel relative w-full"
      style={{ padding: '3rem 0' }}
    >
      <div
        ref={scrollContainer}
        className="featured-work-scroll flex gap-8 overflow-x-auto items-center video-wheel-scroll"
        style={{
          scrollBehavior: 'auto',
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
              className={`relative w-64 h-64 rounded-3xl bg-gradient-to-br ${CATEGORY_COLORS[item.category] ?? 'from-gray-300 to-gray-200'} border border-slate-700 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-slate-700 transition-all duration-500 ease-out group bubble-hover hover:shadow-2xl hover:scale-110`}
              style={{ transformOrigin: 'center' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center group-hover:bg-brand/30 transition-all duration-300">
                <Play className="w-5 h-5 text-slate-700 fill-white ml-0.5" />
              </div>
              <div className="text-center px-3">
                <p className="text-slate-700 font-semibold text-xs leading-tight line-clamp-2">{item.title}</p>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F5F0E8] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F5F0E8] to-transparent pointer-events-none" />
    </div>
  )
}
