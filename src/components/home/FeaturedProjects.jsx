import Image from 'next/image'
import Link from 'next/link'

import { projects } from '@/lib/projects'
import { FadeIn } from '@/components/about/FadeIn'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function RocketIcon(props) {
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
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

const featured = projects.slice(0, 3)

export function FeaturedProjects() {
  return (
    <FadeIn className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <RocketIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Featured Projects</span>
      </h2>

      <ol className="mt-6 divide-y divide-zinc-100 dark:divide-zinc-700/40">
        {featured.map((project, index) => (
          <FadeIn
            as="li"
            key={project.name}
            delay={index * 100}
            className="group flex gap-4 py-4 first:pt-0 last:pb-0"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 transition hover:ring-blue-500/30 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:hover:border-blue-400/30"
            >
              <Image
                src={project.logo}
                alt=""
                className={`h-7 w-7 rounded-full object-cover ${project.logoClassName ?? ''}`}
                unoptimized
              />
            </Link>
            <div className="min-w-0 flex-1">
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-medium text-zinc-900 transition hover:text-blue-500 dark:text-zinc-100 dark:hover:text-blue-400"
              >
                {project.name}
              </Link>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-zinc-400 transition hover:text-blue-500 dark:text-zinc-500 dark:hover:text-blue-400"
              >
                <LinkIcon className="h-3.5 w-3.5" />
                {project.link.label}
              </a>
            </div>
          </FadeIn>
        ))}
      </ol>

      <FadeIn delay={featured.length * 100}>
        <Link
          href="/projects"
          className="group mt-6 flex items-center justify-center gap-1.5 rounded-md border border-zinc-900/10 px-3 py-2 text-sm font-medium text-zinc-600 transition hover:border-blue-500/30 hover:text-blue-500 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-blue-400/30 dark:hover:text-blue-400"
        >
          View all projects
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </FadeIn>
    </FadeIn>
  )
}
