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
    <div className="min-h-screen bg-brand text-white p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Experience & CV</h1>
          <p className="text-gray-300 text-lg">
            Professional sound recordist with 10+ years in film, documentary, and broadcast.
          </p>
          <Separator className="mt-8 bg-gray-300" />
        </div>

        {/* Career Summary */}
        <Card className="bg-pink-500 border-pink-500 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Career Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="flex-1 leading-relaxed text-gray-100">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-100 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors text-sm"
              >
                <Mail size={16} />
                Email Me
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Work Experience</h2>
          <div className="space-y-6">
            {allJobs.map((job) => (
              <Card key={job.jobTitle} className="bg-pink-500 border-pink-500 text-white">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-xl text-white">{job.jobTitle}</CardTitle>
                      <p className="font-medium text-pink-500">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-sm bg-gray-200 text-gray-100">
                      {job.startDate} – {job.endDate || 'Present'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 leading-relaxed text-gray-100">{job.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <HoverCard key={tag}>
                        <HoverCardTrigger>
                          <Badge variant="outline" className="cursor-pointer border-pink-500 text-gray-100 hover:border-pink-500">
                            {tag}
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64 bg-pink-500 border-pink-500 text-gray-800">
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
          <h2 className="text-3xl font-semibold text-white">Education</h2>
          <div className="space-y-6">
            {allEducations.map((education) => (
              <Card key={education.school} className="bg-pink-500 border-pink-500 text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{education.school}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-gray-100">{education.summary}</p>
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
