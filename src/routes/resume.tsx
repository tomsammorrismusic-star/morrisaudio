import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Mail, Download } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  const downloadCV = () => {
    const content = `TOM MORRIS
Sound Recordist | Sound Mixer | Sound Designer
Email: TOMSAMMORRISMUSIC@GMAIL.COM
Education: Music Technology, Kingston University - Bachelors

CAREER SUMMARY
A versatile production sound mixer and boom operator based in London, with extensive credits across feature film, high-end TV drama, documentary, and commercial work. Trained in professional audio production with a commitment to capturing clean, emotionally resonant audio in any environment — from controlled studio sets to remote locations. Comfortable with all major production audio systems and experienced collaborating with international crews on Bollywood productions, BBC documentaries, and major brand commercials.

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
    element.setAttribute('download', 'Tom_Morris_CV.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

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

  const featureFilms = [
    { title: 'De De Pyaar De 2', role: 'Boom Operator', note: 'Bollywood Feature (Aug 2025)' },
    { title: 'The Trial', role: 'Sound Mixer', note: 'Dir. Jack Parr (Apr 2025)' },
    { title: 'Worry Time', role: 'Production Sound', note: 'Aug 2024' },
    { title: 'Tomorrow Never Comes', role: 'Sound Mixer', note: 'Apr 2024' },
    { title: 'Highgate Vampyre', role: 'Sound Mixer', note: 'Jan 2024' },
    { title: 'Bring Me a Skin for Dancing In', role: 'Production Sound', note: 'Jan 2024' },
    { title: 'Irish Ashes', role: 'Sound Recordist', note: 'Nov 2023' },
    { title: 'State of Us', role: 'Sound Mixer', note: 'April 2025' },
    { title: 'The Hitman\'s Nightmare', role: 'Sound Recordist', note: 'May 2025' },
  ]

  const commercials = [
    { title: 'Sportsbet.io', role: 'Sound Mixer', note: 'Newcastle United x3 (Jun 2025)' },
    { title: 'EE & Google Pixel', role: 'Sound Mixer', note: 'Women\'s National Team (Apr 2025)' },
    { title: 'Apollo Tyres', role: 'Sound Mixer', note: 'Manchester United (Mar 2025)' },
    { title: 'Royal Enfield', role: 'Sound Mixer', note: 'Includes SFX recording (Aug 2024)' },
    { title: 'Berlin Medical Conference', role: 'Sound Mixer', note: 'Pharmaceutical Commercial (October 2025)' },
    { title: 'Central Saint Martins Sixth Form', role: 'Sound Mixer', note: 'TV Commercial (March 2026)' },
    { title: 'Sandwell College', role: 'Sound Mixer', note: 'TV Commercial (March 2026)' },
    { title: 'Arosmic', role: 'Sound Mixer', note: 'Vertical Commercial (April 2026)' },
  ]

  const documentaries = [
    { title: 'Untold Stories', role: 'Sound Recordist', note: 'BBC (Jun 2025)' },
    { title: 'Maslenitsa', role: 'Sound Recordist', note: 'Apr 2024' },
    { title: 'Shrove Football', role: 'Sound Recordist', note: 'Feb 2024' },
    { title: 'GUTS', role: 'Sound Mixer', note: 'Sept 2024' },
    { title: 'Wild Horses', role: 'Sound Assistant', note: 'Aug 2023' },
  ]

  const shortFilms = [
    { title: 'Sleepless', role: 'Production & Post Sound', note: 'Aug 2024' },
    { title: 'The Guard', role: 'Sound Recordist', note: 'Jun 2024' },
    { title: 'Morning Glory', role: 'Sound Recordist', note: 'Jun 2024' },
    { title: 'Never or Forever', role: 'Boom Operator', note: 'May 2024' },
    { title: 'Summer Yet Comes', role: 'Sound Designer', note: 'May 2024' },
    { title: 'Chasing Nothing', role: 'Sound Designer', note: '2024' },
    { title: 'Nightmare Connections', role: 'Sound Recordist', note: '2024' },
    { title: 'Belonging', role: 'Sound Recordist', note: 'Nov 2023' },
    { title: 'Chicken Estate', role: 'Sound Recordist', note: 'Nov 2023' },
    { title: 'The Squeeze', role: 'Sound Recordist', note: 'Sept 2023' },
    { title: 'The Pitch', role: 'Sound Recordist', note: 'Aug 2023' },
    { title: 'The Blossoming Fern', role: 'Sound Recordist', note: 'Aug 2023' },
    { title: 'The Name Has A Price', role: 'Sound Recordist', note: 'Jul 2023' },
  ]

  const podcasts = [
    { title: 'VCL Vintners', role: 'Sound Recordist', note: 'Whiskey Investments (2023 - Present)' },
    { title: 'Fostering Positivity', role: 'Sound Recordist', note: 'Support Care (2022 - Present)' },
  ]

  const other = [
    { title: 'Trendy Grandad', role: 'Sound Recordist', note: 'YouTube - 12+ person quiz show (Sept 2024)' },
    { title: 'The Cast Doncaster', role: 'Sound Mixer & 1st/2nd AS', note: 'Live Sound (Nov 2024 - Present)' },
    { title: 'Strings of Divinity 2', role: 'In-house Sound Designer', note: 'Game Design (Nov 2022 - Present)' },
  ]

  const CreditSection = ({ title, items }: { title: string; items: typeof featureFilms }) => (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-700 mb-4">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <Card key={idx} className="bg-[#F5F0E8] border-slate-700">
            <CardContent className="pt-4">
              <h4 className="font-semibold text-slate-700">{item.title}</h4>
              <p className="text-sm text-slate-600 mt-1">{item.role}</p>
              <p className="text-xs text-slate-500 mt-2">{item.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-brand text-slate-700 p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-semibold">Experience & CV</h1>
          <p className="text-slate-700 text-lg font-semibold">Sound Recordist | Sound Mixer | Sound Designer</p>
          <div className="space-y-2 text-sm text-slate-600">
            <p>Email: tomsammorrismusic@gmail.com</p>
            <p>Education: Music Technology, Kingston University - Bachelors</p>
          </div>
          <Separator className="mt-8 bg-slate-300" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button
              onClick={downloadCV}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5C429] hover:bg-[#D4A600] text-slate-700 font-semibold rounded-2xl transition-colors"
            >
              <Download size={18} />
              Download CV
            </button>
            <button
              onClick={downloadCredits}
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:bg-slate-100 text-slate-700 font-semibold rounded-2xl transition-colors"
            >
              <Download size={18} />
              Download Credits List
            </button>
          </div>
        </div>

        {/* Career Summary */}
        <Card className="bg-[#F5F0E8] border-slate-700 text-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-700">Career Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="leading-relaxed text-slate-600">
                  A versatile production sound mixer and boom operator with extensive credits across feature film, high-end TV drama, documentary, and commercial work. Experienced collaborating with international crews on Bollywood productions, BBC documentaries, and major brand commercials.
                </p>
                <div className="mt-6">
                  <a
                    href="mailto:tomsammorrismusic@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F5C429] hover:bg-[#D4A600] text-slate-700 font-semibold rounded-2xl transition-colors text-sm"
                  >
                    <Mail size={16} />
                    Email Me
                  </a>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F1a8d84947e9444f98df7c975eda41851%2Fadd1319ac1184a8ea01e94321ca2fce2?format=webp&width=800&height=1200"
                alt="Tom Morris - Professional headshot"
                className="w-44 h-auto rounded-2xl object-cover flex-shrink-0 shadow-md"
              />
            </div>
          </CardContent>
        </Card>

        {/* Credits */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold text-slate-700">Professional Credits</h2>
          
          <CreditSection title="Feature Films" items={featureFilms} />
          <CreditSection title="Commercials & Industrials" items={commercials} />
          <CreditSection title="Documentaries & Television" items={documentaries} />
          <CreditSection title="Short Films (Selection)" items={shortFilms} />
          <CreditSection title="Podcast" items={podcasts} />
          <CreditSection title="Additional Experience" items={other} />
        </div>
      </div>
    </div>
  )
}
