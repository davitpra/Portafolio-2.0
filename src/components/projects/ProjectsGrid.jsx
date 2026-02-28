import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'

export function ProjectsGrid() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}
    </ul>
  )
}
