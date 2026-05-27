import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: -300, y: -300 })
  const lerpPos = useRef({ x: -300, y: -300 })
  const rafId   = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [visible,  setVisible]  = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const setPos = (x, y) => {
      mouse.current = { x, y }
      if (!visible) setVisible(true)
    }

    const onMove  = e => setPos(e.clientX, e.clientY)
    const onDown  = () => setClicking(true)
    const onUp    = () => setClicking(false)

    const onOver  = e => {
      if (e.target.closest('a, button, [role="button"], .btn, input, textarea, select')) {
        setHovering(true)
      }
    }
    const onOut   = e => {
      if (e.target.closest('a, button, [role="button"], .btn, input, textarea, select')) {
        setHovering(false)
      }
    }

    const tick = () => {
      const LERP = 0.11
      lerpPos.current.x += (mouse.current.x - lerpPos.current.x) * LERP
      lerpPos.current.y += (mouse.current.y - lerpPos.current.y) * LERP

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${lerpPos.current.x}px, ${lerpPos.current.y}px) translate(-50%, -50%)`
      }
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup',   onUp)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)

    return () => {
      cancelAnimationFrame(rafId.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup',   onUp)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      <div
        ref={dotRef}
        className={`cur-dot${hovering ? ' hover' : ''}${clicking ? ' click' : ''}${visible ? ' visible' : ''}`}
      />
      <div
        ref={ringRef}
        className={`cur-ring${hovering ? ' hover' : ''}${clicking ? ' click' : ''}${visible ? ' visible' : ''}`}
      />
    </>
  )
}
