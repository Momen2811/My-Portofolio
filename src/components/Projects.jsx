import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Projects.css'

const projects = [
  {
    num:   '01',
    title: 'Full-Stack CRUD Application',
    desc:  'A complete web application with Create, Read, Update, and Delete functionality. React front-end connected to an Express/Node.js backend with a MySQL database. Features reusable components, form validation, and full state management.',
    tech:  ['React.js', 'Node.js', 'Express', 'MySQL', 'REST API', 'CSS3'],
    highlights: [
      'Reusable React components & custom hooks',
      'Server-side REST API with Express.js',
      'MySQL database with structured queries',
      'Responsive layout — mobile & desktop',
    ],
    github: 'https://github.com/Momen2811',
    live:   null,
  },
  {
    num:   '02',
    title: 'Portfolio & UI Components Library',
    desc:  'A showcase of interactive UI components built with vanilla JavaScript and React Hooks — modals, carousels, animated forms, and more. Optimized for accessibility, semantic HTML, and clean, maintainable CSS architecture.',
    tech:  ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'SASS', 'Accessibility'],
    highlights: [
      'Accessible modal dialogs & keyboard nav',
      'Smooth CSS carousel & scroll animations',
      'Animated form components with validation',
      'Semantic HTML & WCAG compliance',
    ],
    github: 'https://github.com/Momen2811',
    live:   null,
  },
]

function ProjectCard({ project, delay }) {
  const { ref, isVisible } = useScrollAnimation()
  const cardRef = ref

  const onMouseMove = e => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width  / 2
    const cy = rect.height / 2
    const rx = ((y - cy) / cy) * -7
    const ry = ((x - cx) / cx) *  7
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`
    card.style.setProperty('--mx', `${x}px`)
    card.style.setProperty('--my', `${y}px`)
  }

  const onMouseLeave = e => {
    e.currentTarget.style.transform = ''
    e.currentTarget.style.setProperty('--mx', '-200px')
    e.currentTarget.style.setProperty('--my', '-200px')
  }

  return (
    <article
      ref={cardRef}
      className={`proj-card reveal delay-${delay}${isVisible ? ' visible' : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="proj-top-bar" />
      <div className="proj-num">{project.num}</div>

      <div className="proj-body">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.desc}</p>

        <ul className="proj-highlights">
          {project.highlights.map(h => (
            <li key={h}>
              <span className="proj-check" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="proj-footer">
        <div className="proj-tech">
          {project.tech.map(t => (
            <span key={t} className="proj-tech-tag">{t}</span>
          ))}
        </div>

        <div className="proj-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link" aria-label="View source code on GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Code
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link proj-link--live" aria-label="View live demo">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3M9 2h5v5M14 2L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const header = useScrollAnimation()

  return (
    <section id="projects">
      <div className="container">
        <div ref={header.ref} className={`reveal${header.isVisible ? ' visible' : ''}`}>
          <p className="section-tag">03 — projects</p>
          <h2 className="section-title">Selected <em>Work</em></h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} delay={i + 1} />
          ))}
        </div>

        <div className="projects-more">
          <a href="https://github.com/Momen2811" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            View All on GitHub
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M2 7.5h11M8 2.5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
