export interface Project {
  id: string
  name: string
  title: string
  tagline: string
  stack: string[]
  githubUrl: string
  category: string
  featured: boolean
  badge: string
  accentColor: string
  description: string
  keyHighlights: string[]
  metrics?: { label: string; value: string; desc: string }[]
  architecture?: Record<string, string>
}

export interface SkillCategory {
  name: string
  description: string
  skills: { name: string; tag?: string }[]
}

export interface LeadershipRole {
  role: string
  organization: string
  period: string
  highlights: string[]
  competencies: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  score: string
  duration: string
  location: string
  status?: string
}

export interface CreativeWorkItem {
  title: string
  publication: string
  description: string
  quote?: string
}
