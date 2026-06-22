import { useEffect, useState } from 'react'
import { nav, profile, features } from '../../data/content'
import { useTheme } from '../../hooks/useTheme'

// Drop nav links whose section is currently disabled (e.g. hidden reviews).
const visibleNav = nav.filter((item) =>
  item.href === '#testimonials' ? features.testimonials : true,
)

export default function Header() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .join('')

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={() => setOpen(false)}>
          <span className="header__mark">{initials}</span>
          <span className="header__name">{profile.name}</span>
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {visibleNav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="header__nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Hire Me
          </a>
        </nav>

        <div className="header__actions">
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title="Toggle theme"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className={`burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
