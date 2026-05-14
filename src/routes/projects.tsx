import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Film } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="min-h-screen bg-brand text-slate-700">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Notable Productions</h1>
        <p className="text-gray-200 mb-10 text-lg">
          A selection of film, documentary, and commercial projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project) => (
            <Card key={project._meta.path} className="flex flex-col bg-lime-700 border-rose-300 text-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-slate-700">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-slate-600 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-200 text-slate-600">
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
                      className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  )}
                  {!project.liveUrl && (
                    <span className="inline-flex items-center gap-2 text-sm text-gray-500">
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
    </div>
  )
}
