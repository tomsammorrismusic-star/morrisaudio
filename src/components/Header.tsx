import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X, Mic } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/showreel', label: 'Showreel' },
  { to: '/resume', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 border-gray-800' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between rounded-b-2xl">
        <Link to="/" className="flex items-center gap-3 font-bold text-2xl md:text-3xl text-white hover:text-yellow-400 transition-colors tracking-tight">
          <Mic className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" />
          <span>Morris Audio</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-gray-400 hover:text-white hover:underline underline-offset-4 transition-colors bubble-hover"
              activeProps={{ className: 'text-sm text-yellow-400 font-medium' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:tomsammorrismusic@gmail.com"
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-semibold text-sm rounded-xl transition-all duration-200 bubble-hover"
          >
            Email Me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-gray-800 bg-gray-900 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="text-gray-400 hover:text-white hover:underline underline-offset-4 transition-colors bubble-hover"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:tomsammorrismusic@gmail.com"
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-semibold text-sm rounded-xl transition-all duration-200 text-center bubble-hover"
          >
            Email Me
          </a>
        </nav>
      )}
    </header>
  )
}
