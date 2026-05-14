import { marked } from 'marked'

import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Mail } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <div className="min-h-screen bg-brand text-slate-700 p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-semibold">Experience & CV</h1>
          <p className="text-slate-700 text-lg">
            Professional sound recordist with 10+ years in film, documentary, and broadcast.
          </p>
          <Separator className="mt-8 bg-gray-300" />
        </div>

        {/* Career Summary */}
        <Card className="bg-lime-700 border-gray-400 text-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-700">Career Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="flex-1 leading-relaxed text-slate-600">
                A versatile production sound mixer and boom operator based in London, with extensive
                credits across feature film, high-end TV drama, documentary, and commercial work.
                Trained at the National Film and Television School, with a commitment to capturing
                clean, emotionally resonant audio in any environment — from controlled studio sets
                to remote wilderness locations. Comfortable with all major production audio systems
                and experienced collaborating with international crews.
              </p>
              <img
                src="/headshot-on-white.jpg"
                alt="Professional headshot"
                className="w-44 h-52 rounded-2xl object-cover flex-shrink-0"
              />
            </div>
            <div className="mt-6">
              <a
                href="mailto:tomsammorrismusic@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-600 text-slate-700 font-semibold rounded-2xl transition-colors text-sm"
              >
                <Mail size={16} />
                Email Me
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-700">Work Experience</h2>
          <div className="space-y-6">
            {allJobs.map((job) => (
              <Card key={job.jobTitle} className="bg-lime-700 border-gray-400 text-slate-700">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-xl text-slate-700">{job.jobTitle}</CardTitle>
                      <p className="font-medium text-white">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-sm bg-gray-200 text-slate-600">
                      {job.startDate} – {job.endDate || 'Present'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-8 leading-relaxed text-slate-600">{job.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <HoverCard key={tag}>
                        <HoverCardTrigger>
                          <Badge variant="outline" className="cursor-pointer border-gray-400 text-slate-600 hover:border-white">
                            {tag}
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64 bg-lime-700 border-gray-400 text-slate-700">
                          <p className="text-sm">Proficient with {tag}</p>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                  {job.content && (
                    <div
                      className="mt-6 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-700">Education</h2>
          <div className="space-y-6">
            {allEducations.map((education) => (
              <Card key={education.school} className="bg-lime-700 border-gray-400 text-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-700">{education.school}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-slate-600">{education.summary}</p>
                  {education.content && (
                    <div
                      className="mt-6 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: marked(education.content) }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
