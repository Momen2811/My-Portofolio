import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Skills.css'

const categories = [
  {
    label: 'Languages',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'JSX'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React.js', 'React Hooks', 'React Router', 'Node.js', 'Express.js'],
  },
  {
    label: 'Styling',
    skills: ['Tailwind CSS', 'Bootstrap', 'SASS/SCSS', 'Flexbox', 'CSS Grid', 'Responsive Design'],
  },
  {
    label: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'npm', 'Chrome DevTools'],
  },
  {
    label: 'Databases & APIs',
    skills: ['MySQL', 'PostgreSQL', 'RESTful APIs', 'JSON', 'Axios', 'Fetch API'],
  },
  {
    label: 'Concepts',
    skills: ['Component Architecture', 'State Management', 'Web Accessibility', 'Performance Optimization', 'Agile/Scrum'],
  },
]

function SkillCategory({ cat, delay }) {
  const { ref, isVisible } = useScrollAnimation()

  const onMouseMove = e => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    card.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }
  const onMouseLeave = e => {
    e.currentTarget.style.setProperty('--mx', '-200px')
    e.currentTarget.style.setProperty('--my', '-200px')
  }

  return (
    <div
      ref={ref}
      className={`skill-cat reveal delay-${delay}${isVisible ? ' visible' : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <h3 className="skill-cat-label">{cat.label}</h3>
      <div className="skill-tags">
        {cat.skills.map(s => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const header = useScrollAnimation()

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div ref={header.ref} className={`reveal${header.isVisible ? ' visible' : ''}`}>
          <p className="section-tag">02 — skills</p>
          <h2 className="section-title">My <em>Tech Stack</em></h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.label} cat={cat} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
