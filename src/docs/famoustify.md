## At a Glance

Built an end-to-end e-commerce platform that uses AI to generate custom pet portraits from user-uploaded photos and sells them as physical products through automated print-on-demand fulfillment. Delivered the full solution in 3 months as a solo developer: AI pipeline, storefront, payment processing, and third-party API integrations.

![Famousify homepage](/images/projects/famousify/hero.jpg)

---

## Why This Project Matters

This wasn't a standard Shopify theme customization. It required solving three distinct engineering challenges simultaneously: building a reliable AI generation pipeline that produces consistent, print-quality results across thousands of different inputs; integrating a print-on-demand API with complex product specifications; and wrapping it all in a seamless e-commerce experience where the user goes from photo upload to checkout in under 2 minutes.

The result is a fully automated platform where a customer's pet photo becomes a physical product on their doorstep — with zero manual intervention at any step.

---

## Technologies Used

**Frontend:** Shopify (Liquid, Theme API), JavaScript, CSS, Tailwind CSS  
**AI/ML:** fal.ai, FLUX, Stable Diffusion, prompt engineering, image post-processing  
**Integrations:** Gelato API (print-on-demand), Shopify Payments (Stripe, PayPal, Apple Pay, Google Pay + 7 more), Shopify Webhooks  
**Other:** WebP optimization, responsive images, SEO, multi-currency/localization, newsletter automation

---

## What I Built

![AI Image Generation Pipeline](/images/projects/famousify/ai-image-generation-pipeline.jpg)

### 1. AI Image Generation Pipeline (fal.ai + FLUX/Stable Diffusion)

Designed and implemented the core product feature: a 3-stage pipeline that takes any pet photo and transforms it into a stylized artistic portrait in ~40 seconds.

- Built subject extraction logic to identify pet features (face geometry, fur patterns, pose) and preserve them in the generated output
- Configured style-conditioned generation using LoRA adapters, curated prompt templates, and controlled seed variation to produce up to 10 unique variations per session
- Implemented post-processing for color correction, 5K upscaling (digital downloads), and automatic format adaptation for 20+ product print templates

### 2. Shopify Storefront & Conversion Flow

Built a custom 3-step purchase funnel (choose style → upload photo → buy art) as the platform's main conversion driver.

- Developed client-side image upload with validation, compression, and real-time generation status feedback during the ~40s AI processing time
- Built dynamic variant mapping that automatically generates mockup previews across all product types (canvas, posters, t-shirts, tote bags, phone cases, blankets, pillows, pet mats)
- Optimized performance: WebP images via CDN, lazy loading for 40+ image galleries, responsive srcset, video sections, and animated transitions
- Implemented cart drawer with cross-sell logic, discount automation (10% first purchase, 20% volume discount), and multi-currency detection

### 3. Gelato API Integration (Print-on-Demand Fulfillment)

Integrated Gelato's API to enable a zero-inventory business model with fully automated fulfillment.

- Built the order pipeline: Shopify webhook → print file generation per product spec (bleed zones, DPI, color profiles) → Gelato API → nearest production facility → shipping with tracking synced back to Shopify
- Automated image adaptation (crop, position, scale) for 8+ product categories across multiple size variants
- Configured worldwide shipping with automatic routing to the closest production facility

![Famousify product catalog](/images/projects/famousify/products.jpg)

### 4. Payments, Content & Marketing

- Configured Shopify Payments with 11+ payment methods and multi-currency support
- Built blog/journal with SEO-optimized templates, curated product collections, and dedicated landing pages
- Integrated newsletter system and social media presence (Facebook, Instagram, YouTube, TikTok)
