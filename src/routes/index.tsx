import { createFileRoute, Link } from '@tanstack/react-router'
import VideoWheel from '@/components/VideoWheel'
import LogoReel from '@/components/LogoReel'
import { Mic, Volume2, Headphones, Award, Mail } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const stats = [
  { label: 'Commercials', value: '20+' },
  { label: 'Documentaries', value: '5+' },
  { label: 'Features', value: '20+' },
  { label: 'Short Films', value: '50+' },
  { label: 'Podcasts', value: '45+' },
]

const services = [
  {
    icon: Mic,
    title: 'Production Sound',
    desc: 'Location sound recording for film, TV, and commercial productions. Boom operation, radio mic placement, and live mix.',
  },
  {
    icon: Headphones,
    title: 'Post-Production Audio',
    desc: 'Sound editing, dialogue cleanup, foley supervision, and audio delivery to broadcast standards.',
  },
]

function Home() {
  return (
    <div className="text-white" style={{ backgroundColor: '#2d2d2d' }}>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(217,119,6,0.03)_0%,_transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-medium">
            <Mic size={14} />
            Available for hire&nbsp;
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Capturing You
            <br />
            <span className="text-yellow-400">Great Audio</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-xl mx-auto leading-relaxed">
            Professional sound recordist specialising in film, documentary, and commercial productions.&nbsp;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-bold rounded-xl transition-colors text-lg bubble-hover"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 border border-gray-600 hover:border-yellow-400 text-gray-200 hover:text-white rounded-xl transition-colors text-lg bubble-hover"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Trusted By</h2>
            <p className="text-gray-200 max-w-xl mx-auto">
              Working with leading brands across sports and technology.
            </p>
          </div>
          <LogoReel />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-700 py-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center px-6 py-4 rounded-xl border border-gray-600 bg-gray-750 hover:border-yellow-400 transition-colors bubble-hover">
              <p className="text-4xl font-extrabold text-yellow-400">{s.value}</p>
              <p className="text-gray-200 text-sm mt-2 whitespace-nowrap">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Wheel */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Work</h2>
            <p className="text-gray-200 max-w-xl mx-auto">
              A selection of productions across genres. Hover over any card to pause the reel.
            </p>
          </div>
          <VideoWheel />
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="p-8 rounded-3xl border-2 border-gray-600 hover:border-yellow-400 transition-all duration-300 bubble-hover"
                style={{ backgroundColor: '#2d2d2d' }}
              >
                <svc.icon className="w-14 h-14 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
                <p className="text-gray-200 text-base leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-gray-700">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Award className="w-12 h-12 text-yellow-400 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">Ready to work together?</h2>
          <p className="text-gray-200 text-lg">
            Let's talk about your next production. Available for short-term engagements
            and long-term projects worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-bold rounded-xl transition-colors bubble-hover"
            >
              <Mail size={18} />
              Contact Me
            </Link>
            <a
              href="mailto:tomsammorrismusic@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-600 hover:border-yellow-400 text-gray-200 hover:text-white rounded-xl transition-colors bubble-hover"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
