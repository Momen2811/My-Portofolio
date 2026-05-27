import { useState, useEffect } from 'react'
import './ScrollProgress.css'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setPct(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-prog-track" aria-hidden="true">
      <div className="scroll-prog-bar" style={{ width: `${pct}%` }} />
    </div>
  )
}
