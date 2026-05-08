import { useState } from 'react'
import { Play, X } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  category: string
  colSpan: 1 | 2 | 3
  rowSpan: 1 | 2 | 3
}

const videoItems: VideoItem[] = [
  { id: '1', title: 'Feature Film Location Sound', category: 'Film', colSpan: 2, rowSpan: 2 },
  { id: '2', title: 'Documentary — Wildlife Series', category: 'Documentary', colSpan: 1, rowSpan: 1 },
  { id: '3', title: 'TV Commercial — Automotive', category: 'Commercial', colSpan: 1, rowSpan: 2 },
  { id: '4', title: 'Short Film — Drama', category: 'Drama', colSpan: 1, rowSpan: 1 },
  { id: '5', title: 'Corporate Interview Package', category: 'Corporate', colSpan: 1, rowSpan: 1 },
  { id: '6', title: 'Music Video — Live Recording', category: 'Music', colSpan: 2, rowSpan: 1 },
  { id: '7', title: 'ENG News — Field Recording', category: 'News', colSpan: 1, rowSpan: 1 },
  { id: '8', title: 'Podcast & Voice Over', category: 'Audio', colSpan: 1, rowSpan: 2 },
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
      <div className="grid gap-0" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '180px' }}>
        {videoItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`col-span-${item.colSpan} row-span-${item.rowSpan} bg-gradient-to-br ${CATEGORY_COLORS[item.category] ?? 'from-gray-300 to-gray-200'} border border-gray-300 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-yellow-500 transition-all duration-300 group overflow-hidden relative bubble-hover`}
            style={{
              gridColumn: `span ${item.colSpan}`,
              gridRow: `span ${item.rowSpan}`,
            }}
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-200" />
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center relative z-10">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
            <div className="text-center px-4 relative z-10">
              <p className="text-white font-semibold text-sm leading-tight line-clamp-2">{item.title}</p>
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
            className="absolute top-6 right-6 p-2 text-white hover:text-yellow-500 bg-black/50 rounded-lg z-10 transition-colors bubble-hover"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <div
            className={`relative bg-gradient-to-br ${CATEGORY_COLORS[selectedItem.category] ?? 'from-gray-300 to-gray-200'} rounded-2xl border-4 border-yellow-500 w-full max-w-4xl aspect-video flex flex-col items-center justify-center gap-6 shadow-2xl bubble-hover`}
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
