import fs from 'fs'
import path from 'path'

const logoAirbnb = '/images/logos/airbnb.svg'
const logoPlanetaria = '/images/logos/planetaria.svg'
const logoOpenShuttle = '/images/logos/open-shuttle.svg'
const logoHorizonPlace = '/images/logos/horizon.png'
const logoClawPuzzle = '/images/logos/claw-puzzle.png'
const logoFamousify = '/images/logos/famousify.png'
const logoDelphi = '/images/logos/delphi.png'
const logoInspectionSystem = '/images/logos/inspection-system.png'
const logoClawAndSoul = '/images/logos/clawAndSoul.svg'

const famousifyBody = fs.readFileSync(
  path.join(process.cwd(), 'src/docs/famoustify.md'),
  'utf-8',
)

const delphiBody = fs.readFileSync(
  path.join(process.cwd(), 'src/docs/dephi.md'),
  'utf-8',
)

const horizonPlaceBody = fs.readFileSync(
  path.join(process.cwd(), 'src/docs/horizonPlace.md'),
  'utf-8',
)

const clawPuzzleBody = fs.readFileSync(
  path.join(process.cwd(), 'src/docs/clawPuzzle.md'),
  'utf-8',
)

const inspectionSystemBody = fs.readFileSync(
  path.join(process.cwd(), 'src/docs/inspectionSystem.md'),
  'utf-8',
)

