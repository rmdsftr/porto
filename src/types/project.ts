export type Repo = {
  name: string
  tech: string[]
  architecture: string
  url?: string
}

export type ProjectDetail = {
  appName?: string
  overview?: string
  repos: Repo[]
  features: string[]
  images?: string[]
  sourceNote?: string
}

export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  detail?: ProjectDetail
}
