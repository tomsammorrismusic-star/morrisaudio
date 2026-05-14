import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/credits')({
  component: Credits,
})

function Credits() {
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
      <h2 className="text-2xl font-semibold text-slate-700 mb-6">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <Card key={idx} className="bg-[#F5F0E8] border-slate-700">
            <CardContent className="pt-4">
              <h3 className="font-semibold text-slate-700">{item.title}</h3>
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
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Tom Morris</h1>
          <p className="text-xl font-semibold text-slate-600">Sound Recordist | Sound Mixer | Sound Designer</p>
          <p className="text-slate-600">Email: tomsammorrismusic@gmail.com</p>
          <p className="text-slate-600">Education: Music Technology, Kingston University - Bachelors</p>
        </div>

        <CreditSection title="Feature Films" items={featureFilms} />
        <CreditSection title="Commercials & Industrials" items={commercials} />
        <CreditSection title="Documentaries & Television" items={documentaries} />
        <CreditSection title="Short Films (Selection)" items={shortFilms} />
        <CreditSection title="Podcast" items={podcasts} />
        <CreditSection title="Additional Experience" items={other} />
      </div>
    </div>
  )
}
