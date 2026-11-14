import type { ProjectStatus } from '../types/project'

export default function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="project-status" data-status={status.toLowerCase().replace(/\s+/g, '-')}>
      <span className="project-status-dot" aria-hidden="true" />
      {status}
    </span>
  )
}
