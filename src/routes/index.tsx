import { createFileRoute, Link } from '@tanstack/react-router'
import VideoWheel from '@/components/VideoWheel'
import { Mic, Volume2, Headphones, Award, Mail } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Productions', value: '200+' },
  { label: 'Awards', value: '5' },
  { label: 'Countries', value: '15' },
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
  {
    icon: Volume2,
    title: 'Documentary & ENG',
    desc: 'Fast-turnaround documentary and news gathering. Discreet, reliable sound in challenging environments.',
  },
]

function Home() {
  return (
    <div className="bg-gray-950 text-gray-100">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.08)_0%,_transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium">
            <Mic size={14} />
            Available for hire · London &amp; worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Capturing Sound
            <br />
            <span className="text-amber-400">That Moves You</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
            Professional sound recordist specialising in film, documentary, and commercial
            productions. Over a decade of experience bringing stories to life through
            pristine audio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold rounded-xl transition-colors text-lg"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 border border-gray-700 hover:border-amber-400 text-gray-300 hover:text-white rounded-xl transition-colors text-lg"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-amber-400">{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Wheel */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Work</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A selection of productions across genres. Hover over any card to pause the reel.
            </p>
          </div>
          <VideoWheel />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="p-6 rounded-2xl border border-gray-800 hover:border-amber-400/40 bg-gray-900/50 transition-colors"
              >
                <svc.icon className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Award className="w-12 h-12 text-amber-400 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">Ready to work together?</h2>
          <p className="text-gray-400 text-lg">
            Let's talk about your next production. Available for short-term engagements
            and long-term projects worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold rounded-xl transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </Link>
            <a
              href="mailto:hello@soundrecordist.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-700 hover:border-amber-400 text-gray-300 hover:text-white rounded-xl transition-colors"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
