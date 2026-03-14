## At a Glance

Led the frontend migration of Delphi Autoparts' public platform from a WordPress monolith to a modern Next.js architecture. Delphi is a global aftermarket leader with presence in 150+ countries and a network of 2,750+ service centers, now operating under PHINIA Inc. My focus was on rebuilding the product pages and main navigation — the highest-traffic sections of the site — while leading a small frontend team through the transition.

![Delphi homepage](/images/projects/delphi/Delphi-hero.png)

---

## Why This Project Matters

Migrating a live, high-traffic platform for a global automotive company isn't a greenfield project — it's an exercise in managing complexity, backward compatibility, and team coordination under real-world constraints. The challenge wasn't just building new pages in Next.js; it was doing it incrementally alongside a running WordPress site, preserving SEO equity, and shipping with a small team on a tight timeline. The result was a faster, more maintainable frontend foundation that the team could continue building on after my engagement ended.

---

## Technologies Used

**Frontend:** Next.js, React, TypeScript, Tailwind CSS  
**Data:** REST APIs, PostgreSQL  
**Legacy:** WordPress (migrated from)  
**Other:** SSR/SSG, responsive design, SEO optimization, component library architecture

---

## What I Built

![Product pages architecture](/images/projects/delphi/Product%20pages%20architecture.png)

### 1. WordPress → Next.js Migration

Led the architectural migration of the public-facing platform from WordPress to Next.js. The legacy WordPress setup had grown into a monolith with performance bottlenecks, tightly coupled templates, and limited flexibility for the product and content teams.

- Defined the migration strategy: identified which pages to rebuild first based on traffic and business impact, prioritizing product pages and main navigation
- Architected the Next.js project structure with a focus on reusability — shared layouts, dynamic routing for product categories, and a component library that the team could extend independently
- Implemented server-side rendering (SSR) and static site generation (SSG) to improve page load times and SEO performance compared to the WordPress setup
- Ensured backward compatibility: URL structure, redirects, and meta tags preserved to avoid SEO regression during the transition

### 2. Product Pages

Rebuilt the product pages that serve as the core browsing experience for technicians, mechanics, and distributors looking up Delphi's parts catalog across multiple categories: fuel injection, fuel management, chassis, ignition, power electronics, and test equipment.

- Built dynamic product page templates with TypeScript that consume REST APIs and render category-specific layouts
- Implemented responsive image handling for product photography with optimized loading strategies
- Structured data and SEO metadata generation for each product category to maintain and improve search engine rankings
- Connected product data from PostgreSQL through REST API endpoints, handling filtering, categorization, and multi-region content

### 3. Main Navigation & Site Architecture

Redesigned and rebuilt the main navigation system for a complex information architecture spanning parts, diesel fuel systems, test equipment, training academy, technical resources, newsroom, and corporate pages.

- Built a multi-level navigation component in React/TypeScript supporting desktop and mobile viewports with accessible keyboard navigation
- Implemented region/language detection and switching (multi-country, multi-language support)
- Created a consistent header/footer system with integrated search, "Find My Part" quick access, and service center locator entry points

### 4. Frontend Team Leadership

Led a team of 2–3 frontend developers through the migration process.

- Established coding standards, component patterns, and PR review workflows for the new Next.js codebase
- Broke down the migration into incremental deliverables so the team could ship progressively without blocking the live WordPress site
- Conducted code reviews and mentored junior developers on React/TypeScript best practices and Next.js patterns (SSR vs SSG trade-offs, dynamic routing, API integration)
