import { createFileRoute, Link } from '@tanstack/react-router'
import LogoReel from '@/components/LogoReel'
import FeaturedWorkReel from '@/components/FeaturedWorkReel'
import { Mic, Volume2, Headphones, Award, Mail, Instagram, MessageCircle } from 'lucide-react'

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
    <div className="bg-brand text-white">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(5,150,105,0.03)_0%,_transparent_70%)] pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-700/10 border border-emerald-700/30 text-emerald-700 text-sm font-medium">
            <Mic size={14} />
            Available for hire&nbsp;
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Capturing You
            <br />
            <span className="text-emerald-700">Great Audio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Professional sound recordist specialising in film, documentary, and commercial productions.&nbsp;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="px-8 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors text-lg bubble-hover"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 border border-emerald-700 hover:border-emerald-700 text-gray-100 hover:text-white rounded-xl transition-colors text-lg bubble-hover"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Trusted By</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Working with leading brands across sports and technology.
            </p>
          </div>
        </div>
        <LogoReel />
      </section>

      {/* Stats */}
      <section className="border-y border-gray-300 py-10 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center px-6 py-4 rounded-xl border border-gray-300 hover:border-emerald-700/50 transition-colors bubble-hover">
              <p className="text-4xl font-extrabold text-emerald-700">{s.value}</p>
              <p className="text-gray-300 text-sm mt-2 whitespace-nowrap">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Work</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              A selection of productions across genres and formats.
            </p>
          </div>
        </div>
        <FeaturedWorkReel />
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="p-8 rounded-3xl border border-emerald-700 hover:border-emerald-700/60 bg-gradient-to-br from-emerald-800 to-emerald-800 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 bubble-hover"
              >
                <svc.icon className="w-14 h-14 text-emerald-700 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
                <p className="text-gray-100 text-base leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Award className="w-12 h-12 lg:w-16 lg:h-16 text-emerald-700 mx-auto" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to work together?</h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Let's talk about your next production. Available for short-term engagements
            and long-term projects worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors bubble-hover"
            >
              <Mail size={18} />
              Contact Me
            </Link>
            <a
              href="mailto:tomsammorrismusic@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-emerald-700 hover:border-emerald-700 text-gray-100 hover:text-white rounded-xl transition-colors bubble-hover"
            >
              Email Directly
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/tom_morris2810/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-emerald-700 hover:border-emerald-700 text-gray-300 hover:text-emerald-700 transition-colors bubble-hover"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/447857484127"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-emerald-700 hover:border-emerald-700 text-gray-300 hover:text-emerald-700 transition-colors bubble-hover"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
