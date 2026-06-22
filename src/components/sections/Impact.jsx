import { impact } from '../../data/content'
import Section from '../primitives/Section'
import Card from '../primitives/Card'
import Counter from '../primitives/Counter'

export default function Impact() {
  return (
    <Section id="impact" index="01" eyebrow={impact.eyebrow} title={impact.title} subtitle={impact.subtitle}>
      <div className="grid grid--impact">
        {impact.items.map((item) => (
          <Card key={item.label} className="impact-card">
            <Counter as="p" className="impact-card__metric" value={item.metric} />
            <p className="impact-card__label">{item.label}</p>
            <p className="impact-card__detail">{item.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
