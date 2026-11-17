import { Link } from 'react-router'
import Icon from '../Icon'
import ProjectStatusBadge from '../ProjectStatus'
import Section from '../Section'
import { projects } from '../../data/project'

function rememberProjectsSection() {
  window.history.replaceState(window.history.state, '', '#projects')
}

export default function Projects() {
  return (
    <Section eyebrow="III · Projects" title="The Discography" subtitle="Featured projects">
      <div className="tracks">
        {projects.map((project, i) => {
          const number = String(i + 1).padStart(2, '0')

          return (
            <article key={project.slug} className="track" data-variant={i % 3}>
              <div className="track-vinyl-wrap" aria-hidden="true">
                <div className="track-vinyl">
                  <span className="track-vinyl-label">{number}</span>
                </div>
              </div>

              <div className="track-body">
                <div className="track-meta">
                  <span className="track-number">Track {number}</span>
                  {project.status && <ProjectStatusBadge status={project.status} />}
                </div>
                <h3>{project.title}</h3>
                <p className="track-desc">{project.description}</p>
                <ul className="tags tags-plain">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.detail ? (
                  <Link to={`/projects/${project.slug}`} className="track-link" onClick={rememberProjectsSection}>
                    View project detail
                    <Icon name="arrowRight" size={15} />
                  </Link>
                ) : (
                  <span className="track-link" aria-disabled="true" title="Coming soon">
                    View project detail
                    <Icon name="arrowRight" size={15} />
                  </span>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
