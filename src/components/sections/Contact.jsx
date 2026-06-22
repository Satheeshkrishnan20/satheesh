import { contact, profile } from '../../data/content'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <p className="section__eyebrow">{contact.eyebrow}</p>
        <h2 className="contact__title">{contact.title}</h2>
        <p className="contact__subtitle">{contact.subtitle}</p>

        <a className="btn btn--primary btn--lg" href={contact.cta.href}>
          {contact.cta.label}
        </a>

        <ul className="contact__channels">
          {contact.channels.map((c) => (
            <li key={c.label}>
              <a href={c.href} target="_blank" rel="noreferrer noopener">
                <span className="contact__channel-label">{c.label}</span>
                <span className="contact__channel-value">{c.value}</span>
              </a>
            </li>
          ))}
        </ul>

        {profile.available && (
          <p className="contact__status">
            <span className="status-dot" aria-hidden="true" />
            {profile.location} · {profile.response}
          </p>
        )}
      </div>
    </section>
  )
}
