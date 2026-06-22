import { useState } from 'react'
import { testimonials } from '../../data/content'
import Section from '../primitives/Section'

export default function Testimonials() {
  const items = testimonials.items
  const [index, setIndex] = useState(0)
  const count = items.length

  const go = (next) => setIndex((i) => (i + next + count) % count)
  const to = (i) => setIndex(i)

  return (
    <Section
      id="testimonials"
      index="07"
      eyebrow={testimonials.eyebrow}
      title={testimonials.title}
      subtitle={testimonials.subtitle}
    >
      <div className="carousel">
        <div className="carousel__viewport">
          <div
            className="carousel__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((t) => (
              <figure className="carousel__slide quote" key={t.name}>
                <blockquote className="quote__text">“{t.quote}”</blockquote>
                <figcaption className="quote__by">
                  <span className="quote__name">{t.name}</span>
                  <span className="quote__role">{t.role}</span>
                  <span className="quote__track">{t.track}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="carousel__controls">
          <button className="carousel__arrow" onClick={() => go(-1)} aria-label="Previous review">
            ←
          </button>
          <div className="carousel__dots" role="tablist" aria-label="Select review">
            {items.map((t, i) => (
              <button
                key={t.name}
                className={`carousel__dot ${i === index ? 'is-active' : ''}`}
                aria-selected={i === index}
                aria-label={`Review ${i + 1}`}
                onClick={() => to(i)}
              />
            ))}
          </div>
          <button className="carousel__arrow" onClick={() => go(1)} aria-label="Next review">
            →
          </button>
        </div>
      </div>
    </Section>
  )
}
