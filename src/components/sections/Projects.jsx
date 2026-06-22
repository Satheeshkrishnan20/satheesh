import { projects } from '../../data/content'
import Section from '../primitives/Section'
import Pill from '../primitives/Pill'

export default function Projects() {
  return (
    <Section id="work" index="03" eyebrow={projects.eyebrow} title={projects.title} subtitle={projects.subtitle}>
      <div className="grid grid--projects">
        {projects.items.map((p, i) => (
          <article className="project" key={p.name}>
            <div className="project__head">
              <span className="project__no">{String(i + 1).padStart(2, '0')}</span>
              <span className="project__tag">{p.tag}</span>
            </div>

            <h3 className="project__name">{p.name}</h3>

            <p className="project__summary">{p.summary}</p>

            <div className="project__tech">
              {p.tech.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>

            <a className="project__link" href={p.demo} target="_blank" rel="noreferrer noopener">
              Visit live site <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
