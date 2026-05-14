import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X, Mic, Instagram, MessageCircle, Home, Film, Briefcase, FolderOpen, Mail } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/showreel', label: 'Showreel', icon: Film },
  { to: '/resume', label: 'Experience', icon: Briefcase },
  { to: '/projects', label: 'Projects', icon: FolderOpen },
  { to: '/contact', label: 'Contact', icon: Mail },
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between rounded-b-2xl">
        <Link to="/" className="flex items-center gap-3 font-semibold text-2xl md:text-3xl text-slate-700 hover:text-[#A08560] transition-colors tracking-tight">
          <Mic className="w-7 h-7 md:w-8 md:h-8 text-[#8B6F47]" />
          <span>Morris Audio</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="inline-flex items-center justify-center w-9 h-9 rounded-2xl text-slate-700 hover:text-[#A08560] hover:border border-[#A08560] hover:border-[#A08560] transition-colors bubble-hover"
              activeProps={{ className: 'inline-flex items-center justify-center w-9 h-9 rounded-2xl text-[#8B6F47] border border-[#A08560] transition-colors' }}
              title={link.label}
            >
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
          <div className="flex items-center gap-2 pl-2 border-l border-[#A08560]">
            <a
              href="https://www.instagram.com/tom_morris2810/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-2xl border border-[#A08560] hover:border-[#A08560] text-slate-700 hover:text-[#A08560] transition-colors bubble-hover"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/447857484127"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-2xl border border-[#A08560] hover:border-[#A08560] text-slate-700 hover:text-[#A08560] transition-colors bubble-hover"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
          <a
            href="mailto:tomsammorrismusic@gmail.com"
            className="px-3 py-2 bg-[#B8956F] hover:bg-[#8B6F47] text-white font-semibold text-xs rounded-2xl transition-all duration-200 bubble-hover ml-2"
          >
            Email
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-[#A08560] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-[#A08560] bg-brand px-3 py-2 flex flex-col gap-2 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="flex gap-1.5 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="flex-1 min-w-max inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded border border-[#A08560] hover:border-[#A08560] text-slate-700 hover:text-[#A08560] transition-colors bubble-hover text-xs"
                activeProps={{ className: 'flex-1 min-w-max inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded border border-[#A08560] text-[#8B6F47] transition-colors bubble-hover text-xs font-medium' }}
                title={link.label}
              >
                <link.icon className="w-3 h-3" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
          <div className="flex gap-1.5">
            <a
              href="https://www.instagram.com/tom_morris2810/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-2 py-1.5 rounded border border-[#A08560] hover:border-[#A08560] text-slate-700 hover:text-[#A08560] transition-colors bubble-hover"
              aria-label="Instagram"
            >
              <Instagram className="w-3 h-3" />
            </a>
            <a
              href="https://wa.me/447857484127"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-2 py-1.5 rounded border border-[#A08560] hover:border-[#A08560] text-slate-700 hover:text-[#A08560] transition-colors bubble-hover"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3 h-3" />
            </a>
          </div>
          <a
            href="mailto:tomsammorrismusic@gmail.com"
            className="px-3 py-1.5 bg-[#B8956F] hover:bg-[#8B6F47] text-white font-semibold text-xs rounded transition-all duration-200 text-center bubble-hover"
          >
            Email
          </a>
        </nav>
      )}
    </header>
  )
}
