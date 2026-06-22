import { useEffect, useState } from 'react'

/**
 * Dark/light theme synced to <html data-theme> and localStorage.
 * The initial value is read from the attribute set by the inline script in
 * index.html, so there is no flash on first paint.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}
