import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll, no animation library.
 * Returns [ref, isVisible] — attach ref to the element, use isVisible to add a class.
 * Respects prefers-reduced-motion by revealing immediately.
 */
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
