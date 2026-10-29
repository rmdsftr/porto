import Section from '../Section'
import { profile } from '../../data/profile'
import type { TimelineItem } from '../../types/profile'

function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="journey-title">{title}</h3>
      <ol className="timeline">
        {items.map((item) => (
          <li key={`${item.title}-${item.period}`}>
            <p className="timeline-period">{item.period}</p>
            <p className="timeline-title">{item.title}</p>
            <p className="timeline-place">{item.place}</p>
            {item.description && <p className="timeline-desc">{item.description}</p>}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Experience() {
  return (
    <Section eyebrow="Journey" title="Experience & Education">
      <div className="journey">
        <Timeline title="Experience" items={profile.experiences} />
        <Timeline title="Education" items={profile.education} />
      </div>
    </Section>
  )
}
