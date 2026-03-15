'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/ui/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

const items = [{ delay: 0 }, { delay: 100 }, { delay: 200 }]

function FadeUp({ delay, children }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduced) {
      setVisible(true) // eslint-disable-line react-hooks/set-state-in-effect
      return
    }
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition:
          'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {children}
    </div>
  )
}

export function HeroSection() {
  return (
    <div className="max-w-2xl">
      <FadeUp delay={items[0].delay}>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m{' '}
          <span className="text-blue-500 dark:text-blue-500">
            Davit
          </span>
        </h1>
      </FadeUp>

      <FadeUp delay={items[1].delay}>
        <h2 className="mt-4 text-2xl tracking-tight text-zinc-700 dark:text-zinc-300">
          Full stack developer specializing in building scalable web
          applications that{' '}
          <strong className="text-zinc-800 dark:text-zinc-200">
            drive real results
          </strong>
          .
        </h2>
      </FadeUp>

      <FadeUp delay={items[2].delay}>
        <div className="mt-8 flex items-center gap-6">
          <div className="flex gap-4">
            <SocialLink
              href="https://www.instagram.com/davit_prado/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/davitpra"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/davitprado/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
          <Link
            href="/projects"
            className="group flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
                    <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
          <Link
            href="/Full Stack Engineer - David Prado.pdf"
            download="Full Stack Engineer - David Prado.pdf"
            className="group flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
          >
            Download CV
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </FadeUp>
    </div>
  )
}
