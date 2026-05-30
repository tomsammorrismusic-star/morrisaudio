import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Volume2, Activity, Music, Zap, Mail, Instagram, MessageCircle } from 'lucide-react'

export const Route = createFileRoute('/post-audio')({
  component: PostAudio,
})

function PostAudio() {
  const services = [
    {
      icon: Volume2,
      title: 'Dialogue Cleanup & EQ',
      desc: 'Professional dialogue editing, noise reduction, and spectral repair for broadcast-quality audio.',
    },
    {
      icon: Activity,
      title: 'Sound Design',
      desc: 'Creative sound design and Foley supervision for films, documentaries, and commercials.',
    },
    {
      icon: Music,
      title: 'Audio Mixing & Mastering',
      desc: 'Full mix down, surround sound preparation, and mastering for various delivery formats.',
    },
  ]

  const projects = [
    {
      title: 'Feature Film Post Production',
      description: 'Complete post-audio workflow including dialogue cleanup, Foley recording, and final mix.',
      details: 'Delivered in 5.1 Surround and Stereo formats',
    },
    {
      title: 'Documentary Sound Design',
      description: 'Custom sound design and atmospheric sound beds for multi-part documentary series.',
      details: 'BBC broadcast specifications',
    },
    {
      title: 'Commercial Audio Mixing',
      description: 'High-impact audio mixing for broadcast commercials with quick turnarounds.',
      details: '30-60 second spots',
    },
    {
      title: 'TV Drama Audio Post',
      description: 'Full dialogue cleanup, sound effects layering, and mix for episodic television.',
      details: 'Episode lengths from 30 to 60 minutes',
    },
    {
      title: 'Podcast Production',
      description: 'Audio editing, noise reduction, and mastering for professional podcast delivery.',
      details: 'Optimized for streaming platforms',
    },
    {
      title: 'Game Audio Mastering',
      description: 'Audio mastering and implementation support for interactive game projects.',
      details: 'Dialogue, music, and SFX integration',
    },
  ]

  return (
    <div className="min-h-screen bg-brand text-slate-700">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="relative z-10 w-full max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Post-Production
            <br />
            <span className="text-[#D4A600]">Audio Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Professional post-production audio services for film, television, documentary, and commercial projects. From dialogue cleanup to final mix, we deliver broadcast-quality audio.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">What I Offer</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Complete post-production audio solutions tailored to your project's needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="p-8 rounded-3xl border border-slate-700 hover:border-slate-600 bg-[#F5F0E8] hover:bg-[#EDE5D8] transition-all duration-300 bubble-hover"
              >
                <svc.icon className="w-14 h-14 text-[#D4A600] mb-8" />
                <h3 className="text-2xl font-semibold mb-4">{svc.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Project Experience</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Diverse experience across film, television, documentary, and multimedia platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="bg-[#F5F0E8] border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-slate-700">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                  <p className="text-xs text-slate-500 font-medium">{project.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Ready to enhance your audio?</h2>
          <p className="text-slate-700 text-lg md:text-xl">
            Let's discuss your post-production audio needs and deliver professional results on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
            <a
              href="mailto:tomsammorrismusic@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-[#F5C429] hover:bg-[#D4A600] text-white font-semibold rounded-3xl transition-colors bubble-hover"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>
          <div className="flex justify-center gap-5">
            <a
              href="mailto:tomsammorrismusic@gmail.com"
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-slate-700 hover:border-slate-700 text-slate-700 hover:text-[#E5CA38] transition-colors bubble-hover"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
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
      </section>
    </div>
  )
}
