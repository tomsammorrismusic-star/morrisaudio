import { useRef, useState } from 'react'
import { Play, Film, ChevronLeft, ChevronRight } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  category: string
  thumbnail?: string
  youtubeId?: string
}

const videoItems: VideoItem[] = [
  { id: '1', title: 'Feature Film Location Sound', category: 'Film', youtubeId: '' },
  { id: '2', title: 'Documentary — Wildlife Series', category: 'Documentary', youtubeId: '' },
  { id: '3', title: 'TV Commercial — Automotive', category: 'Commercial', youtubeId: '' },
  { id: '4', title: 'Short Film — Drama', category: 'Drama', youtubeId: '' },
  { id: '5', title: 'Corporate Interview Package', category: 'Corporate', youtubeId: '' },
  { id: '6', title: 'Music Video — Live Recording', category: 'Music', youtubeId: '' },
  { id: '7', title: 'ENG News — Field Recording', category: 'News', youtubeId: '' },
  { id: '8', title: 'Podcast & Voice Over', category: 'Audio', youtubeId: '' },
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

export default function VideoWheel() {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 300
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 600)
    }
  }

  return (
    <div className="relative w-full flex flex-col items-center gap-6">
      {/* Left arrow */}
      <button
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors z-10"
        aria-label="Previous video"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Horizontal scroll container */}
      <div className="w-full px-16">
        <div
          ref={scrollContainer}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
          onScroll={checkScroll}
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
        >
          {videoItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64"
            >
              <div
                className={`w-full h-56 rounded-xl bg-gradient-to-br ${CATEGORY_COLORS[item.category] ?? 'from-gray-800 to-gray-600'} border border-white/10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-amber-400/50 transition-colors shadow-xl`}
              >
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
                <div className="text-center px-4">
                  <p className="text-white font-semibold text-sm leading-tight">{item.title}</p>
                  <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors z-10"
        aria-label="Next video"
      >
        <ChevronRight size={32} />
      </button>

      <p className="text-gray-500 text-sm flex items-center gap-2">
        <Film size={14} />
        Use arrows to browse productions
      </p>
    </div>
  )
}
