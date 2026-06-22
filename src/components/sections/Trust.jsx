import { trust } from '../../data/content'
import Section from '../primitives/Section'
import Card from '../primitives/Card'

export default function Trust() {
  return (
    <Section id="trust" index="05" eyebrow={trust.eyebrow} title={trust.title} subtitle={trust.subtitle}>
      <div className="grid grid--trust">
        {trust.items.map((item, i) => (
          <Card key={item.title} className="trust-card">
            <span className="trust-card__no">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="trust-card__title">{item.title}</h3>
            <p className="trust-card__detail">{item.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
