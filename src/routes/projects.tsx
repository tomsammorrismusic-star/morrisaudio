import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Film, Download } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const downloadCredits = () => {
    const content = `TOM MORRIS - FULL CREDITS LIST
Sound Recordist | Sound Mixer | Sound Designer
Email: TOMSAMMORRISMUSIC@GMAIL.COM

FEATURE FILMS
• De De Pyaar De 2 | Boom Operator (Bollywood Feature (Aug 2025))
• The Trial | Sound Mixer (Dir. Jack Parr (Apr 2025))
• Worry Time | Production Sound (Aug 2024)
• Tomorrow Never Comes | Sound Mixer (Apr 2024)
• Highgate Vampyre | Sound Mixer (Jan 2024)
• Bring Me a Skin for Dancing In | Production Sound (Jan 2024)
• Irish Ashes | Sound Recordist (Nov 2023)
• State of Us | Sound Mixer (April 2025)
• The Hitman's Nightmare | Sound Recordist (May 2025)

COMMERCIALS & INDUSTRIALS
• Sportsbet.io | Sound Mixer | Newcastle United x3 (Jun 2025)
• EE & Google Pixel | Sound Mixer | Women's National Team (Apr 2025)
• Apollo Tyres | Sound Mixer | Manchester United (Mar 2025)
• Royal Enfield | Sound Mixer | Includes SFX recording (Aug 2024)
• Berlin Medical Conference | Pharmaceutical Commercial (October 2025)
• Central Saint Martins Sixth Form | TV Commercial (March 2026)
• Sandwell College | TV Commercial (March 2026)
• Arosmic | Vertical Commercial (April 2026)

DOCUMENTARIES & TELEVISION
• Untold Stories | Sound Recordist (BBC (Jun 2025))
• Maslenitsa | Sound Recordist (Apr 2024)
• Shrove Football | Sound Recordist (Feb 2024)
• GUTS | Sound Mixer (Sept 2024)
• Wild Horses | Sound Assistant (Aug 2023)

SHORT FILMS (SELECTION)
• Sleepless | Production & Post Sound (Aug 2024)
• The Guard | Sound Recordist (Jun 2024)
• Morning Glory | Sound Recordist (Jun 2024)
• Never or Forever | Boom Operator (May 2024)
• Summer Yet Comes | Sound Designer (May 2024)
• Chasing Nothing | Sound Designer (2024)
• Nightmare Connections | Sound Recordist (2024)
• Belonging | Sound Recordist (Nov 2023)
• Chicken Estate | Sound Recordist (Nov 2023)
• The Squeeze | Sound Recordist (Sept 2023)
• The Pitch | Sound Recordist (Aug 2023)
• The Blossoming Fern | Sound Recordist (Aug 2023)
• The Name Has A Price | Sound Recordist (Jul 2023)

PODCAST
• Podcasts: VCL Vintners (Whiskey Investments) - 2023 - Present
• Fostering Positivity (Support Care) - 2022 - Present

YOUTUBE
• YouTube: Trendy Grandad | Sound Recordist for 12+ person quiz show (Sept 2024)

ADDITIONAL EXPERIENCE
• Live Sound: Sound Mixer & 1st/2nd AS at The Cast Doncaster (Nov 2024 – Present)
• Game Design: Strings of Divinity 2 | In-house Sound Designer (Nov 2022 – Present)`

    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content))
    element.setAttribute('download', 'Tom_Morris_Credits.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const projects = [
    {
      title: 'De De Pyaar De 2',
      category: 'Feature Film',
      role: 'Boom Operator',
      description: 'Bollywood Feature',
      date: 'Aug 2025',
      icon: '🎬',
    },
    {
      title: 'The Trial',
      category: 'Feature Film',
      role: 'Sound Mixer',
      description: 'Directed by Jack Parr',
      date: 'Apr 2025',
      icon: '🎬',
    },
    {
      title: 'Sportsbet.io',
      category: 'Commercial',
      role: 'Sound Mixer',
      description: 'Newcastle United x3',
      date: 'Jun 2025',
      icon: '📺',
    },
    {
      title: 'EE & Google Pixel',
      category: 'Commercial',
      role: 'Sound Mixer',
      description: 'Women\'s National Team',
      date: 'Apr 2025',
      icon: '📺',
    },
    {
      title: 'Worry Time',
      category: 'Feature Film',
      role: 'Production Sound',
      description: 'Drama Feature',
      date: 'Aug 2024',
      icon: '🎬',
    },
    {
      title: 'Apollo Tyres',
      category: 'Commercial',
      role: 'Sound Mixer',
      description: 'Manchester United',
      date: 'Mar 2025',
      icon: '📺',
    },
    {
      title: 'Tomorrow Never Comes',
      category: 'Feature Film',
      role: 'Sound Mixer',
      description: 'Narrative Feature',
      date: 'Apr 2024',
      icon: '🎬',
    },
    {
      title: 'Royal Enfield',
      category: 'Commercial',
      role: 'Sound Mixer',
      description: 'Includes SFX recording',
      date: 'Aug 2024',
      icon: '📺',
    },
    {
      title: 'Untold Stories',
      category: 'Documentary',
      role: 'Sound Recordist',
      description: 'BBC Documentary',
      date: 'Jun 2025',
      icon: '📹',
    },
    {
      title: 'Sleepless',
      category: 'Short Film',
      role: 'Production & Post Sound',
      description: 'Short Film',
      date: 'Aug 2024',
      icon: '🎞️',
    },
    {
      title: 'The Guard',
      category: 'Short Film',
      role: 'Sound Recordist',
      description: 'Short Film',
      date: 'Jun 2024',
      icon: '🎞️',
    },
    {
      title: 'State of Us',
      category: 'Feature Film',
      role: 'Sound Mixer',
      description: 'Feature Film',
      date: 'Apr 2025',
      icon: '🎬',
    },
  ]

  return (
    <div className="min-h-screen bg-brand text-slate-700 p-8 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Notable Productions</h1>
          <p className="text-slate-700 text-lg">A selection of feature films, commercials, and documentaries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="bg-[#F5F0E8] border-slate-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-slate-700">{project.title}</CardTitle>
                    <p className="text-sm font-medium text-slate-600 mt-2">{project.role}</p>
                  </div>
                  <span className="text-2xl">{project.icon}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">{project.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                  <span className="text-xs font-medium text-slate-500">{project.category}</span>
                  <span className="text-xs text-slate-500">{project.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-[#F5F0E8] border border-slate-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-slate-700">Full Credits Available</h3>
          <p className="text-slate-600 mb-6">
            View the complete resume with all feature films, commercials, documentaries, short films, podcasts, and additional experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={downloadCredits}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5C429] hover:bg-[#D4A600] text-slate-700 font-semibold rounded-2xl transition-colors"
            >
              <Download size={18} />
              Download Credits
            </button>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:bg-slate-100 text-slate-700 font-semibold rounded-2xl transition-colors"
            >
              <Film size={18} />
              View Full CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
