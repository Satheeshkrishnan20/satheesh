import { useEffect, useRef, useState } from 'react'

/**
 * Count-up animation that fires once the element scrolls into view.
 *
 * Accepts the raw metric string (e.g. "200K+", "+34%", "20 hrs/wk", "Open")
 * and animates only the leading numeric part, preserving any prefix/suffix.
 * Non-numeric values (e.g. "Open") are returned unchanged with no animation.
 *
 * Returns [ref, display] — attach ref to the element, render `display`.
 * Respects prefers-reduced-motion by jumping straight to the final value.
 */
export function useCountUp(raw, { duration = 1600 } = {}) {
  const ref = useRef(null)
  const match = String(raw).match(/^(\D*)(\d[\d,.]*)(.*)$/s)

  // No number to animate — render the original string as-is.
  const numeric = match ? Number(match[2].replace(/,/g, '')) : null
  const prefix = match ? match[1] : ''
  const suffix = match ? match[3] : ''
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0

  const [value, setValue] = useState(numeric === null ? null : 0)

  useEffect(() => {
    if (numeric === null) return
    const node = ref.current
    if (!node) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setValue(numeric)
      return
    }

    let raf = 0
    let start = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()

      const tick = (now) => {
        if (!start) start = now
        const t = Math.min((now - start) / duration, 1)
        // easeOutCubic — fast start, gentle settle
        const eased = 1 - Math.pow(1 - t, 3)
        setValue(numeric * eased)
        if (t < 1) raf = requestAnimationFrame(tick)
        else setValue(numeric)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [numeric, duration])

  if (numeric === null) return [ref, raw]

  const shown = value >= numeric
    ? numeric.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

  return [ref, `${prefix}${shown}${suffix}`]
}
