import Section from '../Section'
import { profile } from '../../data/profile'
import type { TimelineItem } from '../../types/profile'

const ongoing = /\b(now|present)\b/i

type TimelineProps = {
  title: string
  items: TimelineItem[]
  className?: string
}

function Timeline({ title, items, className }: TimelineProps) {
  return (
    <div className={['journey-group', className].filter(Boolean).join(' ')}>
      <h3 className="journey-title">{title}</h3>
      <ol className="timeline">
        {items.map((item) => (
          <li key={`${item.title}-${item.period}`} className={ongoing.test(item.period) ? 'current' : undefined}>
            <p className="timeline-period">{item.period}</p>
            <h4 className="timeline-title">{item.title}</h4>
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
    <Section eyebrow="II · Journey" title="Liner Notes" subtitle="Experience, Education & Organization">
      <div className="journey">
        <Timeline title="Experience" items={profile.experiences} />
        <div className="journey-column">
          <Timeline title="Education" items={profile.education} className="journey-education" />
          {profile.organizations && profile.organizations.length > 0 && (
            <Timeline title="Organization" items={profile.organizations} className="journey-organization" />
          )}
        </div>
      </div>
    </Section>
  )
}
