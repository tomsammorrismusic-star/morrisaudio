import { createFileRoute } from '@tanstack/react-router'
import { Music, Instagram, MessageCircle } from 'lucide-react'

export const Route = createFileRoute('/showreel')({
  component: Showreel,
})

function Showreel() {
  return (
    <div className="min-h-screen bg-brand text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Showreel</h1>
        <p className="text-gray-300 mb-10 text-lg">
          Podcast, voice-over, corporate, and commercial audio production samples.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-white">Highlight Reel</h2>
        <div className="rounded-lg overflow-hidden bg-black aspect-video flex items-center justify-center">
          <iframe
            src="https://www.youtube.com/embed/PASTE_YOUR_VIDEO_ID_HERE"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-gray-300 mt-4 text-center text-sm">
          Replace PASTE_YOUR_VIDEO_ID_HERE with your YouTube video ID in the src attribute
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-white">Featured Podcast</h2>
        <div className="bg-emerald-800 rounded-lg p-8 mb-16 border border-emerald-800">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-6 h-6 text-emerald-700" />
            <h3 className="text-2xl font-bold text-white">VCL Vintners Podcast</h3>
          </div>
          <p className="text-gray-300 mb-6">Listen now</p>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/show/50zl8ics5uAV2aMAJ7spOF?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-white">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {/* Large featured video - takes 2 rows */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden bg-black aspect-video flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
              <p className="font-semibold text-lg">Feature Film - Location Sound</p>
            </div>
          </div>

          {/* Grid of smaller videos */}
          {[
            { id: 'VIDEO_ID_2', title: 'Documentary Series' },
            { id: 'VIDEO_ID_3', title: 'Commercial - Automotive' },
            { id: 'VIDEO_ID_4', title: 'Corporate Interview' },
            { id: 'VIDEO_ID_5', title: 'TV Drama Series' },
            { id: 'VIDEO_ID_6', title: 'Music Video Production' },
            { id: 'VIDEO_ID_7', title: 'Podcast Recording' },
            { id: 'VIDEO_ID_8', title: 'Commercial - Tech' },
            { id: 'VIDEO_ID_9', title: 'Short Film' },
          ].map((video, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden bg-black aspect-square flex items-center justify-center group cursor-pointer bubble-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                <p className="font-semibold text-sm line-clamp-2">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-8 text-sm text-center max-w-2xl mx-auto">
          Replace VIDEO_ID_1 through VIDEO_ID_9 with your actual YouTube video IDs. Each video card shows a project title on hover and includes a responsive masonry layout that adapts beautifully across all devices.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-emerald-800 rounded-lg p-8 text-center border border-emerald-800">
          <h3 className="text-2xl font-bold mb-3 text-white">Ready to work together?</h3>
          <p className="text-gray-100 mb-6">
            Let's discuss your next audio project and how I can help bring your vision to life.
          </p>
          <a
            href="mailto:tomsammorrismusic@gmail.com"
            className="inline-block px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors mb-6"
          >
            Get in Touch
          </a>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/tom_morris2810/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-600 hover:border-emerald-700 text-gray-400 hover:text-emerald-700 transition-colors bubble-hover"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/447857484127"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-600 hover:border-emerald-700 text-gray-400 hover:text-emerald-700 transition-colors bubble-hover"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
