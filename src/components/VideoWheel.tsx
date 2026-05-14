import { useRef, useState, useEffect } from 'react'
import { Play, Film, ChevronLeft, ChevronRight, X } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  category: string
  thumbnail?: string
  youtubeId?: string
  description?: string
}

const getYouTubeThumbnail = (youtubeId: string) => {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
}

const videoItems: VideoItem[] = [
  { id: '1', title: 'Feature Film Location Sound', category: 'Film', youtubeId: '' },
  { id: '2', title: 'Documentary — Wildlife Series', category: 'Documentary', youtubeId: '' },
  { id: '3', title: 'TV Commercial — Automotive', category: 'Commercial', youtubeId: '' },
  { id: '4', title: 'Short Film — Drama', category: 'Drama', youtubeId: 'iFlZqFyTiso' },
  { id: '5', title: 'Corporate Interview Package', category: 'Corporate', youtubeId: '' },
  { id: '6', title: 'Social Commercial — Gold Bullion', category: 'Commercial', youtubeId: '58wu_GswQD0' },
  { id: '7', title: 'Corporate Podcast — VCL Vintners', category: 'Corporate', youtubeId: 'L_n0IijJl74', description: 'Professional corporate podcast production for VCL Vintners. This production showcases in-depth interviewing techniques, audio mastering, and production quality suitable for corporate communications and industry discussions.' },
  { id: '8', title: 'Podcast & Voice Over', category: 'Audio', youtubeId: '' },
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
    if (isPaused || !scrollContainer.current) return

    const container = scrollContainer.current
    let scrollPos = 0

    const autoScroll = () => {
      scrollPos += 1
      if (scrollPos > container.scrollWidth - container.clientWidth) {
        scrollPos = 0
      }
      container.scrollLeft = scrollPos
    }

    const interval = setInterval(autoScroll, 50)
    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        scroll('left')
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        scroll('right')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleLightboxNav = (direction: 'prev' | 'next') => {
    if (!selectedItem) return
    const currentIndex = videoItems.findIndex((item) => item.id === selectedItem.id)
    const newIndex = direction === 'prev' ? (currentIndex - 1 + videoItems.length) % videoItems.length : (currentIndex + 1) % videoItems.length
    setSelectedItem(videoItems[newIndex])
  }

  return (
    <>
      <div className="relative w-full flex flex-col items-center gap-8">

        {/* Outer scroll container with overflow hidden for marquee effect */}
        <div className="w-full overflow-hidden py-8">
          {/* Inner scroll container without overflow clipping */}
          <div
            ref={scrollContainer}
            className="flex gap-5 video-wheel-scroll"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => setIsPaused(true)}
            style={{ scrollBehavior: 'auto', scrollbarWidth: 'none' }}
          >
            {[...videoItems, ...videoItems].map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex-shrink-0 w-64 overflow-visible">
                <button
                  onClick={() => handleCardClick(item)}
                  className="w-full h-56 rounded-3xl bg-gradient-to-br from-gray-300 to-gray-200 border border-gray-400 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/50 transition-colors shadow-xl group bubble-hover"
                >
                  <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${CATEGORY_COLORS[item.category] ?? 'from-gray-300 to-gray-200'} border border-gray-400 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/50 transition-colors shadow-xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-all duration-200" />
                    <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center relative z-10 group-hover:bg-brand/20 transition-all">
                      <Play className="w-6 h-6 text-slate-700 fill-white ml-1" />
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-brand rounded-3xl border border-gray-400 shadow-2xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 text-slate-700 hover:text-slate-700 bg-lime-700 rounded-2xl z-10 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Lightbox content */}
            <div className={`w-full h-96 rounded-t-xl bg-gradient-to-br ${CATEGORY_COLORS[selectedItem.category] ?? 'from-gray-300 to-gray-200'} flex flex-col items-center justify-center gap-5 relative overflow-hidden`}>
              <div className="w-20 h-20 rounded-full bg-brand/20 flex items-center justify-center">
                <Play className="w-8 h-8 text-slate-700 fill-white ml-1" />
              </div>
            </div>

            {/* Content section */}
            <div className="p-8 bg-brand">
              <h3 className="text-3xl font-semibold mb-2 text-slate-700">{selectedItem.title}</h3>
              <p className="text-gray-600 uppercase text-sm tracking-wider font-semibold mb-4">{selectedItem.category}</p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                This production showcases professional audio work in the {selectedItem.category.toLowerCase()} industry, featuring cutting-edge recording techniques and post-production expertise.
              </p>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-5">
                <button
                  onClick={() => handleLightboxNav('prev')}
                  className="p-2 text-slate-700 hover:text-gray-600 transition-colors bubble-hover"
                  aria-label="Previous item"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-slate-700 text-sm">
                  {videoItems.findIndex((item) => item.id === selectedItem.id) + 1} / {videoItems.length}
                </span>
                <button
                  onClick={() => handleLightboxNav('next')}
                  className="p-2 text-slate-700 hover:text-gray-600 transition-colors bubble-hover"
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
