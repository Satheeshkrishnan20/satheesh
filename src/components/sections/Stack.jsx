import { stack, skillLabels } from '../../data/content'
import Section from '../primitives/Section'
import Pill from '../primitives/Pill'

const base = import.meta.env.BASE_URL

// A logo chip used inside the marquee rows.
function Chip({ logo }) {
  return (
    <div className="logo-chip" title={skillLabels[logo]}>
      <img
        src={`${base}logos/${logo}.svg`}
        alt={skillLabels[logo]}
        loading="lazy"
        width="40"
        height="40"
      />
    </div>
  )
}

// One marquee row. Content is duplicated so the -50% scroll loops seamlessly.
function MarqueeRow({ items, direction }) {
  return (
    <div className={`logo-marquee__row logo-marquee__row--${direction}`}>
      <div className="logo-marquee__track">
        {[...items, ...items].map((logo, i) => (
          <Chip key={`${logo}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  )
}

export default function Stack() {
  const top = stack.marquee
  const bottom = [...stack.marquee].reverse()

  return (
    <Section
      id="stack"
      index="02"
      eyebrow={stack.eyebrow}
      title={stack.title}
      subtitle={stack.subtitle}
    >
      {/* Animated logo river — two rows drifting in opposite directions. */}
      <div className="logo-marquee" aria-hidden="true">
        <MarqueeRow items={top} direction="left" />
        <MarqueeRow items={bottom} direction="right" />
      </div>

      <div className="grid grid--stack">
        {Object.entries(stack.groups).map(([group, items]) => (
          <div className="stack-group" key={group}>
            <h3 className="stack-group__title">{group}</h3>
            <div className="stack-group__pills">
              {items.map((item) => (
                <Pill key={item.name} logo={item.logo}>
                  {item.name}
                </Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
