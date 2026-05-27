import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [active, setActive]           = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      const ids = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner container">
          <a href="#hero" className="nav-logo" onClick={e => scrollTo(e, '#hero')}>
            <span className="nav-logo-mm">MM</span>
          </a>

          <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`}
                onClick={e => scrollTo(e, l.href)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              className="nav-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </nav>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div
        className={`nav-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  )
}
