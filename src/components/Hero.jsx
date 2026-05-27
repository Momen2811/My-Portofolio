import { useState, useEffect, useMemo } from 'react'
import './Hero.css'

const words = ['React.js Apps', 'Web Interfaces', 'UI Components', 'REST APIs']

/* Deterministic particles — no Math.random so no re-render jitter */
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id:    i,
  x:     ((i * 37 + 13) % 86) + 5,
  y:     ((i * 53 + 19) % 78) + 8,
  size:  ((i % 3) + 1) * 1.8,
  delay: ((i * 0.55) % 7).toFixed(2),
  dur:   (9 + (i % 5)).toFixed(1),
  op:    (0.18 + (i % 4) * 0.07).toFixed(2),
}))

function TypeWriter() {
  const [text, setText]         = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused]     = useState(false)

  useEffect(() => {
    if (paused) return
    const word  = words[wordIdx]
    const speed = deleting ? 38 : 75

    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1)
        setText(next)
        if (next === word) {
          setPaused(true)
          setTimeout(() => { setPaused(false); setDeleting(true) }, 2000)
        }
      } else {
        const next = word.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(t)
  }, [text, deleting, wordIdx, paused])

  return (
    <span className="hero-typed">
      {text}
      <span className="hero-cursor" aria-hidden="true">_</span>
    </span>
  )
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Atmospheric orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      {/* Floating particles */}
      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map(p => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left:              `${p.x}%`,
              top:               `${p.y}%`,
              width:             `${p.size}px`,
              height:            `${p.size}px`,
              opacity:            p.op,
              animationDelay:    `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge hero-anim-1">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <p className="hero-greeting hero-anim-2">Hello, I'm</p>

          <h1 className="hero-name hero-anim-3">
            <span className="hero-name-line">Momen</span>
            <span className="hero-name-line hero-name-accent">Mohamed</span>
          </h1>

          <p className="hero-sub hero-anim-4">
            I build&nbsp;<TypeWriter />
          </p>

          <p className="hero-desc hero-anim-5">
            Front-End Developer crafting responsive, accessible web experiences
            with React.js, JavaScript, and modern CSS.
          </p>

          <div className="hero-actions hero-anim-6">
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
              View My Work
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2 7.5h11M8 2.5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="/cv.pdf" className="btn btn--outline" download="Momen_Mohamed_CV.pdf">
              Download CV
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 2v8M3.5 8l4 4 4-4M2.5 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="hero-socials hero-anim-7">
            <a href="https://github.com/Momen2811" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/momen-moussa" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn profile">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual hero-anim-8" aria-hidden="true">
          <div className="hero-card">
            <div className="hc-bar">
              <span /><span /><span />
            </div>
            <div className="hc-code">
              <div className="hc-line"><span className="ck">const</span> <span className="cv">developer</span> <span className="co">=</span> {'{'}</div>
              <div className="hc-line hc-indent"><span className="ck">name</span><span className="co">:</span> <span className="cs">"Momen Mohamed"</span><span className="co">,</span></div>
              <div className="hc-line hc-indent"><span className="ck">role</span><span className="co">:</span> <span className="cs">"Front-End Dev"</span><span className="co">,</span></div>
              <div className="hc-line hc-indent"><span className="ck">stack</span><span className="co">:</span> [</div>
              <div className="hc-line hc-indent2"><span className="cs">"React"</span><span className="co">,</span> <span className="cs">"JS"</span><span className="co">,</span> <span className="cs">"CSS"</span></div>
              <div className="hc-line hc-indent">]<span className="co">,</span></div>
              <div className="hc-line hc-indent"><span className="ck">available</span><span className="co">:</span> <span className="cb">true</span></div>
              <div className="hc-line">{'}'}</div>
            </div>
          </div>
          <div className="hero-stat-chips">
            <div className="stat-chip"><span className="stat-n">1+</span><span className="stat-l">Year Exp.</span></div>
            <div className="stat-chip"><span className="stat-n">2+</span><span className="stat-l">Projects</span></div>
            <div className="stat-chip"><span className="stat-n">3.2</span><span className="stat-l">GPA</span></div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="scroll-label">scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
