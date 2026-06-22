import { hero, profile } from '../../data/content'
import Counter from '../primitives/Counter'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__dot" aria-hidden="true" />
          {hero.eyebrow}
        </p>

        <h1 className="hero__headline">{hero.headline}</h1>

        <p className="hero__subhead">{hero.subhead}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <a className="btn btn--ghost" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label} <span aria-hidden="true">→</span>
          </a>
        </div>

        {profile.available && (
          <p className="hero__status">
            <span className="status-dot" aria-hidden="true" />
            Available for freelance · {profile.response}
          </p>
        )}

        <dl className="hero__metrics">
          {hero.metrics.map((m) => (
            <div className="hero__metric" key={m.label}>
              <Counter as="dt" className="hero__metric-value" value={m.value} />
              <dd className="hero__metric-label">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
