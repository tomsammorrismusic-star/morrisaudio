import { useRef, useState, useEffect } from 'react'
import { Play, Film, ChevronLeft, ChevronRight, X } from 'lucide-react'

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
  const [selectedItem, setSelectedItem] = useState<VideoItem | null>(null)
  const [isPaused, setIsPaused] = useState(false)

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

  const handleCardClick = (item: VideoItem) => {
    setSelectedItem(item)
  }

  useEffect(() => {
    if (!scrollContainer.current) return

    if (isPaused) {
      scrollContainer.current.style.animationPlayState = 'paused'
    } else {
      scrollContainer.current.style.animationPlayState = 'running'
    }
  }, [isPaused])

  const handleLightboxNav = (direction: 'prev' | 'next') => {
    if (!selectedItem) return
    const currentIndex = videoItems.findIndex((item) => item.id === selectedItem.id)
    const newIndex = direction === 'prev' ? (currentIndex - 1 + videoItems.length) % videoItems.length : (currentIndex + 1) % videoItems.length
    setSelectedItem(videoItems[newIndex])
  }

  return (
    <>
      <div className="relative w-full flex flex-col items-center gap-6 overflow-visible">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-gray-500 hover:text-yellow-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors z-10 bubble-hover"
          aria-label="Previous video"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Outer scroll container with overflow-x-auto */}
        <div className="w-full px-16 overflow-x-auto py-8">
          {/* Inner scroll container without overflow clipping */}
          <div
            ref={scrollContainer}
            className="flex gap-4 scroll-smooth no-scrollbar video-wheel-scroll"
            onScroll={checkScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
          >
            {videoItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-64 overflow-visible">
                <button
                  onClick={() => handleCardClick(item)}
                  className="w-full h-56 rounded-xl bg-gradient-to-br from-gray-300 to-gray-200 border border-gray-400 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-yellow-500/50 transition-colors shadow-xl group bubble-hover overflow-visible"
                >
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${CATEGORY_COLORS[item.category] ?? 'from-gray-300 to-gray-200'} border border-gray-400 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-yellow-500/50 transition-colors shadow-xl relative overflow-visible`}>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-200" />
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center relative z-10">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                    <div className="text-center px-4 relative z-10">
                      <p className="text-white font-semibold text-sm leading-tight">{item.title}</p>
                      <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">{item.category}</p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-gray-500 hover:text-yellow-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors z-10 bubble-hover"
          aria-label="Next video"
        >
          <ChevronRight size={32} />
        </button>

        <p className="text-gray-600 text-sm flex items-center gap-2">
          <Film size={14} />
          Use arrows to browse productions
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-white rounded-xl border border-gray-300 shadow-2xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 text-gray-600 hover:text-black bg-gray-100 rounded-lg z-10 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Lightbox content */}
            <div className={`w-full h-96 rounded-t-xl bg-gradient-to-br ${CATEGORY_COLORS[selectedItem.category] ?? 'from-gray-300 to-gray-200'} flex flex-col items-center justify-center gap-4 relative overflow-hidden`}>
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Content section */}
            <div className="p-8 bg-white">
              <h3 className="text-3xl font-bold mb-2 text-black">{selectedItem.title}</h3>
              <p className="text-yellow-500 uppercase text-sm tracking-wider font-semibold mb-4">{selectedItem.category}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This production showcases professional audio work in the {selectedItem.category.toLowerCase()} industry, featuring cutting-edge recording techniques and post-production expertise.
              </p>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={() => handleLightboxNav('prev')}
                  className="p-2 text-gray-600 hover:text-yellow-500 transition-colors bubble-hover"
                  aria-label="Previous item"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-gray-600 text-sm">
                  {videoItems.findIndex((item) => item.id === selectedItem.id) + 1} / {videoItems.length}
                </span>
                <button
                  onClick={() => handleLightboxNav('next')}
                  className="p-2 text-gray-600 hover:text-yellow-500 transition-colors bubble-hover"
                  aria-label="Next item"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
