import { FadeIn } from '@/components/about/FadeIn'

export function AboutHero() {
  return (
    <>
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Building the web,
          <br />
          one <em className="text-blue-500">pixel</em> at a time
        </h1>
      </FadeIn>

      <FadeIn delay={80}>
        <p className="mt-4 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
          I&apos;m David Prado, a Full Stack Developer from Ecuador,
          based in Ontario, Canada. I build scalable web applications for
          businesses that need more than a template.
        </p>
      </FadeIn>
    </>
  )
}
