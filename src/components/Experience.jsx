import { useRef, useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Experience.css'

const items = [
  {
    type:     'work',
    role:     'Software / Systems Engineer',
    org:      'DigitalCom',
    location: 'Cairo, Egypt',
    period:   'Aug 2025 — Present',
    bullets: [
      'Develop and deploy custom UI modules for 100+ touch-panel devices, reducing end-user support calls by 30%.',
      'Engineer integration logic for 15+ production systems, achieving 99.9% post-deployment uptime.',
      'Build API integrations (Zoom, Cisco) using modular, reusable patterns, cutting dev time by 25%.',
      'Resolve 95% of client issues remotely via diagnostic tools and collaborative problem-solving.',
    ],
  },
  {
    type:     'work',
    role:     'Front-End Developer',
    org:      'Era Soft',
    location: 'Cairo, Egypt',
    period:   'Jan 2025 — Apr 2025',
    bullets: [
      'Built responsive SPAs with HTML5, CSS3, and ES6+ JavaScript ensuring cross-browser compatibility.',
      'Developed interactive UIs with React.js using component-based architecture and React Hooks.',
      'Engineered a full-featured CRUD app integrating front-end with REST APIs and structured data flows.',
      'Practiced Git version control, branching strategies, and collaborative code management on GitHub.',
    ],
  },
  {
    type:     'education',
    role:     'BSc Computer Science — Software Engineering',
    org:      'Arab Academy for Science and Technology',
    location: 'Cairo, Egypt',
    period:   '2020 — 2024',
    bullets: [
      'GPA: 3.2 / 4.0',
      'Coursework: Data Structures, Algorithms, Software Engineering, Databases, OOP, Web Development.',
      'Certifications: Front-End Diploma (Era Soft), Flutter (ITI), AI (ITI), Graphic Design (ITI).',
    ],
  },
]

function TimelineItem({ item, idx }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref} className={`tl-item tl-item--${item.type} reveal delay-${(idx % 3) + 1}${isVisible ? ' visible' : ''}`}>
      <div className="tl-dot" aria-hidden="true">
        {item.type === 'work' ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="3" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M4 3V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.4"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L1 5v8h4V9h4v4h4V5L7 1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
          </svg>
        )}
      </div>

      <div className="tl-content">
        <div className="tl-meta">
          <span className="tl-period">{item.period}</span>
          <span className={`tl-badge tl-badge--${item.type}`}>
            {item.type === 'work' ? 'Work' : 'Education'}
          </span>
        </div>

        <h3 className="tl-role">{item.role}</h3>
        <p className="tl-org">
          {item.org}
          <span className="tl-sep">·</span>
          <span className="tl-loc">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5c0 2.5-3.5 6.5-3.5 6.5S2.5 7 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="6" cy="4.5" r="1" fill="currentColor"/>
            </svg>
            {item.location}
          </span>
        </p>

        <ul className="tl-bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const header      = useScrollAnimation()
  const timelineRef = useRef(null)
  const [lineVisible, setLineVisible] = useState(false)

  useEffect(() => {
    const el = timelineRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLineVisible(true); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <div ref={header.ref} className={`reveal${header.isVisible ? ' visible' : ''}`}>
          <p className="section-tag">04 — experience</p>
          <h2 className="section-title">My <em>Journey</em></h2>
        </div>

        <div ref={timelineRef} className={`timeline${lineVisible ? ' line-visible' : ''}`}>
          {items.map((item, i) => (
            <TimelineItem key={i} item={item} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
