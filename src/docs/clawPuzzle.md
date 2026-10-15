## At a Glance

Built an end-to-end e-commerce platform that turns pet photos into AI-generated artwork and sells the result as a custom jigsaw puzzle. Customers choose an art style, upload up to four reference photos, receive a free preview, and continue directly to Shopify Checkout if they want the artwork printed as a 3 mm MDF puzzle.

The platform combines a Next.js storefront, a NestJS API, an asynchronous AI generation pipeline, Shopify catalog and order integrations, print-file preparation, and an internal production workflow in a single full-stack product.

![Claw Puzzle landing page](/images/projects/clawPuzzle/LandinPage.png)

---

## Why This Project Matters

Claw Puzzle is more than a storefront with an image-generation feature. It connects three systems that have very different requirements: an AI workflow that must preserve a pet's recognizable features, an e-commerce flow that must carry the generated artwork into checkout without losing context, and a physical production process that needs print-ready files and traceable order states.

The customer journey is intentionally simple: choose a style, upload the pet's photos, wait for the artwork, and decide whether to order the puzzle. Behind that experience, the application validates product and style compatibility, stores uploaded images, spends and refunds generation credits atomically, processes AI jobs in the background, associates the final image with a Shopify line item, ingests the paid order through signed webhooks, and prepares the artwork for printing.

The result is a cohesive system that takes a customer from an ordinary pet photo to a personalized physical product while keeping AI generation, checkout, order processing, and production operations connected.

---

## Technologies Used

**Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Feature-Sliced Design, Shopify Polaris, Recharts  
**Backend:** NestJS 11, Prisma 7, PostgreSQL, Redis, BullMQ, Swagger  
**AI & Imaging:** fal.ai, OpenRouter vision models, configurable prompt strategies, SeedVR upscaling, Sharp  
**Integrations:** Shopify Storefront API, Shopify Admin API, HMAC-verified Shopify webhooks, Cloudinary, Google OAuth  
**Testing & Infrastructure:** Jest, Vitest, Playwright, Railway, Vercel

---

## What I Built

### 1. AI Image Generation Pipeline

Designed an asynchronous pipeline that transforms one or more pet photos into artwork based on a customer-selected style.

- Implemented four configurable generation strategies covering vision-assisted prompt creation and role-based style transfer with single or multiple reference photos
- Used OpenRouter vision models through fal.ai to analyze the pet and construct detailed prompts before sending the final generation request to the selected image model
- Preserved generation settings and prompt snapshots so each result can be audited and reproduced
- Processed generation jobs with BullMQ and Redis instead of blocking customer requests during model execution
- Stored pet photos, generated artwork, thumbnails, and print assets in organized Cloudinary folders
- Added polling with retry backoff, visibility-aware refresh, failure recovery, and automatic credit refunds when a generation fails

![Claw Puzzle generating an AI portrait](/images/projects/clawPuzzle/waiting%20result%20with%20image%20reference.png)

### 2. Customer Creation & Conversion Flow

Built a focused creation funnel that moves customers from style selection to a purchasable result with minimal friction.

- Created a landing page that presents the physical puzzle, available themes, art styles, product benefits, process, and frequently asked questions
- Built style selection and a responsive upload experience that accepts up to four pet photos, identifies the primary reference, and lets returning customers reuse a saved pet
- Persisted unfinished uploads in IndexedDB so a refresh or Google sign-in handoff does not erase the customer's photos
- Prevented authenticated API calls before the session is ready, protecting the funnel from disruptive redirects and lost progress
- Displayed the selected style and uploaded reference while the artwork is generated, then replaced it with the completed preview
- Added a direct purchase action that creates a Shopify cart and sends the customer to checkout without requiring a separate cart step

![Pet photo upload step](/images/projects/clawPuzzle/Upload%20picture.png)

![Completed AI preview with checkout action](/images/projects/clawPuzzle/result%20with%20link%20to%20checkout%20.png)

### 3. Shopify Catalog, Checkout & Order Integration

Connected the custom AI experience to Shopify while keeping product, customer, and artwork data linked throughout checkout and order processing.

- Integrated the Shopify Storefront GraphQL API for product data, variants, cart creation, and checkout
- Routed browser-side Shopify requests through a Next.js proxy so storefront credentials are not exposed to the client
- Attached hidden user, generation, and image identifiers to Shopify cart lines, allowing paid orders to be linked back to the correct customer and generated artwork
- Mirrored Shopify products and variants into PostgreSQL through the Admin API, queued webhooks, and scheduled reconciliation jobs
- Verified incoming Shopify webhooks with HMAC-SHA256 signatures calculated from the raw request body
- Implemented idempotent order ingestion, credit grants, cancellations, partial refunds, and audit events

### 4. Print Preparation & Production Workflow

Built an internal workflow for turning AI output into a production-ready puzzle instead of relying on an external print-on-demand integration.

- Modeled each order item with a 14-state production workflow covering generation, artwork review, pre-production, printing, packing, shipping, delivery, holds, cancellations, refunds, and restocking
- Calculated effective DPI from source pixels and the physical dimensions configured for each Shopify variant
- Added automatic recommendations for no upscale, 2x, or 4x enhancement, plus controlled custom upscaling through fal.ai
- Used Sharp for crop positioning, color adjustments, contrast, sharpening, output encoding, and optional bleed extension
- Preserved the original artwork and a reusable high-resolution base so print adjustments can be changed without paying for another AI upscale
- Built an administration print studio with trim, bleed, and safe-zone guides for reviewing files before production

### 5. Authentication, Credits & Administration

Created the supporting systems needed to operate the product securely and monitor both customer activity and physical production.

- Implemented Google sign-in and JWT access/refresh tokens stored in HTTP-only cookies, with token rotation, automatic refresh, session tracking, and role-based authorization
- Built an idempotent credit ledger with atomic spending, signup credits, purchase bonuses, failure refunds, and reversals for cancelled or refunded orders
- Developed a Shopify Polaris administration dashboard for revenue, costs, conversion, retention, AI pipeline health, users, orders, styles, products, and production status
- Added tools for configuring prompt templates and AI models, testing styles, managing users and credits, reviewing audit history, and preparing order artwork for print
- Organized the frontend with Feature-Sliced Design and the backend as domain-focused NestJS modules for authentication, pets, styles, generations, credits, products, orders, storage, and Shopify synchronization
