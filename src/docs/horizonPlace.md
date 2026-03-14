## At a Glance

Built a full-stack culinary management platform for a senior living community. The app allows residents to browse weekly menus, customize meals based on dietary preferences and restrictions, place delivery orders to their unit, and track meal delivery in real time. Staff use the platform to manage menus, monitor dietary requirements across residents, and track whether meals have been served — replacing a manual, paper-based process.

![Horizon Place home](/images/projects/horizonPlace/Horizon%20Place%20-%20home.jpg)

---

## Why This Project Matters

Senior living communities deal with critical dietary management — a wrong meal can mean an allergic reaction or a medical complication. The previous process was manual: paper menus, phone orders, and staff keeping track of deliveries by memory. This platform digitizes the entire workflow from menu creation to meal delivery confirmation, reducing errors and giving both residents and staff real-time visibility into the process. It's a domain where software has a direct, measurable impact on people's daily quality of life.

---

## Technologies Used

**Frontend:** Next.js, React, TypeScript, Tailwind CSS  
**Backend/CMS:** Strapi (headless CMS with PostgreSQL)  
**Deployment:** Vercel (frontend), Strapi Cloud / self-hosted (backend)  
**Other:** REST APIs, role-based access, responsive design, real-time status tracking

---

## What I Built

### 1. Weekly Menu Management System

Built a dynamic menu system that allows staff to create and publish weekly menus, and residents to browse available meals by day.

- Designed the content model in Strapi: meals with nutritional info, dietary tags (diabetic, low-sodium, vegetarian, allergen flags), portion sizes, and availability windows
- Built a calendar-based menu view in Next.js where residents see each day's options with clear dietary indicators
- Implemented menu publishing workflow: staff drafts the week's menu in Strapi, previews it, and publishes — residents see updates instantly

![Menu browsing interface](/images/projects/horizonPlace/Horizon%20Place%20-%20Weekly%20menu.jpg)

### 2. Meal Personalization & Ordering

Residents have different dietary needs, restrictions, and preferences. The app lets each resident build a profile and place orders that respect their specific requirements.

- Built resident profiles with persistent dietary preferences (allergies, medical diets, personal preferences) that automatically filter and flag menu items
- Developed an ordering flow where residents select meals, customize options, and schedule delivery to their specific unit
- Implemented order validation that cross-checks selections against the resident's dietary restrictions before confirming

### 3. Real-Time Delivery Tracking & Service Monitoring

Staff need to know which meals have been ordered, prepared, and delivered — and residents want to know when their meal is coming.

- Built a real-time service dashboard for staff showing order status across all residents: ordered → preparing → delivered
- Implemented status updates that staff can trigger as meals move through the kitchen and delivery pipeline
- Residents see live delivery status for their orders without needing to call or check with staff

![Real-Time Tracking](/images/projects/horizonPlace/Horizon%20Place%20-%20Resident%20on%20Tray.jpg)

### 4. Strapi as Headless CMS + Backend

Used Strapi as both the content management system and the API backend, with PostgreSQL as the underlying database.

- Designed the full data model in Strapi: residents, dietary profiles, menus, meals, orders, delivery statuses, and staff roles
- Configured role-based access: residents can only view menus and manage their own orders; staff can manage all content, update delivery statuses, and view reports across residents
- Built custom API endpoints in Strapi for order processing and status tracking logic that goes beyond basic CRUD
