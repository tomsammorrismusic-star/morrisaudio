import { useState } from 'react'
import { Play, X } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  category: string
  shape: 'circle' | 'tall-rect' | 'wide-rect' | 'square'
}

const videoItems: VideoItem[] = [
  { id: '1', title: 'Feature Film Location Sound', category: 'Film', shape: 'wide-rect' },
  { id: '2', title: 'Documentary — Wildlife Series', category: 'Documentary', shape: 'circle' },
  { id: '3', title: 'TV Commercial — Automotive', category: 'Commercial', shape: 'square' },
  { id: '4', title: 'Short Film — Drama', category: 'Drama', shape: 'tall-rect' },
  { id: '5', title: 'Corporate Interview Package', category: 'Corporate', shape: 'square' },
  { id: '6', title: 'Music Video — Live Recording', category: 'Music', shape: 'tall-rect' },
  { id: '7', title: 'ENG News — Field Recording', category: 'News', shape: 'circle' },
  { id: '8', title: 'Podcast & Voice Over', category: 'Audio', shape: 'wide-rect' },
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

const shapeClasses = {
  circle: 'w-40 h-40 rounded-full',
  square: 'w-48 h-48 rounded-lg',
  'tall-rect': 'w-32 h-56 rounded-xl',
  'wide-rect': 'w-56 h-32 rounded-xl',
}

export default function VideoCollage() {
  const [selectedItem, setSelectedItem] = useState<VideoItem | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center items-center py-8">
        {videoItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`${shapeClasses[item.shape]} bg-gradient-to-br ${CATEGORY_COLORS[item.category] ?? 'from-gray-300 to-gray-200'} border border-gray-400 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-yellow-500/50 transition-colors group overflow-hidden relative bubble-hover`}
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-200" />
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative z-10">
              <Play className="w-5 h-5 text-white fill-white ml-1" />
            </div>
            <div className="text-center px-3 relative z-10 text-xs">
              <p className="text-white font-semibold leading-tight line-clamp-2">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Fullscreen Video Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 p-2 text-white hover:text-yellow-500 bg-black/50 rounded-lg z-10 transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <div
            className={`relative bg-gradient-to-br ${CATEGORY_COLORS[selectedItem.category] ?? 'from-gray-300 to-gray-200'} rounded-2xl border-4 border-yellow-500 w-full max-w-4xl aspect-video flex flex-col items-center justify-center gap-6`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
              <Play className="w-16 h-16 text-white fill-white ml-2" />
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl font-bold text-white mb-2">{selectedItem.title}</h2>
              <p className="text-white/70 text-xl uppercase tracking-wider">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
