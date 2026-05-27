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
    <div className="min-h-screen bg-brand text-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Showreel</h1>
        <p className="text-slate-700 mb-10 text-lg">
          Podcast, voice-over, corporate, and commercial audio production samples.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-slate-700">Highlight Reel</h2>
        <div className="rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center">
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
        <p className="text-slate-700 mt-6 text-center text-sm">
          Replace PASTE_YOUR_VIDEO_ID_HERE with your YouTube video ID in the src attribute
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-slate-700">Featured Podcast</h2>
        <div className="bg-[#F5F0E8] rounded-2xl p-8 mb-16 border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-6 h-6 text-slate-700" />
            <h3 className="text-2xl font-semibold text-slate-700">VCL Vintners Podcast</h3>
          </div>
          <p className="text-slate-700 mb-8">Listen now</p>
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/show/50zl8ics5uAV2aMAJ7spOF?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-slate-700">Audio Example</h2>
        <div className="bg-[#F5F0E8] rounded-2xl p-8 border border-slate-700">
          <h3 className="text-xl font-semibold text-slate-700 mb-8">Production Sample</h3>
          <audio
            controls
            className="w-full rounded-2xl"
            style={{
              colorScheme: 'dark',
            }}
          >
            <source src="https://cdn.builder.io/o/assets%2F1a8d84947e9444f98df7c975eda41851%2F66a46760af3744faa16a617aa24824eb?alt=media&token=16beffb2-e7f1-4bc6-9a46-ddcadc7d5b9a&apiKey=1a8d84947e9444f98df7c975eda41851" type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
          <p className="text-slate-700 mt-6 text-sm">
            Production sample featuring a combination of lavalier and boom microphone audio techniques
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-slate-700">Portfolio</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Large featured video on left */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center group cursor-pointer">
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
              <div className="absolute bottom-4 left-4 right-4 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                <p className="font-semibold text-lg">Feature Film - Location Sound</p>
              </div>
            </div>
            <p className="text-slate-700 mt-3">Featured Project</p>
          </div>

          {/* Sidebar with collapsible video list - same height as featured video */}
          <div className="flex flex-col h-full">
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">More Work</p>
            <div className="flex-1 flex flex-col gap-2 min-h-0">
              {displayedVideos.map((video, idx) => (
                <div
                  key={idx}
                  className="flex-1 min-h-0 rounded-2xl overflow-hidden bg-black flex items-center justify-center group cursor-pointer bubble-hover hover:ring-2 hover:ring-emerald-700 transition-all"
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
                  <div className="absolute bottom-2 left-2 right-2 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    <p className="font-semibold text-xs line-clamp-1">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
            {!expandMoreWork && moreWorkVideos.length > 3 && (
              <button
                onClick={() => setExpandMoreWork(true)}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-700 text-slate-700 hover:bg-slate-400/10 rounded-2xl transition-colors font-semibold text-sm mt-3"
              >
                <span>View {moreWorkVideos.length - 3} More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
            {expandMoreWork && (
              <button
                onClick={() => setExpandMoreWork(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-700 text-slate-700 hover:bg-slate-400/10 rounded-2xl transition-colors font-semibold text-sm mt-3"
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
        <div className="bg-[#F5F0E8] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-slate-700">Ready to work together?</h3>
          <p className="text-slate-600 mb-8">
            Let's discuss your next audio project and how I can help bring your vision to life.
          </p>
          <a
            href="mailto:tomsammorrismusic@gmail.com"
            className="inline-block px-6 py-3 bg-[#F5C429] hover:bg-slate-600 text-slate-700 font-semibold rounded-2xl transition-colors mb-8"
          >
            Get in Touch
          </a>
          <div className="flex justify-center gap-5">
            <a
              href="https://www.instagram.com/tom_morris2810/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-slate-700 hover:border-slate-700 text-slate-700 hover:text-[#E5CA38] transition-colors bubble-hover"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/447857484127"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-slate-700 hover:border-slate-700 text-slate-700 hover:text-[#E5CA38] transition-colors bubble-hover"
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
