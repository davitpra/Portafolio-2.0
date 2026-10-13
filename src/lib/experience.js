import logoSelfEmployed from '@/images/logos/indpendent_contractor_logo.jpg'
import logoRadstad from '@/images/logos/Randstand_logo.jpg'
import logoKruger from '@/images/logos/krugercorp_logo.jpg'
import logoIdukay from '@/images/logos/idukayedu_logo.jpg'

export const experience = [
  {
    company: 'Self Employed',
    title: 'Freelance Full-Stack Developer',
    location: 'London, ON, Canada · Remote',
    start: 'Mar 2024',
    end: 'Present',
    logo: logoSelfEmployed,
    summary:
      'Custom web systems and AI-powered products for small businesses and startups, mostly replacing paper-based or manual workflows. Spec-driven delivery: architecture decisions recorded as ADRs, specs written before code, and integration tests in CI.',
    achievements: [
      'ClawPuzzle: Built the platform that let Puzzle Salvaje, an Ecuadorian custom-puzzle business with 5+ years of operation and thousands of units sold, launch a new line of AI-personalized wooden puzzles (pet photo upload, style selection, production-ready AI art with themed pieces).',
      'Ontario Greenhouses: Gathered requirements with Health & Safety and HR, identified missing greenhouse connectivity as the reason the previous tool was abandoned, and built, as sole developer, an offline-first PWA for safety, maintenance and electrical inspections, piloted with ~30 users across two sites.',
      'Claw & Soul (Technical Co-founder): Selected for Fanshawe College’s Entrepreneurship & Innovation Program. Designed an async AI pipeline with BullMQ/Redis (vision-model photo analysis, dynamic prompting, fal.ai generation) with interchangeable art styles via the Strategy pattern.',
      'Meal Ordering System: While working in the care home’s nutrition department, built a full-stack app to replace paper meal orders. Piloted with 60+ residents, 14 tables and two shifts, surfacing allergies, diets and preferences in real time and saving 10–20 minutes per service; approved by management and the regional coordinator.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Drizzle', 'BullMQ', 'Redis', 'fal.ai', 'Shopify', 'Docker'],
  },
  {
    company: 'Randstad (Contract)',
    title: 'Frontend Software Engineer',
    location: 'Phoenix, Arizona, USA · Remote',
    start: 'Nov 2024',
    end: 'Feb 2025',
    logo: logoRadstad,
    summary:
      'Contracted through Randstad to modernize Delphi’s web platform, migrating pages and components from WordPress to Next.js within a distributed Agile/Scrum team.',
    achievements: [
      'Migrated WordPress pages and components to Next.js with SSR and SSG as part of a migration that raised the Lighthouse Performance score from 45 to 90, alongside technical SEO and accessibility improvements.',
      'Integrated REST APIs with Axios and React Query for the vehicle parts catalog and store locator, tuning caching to cut redundant requests.',
      'Wrote unit tests with Jest and E2E tests with Cypress to keep the migration stable across releases.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'React Query', 'Axios', 'Jest', 'Cypress'],
  },
  {
    company: 'Kruger Corp',
    title: 'Senior Software Developer',
    location: 'Quito, Ecuador',
    start: 'Jan 2022',
    end: 'Aug 2023',
    logo: logoKruger,
    summary:
      'Technical lead for the order-tracking module of Urbano, a logistics platform processing 5,000+ shipments per day, within a three-developer team.',
    achievements: [
      'Led the full order lifecycle module, from customer creation through routing, delivery and collection.',
      'Built order, collection and cash-on-delivery reconciliation services with NestJS and PostgreSQL, plus React/Vite views for customers and internal operations: collections, delivery retries and per-order success rate.',
      'Made architecture decisions and designed the data model for the order and payment flow; ensured release quality through unit tests and production deployment support.',
    ],
    stack: ['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'React', 'Vite'],
  },
  {
    company: 'Idukay S.A.',
    title: 'Software Developer',
    location: 'Quito, Ecuador',
    start: 'Jan 2020',
    end: 'Oct 2021',
    logo: logoIdukay,
    summary:
      'Full-stack development on a MERN professional-training platform, covering tax-compliant invoicing and reporting.',
    achievements: [
      'Integrated the platform with the web services of the SRI, Ecuador’s tax authority, for electronic invoicing: XML invoice generation, status and error handling, and automatic delivery to users, processing 60–70 invoices per month.',
      'Built the reporting module end-to-end (backend + React frontend) for ~50 students and 8 courses: progress, grades and pass rates per course for instructors and admins, plus a progress map for students.',
      'Covered critical reporting and invoicing logic with Jest unit tests.',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Jest'],
  },
]