import { useRef, useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  category: string
  url?: string
  customTitle?: string
}

const videos: VideoItem[] = [
  { id: '1', title: 'The Spy', category: 'Film', url: 'https://www.youtube.com/watch?v=iFlZqFyTiso' },
  { id: '2', title: 'Documentary — Wildlife Series', category: 'Documentary', url: 'https://next.frame.io/share/194b2f94-1bab-472a-897a-cd096544c58e/reel/421f7a89-974f-4e78-bc47-37a8640e0ad8', customTitle: 'The Happiness Equation' },
  { id: '3', title: 'Sands Christmas Charity Campaign', category: 'Commercial', url: 'https://www.youtube.com/watch?v=KMBRz_KBSAw' },
  { id: '4', title: 'Belonging', category: 'Short Film', url: 'https://www.youtube.com/watch?v=3T1xqHHvoo4' },
  { id: '5', title: 'Apollo Tyres Campaign', category: 'Commercial', url: 'https://www.youtube.com/watch?v=V8wpLnxb-UQ' },
  { id: '6', title: 'Gods Gamblers', category: 'Short Film', url: 'https://www.youtube.com/watch?v=1AodX2C-M9Y' },
  { id: '7', title: 'The Bullion Club', category: 'Corporate', url: 'https://www.youtube.com/watch?v=58wu_GswQD0' },
  { id: '8', title: 'VCL Podcast', category: 'Audio', url: 'https://www.youtube.com/watch?v=DnaJFdKI0mY' },
  { id: '9', title: 'Newcastle United', category: 'Commercial', url: 'https://www.youtube.com/watch?v=24Pl0uOCJko' },
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

function getThumbnail(url?: string): string | null {
  if (!url) return null

  // YouTube thumbnails
  const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
  if (youtubeMatch?.[1]) {
    return `https://img.youtube.com/vi/${youtubeMatch[1]}/hqdefault.jpg`
  }

  // Frame.io thumbnails - attempt to fetch via their API
  const frameioMatch = url.match(/frame\.io\/share\/([^\/]+)\/(?:reel|frame)\/([^/?]+)/)
  if (frameioMatch) {
    // Use Frame.io's public API to get a preview image
    // Try using their thumbnail endpoint if available
    return `https://thumbs.frame.io/${frameioMatch[2]}/latest?size=1280`
  }

  return null
}

export default function FeaturedWorkReel() {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null)

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
              onClick={() => item.url && setSelectedVideoUrl(item.url)}
              className={`relative w-64 h-64 rounded-3xl bg-gradient-to-br ${item.customTitle ? 'from-black to-slate-900' : (CATEGORY_COLORS[item.category] ?? 'from-gray-300 to-gray-200')} flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-500 ease-out group bubble-hover hover:shadow-2xl hover:scale-110 overflow-hidden`}
              style={{
                transformOrigin: 'center',
                backgroundImage: item.customTitle ? 'radial-gradient(circle, white 1px, transparent 1px), linear-gradient(to bottom, #0a0e27, #1a1f3a)' : (getThumbnail(item.url) ? `url(${getThumbnail(item.url)})` : undefined),
                backgroundSize: item.customTitle ? '50px 50px, cover' : 'cover',
                backgroundPosition: item.customTitle ? '0 0, center' : 'center',
                backgroundAttachment: item.customTitle ? 'fixed' : undefined,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {getThumbnail(item.url) && !item.customTitle && (
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
              )}
              {item.customTitle && (
                <div className="absolute inset-0" />
              )}
              <div className="relative z-10 text-center px-6 flex flex-col items-center justify-center h-full gap-4">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-white font-bold text-2xl leading-tight">{item.customTitle || item.title}</p>
                  <p className="text-white/60 text-xs tracking-wider uppercase">{item.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F5F0E8] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F5F0E8] to-transparent pointer-events-none" />

      {/* Video Modal */}
      {selectedVideoUrl && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideoUrl(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideoUrl(null)}
              className="absolute top-4 right-4 z-10 bg-slate-700 hover:bg-slate-800 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={selectedVideoUrl.includes('frame.io') ? selectedVideoUrl : selectedVideoUrl.replace('watch?v=', 'embed/') + '?autoplay=1'}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
