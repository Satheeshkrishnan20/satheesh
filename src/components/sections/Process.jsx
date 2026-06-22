import { process } from '../../data/content'
import Section from '../primitives/Section'

export default function Process() {
  return (
    <Section id="process" index="06" eyebrow={process.eyebrow} title={process.title} subtitle={process.subtitle}>
      <ol className="process">
        {process.steps.map((s) => (
          <li className="process__step" key={s.step}>
            <span className="process__num">{s.step}</span>
            <div className="process__text">
              <h3 className="process__title">{s.title}</h3>
              <p className="process__detail">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
