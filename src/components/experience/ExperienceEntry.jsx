'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

function LocationIcon(props) {
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
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function ExperienceEntry({ role, isLast, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.style.opacity = '1'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`,
      }}
      className="relative flex gap-6 lg:gap-8"
    >
      {/* Date column — desktop only */}
      <div className="hidden w-40 shrink-0 pt-2.5 lg:flex lg:flex-col lg:items-end lg:gap-1">
        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium tabular-nums text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          {role.start} — {role.end}
        </span>
      </div>

      {/* Timeline icon + line */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image src={role.logo} alt={role.company} className="h-7 w-7 rounded-2xl" unoptimized />
        </div>
        {!isLast && (
          <div className="mt-3 w-px flex-1 bg-zinc-200 dark:bg-zinc-700/60" />
        )}
      </div>

      {/* Content */}
      <div className={`min-w-0 flex-1 ${isLast ? 'pb-0' : 'pb-12'}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {role.company}
          </span>
          <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
            <LocationIcon className="h-3.5 w-3.5 fill-zinc-300 stroke-zinc-400 dark:fill-zinc-600 dark:stroke-zinc-500" />
            {role.location}
          </span>
          <span className="ml-auto text-xs tabular-nums text-zinc-400 dark:text-zinc-500 lg:hidden">
            {role.start} — {role.end}
          </span>
        </div>

        <h2 className="mt-1 text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {role.title}
        </h2>

        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          {role.summary}
        </p>

        <ul className="mt-3 space-y-2">
          {role.achievements.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {role.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
