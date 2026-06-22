import { profile, nav, features } from '../../data/content'

const visibleNav = nav.filter((item) =>
  item.href === '#testimonials' ? features.testimonials : true,
)

const socials = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'WhatsApp', href: profile.whatsapp },
  { label: 'Email', href: `mailto:${profile.email}` },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__role">{profile.role}</p>
          <p className="footer__tagline">{profile.tagline}</p>
        </div>

        <div className="footer__links">
          <nav className="footer__col" aria-label="Sections">
            <p className="footer__col-title">Explore</p>
            {visibleNav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__col">
            <p className="footer__col-title">Connect</p>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {profile.name}. All rights reserved.</span>
      </div>
    </footer>
  )
}
