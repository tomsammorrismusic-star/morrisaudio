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
    <div className="bg-brand text-slate-700">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="relative z-10 w-full max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0B740]/10 border border-[#F5D055]/30 text-[#C9A415] text-sm font-medium">
            <Mic size={14} />
            Available for hire&nbsp;
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Capturing You
            <br />
            <span className="text-[#C9A415]">Great Audio</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Professional sound recordist specialising in film, documentary, and commercial productions.&nbsp;
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-2">
            <Link
              to="/contact"
              className="px-10 py-3 bg-[#F0B740] hover:bg-[#C9A415] text-white font-semibold rounded-3xl transition-colors text-lg bubble-hover"
            >
              Get In Touch
            </Link>
            <Link
              to="/showreel"
              className="px-10 py-3 border border-[#F5D055] hover:border-[#F5D055] text-slate-600 hover:text-slate-700 rounded-3xl transition-colors text-lg bubble-hover"
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Trusted By</h2>
            <p className="text-slate-700 max-w-xl mx-auto">
              Working with leading brands across sports and technology.
            </p>
          </div>
        </div>
        <LogoReel />
      </section>

      {/* Stats */}
      <section className="py-0 -mt-12 lg:-mt-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row gap-8 justify-center items-center flex-wrap">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center px-6 py-6 rounded-3xl border border-[#F5D055]/30 hover:border-[#F5D055]/50 transition-colors bubble-hover">
              <p className="text-4xl font-bold text-slate-700">{s.value}</p>
              <p className="text-slate-700 text-sm mt-3 whitespace-nowrap">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Work</h2>
            <p className="text-slate-700 max-w-xl mx-auto">
              A selection of productions across genres and formats.
            </p>
          </div>
        </div>
        <FeaturedWorkReel />
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-16">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="p-8 rounded-3xl border border-[#F5D055] hover:border-[#F0B740] bg-[#F5F0E8] hover:bg-[#EDE5D8] transition-all duration-300 bubble-hover"
              >
                <svc.icon className="w-14 h-14 text-[#C9A415] mb-8" />
                <h3 className="text-2xl font-semibold mb-4">{svc.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Award className="w-12 h-12 lg:w-16 lg:h-16 text-[#C9A415] mx-auto" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Ready to work together?</h2>
          <p className="text-slate-700 text-lg md:text-xl">
            Let's talk about your next production. Available for short-term engagements
            and long-term projects worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-[#F0B740] hover:bg-[#C9A415] text-white font-semibold rounded-3xl transition-colors bubble-hover"
            >
              <Mail size={18} />
              Contact Me
            </Link>
            <a
              href="mailto:tomsammorrismusic@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-3 border border-[#F5D055] hover:border-[#F5D055] text-slate-600 hover:text-slate-700 rounded-3xl transition-colors bubble-hover"
            >
              Email Directly
            </a>
          </div>
          <div className="flex justify-center gap-5">
            <a
              href="https://www.instagram.com/tom_morris2810/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-[#F5D055] hover:border-[#F5D055] text-slate-700 hover:text-[#E5B845] transition-colors bubble-hover"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/447857484127"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-[#F5D055] hover:border-[#F5D055] text-slate-700 hover:text-[#E5B845] transition-colors bubble-hover"
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
