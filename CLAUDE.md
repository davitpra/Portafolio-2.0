# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

No test framework is configured.

## Environment

Requires a `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=https://example.com
```

## Architecture

Next.js 16 App Router portfolio site. All source code lives in `src/`.

**Routing (`src/app/`):** Pages: `/`, `/about`, `/experience`, `/projects`, `/projects/[slug]`, `/thank-you`.

**Portfolio data (`src/lib/`):**
- `projects.js` — static array of 7 projects. Each entry has `name`, `slug`, `description`, `link`, `logo`, `role`, `year`, `stack[]`, and `body` (multi-paragraph string).
- `experience.js` — static array of 4 roles. Each entry has `company`, `title`, `location`, `start`, `end`, `logo`, `summary`, `achievements[]`, and `stack[]`.
- `formatDate.js` — single date formatting utility.

Project detail pages (`/projects/[slug]`) are generated statically via `generateStaticParams()` directly from the projects data array. No MDX or CMS — content lives entirely in these JS data files.

**Component organization (`src/components/`):** Feature-based subdirectories:
- `layout/` — `Layout.jsx` (root wrapper), `Container.jsx` (three-layer responsive wrapper: `ContainerOuter`/`ContainerInner`/`Container`), `Header.jsx`, `Footer.jsx`, `Section.jsx`, `SimpleLayout.jsx`
- `ui/` — `Card.jsx` (compound component with `.Link`, `.Title`, `.Description`, `.Cta`, `.Eyebrow` subcomponents), `Button.jsx`, `Prose.jsx`, `SocialIcons.jsx`
- `home/` — section components for the homepage (`HeroSection`, `FeaturedProjects`, `Services`, `TechStack`, `Photos`, `Resume`, `Newsletter`)
- `about/` — `FadeIn.jsx` (IntersectionObserver animation primitive) + page section components
- `projects/` — `ProjectCard.jsx`, `ProjectsGrid.jsx`
- `experience/` — `ExperienceEntry.jsx`

**Animations:** No external animation library. Uses `IntersectionObserver` + CSS transitions with `cubic-bezier(0.22,1,0.36,1)` easing and staggered delays based on element index. All animated components check `prefers-reduced-motion`. The `FadeIn.jsx` in `src/components/about/` is the canonical scroll-animation primitive used across features.

**Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`. Dark mode managed by `next-themes` with system preference detection. Syntax highlighting styles in `src/styles/prism.css`.

**Providers (`src/app/providers.jsx`):** Client-side — `ThemeProvider` (next-themes), `AppContext` (tracks previous pathname for back-navigation), `ThemeWatcher` (syncs system theme changes).

**Prettier:** single quotes, no semicolons, Tailwind class sorting (`prettier-plugin-tailwindcss`).
