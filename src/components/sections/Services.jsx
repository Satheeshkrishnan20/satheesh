import { useState } from 'react'
import { services } from '../../data/content'
import Section from '../primitives/Section'
import Card from '../primitives/Card'

export default function Services() {
  const [active, setActive] = useState(0)
  const track = services.tracks[active]

  return (
    <Section id="services" index="04" eyebrow={services.eyebrow} title={services.title} subtitle={services.subtitle}>
      <div className="services__tabs" role="tablist" aria-label="Service tracks">
        {services.tracks.map((t, i) => (
          <button
            key={t.name}
            role="tab"
            aria-selected={active === i}
            className={`services__tab ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="services__tab-name">{t.name}</span>
            <span className="services__tab-tag">{t.tagline}</span>
          </button>
        ))}
      </div>

      <div className="grid grid--services" key={track.name}>
        {track.items.map((item) => (
          <Card key={item.title} className="service-card">
            <h3 className="service-card__title">{item.title}</h3>
            <p className="service-card__detail">{item.detail}</p>
            <p className="service-card__deliver">{item.deliver}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
