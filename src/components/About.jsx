import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCountUp }         from '../hooks/useCountUp'
import './About.css'

const stats = [
  { value: '1+',   label: 'Year of Experience' },
  { value: '2+',   label: 'Projects Delivered' },
  { value: '3.2',  label: 'GPA — CS Degree' },
  { value: '100%', label: 'Passion for Code' },
]

function StatItem({ value, label, isActive }) {
  const display = useCountUp(value, 1600, isActive)
  return (
    <div className="about-stat">
      <span className="as-value">{display}</span>
      <span className="as-label">{label}</span>
    </div>
  )
}

export default function About() {
  const header = useScrollAnimation()
  const content = useScrollAnimation()
  const visual  = useScrollAnimation()

  return (
    <section id="about">
      <div className="container">
        <div ref={header.ref} className={`reveal${header.isVisible ? ' visible' : ''}`}>
          <p className="section-tag">01 — about</p>
          <h2 className="section-title">Who I <em>Am</em></h2>
        </div>

        <div className="about-grid">
          <div ref={content.ref} className={`about-text reveal${content.isVisible ? ' visible' : ''}`}>
            <p className="about-lead">
              I'm a Front-End Developer based in <strong>Giza, Egypt</strong>, passionate
              about building clean, accessible, and performant web interfaces.
            </p>
            <p>
              Currently working as a Software &amp; Systems Engineer at <strong>DigitalCom</strong>,
              where I build custom UI modules for 100+ touch-panel devices and integrate
              production systems with APIs for platforms like Zoom and Cisco.
            </p>
            <p>
              I hold a <strong>Bachelor's in Computer Science (Software Engineering)</strong>
              from the Arab Academy for Science and Technology, and I'm always expanding
              my skills — from full-stack CRUD apps to accessible, mobile-first design.
            </p>

            <div className="about-list">
              <div className="about-list-item">
                <span className="ali-dot" />
                React.js &amp; Modern JavaScript (ES6+)
              </div>
              <div className="about-list-item">
                <span className="ali-dot" />
                Node.js, Express &amp; RESTful APIs
              </div>
              <div className="about-list-item">
                <span className="ali-dot" />
                Responsive, Mobile-First CSS
              </div>
              <div className="about-list-item">
                <span className="ali-dot" />
                Git workflows &amp; collaborative dev
              </div>
            </div>

            <div className="about-contact-row">
              <a href="mailto:Momenmoussa7@gmail.com" className="about-contact-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
                Momenmoussa7@gmail.com
              </a>
              <a href="tel:+201011425511" className="about-contact-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 2h3l1.5 3.5-1.75 1.25A8 8 0 0 0 8.25 10.25L9.5 8.5 13 10v3a1 1 0 0 1-1 1A11 11 0 0 1 2 3a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
                +20 101 142 5511
              </a>
            </div>
          </div>

          <div ref={visual.ref} className={`about-visual reveal delay-2${visual.isVisible ? ' visible' : ''}`}>
            <div className="about-photo-wrap">
              <div className="about-photo-ring" />
              <div className="about-photo">
                <img
                  src="/profile.png"
                  alt="Momen Mohamed"
                  className="about-photo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="about-photo-glow" />
            </div>

            <div className="about-stats">
              {stats.map((s, i) => (
                <StatItem key={i} value={s.value} label={s.label} isActive={visual.isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
