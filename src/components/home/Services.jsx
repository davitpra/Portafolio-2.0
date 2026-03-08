'use client'

import { useState } from 'react'

import { FadeIn } from '@/components/about/FadeIn'

function SquaresIcon(props) {
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
        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

const services = [
  {
    title: 'Web Development',
    description:
      'Creation of custom websites and applications with unique animations and interactive experiences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" className="stroke-blue-500 dark:stroke-blue-400" />
      </svg>
    ),
  },
  {
    title: 'Custom Software Development',
    description:
      'Internal tools, dashboards, process automation, and more.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" className="stroke-blue-500 dark:stroke-blue-400" />
      </svg>
    ),
  },
    {
    title: 'E-commerce',
    description:
      'Full-featured online stores with cart, payments, and inventory. Integrated with Stripe, MercadoPago, and more.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" className="stroke-blue-500 dark:stroke-blue-400" />
      </svg>
    ),
  },
  {
    title: 'AI Automation',
    description:
      'Streamlining e-commerce and digital marketing content creation through AI-powered workflows, cutting production cycles and scaling output.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423z" className="stroke-blue-500 dark:stroke-blue-400" />
      </svg>
    ),
  },

  {
    title: 'Design & Backend Architecture',
    description:
      'Building scalable, maintainable APIs with clean architecture for companies that need robust backends without a senior in-house team.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" className="stroke-blue-500 dark:stroke-blue-400" />
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    description:
      'Auditing and optimizing web performance and technical SEO to achieve 95+ Lighthouse scores and measurable growth in organic traffic.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941" className="stroke-blue-500 dark:stroke-blue-400" />
      </svg>
    ),
  },
]

const INITIAL_COUNT = 4

export function Services() {
  const [expanded, setExpanded] = useState(false)

  const visible = expanded ? services : services.slice(0, INITIAL_COUNT)
  const hidden = services.length - INITIAL_COUNT

  return (
    <FadeIn className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <SquaresIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Services</span>
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {visible.map(({ title, description, icon }, index) => (
          <FadeIn
            key={title}
            delay={index * 80}
            className="group rounded-2xl border border-zinc-100 p-5 transition-colors hover:border-blue-500/30 dark:border-zinc-700/40 dark:hover:border-blue-400/30"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100 dark:bg-blue-500/10 dark:group-hover:bg-blue-500/20">
              {icon}
            </div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>
            <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          </FadeIn>
        ))}
      </div>

      {!expanded && hidden > 0 && (
        <button
          onClick={() => setExpanded(true)}
          className="group mt-4 flex w-full items-center justify-center gap-1.5 rounded-md border border-zinc-900/10 px-3 py-2 text-sm font-medium text-zinc-600 transition hover:border-blue-500/30 hover:text-blue-500 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-blue-400/30 dark:hover:text-blue-400"
        >
          Show {hidden} more
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
          >
            <path
              d="M4.75 6.75 8 10.25l3.25-3.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-current"
            />
          </svg>
        </button>
      )}
    </FadeIn>
  )
}
