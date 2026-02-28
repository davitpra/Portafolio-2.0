import { Container } from '@/components/layout/Container'
import { ExperienceEntry } from '@/components/experience/ExperienceEntry'
import { experience } from '@/lib/experience'

export default function Experience() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Work experience
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          5+ years building full-stack systems across Ecuador, the US, and
          Canada — from EdTech platforms and e-commerce storefronts to
          enterprise APIs and automotive diagnostics software.
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        <div className="max-w-2xl lg:max-w-4xl">
          {experience.map((role, index) => (
            <ExperienceEntry
              key={role.company}
              role={role}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}
