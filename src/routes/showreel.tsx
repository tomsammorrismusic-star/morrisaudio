import { createFileRoute } from '@tanstack/react-router'
import { Music, Instagram, MessageCircle } from 'lucide-react'
import VideoWheel from '@/components/VideoWheel'
import VideoCollage from '@/components/VideoCollage'

export const Route = createFileRoute('/showreel')({
  component: Showreel,
})

function Showreel() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#2d2d2d' }}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Showreel</h1>
        <p className="text-gray-200 mb-10 text-lg">
          Podcast, voice-over, corporate, and commercial audio production samples.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gray-50 rounded-lg p-8 mb-16 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-white">Featured Work</h2>
          <VideoWheel />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-white">Featured Podcast</h2>
        <div className="bg-gray-50 rounded-lg p-8 mb-16 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-6 h-6 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">VCL Vintners Podcast</h3>
          </div>
          <p className="text-gray-200 mb-6">Listen now</p>
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
        <VideoCollage />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
          <h3 className="text-2xl font-bold mb-3 text-white">Ready to work together?</h3>
          <p className="text-gray-200 mb-6">
            Let's discuss your next audio project and how I can help bring your vision to life.
          </p>
          <a
            href="mailto:tomsammorrismusic@gmail.com"
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6 text-gray-200">Follow on social media</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/tom_morris2810/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 border border-gray-600 hover:border-yellow-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-yellow-400" />
            </a>
            <a
              href="https://wa.me/447857484127"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 border border-gray-600 hover:border-yellow-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6 text-yellow-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
