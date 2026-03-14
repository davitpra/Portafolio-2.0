import fs from 'fs'
import path from 'path'

import logoAirbnb from '@/images/logos/airbnb.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoHorizonPlace from '@/images/logos/horizon.png'
import logoClawPuzzle from '@/images/logos/claw-puzzle.png'
import logoFamousify from '@/images/logos/famousify.png'
import logoDelphi from '@/images/logos/delphi.png'


const famousifyBody = fs.readFileSync(
  path.join(process.cwd(), 'src/docs/famoustify.md'),
  'utf-8'
)

const delphiBody = fs.readFileSync(
  path.join(process.cwd(), 'src/docs/dephi.md'),
  'utf-8'
)

const horizonPlaceBody = fs.readFileSync(
  path.join(process.cwd(), 'src/docs/horizonPlace.md'),
  'utf-8'
)

export const projects = [
  {
    name: 'Famousify',
    slug: 'famousify',
    description:
      'AI-powered pet portrait e-commerce platform — users upload a photo, an AI generates a styled fine-art portrait, and it ships as a physical product worldwide via automated print-on-demand fulfillment.',
    link: { href: 'https://famousify.art', label: 'famousify.art' },
    logo: logoFamousify,
    role: 'Full-Stack Developer',
    year: 'Nov 2025 – Jan 2026',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'fal.ai', 'Stable Diffusion', 'Gelato API', 'Tailwind CSS'],
    body: famousifyBody,
  },
  {
    name: 'Delphi',
    slug: 'delphi',
    description:
      'Vehicle diagnostics platform for the automotive industry — migrated from a legacy system to a modern Next.js architecture, improving performance, maintainability, and scalability.',
    link: { href: 'https://www.delphiautoparts.com/', label: 'delphiautoparts.com' },
    logo: logoDelphi,
    role: 'Frontend Lead',
    stack: ['Next.js', 'React', 'TypeScript', 'REST APIs', 'PostgreSQL'],
    body: delphiBody,
  },
  {
    name: 'Horizon Place',
    slug: 'horizon-place',
    description:
      'The Horizon Place Culinary App streamlines meal ordering, elevating the dining experience for every resident.',
    link: { href: 'https://horizontal-place-diatrice.vercel.app/', label: 'horizon-place-culinary-demo.com' },
    logo: logoHorizonPlace,
    role: 'Full Stack Developer',
    stack: ['Next.js', 'React', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
    body: horizonPlaceBody,
  },
  {
    name: 'Claw Puzzle',
    slug: 'claw-puzzle',
    description:
      'Claw Puzzle transforms pet portraits into unique puzzles and apparel, combining AI creativity with personalized memories.',
    link: { href: '#', label: 'claw-puzzle.com' },
    logo: logoClawPuzzle,
    logoClassName: 'invert dark:invert-0',
    role: 'Full Stack Developer',
    stack: ['Next.js', 'React', 'Shopify', 'AI/ML', 'Node.js'],
    body: `Claw Puzzle is a personalized product platform that turns pet photos into custom jigsaw puzzles and apparel. Think Famousify's sibling — same AI-first approach, different product category.

Users upload a photo of their pet, choose a product type (puzzle, t-shirt, hoodie), and the platform generates a stylized version of their photo through AI. The result is a unique product that feels handcrafted.

Built on top of Shopify with a Next.js storefront, the platform shares some infrastructure with Famousify but is designed for a different customer journey — gift purchases rather than collector prints.

A major focus was the order configurator: users can choose puzzle piece count, paper finish, and apparel sizing all from a single interactive screen before checking out.`,
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
    link: { href: 'https://github.com/davitpra/COD-shipready', label: 'github.com' },
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
    link: { href: 'https://davitpra.github.io/The-Movie-DB/', label: 'The-Movie-DB.com' },
    logo: logoPlanetaria,
    role: 'Frontend Developer',
    stack: ['JavaScript', 'React', 'TMDB API', 'CSS Modules'],
    body: `Movie DB is a film and series discovery app built on top of The Movie Database (TMDB) public API. It was one of my earliest production-quality React projects and focused heavily on API integration and UI polish.

Users can search for any movie or series, browse by genre, view detailed cast and crew information, and read plot summaries. The app dynamically fetches data from TMDB's REST API and renders it with a clean, responsive layout.

Key learnings from this project included handling asynchronous data fetching gracefully, pagination and infinite scroll with API-paginated results, and building reusable components from scratch without a UI library.

The project is hosted on GitHub Pages and remains one of the fastest ways to look up anything in the film world.`,
  },
]
