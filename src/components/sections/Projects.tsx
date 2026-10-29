import { Link } from 'react-router'
import Icon from '../Icon'
import Section from '../Section'
import { projects } from '../../data/project'

function rememberProjectsSection() {
  window.history.replaceState(window.history.state, '', '#projects')
}

export default function Projects() {
  return (
    <Section eyebrow="Portfolio" title="Featured projects" alt>
      <div className="projects">
        {projects.map((project) => (
          <article key={project.slug} className="card project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>

            {project.detail ? (
              <Link
                to={`/projects/${project.slug}`}
                className="btn btn-outline project-detail"
                onClick={rememberProjectsSection}
              >
                View Project Detail
                <Icon name="arrowRight" size={16} />
              </Link>
            ) : (
              <span className="btn btn-outline project-detail" aria-disabled="true" title="Coming soon">
                View Project Detail
                <Icon name="arrowRight" size={16} />
              </span>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
