import { FadeIn } from '@/components/about/FadeIn'

const services = [
  {
    title: 'Web Development',
    description:
      'Responsive, performant web applications built with Next.js and React — from landing pages to complex dashboards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" className="stroke-blue-500 dark:stroke-blue-400" />
      </svg>
    ),
  },
  {
    title: 'Backend & APIs',
    description:
      'Scalable REST APIs and microservices with NestJS and Node.js. Clean architecture, typed, tested, and documented.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 6 0m-6 0H3m16.5 0a3 3 0 0 0 3-3m-3 3a3 3 0 1 1-6 0m6 0h-1.5m-12-3a3 3 0 0 1 3-3m9 3a3 3 0 0 0-3-3m-9 0h1.5m9 0H21m-9-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v3" className="stroke-blue-500 dark:stroke-blue-400" />
      </svg>
    ),
  },
  {
    title: 'Database Design',
    description:
      'Efficient data modeling and query optimization using PostgreSQL and MongoDB. Schema design built to scale.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" className="stroke-blue-500 dark:stroke-blue-400" />
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
    title: 'DevOps & Deployment',
    description:
      'Docker containers, CI/CD pipelines, and cloud deployments. Reliable infrastructure so your app stays up.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" className="stroke-blue-500 dark:stroke-blue-400" />
      </svg>
    ),
  },
  {
    title: 'Technical Consulting',
    description:
      'Code reviews, architecture planning, and performance audits. Helping teams ship faster with fewer headaches.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" className="stroke-blue-500 dark:stroke-blue-400" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <div>
      <FadeIn className="mb-10">
        <p className="mb-2 text-xs font-semibold tracking-widest text-blue-500 uppercase dark:text-blue-400">
          Services
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          What I can do for you
        </h2>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          End-to-end development, from idea to production.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon }, index) => (
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
    </div>
  )
}
