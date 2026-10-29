import type { IconName } from '../components/Icon'

export type Social = {
  label: string
  url: string
  icon: IconName
}

export type Status = {
  label: string
  place?: string
  url?: string
}

export type SkillGroup = {
  category: string
  items: string[]
}

export type TimelineItem = {
  title: string
  place: string
  period: string
  description?: string
}

export type Profile = {
  name: string
  nickname: string
  role: string
  tagline: string
  location: string
  photo: string
  cvUrl: string
  email: string
  status?: Status
  socials: Social[]
  skills: SkillGroup[]
  exploring?: string[]
  experiences: TimelineItem[]
  education: TimelineItem[]
  contactText: string
}
