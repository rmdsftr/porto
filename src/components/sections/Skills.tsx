import Section from '../Section'
import { profile } from '../../data/profile'

const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

export default function Skills() {
  return (
    <Section eyebrow="I · Skills" title="The Instruments" subtitle="Tech stack and tools">
      <ol className="skills">
        {profile.skills.map((group, i) => (
          <li key={group.category} className="skill-row">
            <span className="skill-numeral" aria-hidden="true">
              {numerals[i] ?? i + 1}
            </span>
            <div className="skill-body">
              <h3>{group.category}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {profile.exploring && profile.exploring.length > 0 && (
        <div className="exploring">
          <p className="exploring-label">Next on the setlist</p>
          <ul className="tags">
            {profile.exploring.map((item) => (
              <li key={item} className="tag tag-outline">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}
