import { useEffect, useRef, useState } from 'react'

/**
 * Triggers reveal animations once at page load — not on scroll.
 * All sections animate in their staggered order shortly after mount,
 * then stay visible permanently.
 */
export function useScrollAnimation() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay so React paints the initial opacity:0 state first,
    // then the CSS transition runs to the visible state.
    const t = setTimeout(() => setIsVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  return { ref, isVisible }
}
