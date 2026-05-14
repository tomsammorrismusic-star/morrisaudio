import { createFileRoute } from '@tanstack/react-router'
import { Music, Instagram, MessageCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/showreel')({
  component: Showreel,
})

function Showreel() {
  const [expandMoreWork, setExpandMoreWork] = useState(false)

  const moreWorkVideos = [
    { id: 'VIDEO_ID_2', title: 'Documentary Series' },
    { id: 'VIDEO_ID_3', title: 'Commercial - Automotive' },
    { id: 'VIDEO_ID_4', title: 'Corporate Interview' },
    { id: 'VIDEO_ID_5', title: 'TV Drama Series' },
    { id: 'VIDEO_ID_6', title: 'Music Video' },
    { id: 'VIDEO_ID_7', title: 'Podcast Recording' },
  ]

  const displayedVideos = expandMoreWork ? moreWorkVideos : moreWorkVideos.slice(0, 3)

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
        <div className="bg-yellow-500 rounded-lg p-8 mb-16 border border-yellow-500">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-6 h-6 text-yellow-400" />
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
        <h2 className="text-3xl font-bold mb-8 text-white">Audio Example</h2>
        <div className="bg-yellow-500 rounded-lg p-8 border border-yellow-400">
          <h3 className="text-xl font-semibold text-white mb-6">Production Sample</h3>
          <audio
            controls
            className="w-full rounded-lg"
            style={{
              colorScheme: 'dark',
            }}
          >
            <source src="https://example.com/audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className="text-gray-300 mt-4 text-sm">
            Replace the audio URL with your actual audio file (mp3, wav, etc.)
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-white">Portfolio</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large featured video on left */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden bg-black aspect-video flex items-center justify-center group cursor-pointer">
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
            <p className="text-gray-300 mt-3">Featured Project</p>
          </div>

          {/* Sidebar with collapsible video list - same height as featured video */}
          <div className="flex flex-col h-full">
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">More Work</p>
            <div className="flex-1 flex flex-col gap-2 min-h-0">
              {displayedVideos.map((video, idx) => (
                <div
                  key={idx}
                  className="flex-1 min-h-0 rounded-lg overflow-hidden bg-black flex items-center justify-center group cursor-pointer bubble-hover hover:ring-2 hover:ring-emerald-700 transition-all"
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
                  <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    <p className="font-semibold text-xs line-clamp-1">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
            {!expandMoreWork && moreWorkVideos.length > 3 && (
              <button
                onClick={() => setExpandMoreWork(true)}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors font-semibold text-sm mt-2"
              >
                <span>View {moreWorkVideos.length - 3} More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
            {expandMoreWork && (
              <button
                onClick={() => setExpandMoreWork(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors font-semibold text-sm mt-2"
              >
                <span>Show Less</span>
                <ChevronDown className="w-4 h-4 rotate-180" />
              </button>
            )}
          </div>
        </div>
        <p className="text-gray-400 mt-8 text-sm text-center max-w-2xl mx-auto">
          Replace VIDEO_ID_1 through VIDEO_ID_7 with your actual YouTube video IDs. The featured project takes the main focus while additional work appears in a organized sidebar.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-yellow-500 rounded-lg p-8 text-center border border-yellow-500">
          <h3 className="text-2xl font-bold mb-3 text-white">Ready to work together?</h3>
          <p className="text-gray-100 mb-6">
            Let's discuss your next audio project and how I can help bring your vision to life.
          </p>
          <a
            href="mailto:tomsammorrismusic@gmail.com"
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors mb-6"
          >
            Get in Touch
          </a>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/tom_morris2810/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-600 hover:border-yellow-400 text-gray-400 hover:text-yellow-400 transition-colors bubble-hover"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/447857484127"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-600 hover:border-yellow-400 text-gray-400 hover:text-yellow-400 transition-colors bubble-hover"
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
