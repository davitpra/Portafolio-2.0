import logoAirbnb from '@/images/logos/airbnb.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoHorizonPlace from '@/images/logos/horizon.png'
import logoClawPuzzle from '@/images/logos/claw-puzzle.png'
import logoFamousify from '@/images/logos/famousify.png'
import logoDelphi from '@/images/logos/delphi.png'

export const projects = [
  {
    name: 'Famousify',
    description:
      'AI-powered e-commerce platform that transforms pet portraits into fine-art prints and custom apparel using generative image models and automated Shopify workflows.',
    link: { href: 'https://famousify.art', label: 'famousify.art' },
    logo: logoFamousify,
  },
  {
    name: 'Delphi',
    description:
      'Vehicle diagnostics platform for the automotive industry — migrated from a legacy system to a modern Next.js architecture, improving performance, maintainability, and scalability.',
    link: { href: 'https://www.delphiautoparts.com/', label: 'delphiautoparts.com' },
    logo: logoDelphi,
  },
  {
    name: 'Horizon Place - culinary App',
    description:
      'The Horizon Place Culinary App streamlines meal ordering, elevating the dining experience for every resident.',
    link: { href: 'https://horizontal-place-diatrice.vercel.app/', label: 'horizon-place-culinary-demo.com' },
    logo: logoHorizonPlace,
  },
  {
    name: 'Claw Puzzle',
    description:
      'Claw Puzzle transforms pet portraits into unique puzzles and apparel, combining AI creativity with personalized memories.',
    link: { href: '#', label: 'claw-puzzle.com' },
    logo: logoClawPuzzle,
    logoClassName: 'invert dark:invert-0',
  },
  {
    name: 'AirBnB Clone',
    description:
      'The Airbnb Clone simplifies travel planning by seamlessly connecting guests with unique, handpicked accommodations for a hassle-free booking experience.',
    link: { href: 'https://github.com/davitpra/Inmoplus', label: 'github.com' },
    logo: logoAirbnb,
  },
  {
    name: 'ShipReady',
    description:
      'ShipReady is a comprehensive, production-ready template for building Shopify apps using the Remix framework.',
    link: { href: 'https://github.com/davitpra/COD-shipready', label: 'github.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Move DB',
    description:
      'The Movie DB is your go-to platform for exploring the cinematic world, offering comprehensive and up-to-date details on movies, series, actors, and directors.',
    link: { href: 'https://davitpra.github.io/The-Movie-DB/', label: 'The-Movie-DB.com' },
    logo: logoPlanetaria,
  },
]
