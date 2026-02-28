import { FadeIn } from '@/components/about/FadeIn'

const stats = [
  { value: '5+', label: 'Years of experience' },
  { value: 'Ontario, CA', label: 'Based in' },
  { value: 'TypeScript', label: 'Core stack' },
]

export function AboutStats() {
  return (
    <dl className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
      {stats.map(({ value, label }, i) => (
        <FadeIn
          key={label}
          as="div"
          delay={160 + i * 60}
          className="group rounded-2xl border border-zinc-100 bg-zinc-50 px-2 py-4 transition-colors hover:border-blue-100 hover:bg-blue-50/50 sm:px-4 sm:py-5 dark:border-zinc-700/40 dark:bg-zinc-800/40 dark:hover:border-blue-500/20 dark:hover:bg-blue-500/5"
        >
          <dt className="mt-1 flex justify-center text-lg font-bold tracking-tight text-blue-500 sm:text-xl">
            {value}
          </dt>
          <dd className="mt-1 flex justify-center text-center text-xs leading-snug text-zinc-500 dark:text-zinc-400">
            {label}
          </dd>
        </FadeIn>
      ))}
    </dl>
  )
}
