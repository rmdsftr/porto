import Section from '../Section'
import { profile } from '../../data/profile'

export default function Skills() {
  return (
    <Section eyebrow="Skills" title="Tech Stack and Tools" alt>
      <div className="skills">
        {profile.skills.map((group) => (
          <div key={group.category} className="card">
            <h3>{group.category}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {profile.exploring && profile.exploring.length > 0 && (
        <div className="exploring">
          <p className="exploring-label">Currently exploring</p>
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
