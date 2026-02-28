import { FadeIn } from '@/components/about/FadeIn'

export function AboutBio() {
  return (
    <>
      <FadeIn delay={80}>
        <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            My journey into software development started with curiosity and an
            engineering mindset. I&apos;ve always been drawn to building things, except the things I build now live on the internet and are
            used by thousands of people every day.
          </p>

          <p>
            Over the past five years, I&apos;ve worked across the full stack, from designing <strong>REST APIs</strong> and architecting
            databases to shipping high-performance frontends that score{' '}
            <strong>95+ on Lighthouse</strong>. My core toolkit revolves around{' '}
            <strong>Next.js</strong>, <strong>NestJS</strong>,{' '}
            <strong>TypeScript</strong>, and <strong>PostgreSQL</strong>, but
            I&apos;m equally comfortable diving into MongoDB, Docker, CI/CD
            pipelines, or whatever the project demands.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <blockquote className="relative mt-8 overflow-hidden rounded-2xl bg-blue-50 px-8 py-7 dark:bg-blue-500/10">
          <svg
            aria-hidden="true"
            className="absolute -top-2 -left-1 h-16 w-16 text-blue-200 dark:text-blue-500/20"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="relative text-base font-medium italic leading-relaxed text-zinc-700 dark:text-zinc-300">
            I don&apos;t just write code , I design systems that eliminate
            friction, automate the repetitive, and let businesses focus on what
            actually matters.
          </p>
        </blockquote>
      </FadeIn>

      <FadeIn>
        <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            What drives me is the intersection of{' '}
            <strong>engineering rigor</strong> and{' '}
            <strong>real business impact</strong>. I&apos;ve helped e-commerce
            clients cut manual data entry by 15+ hours per week, integrated
            AI-powered content workflows that compressed 5-day production cycles
            into 8 hours, and led platform migrations that slashed load times by
            50%. Every line of code I write is measured against a simple
            question: does this make someone&apos;s life easier?
          </p>

          <p>
            Beyond client work, I&apos;m deeply interested in the future of
            AI-powered applications. I&apos;m currently building products that
            combine generative AI models with e-commerce automation ,
            creating new possibilities at the intersection of creativity and
            technology.
          </p>
        </div>
      </FadeIn>
    </>
  )
}
