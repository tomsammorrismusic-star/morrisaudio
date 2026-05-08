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

// Layout positions mimicking the organic collage pattern
const layoutConfig = [
  { id: '1', w: 140, h: 100, x: 90, y: 90 },    // top left small
  { id: '2', w: 160, h: 110, x: 250, y: 70 },   // top left-center medium
  { id: '3', w: 130, h: 180, x: 420, y: 35 },   // top center tall (focal)
  { id: '4', w: 150, h: 110, x: 570, y: 70 },   // top right medium
  { id: '5', w: 200, h: 100, x: 50, y: 220 },   // middle left wide
  { id: '6', w: 140, h: 140, x: 270, y: 210 },  // middle-left medium square
  { id: '7', w: 190, h: 120, x: 430, y: 240 },  // middle center wide
  { id: '8', w: 160, h: 130, x: 640, y: 220 },  // middle right
]

export default function VideoCollage() {
  const [selectedItem, setSelectedItem] = useState<VideoItem | null>(null)

  return (
    <>
      <div className="flex items-center justify-center w-full py-16">
        <div className="relative" style={{ width: '800px', height: '450px' }}>
          {videoItems.map((item, index) => {
            const config = layoutConfig[index]
            return (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`absolute bg-gradient-to-br ${CATEGORY_COLORS[item.category]} border-4 border-white flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 group overflow-hidden bubble-hover hover:shadow-2xl hover:z-20`}
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
