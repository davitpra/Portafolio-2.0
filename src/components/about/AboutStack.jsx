import { FadeIn } from '@/components/about/FadeIn'

const stack = [
  'Next.js',
  'NestJS',
  'TypeScript',
  'PostgreSQL',
  'React',
  'Node.js',
  'Docker',
  'Turborepo',
]

export function AboutStack() {
  return (
    <FadeIn>
      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Core stack
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
