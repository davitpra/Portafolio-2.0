import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { ProjectsGrid } from '@/components/projects/ProjectsGrid'

export const metadata = {
  title: 'Projects',
  description: 'A mix of freelance builds, personal experiments, and production systems.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I've shipped — from side ideas to production."
      intro="A mix of freelance builds, personal experiments, and production systems. E-commerce platforms, hospitality apps, AI-powered tools — each one taught me something worth keeping."
    >
      <ProjectsGrid />
    </SimpleLayout>
  )
}