export const projects = [
  {
    name: 'Claw Puzzle',
    slug: 'claw-puzzle',
    description:
      'Claw Puzzle transforms pet portraits into unique puzzles and apparel, combining AI creativity with personalized memories.',
    link: { href: 'https://www.clawpuzzle.com/', label: 'claw-puzzle.com' },
    logo: logoClawPuzzle,
    logoClassName: 'invert dark:invert-0',
    role: 'Full Stack Developer',
    stack: ['Next.js', 'React', 'Shopify', 'AI/ML', 'Node.js'],
    body: clawPuzzleBody,
  },
  {
    name: 'Offline Inspection System',
    slug: 'offline-inspection-system',
    description:
      'An offline-first workplace safety platform that turns field inspections into traceable, verified corrective action.',
    link: { href: '#', label: 'offline-inspection-system.com' },
    logo: logoInspectionSystem,
    role: 'Full Stack Developer',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'TanStack Router',
      'TanStack Query',
      'Dexie',
      'Serwist',
      'NestJS 11',
      'PostgreSQL 17',
      'Drizzle ORM',
      'pg-boss',
      'Zod',
      'S3-compatible storage',
      'Vitest',
      'Testcontainers',
    ],
    body: inspectionSystemBody,
  },
  {
    name: 'Claw & Soul',
    slug: 'claw-and-soul',
    description: 'Description.',
    link: { href: 'https://www.clawandsoul.com/', label: 'claw-and-soul.com' },
    logo: logoClawAndSoul,
    role: 'Full Stack Developer',
    stack: ['stack'],
    body: clawPuzzleBody,
  },
  {
    name: 'Delphi',
    slug: 'delphi',
    description:
      'Vehicle diagnostics platform for the automotive industry — migrated from a legacy system to a modern Next.js architecture, improving performance, maintainability, and scalability.',
    link: {
      href: 'https://www.delphiautoparts.com/',
      label: 'delphiautoparts.com',
    },
    logo: logoDelphi,
    role: 'Frontend Lead',
    stack: ['Next.js', 'React', 'TypeScript', 'REST APIs', 'PostgreSQL'],
    body: delphiBody,
  },
  {
    name: 'Meal Ordering System',
    slug: 'meal-ordering-system',
    description:
      'The Meal Ordering System simplifies meal selection and ordering, providing a seamless experience for residents to enjoy their favorite dishes.',
    link: {
      href: 'https://meal-ordering-system.vercel.app/',
      label: 'meal-ordering-system.com',
    },
    logo: logoHorizonPlace,
    role: 'Full Stack Developer',
    stack: ['Next.js', 'React', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
    body: horizonPlaceBody,
  },

  {
    name: 'Famousify',
    slug: 'famousify',
    description:
      'AI-powered pet portrait e-commerce platform — users upload a photo, an AI generates a styled fine-art portrait, and it ships as a physical product worldwide via automated print-on-demand fulfillment.',
    link: { href: 'https://famousify.art', label: 'famousify.art' },
    logo: logoFamousify,
    role: 'Full-Stack Developer',
    year: 'Nov 2025 – Jan 2026',
    stack: [
      'Shopify',
      'Liquid',
      'JavaScript',
      'fal.ai',
      'Stable Diffusion',
      'Gelato API',
      'Tailwind CSS',
    ],
    body: famousifyBody,
  },
  {
    name: 'AirBnB Clone',
    slug: 'airbnb-clone',
    description:
      'The Airbnb Clone simplifies travel planning by seamlessly connecting guests with unique, handpicked accommodations for a hassle-free booking experience.',
    link: { href: 'https://github.com/davitpra/Inmoplus', label: 'github.com' },
    logo: logoAirbnb,
    role: 'Full Stack Developer',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS'],
    body: `InmoPlus is a full-stack property rental platform inspired by Airbnb. Built as a portfolio project to demonstrate end-to-end product development skills — from database design to UI polish.

The frontend is a React SPA with map-based property browsing, a multi-step booking flow, and a host dashboard for managing listings and reservations. The backend is an Express API backed by PostgreSQL with full CRUD for properties, bookings, and users.

Features include: date-range availability checking, dynamic pricing by season, image upload for listings, and email notifications for booking confirmations.

This project deepened my understanding of relational data modeling, specifically around the challenge of preventing double-bookings through proper date overlap queries.`,
  },
  {
    name: 'ShipReady',
    slug: 'shipready',
    description:
      'ShipReady is a comprehensive, production-ready template for building Shopify apps using the Remix framework.',
    link: {
      href: 'https://github.com/davitpra/COD-shipready',
      label: 'github.com',
    },
    logo: logoOpenShuttle,
    role: 'Developer',
    stack: ['Remix', 'Shopify', 'TypeScript', 'Prisma', 'PostgreSQL'],
    body: `ShipReady is an open-source starter template for building production-grade Shopify apps with Remix. It eliminates the boilerplate that slows down the first few days of any new Shopify app project.

Out of the box it includes: Shopify OAuth and session management, a Prisma-backed database layer ready to connect to any SQL database, webhook registration and verification, billing plan gating, and a component library styled with Polaris.

The motivation came from building several Shopify apps and noticing the same setup patterns repeating. ShipReady consolidates those patterns into a single, well-documented starting point.

Developers can go from zero to a working, installable Shopify app in under 30 minutes.`,
  },
  {
    name: 'Movie DB',
    slug: 'movie-db',
    description:
      'The Movie DB is your go-to platform for exploring the cinematic world, offering comprehensive and up-to-date details on movies, series, actors, and directors.',
    link: {
      href: 'https://davitpra.github.io/The-Movie-DB/',
      label: 'The-Movie-DB.com',
    },
    logo: logoPlanetaria,
    role: 'Frontend Developer',
    stack: ['JavaScript', 'React', 'TMDB API', 'CSS Modules'],
    body: `Movie DB is a film and series discovery app built on top of The Movie Database (TMDB) public API. It was one of my earliest production-quality React projects and focused heavily on API integration and UI polish.

Users can search for any movie or series, browse by genre, view detailed cast and crew information, and read plot summaries. The app dynamically fetches data from TMDB's REST API and renders it with a clean, responsive layout.

Key learnings from this project included handling asynchronous data fetching gracefully, pagination and infinite scroll with API-paginated results, and building reusable components from scratch without a UI library.

The project is hosted on GitHub Pages and remains one of the fastest ways to look up anything in the film world.`,
  },
]
