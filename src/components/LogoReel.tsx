import { useRef, useEffect, useState } from 'react'

interface LogoItem {
  id: string
  name: string
  logo: React.ReactNode
}

const GoogleLogo = () => (
  <img
    src="https://cdn.builder.io/api/v1/image/assets%2F1a8d84947e9444f98df7c975eda41851%2F76c3d14629a84e948fe655ce4e510bee"
    alt="Google"
    className="w-10 h-10 object-contain logo-outline"
  />
)

const EELogo = () => (
  <img
    src="https://cdn.builder.io/api/v1/image/assets%2F1a8d84947e9444f98df7c975eda41851%2F85b0e76edc2c47ab841aa836b8576d83"
    alt="EE"
    className="w-10 h-10 object-contain logo-outline"
  />
)

const ManchesterUnitedLogo = () => (
  <img
    src="https://cdn.builder.io/api/v1/image/assets%2F1a8d84947e9444f98df7c975eda41851%2Fb1f8303e0651451ebb2204a72828c78a"
    alt="Manchester United"
    className="w-10 h-10 object-contain logo-outline"
  />
)

const NewcastleLogo = () => (
  <img
    src="https://cdn.builder.io/api/v1/image/assets%2F1a8d84947e9444f98df7c975eda41851%2Fbcd08217e74f4cbf9d2ad0ce4da27867"
    alt="Newcastle United"
    className="w-10 h-10 object-contain logo-outline"
  />
)

const logos: LogoItem[] = [
  { id: '1', name: 'Google', logo: <GoogleLogo /> },
  { id: '2', name: 'EE', logo: <EELogo /> },
  { id: '3', name: 'Manchester United', logo: <ManchesterUnitedLogo /> },
  { id: '4', name: 'Newcastle United', logo: <NewcastleLogo /> },
]

export default function LogoReel() {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!scrollContainer.current) return

    const container = scrollContainer.current
    if (isPaused) {
      container.style.animationPlayState = 'paused'
    } else {
      container.style.animationPlayState = 'running'
    }
  }, [isPaused])

  return (
    <div
      className="logo-reel-container relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer scroll container with overflow-x-auto */}
      <div className="overflow-x-auto py-8">
        {/* Inner scroll container without overflow clipping */}
        <div
          ref={scrollContainer}
          className="logo-reel-scroll flex gap-12"
          style={{
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="logo-item flex-shrink-0 flex items-center justify-center px-8 py-6 rounded-xl border border-gray-300 hover:border-yellow-500/50 transition-all duration-300 min-w-max bubble-hover"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">{item.logo}</div>
                <span className="text-lg font-semibold text-gray-700">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  )
}
