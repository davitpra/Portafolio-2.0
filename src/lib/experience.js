import logoSelfEmployed from '@/images/logos/indpendent_contractor_logo.jpg'
import logoRadstad from '@/images/logos/Randstand_logo.jpg'
import logoKruger from '@/images/logos/krugercorp_logo.jpg'
import logoIdukay from '@/images/logos/idukayedu_logo.jpg'

export const experience = [
  {
    company: 'Self Employed',
    title: 'Freelance Software Developer',
    location: 'London, ON, Canada',
    start: 'Nov 2023',
    end: 'Present',
    logo: logoSelfEmployed,
    summary:
      'Building custom web solutions for SMBs and e-commerce businesses, replacing fragmented workflows with scalable systems that automate operations and accelerate digital growth.',
    achievements: [
      'Designed backend architectures and REST APIs with NestJS, integrating third-party platforms (Shopify, Stripe, CRMs) and reducing API response times by 40%.',
      'Developed high-performance frontends with Next.js (SSR/SSG), achieving 95+ Lighthouse scores and increasing organic traffic by 60% through technical SEO.',
      'Implemented monorepo structures with Turborepo, unifying frontend, backend, and shared packages, reducing build times by 70% with remote caching.',
      'Built custom order tracking and inventory management systems that eliminated 15+ hours/week of manual data entry and reduced human error by 90%.',
      'Integrated AI-powered automation workflows for content generation (images, descriptions, marketing videos), cutting production cycles from 5 days to 8 hours.',
    ],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker', 'TypeScript', 'Turborepo', 'Shopify Api'],
  },
  {
    company: 'Randstad (Contract)',
    title: 'Frontend Web Developer',
    location: 'Phoenix, Arizona, USA',
    start: 'Oct 2024',
    end: 'Feb 2025',
    logo: logoRadstad,
    summary:
      'Led the modernization of Delphi, a vehicle diagnostics platform for the automotive industry, migrating the legacy system to a modern architecture that improved performance, maintainability, and scalability.',
    achievements: [
      'Migrated the legacy web application to Next.js with SSR and SSG, reducing initial load time by 50% and improving Lighthouse performance score from 45 to 90+.',
      'Integrated REST APIs using Axios and React Query to connect the frontend with vehicle diagnostics services, optimizing state management and reducing redundant server calls by 40%.',
      'Applied TDD practices with Jest and Cypress, creating unit and E2E tests that reduced production bugs by 60%.',
      'Actively collaborated in code reviews, sprint planning, and QA testing within a distributed Agile/Scrum team, delivering the migration 2 weeks ahead of deadline.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Jest', 'Cypress', 'Axios', 'React Query'],
  },
  {
    company: 'Kruger Corp',
    title: 'Software Developer',
    location: 'Ecuador',
    start: 'Jan 2022',
    end: 'Aug 2023',
    logo: logoKruger,
    summary:
      'Backend development for high-demand enterprise systems, designing scalable APIs and managing relational databases for corporate clients.',
    achievements: [
      'Architected and optimized REST APIs using Clean Architecture, improving system scalability and performance.',
      'Designed and managed database models in PostgreSQL and MySQL, ensuring data integrity and adapting structures to evolving business logic.',
      'Diagnosed and resolved critical backend issues, enhancing system stability and optimizing application response times.',
      'Implemented Docker for containerization and Git for version control, standardizing deployment workflows across all environments.',
    ],
    stack: ['NestJS', 'Node.js', 'PostgreSQL', 'React', 'Docker', 'TypeScript'],
  },
  {
    company: 'Idukay S.A.',
    title: 'Full Stack Developer',
    location: 'Ecuador',
    start: 'Jan 2020',
    end: 'Oct 2021',
    logo: logoIdukay,
    summary:
      'Development and maintenance of an EdTech platform built on the MERN stack, ensuring stability, scalability, and consistent performance across releases.',
    achievements: [
      'Developed and maintained core platform functionalities, ensuring stability and performance across every release.',
      'Collaborated on the payment processing module, applying TDD and agile workflows to deliver secure and reliable features.',
      'Designed and implemented a reporting module end-to-end (backend + React frontend), improving data visibility for platform stakeholders.',
      'Implemented unit testing with Jest and actively participated in sprint planning, code reviews, and QA, contributing to reduced regression issues.',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Jest'],
  },
]
