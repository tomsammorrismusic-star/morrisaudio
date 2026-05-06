import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Film } from 'lucide-react'
import VideoWheel from '@/components/VideoWheel'

export const Route = createFileRoute('/showreel')({
  component: Showreel,
})

function Showreel() {
  const showreelProjects = allProjects.filter((project) =>
    project.tags.some((tag) => ['Podcast', 'Voice Over', 'Corporate', 'Commercial', 'Audio'].includes(tag)),
  )

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Showreel</h1>
        <p className="text-gray-400 mb-10 text-lg">
          Podcast, voice-over, corporate, and commercial audio production samples.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-2">Featured Work</h2>
          <p className="text-gray-400 mb-6">Use arrows to browse productions</p>
          <VideoWheel />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Services & Specializations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showreelProjects.map((project) => (
            <Card key={project._meta.path} className="flex flex-col bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  )}
                  {!project.liveUrl && (
                    <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                      <Film size={16} />
                      In archive
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800">
          <h3 className="text-2xl font-bold mb-3">Ready to work together?</h3>
          <p className="text-gray-400 mb-6">
            Let's discuss your next audio project and how I can help bring your vision to life.
          </p>
          <a
            href="mailto:hello@soundrecordist.com"
            className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
