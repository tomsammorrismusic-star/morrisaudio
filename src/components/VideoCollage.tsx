import { useState } from 'react'
import { Play, X } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  category: string
}

const videoItems: VideoItem[] = [
  { id: '1', title: 'Feature Film Location Sound', category: 'Film' },
  { id: '2', title: 'Documentary — Wildlife Series', category: 'Documentary' },
  { id: '3', title: 'TV Commercial — Automotive', category: 'Commercial' },
  { id: '4', title: 'Short Film — Drama', category: 'Drama' },
  { id: '5', title: 'Corporate Interview Package', category: 'Corporate' },
  { id: '6', title: 'Music Video — Live Recording', category: 'Music' },
  { id: '7', title: 'ENG News — Field Recording', category: 'News' },
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

// Layout positions mimicking the organic collage pattern - flipped 180 degrees
const layoutConfig = [
  { id: '1', w: 180, h: 130, x: 770, y: 240 },     // flipped top right
  { id: '2', w: 200, h: 140, x: 560, y: 255 },     // flipped top center-right
  { id: '3', w: 160, h: 230, x: 380, y: 210 },     // center tall (focal)
  { id: '4', w: 190, h: 140, x: 170, y: 255 },     // flipped top left
  { id: '5', w: 260, h: 130, x: 690, y: 90 },      // flipped bottom right
  { id: '6', w: 190, h: 180, x: 480, y: 30 },      // flipped bottom center
  { id: '7', w: 240, h: 155, x: 220, y: 35 },      // flipped bottom left-center
  { id: '8', w: 200, h: 175, x: 10, y: 90 },       // flipped bottom left
]

export default function VideoCollage() {
  const [selectedItem, setSelectedItem] = useState<VideoItem | null>(null)

  return (
    <>
      <div className="flex items-center justify-center w-full py-8">
        <div className="relative max-w-6xl" style={{ width: '100%', height: '480px' }}>
          {videoItems.map((item, index) => {
            const config = layoutConfig[index]
            return (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`absolute bg-gradient-to-br ${CATEGORY_COLORS[item.category]} flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 group overflow-hidden bubble-hover hover:shadow-2xl hover:z-20`}
                style={{
                  left: `${config.x}px`,
                  top: `${config.y}px`,
                  width: `${config.w}px`,
                  height: `${config.h}px`,
                }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center relative z-10 group-hover:bg-white/25 transition-all">
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </div>
                <div className="text-center px-2 relative z-10">
                  <p className="text-white font-semibold text-xs leading-snug line-clamp-2">{item.title}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
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
            className={`relative bg-gradient-to-br ${CATEGORY_COLORS[selectedItem.category]} rounded-3xl border-4 border-yellow-400 w-full max-w-5xl aspect-video flex flex-col items-center justify-center gap-8 shadow-2xl bubble-hover`}
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
