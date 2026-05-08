import { useState } from 'react'
import { Play, X } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  category: string
  size: 'small' | 'medium' | 'large'
}

const videoItems: VideoItem[] = [
  { id: '1', title: 'Feature Film Location Sound', category: 'Film', size: 'large' },
  { id: '2', title: 'Documentary — Wildlife Series', category: 'Documentary', size: 'medium' },
  { id: '3', title: 'TV Commercial — Automotive', category: 'Commercial', size: 'small' },
  { id: '4', title: 'Short Film — Drama', category: 'Drama', size: 'medium' },
  { id: '5', title: 'Corporate Interview Package', category: 'Corporate', size: 'small' },
  { id: '6', title: 'Music Video — Live Recording', category: 'Music', size: 'large' },
  { id: '7', title: 'ENG News — Field Recording', category: 'News', size: 'medium' },
  { id: '8', title: 'Podcast & Voice Over', category: 'Audio', size: 'small' },
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

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-2 row-span-2',
  large: 'col-span-3 row-span-3',
}

export default function VideoCollage() {
  const [selectedItem, setSelectedItem] = useState<VideoItem | null>(null)

  return (
    <>
      <div className="grid gap-4 auto-rows-max" style={{ gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' }}>
        {videoItems.map((item) => (
          <div key={item.id} className={`${sizeClasses[item.size]} overflow-hidden rounded-xl`}>
            <button
              onClick={() => setSelectedItem(item)}
              className={`w-full h-full rounded-xl bg-gradient-to-br ${CATEGORY_COLORS[item.category] ?? 'from-gray-300 to-gray-200'} border border-gray-400 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-yellow-500/50 transition-colors group bubble-hover overflow-visible relative`}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-200 rounded-xl" />
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center relative z-10">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
              <div className="text-center px-4 relative z-10">
                <p className="text-white font-semibold text-sm leading-tight">{item.title}</p>
                <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">{item.category}</p>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Video Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-white rounded-xl border border-gray-300 shadow-2xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 text-gray-600 hover:text-black bg-gray-100 rounded-lg z-10 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className={`w-full h-96 rounded-t-xl bg-gradient-to-br ${CATEGORY_COLORS[selectedItem.category] ?? 'from-gray-300 to-gray-200'} flex flex-col items-center justify-center gap-4 relative overflow-hidden`}>
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>

            <div className="p-8 bg-white">
              <h3 className="text-3xl font-bold mb-2 text-black">{selectedItem.title}</h3>
              <p className="text-yellow-500 uppercase text-sm tracking-wider font-semibold mb-4">{selectedItem.category}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This production showcases professional audio work in the {selectedItem.category.toLowerCase()} industry, featuring cutting-edge recording techniques and post-production expertise.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
