import { FadeIn } from '@/components/about/FadeIn'

function CodeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

const categories = [
  { label: 'Frontend', techs: ['Next.js', 'React', 'TypeScript'] },
  { label: 'Backend', techs: ['NestJS', 'Node.js'] },
  { label: 'Database', techs: ['PostgreSQL', 'MongoDB'] },
  { label: 'DevOps', techs: ['Docker', 'Turborepo'] },
  { label: 'Testing', techs: ['Jest', 'Cypress'] },
]

export function TechStack() {
  return (
    <FadeIn className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CodeIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Stack</span>
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
        {categories.map(({ label, techs }) => (
          <div key={label}>
            <div className="mb-2.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                {label}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  )
}
