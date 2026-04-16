import { useRef, useEffect } from 'react'
import { Play, Film } from 'lucide-react'

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
  const wheelRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const angleRef = useRef(0)
  const pausedRef = useRef(false)

  const n = videoItems.length
  const radius = 320

  useEffect(() => {
    let last = performance.now()
    function tick(now: number) {
      if (!pausedRef.current) {
        const delta = now - last
        angleRef.current = (angleRef.current + delta * 0.018) % 360
        if (wheelRef.current) {
          wheelRef.current.style.transform = `rotateY(${angleRef.current}deg)`
        }
      }
      last = now
      animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* 3D scene */}
      <div
        className="relative"
        style={{ height: 280, width: '100%', perspective: 1100 }}
      >
        <div
          ref={wheelRef}
          className="absolute left-1/2 top-1/2"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(0deg)',
            marginLeft: -120,
            marginTop: -100,
          }}
        >
          {videoItems.map((item, i) => {
            const angle = (360 / n) * i
            return (
              <div
                key={item.id}
                className="absolute"
                style={{
                  width: 240,
                  height: 200,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div
                  className={`w-full h-full rounded-xl bg-gradient-to-br ${CATEGORY_COLORS[item.category] ?? 'from-gray-800 to-gray-600'} border border-white/10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-amber-400/50 transition-colors shadow-xl`}
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
            )
          })}
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-4 flex items-center gap-2">
        <Film size={14} />
        Featured productions showcase
      </p>
    </div>
  )
}
