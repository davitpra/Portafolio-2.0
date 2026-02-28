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

const items = [
  { delay: 0 },   // h1
  { delay: 80 },  // h2
  { delay: 180 }, // p
  { delay: 280 }, // social links
]

function FadeUp({ delay, children }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { setVisible(true); return }
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
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
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Hi, I&apos;m Davit
        </h1>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          Full Stack Developer
        </h2>
      </FadeUp>

      <FadeUp delay={items[2].delay}>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Software Engineer with 5+ years of experience building scalable web
          applications for SMBs, e-commerce businesses, and EdTech platforms. I
          specialize in full-stack development with Next.js, NestJS, and
          TypeScript — from designing robust REST APIs and database architectures
          to delivering high-performance frontends with 95+ Lighthouse scores.
          <br />
          <br />
          Most recently, I led the modernization of a legacy vehicle diagnostics
          platform, cutting load times by 50% and reducing production bugs by
          60% through TDD practices. As a freelance developer, I&apos;ve helped
          e-commerce clients automate operations, integrate AI-powered content
          workflows, and scale their digital presence.
          <br />
          <br />
          Core stack: Next.js, React, NestJS, Node.js, TypeScript, PostgreSQL,
          MongoDB, Docker, Jest, Cypress, Turborepo.
        </p>
      </FadeUp>

      <FadeUp delay={items[3].delay}>
        <div className="mt-6 flex gap-6">
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
      </FadeUp>
    </div>
  )
}
