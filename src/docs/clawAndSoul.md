## At a Glance

I designed and built Claw & Soul, a full-stack platform that transforms pet photos into personalized AI artwork and paint-by-numbers designs. The experience takes customers from photo upload and style selection through AI generation, browser-based image processing, printable downloads, and optional canvas checkout. I was responsible for the product architecture, frontend, backend, AI pipeline, commerce integrations, and operational tooling.

![Claw & Soul product experience](frontend/public/landing/hero-main-v2.webp)

---

## Why This Project Matters

Claw & Soul brings several technically different systems into one customer journey: generative AI, computationally intensive image processing, digital exports, user credits, and physical commerce. The main challenge was not building each feature independently, but making the complete flow reliable. Generations had to run asynchronously, failed jobs could not consume a customer's credit, Shopify events had to be processed safely more than once, and the paint-by-numbers editor had to perform complex processing without freezing the browser.

---

## Technologies Used

**Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS  
**Backend:** NestJS 11, PostgreSQL, Prisma, Redis, BullMQ  
**AI & Media:** OpenRouter, Fal.ai, Cloudinary, Sharp  
**Commerce & Infrastructure:** Shopify Storefront/Admin APIs, Vercel, Railway

---

## What I Built

### 1. AI Generation Pipeline

I built an asynchronous image-generation pipeline that analyzes uploaded pet photos with vision models, constructs style-specific prompts, and generates the final artwork through Fal.ai. A Strategy-based architecture supports multiple generation modes, including prompt templates, reference-image style transfer, and multi-photo context, without coupling the application to a single workflow.

BullMQ and Redis move generation outside the request lifecycle, while persisted status updates let the frontend report progress and recover from failures. Generation credits are managed through an append-only ledger with atomic spending, idempotent grants, and automatic refunds when a job fails.

![AI-generated pet artwork](frontend/public/process/3.%20Final%20Art.png)

### 2. Paint-by-Numbers Studio

I developed a browser-based editor that converts artwork into a print-ready paint-by-numbers project. The processing pipeline performs color clustering, facet construction and reduction, border tracing, path segmentation, and label placement before generating the final SVG.

Because this work is CPU-intensive, the pipeline yields between processing phases and reports progress to keep the interface responsive. Users can customize the result and export it as SVG, PNG, or a printable PDF with a paint-mixing guide based on spectral color calculations.

![Paint-by-numbers result](frontend/public/studio/bengal-pbn.webp)

### 3. Commerce & Operations

I connected the creation experience to Shopify for product data and checkout. Internal artwork and project identifiers travel with Shopify line items so completed purchases can be matched back to the correct customer and design. Product and order data are kept consistent through verified webhooks, background queues, scheduled reconciliation, retry handling, and idempotent processing.

I also built an administration platform with Shopify Polaris and Recharts. It centralizes product configuration, AI styles, generation health, customer credits, order production states, provider expenses, revenue metrics, and user analytics. This gives the product an operational layer beyond the customer-facing storefront.

---

## Outcome

Claw & Soul became an end-to-end product rather than an isolated AI demo: customers can create artwork, turn it into a practical paint-by-numbers design, download the result, and order a personalized physical canvas through the same flow. Its modular architecture separates generation strategies, commerce synchronization, image processing, and business operations, making each part easier to evolve independently.
