import { useState, useEffect, useRef } from 'react'

/**
 * Animates a number from 0 to `end` when `isActive` becomes true.
 * Handles suffixes like "+", "%" and decimals like "3.2".
 * Returns { display } — the formatted string to render.
 */
export function useCountUp(rawValue, duration = 1400, isActive = false) {
  const [current, setCurrent] = useState(0)
  const started = useRef(false)

  // Parse value + suffix: "100%" → { num: 100, suffix: "%" }
  const num    = parseFloat(rawValue)
  const suffix = rawValue.replace(/[\d.]/g, '')
  const decimals = (rawValue.split('.')[1] || '').replace(/[^0-9]/g, '').length

  useEffect(() => {
    if (!isActive || started.current || isNaN(num)) return
    started.current = true

    let startTime = null

    const easeOutCubic = t => 1 - Math.pow(1 - t, 3)

    const step = timestamp => {
      if (!startTime) startTime = timestamp
      const elapsed  = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased    = easeOutCubic(progress)
      setCurrent(eased * num)
      if (progress < 1) requestAnimationFrame(step)
      else setCurrent(num)
    }

    requestAnimationFrame(step)
  }, [isActive, num, duration])

  const display = isNaN(num)
    ? rawValue
    : `${current.toFixed(decimals)}${suffix}`

  return display
}
