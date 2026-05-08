import { useState } from 'react'
import { Play, X } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  category: string
  colSpan: 1 | 2
  rowSpan: 1 | 2
}

const videoItems: VideoItem[] = [
  { id: '1', title: 'Feature Film Location Sound', category: 'Film', colSpan: 2, rowSpan: 2 },
  { id: '2', title: 'Documentary — Wildlife Series', category: 'Documentary', colSpan: 1, rowSpan: 1 },
  { id: '3', title: 'TV Commercial — Automotive', category: 'Commercial', colSpan: 1, rowSpan: 2 },
  { id: '4', title: 'Short Film — Drama', category: 'Drama', colSpan: 1, rowSpan: 1 },
  { id: '5', title: 'Corporate Interview Package', category: 'Corporate', colSpan: 2, rowSpan: 1 },
  { id: '6', title: 'Music Video — Live Recording', category: 'Music', colSpan: 1, rowSpan: 1 },
  { id: '7', title: 'ENG News — Field Recording', category: 'News', colSpan: 1, rowSpan: 1 },
  { id: '8', title: 'Podcast & Voice Over', category: 'Audio', colSpan: 2, rowSpan: 1 },
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

export default function VideoCollage() {
  const [selectedItem, setSelectedItem] = useState<VideoItem | null>(null)

  return (
    <>
      <div 
        className="grid gap-0 w-full"
        style={{ 
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '200px',
          gridAutoFlow: 'dense'
        }}
      >
        {videoItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`relative bg-gradient-to-br ${CATEGORY_COLORS[item.category] ?? 'from-gray-300 to-gray-200'} border border-gray-200 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 group overflow-hidden bubble-hover hover:z-20 hover:border-yellow-400`}
            style={{
              gridColumn: `span ${item.colSpan}`,
              gridRow: `span ${item.rowSpan}`,
            }}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center relative z-10 group-hover:bg-white/25 transition-all">
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </div>
            <div className="text-center px-4 relative z-10">
              <p className="text-white font-semibold text-sm leading-snug line-clamp-2">{item.title}</p>
              <p className="text-white/60 text-xs uppercase tracking-wider mt-1">{item.category}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Fullscreen Video Modal with Bubble Effect */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-8 right-8 p-3 text-white hover:text-yellow-400 bg-black/60 hover:bg-black/80 rounded-full z-10 transition-all duration-300 bubble-hover"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <div
            className={`relative bg-gradient-to-br ${CATEGORY_COLORS[selectedItem.category] ?? 'from-gray-300 to-gray-200'} rounded-3xl border-4 border-yellow-400 w-full max-w-5xl aspect-video flex flex-col items-center justify-center gap-8 shadow-2xl bubble-hover`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <Play className="w-20 h-20 text-white fill-white ml-3" />
            </div>
            <div className="text-center px-12">
              <h2 className="text-5xl font-bold text-white mb-3">{selectedItem.title}</h2>
              <p className="text-white/80 text-2xl uppercase tracking-widest font-semibold">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
