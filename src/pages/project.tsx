import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import Icon from '../components/Icon'
import ImageSlider from '../components/ImageSlider'
import NotFound from './not-found'
import { projects } from '../data/project'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!project?.detail) {
    return (
      <NotFound
        title="Project not found"
        message="This project doesn't exist or its detail page isn't ready yet."
      />
    )
  }

  const { detail } = project
  const sourceLinks = detail.repos.filter((repo) => repo.url)

  return (
    <article className="project-page">
      <div className="container">
        <Link to="/#projects" className="back-link">
          <Icon name="arrowLeft" size={16} />
          Back to projects
        </Link>

        <header className="project-header">
          <p className="section-eyebrow">Project</p>
          <h1>{project.title}</h1>
          {detail.appName && (
            <p className="project-app">
              App name <strong>{detail.appName}</strong>
            </p>
          )}
          <p className="project-lead">{detail.overview ?? project.description}</p>
        </header>

        <section className="project-block">
          <h2>Repositories</h2>
          <div className="repos">
            {detail.repos.map((repo) => (
              <div key={repo.name} className="card repo">
                <h3 className="repo-name">{repo.name}</h3>
                <dl>
                  <dt>Architecture</dt>
                  <dd>{repo.architecture}</dd>
                  <dt>Tech stack</dt>
                  <dd>
                    <ul className="tags">
                      {repo.tech.map((tech) => (
                        <li key={tech} className="tag">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section className="project-block">
          <h2>Key Contributions</h2>
          <ul className="features">
            {detail.features.map((feature) => (
              <li key={feature}>
                <Icon name="check" size={18} />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {detail.images && detail.images.length > 0 && (
          <section className="project-block">
            <h2>Preview</h2>
            <ImageSlider images={detail.images} label={detail.appName ?? project.title} />
          </section>
        )}

        {(sourceLinks.length > 0 || detail.sourceNote) && (
          <section className="project-block">
            <h2>Source Code</h2>
            {sourceLinks.length > 0 && (
              <div className="source-links">
                {sourceLinks.map((repo) => (
                  <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <Icon name="github" size={18} />
                    {repo.name}
                  </a>
                ))}
              </div>
            )}
            {detail.sourceNote && (
              <p className="source-note">
                <Icon name="lock" size={16} />
                {detail.sourceNote}
              </p>
            )}
          </section>
        )}
      </div>
    </article>
  )
}
