import { useReveal } from '../../hooks/useReveal'

/**
 * Reusable section shell. Handles the id anchor, numbered index, the standard
 * header (eyebrow / title / subtitle) and reveal-on-scroll. Every section uses
 * this so spacing and rhythm stay identical site-wide.
 */
export default function Section({ id, index, eyebrow, title, subtitle, children, tone = 'default' }) {
  const [ref, visible] = useReveal()

  return (
    <section
      id={id}
      ref={ref}
      className={`section section--${tone} ${visible ? 'is-visible' : ''}`}
    >
      <div className="container">
        {(eyebrow || title) && (
          <header className="section__header">
            {(index || eyebrow) && (
              <p className="section__eyebrow">
                {index && <span className="section__index">{index}</span>}
                {eyebrow}
              </p>
            )}
            {title && <h2 className="section__title">{title}</h2>}
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
