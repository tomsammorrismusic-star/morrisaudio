import { Link } from '@tanstack/react-router'
import { useState } from 'react'
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

  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-white hover:text-amber-400 transition-colors">
          <Mic className="w-5 h-5 text-amber-400" />
          Morris Audio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-gray-400 hover:text-white transition-colors"
              activeProps={{ className: 'text-sm text-amber-400 font-medium' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:hello@soundrecordist.com"
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold text-sm rounded-lg transition-colors"
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
        <nav className="md:hidden border-t border-gray-800 bg-gray-950 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:hello@soundrecordist.com"
            className="px-4 py-2 bg-amber-500 text-gray-950 font-semibold text-sm rounded-lg text-center"
          >
            Email Me
          </a>
        </nav>
      )}
    </header>
  )
}
