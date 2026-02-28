import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/about/FadeIn'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/ui/SocialIcons'
import Image from 'next/image'
import portraitImage from '@/images/portrait.jpg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const stats = [
  { value: '5+', label: 'Years of experience' },
  { value: 'Ontario, CA', label: 'Based in' },
  { value: 'TypeScript', label: 'Core stack' },
]

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

export const metadata = {
  title: 'About',
  description:
    'Full Stack Developer based in Ontario, Canada — building scalable web apps for 5+ years.',
}

const images = [image1, image4, portraitImage]
const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      {/* ── Main 2-col grid ── */}
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
        {/* Left col — content (first in DOM = first on mobile) */}
        <div>
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Building the web,
              <br />
              one <em className="text-blue-500">pixel</em> at a time
            </h1>
          </FadeIn>

          <FadeIn delay={80}>
            <p className="mt-4 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
              I&apos;m David Prado &mdash; a Full Stack Developer from Ecuador,
              based in Ontario, Canada. I build scalable web applications for
              businesses that need more than a template.
            </p>
          </FadeIn>

          {/* Stats strip */}
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

          {/* Body — paragraphs 1 & 2 */}
          <FadeIn delay={80}>
            <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My journey into software development started with curiosity and
                an engineering mindset. I&apos;ve always been drawn to building
                things &mdash; except the things I build now live on the
                internet and are used by thousands of people every day.
              </p>

              <p>
                Over the past five years, I&apos;ve worked across the full
                stack &mdash; from designing <strong>REST APIs</strong> and
                architecting databases to shipping high-performance frontends
                that score <strong>95+ on Lighthouse</strong>. My core toolkit
                revolves around <strong>Next.js</strong>,{' '}
                <strong>NestJS</strong>, <strong>TypeScript</strong>, and{' '}
                <strong>PostgreSQL</strong>, but I&apos;m equally comfortable
                diving into MongoDB, Docker, CI/CD pipelines, or whatever the
                project demands.
              </p>
            </div>
          </FadeIn>

          {/* Pull quote */}
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
                I don&apos;t just write code &mdash; I design systems that
                eliminate friction, automate the repetitive, and let businesses
                focus on what actually matters.
              </p>
            </blockquote>
          </FadeIn>

          {/* Body — paragraphs 3 & 4 */}
          <FadeIn>
            <div className="mt-8 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                What drives me is the intersection of{' '}
                <strong>engineering rigor</strong> and{' '}
                <strong>real business impact</strong>. I&apos;ve helped
                e-commerce clients cut manual data entry by 15+ hours per week,
                integrated AI-powered content workflows that compressed 5-day
                production cycles into 8 hours, and led platform migrations
                that slashed load times by 50%. Every line of code I write is
                measured against a simple question: does this make
                someone&apos;s life easier?
              </p>

              <p>
                Beyond client work, I&apos;m deeply interested in the future of
                AI-powered applications. I&apos;m currently building products
                that combine generative AI models with e-commerce automation
                &mdash; creating new possibilities at the intersection of
                creativity and technology.
              </p>
            </div>
          </FadeIn>

          {/* Stack */}
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
        </div>

        {/* Right col — images + social */}
        <div className="lg:pl-8">
          {/* Horizontal scroll on mobile, stacked on desktop */}
          <FadeIn>
            <div className="flex gap-4 overflow-x-auto pb-4 lg:block lg:overflow-hidden lg:pb-0">
              {images.map((image, imageIndex) => (
                <div
                  key={image.src}
                  className={clsx(
                    'relative aspect-square flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800',
                    'w-40 sm:w-52 lg:mb-6 lg:w-full lg:rounded-2xl',
                    rotations[imageIndex % rotations.length],
                  )}
                >
                  <Image
                    src={image}
                    alt=""
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-6 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <ul role="list" className="space-y-3">
                <SocialLink
                  href="https://www.instagram.com/davit_prado/"
                  icon={InstagramIcon}
                >
                  Follow on Instagram
                </SocialLink>
                <SocialLink
                  href="https://github.com/davitpra"
                  icon={GitHubIcon}
                >
                  Follow on GitHub
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/davitprado/"
                  icon={LinkedInIcon}
                >
                  Follow on LinkedIn
                </SocialLink>
              </ul>
              <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-700/40">
                <ul role="list">
                  <SocialLink
                    href="mailto:davitprado@outlook.com"
                    icon={MailIcon}
                  >
                    davitprado@outlook.com
                  </SocialLink>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}
