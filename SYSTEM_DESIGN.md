# WoundWise - System Design Document

> **Project Owner**: Dr. Alvin May  
> **Website**: https://woundwise.com/  
> **Project Type**: Educational/Informational Website with Affiliate Product Integration  
> **Tech Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Project Vision & Goals](#project-vision--goals)
3. [Content Architecture](#content-architecture)
4. [Technical Stack & Rationale](#technical-stack--rationale)
5. [Data Management Strategy](#data-management-strategy)
6. [Site Structure & Navigation](#site-structure--navigation)
7. [Component Architecture](#component-architecture)
8. [Phase-by-Phase Implementation](#phase-by-phase-implementation)
9. [Product Integration Strategy](#product-integration-strategy)
10. [SEO & Performance Strategy](#seo--performance-strategy)
11. [Future Scalability](#future-scalability)

---

## Executive Summary

WoundWise is a patient-focused educational platform designed to empower individuals dealing with chronic wounds. The site will serve as a comprehensive resource based on Dr. Alvin May's published works: "Heal Your Wound" (HYW) and "Wound Healing Journal" (WHJ). The platform prioritizes educational content delivery while incorporating affiliate product recommendations to support wound care needs.

**Core Differentiator**: Medical expertise translated into accessible, patient-friendly education with actionable guidance.

---

## Project Vision & Goals

### Primary Objectives

1. **Education First**: Provide comprehensive, doctor-authored wound care information
2. **Patient Empowerment**: Help patients understand and actively participate in their wound healing journey
3. **Accessibility**: Make complex medical information understandable to general audiences
4. **Resource Hub**: Centralize wound care knowledge, tools, and product recommendations

### Success Metrics

- User engagement (time on site, pages per session)
- Content completion rates
- Affiliate product click-through rates
- Return visitor percentage
- Search engine visibility for wound care topics

---

## Content Architecture

### Source Materials Analysis

**Document 1: "Heal Your Wound" (~2,324 lines)**

- Comprehensive wound care guide
- Structured educational content
- Multiple wound types covered
- Patient stories and analogies
- Practical strategies and interventions

**Key Content Sections**:

1. Understanding Wounds (General Concepts)
2. Wound Types:
   - Pressure Wounds (Bedsores)
   - Diabetic Wounds
   - Arterial Wounds
   - Venous Ulcers
   - Surgical Wounds
   - Non-Healing Wounds
3. Treatment Strategies
4. Appendices (Glossary, Product Lists, Resources)

**Document 2: "Wound Healing Journal" (~4,769 lines)**

- Interactive patient journal
- Tracking and documentation tools
- Year-at-a-glance calendars
- Guided prompts for wound monitoring

### Content Taxonomy

```
Root
├── Wound Types
│   ├── Pressure Injuries
│   ├── Diabetic Ulcers
│   ├── Arterial Wounds
│   ├── Venous Ulcers
│   ├── Surgical Wounds
│   └── Non-Healing Wounds
├── Treatment & Management
│   ├── Wound Healing Basics
│   ├── Infection Control
│   ├── Pain Management
│   ├── Nutrition & Hydration
│   ├── Offloading & Positioning
│   └── Wound Dressings
├── Patient Resources
│   ├── Glossary
│   ├── Wound Care Journal (Digital)
│   ├── Product Recommendations
│   └── FAQs
├── Educational Tools
│   ├── Visual Diagrams
│   ├── Comparison Charts
│   └── Self-Assessment Tools
└── About
    ├── About Dr. May
    ├── Book Information
    └── Contact
```

---

## Technical Stack & Rationale

### Core Technologies

| Technology       | Version | Rationale                                                                                                                                    |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js**      | 16.0.1  | - Server-side rendering for SEO<br>- App Router for modern routing<br>- Built-in image optimization<br>- Static generation for content pages |
| **React**        | 19.2.0  | - Latest features and performance<br>- Server Components for better UX<br>- Excellent ecosystem                                              |
| **TypeScript**   | 5.x     | - Type safety for maintainability<br>- Better developer experience<br>- Catch errors early                                                   |
| **Tailwind CSS** | v4      | - Rapid UI development<br>- Consistent design system<br>- OKLCH color space for accessibility<br>- CSS variables for theming                 |
| **shadcn/ui**    | Latest  | - High-quality accessible components<br>- "new-york" style for professional look<br>- Customizable and composable                            |

### Why This Stack?

1. **SEO-First**: Next.js SSR/SSG ensures search engines can crawl and index content
2. **Performance**: React 19 + Server Components = faster page loads
3. **Accessibility**: Built-in ARIA support + OKLCH colors
4. **Maintainability**: TypeScript + component-based architecture
5. **Modern**: Cutting-edge stack aligns with Dr. May's forward-thinking approach

---

## Data Management Strategy

### JSON-Based Content Storage

**Rationale**: No CMS needed initially - content is relatively static and manageable through JSON files.

### Directory Structure

```
wound-wise/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                    # Homepage
│   │   ├── about/page.tsx
│   │   └── layout.tsx
│   ├── wounds/
│   │   ├── [slug]/page.tsx             # Dynamic wound type pages
│   │   └── page.tsx                     # Wound types overview
│   ├── treatments/
│   │   ├── [slug]/page.tsx             # Dynamic treatment pages
│   │   └── page.tsx
│   ├── resources/
│   │   ├── glossary/page.tsx
│   │   ├── journal/page.tsx
│   │   ├── products/page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/                              # shadcn components
│   ├── wound-card.tsx
│   ├── treatment-section.tsx
│   ├── product-card.tsx
│   ├── navigation.tsx
│   ├── footer.tsx
│   └── ...
├── content/
│   ├── wounds/
│   │   ├── pressure-injuries.json
│   │   ├── diabetic-ulcers.json
│   │   ├── arterial-wounds.json
│   │   ├── venous-ulcers.json
│   │   ├── surgical-wounds.json
│   │   └── non-healing-wounds.json
│   ├── treatments/
│   │   ├── infection-control.json
│   │   ├── pain-management.json
│   │   ├── nutrition.json
│   │   ├── offloading.json
│   │   └── dressings.json
│   ├── products/
│   │   └── recommendations.json
│   ├── glossary.json
│   └── metadata.json                    # Site-wide content
├── lib/
│   ├── utils.ts
│   ├── content-loader.ts                # JSON loading utilities
│   └── types.ts                         # TypeScript types
├── public/
│   ├── images/
│   │   ├── diagrams/
│   │   ├── wound-stages/
│   │   └── products/
│   └── books/
│       ├── heal-your-wound-cover.jpg
│       └── wound-journal-cover.jpg
└── types/
    └── content.d.ts                     # Content type definitions
```

### Content Model (TypeScript Interfaces)

```typescript
// types/content.d.ts

export interface WoundType {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  riskFactors: string[];
  symptoms: string[];
  preventionStrategies: string[];
  treatmentApproaches: string[];
  sections: ContentSection[];
  relatedProducts: ProductReference[];
  relatedTreatments: string[];
  images: ImageAsset[];
  faqs: FAQ[];
  metadata: PageMetadata;
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  description: string;
  overview: string;
  steps: TreatmentStep[];
  bestPractices: string[];
  warnings: string[];
  relatedWounds: string[];
  relatedProducts: ProductReference[];
  images: ImageAsset[];
  metadata: PageMetadata;
}

export interface Product {
  id: string;
  name: string;
  category: "dressing" | "cleanser" | "tool" | "nutrition" | "positioning";
  description: string;
  useCases: string[];
  affiliateLink: string;
  affiliatePartner: "amazon" | "other";
  imageUrl: string;
  relatedWounds: string[];
  relatedTreatments: string[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms: string[];
  pronunciation?: string;
}

export interface ContentSection {
  heading: string;
  content: string;
  subsections?: ContentSection[];
  callout?: {
    type: "info" | "warning" | "tip" | "example";
    content: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  publishDate: string;
  lastUpdated: string;
  readingTime: number; // minutes
}
```

### Sample JSON Structure

```json
// content/wounds/pressure-injuries.json
{
  "id": "pressure-injuries",
  "slug": "pressure-injuries",
  "title": "Pressure Injuries (Bedsores)",
  "subtitle": "Understanding and Preventing Pressure Wounds",
  "description": "Pressure injuries develop when sustained pressure restricts blood flow to specific areas of the body. Learn about risk factors, stages, and evidence-based prevention strategies.",
  "riskFactors": [
    "Limited mobility or immobility",
    "Prolonged pressure on small, bony areas",
    "Poor nutrition and hydration",
    "Age-related changes in the skin",
    "Chronic illnesses affecting blood flow"
  ],
  "symptoms": [
    "Redness or discoloration that doesn't fade",
    "Warmth or tenderness in affected area",
    "Skin breakdown or open sores",
    "Pain or discomfort at pressure points"
  ],
  "preventionStrategies": [
    "Frequent repositioning (every 2 hours)",
    "Use of specialized cushions or mattresses",
    "Maintaining good nutrition and hydration",
    "Regular skin inspection",
    "Proper hygiene and moisturization"
  ],
  "sections": [
    {
      "heading": "What Are Pressure Injuries?",
      "content": "Pressure injuries occur when excessive pressure is applied to a specific area for too long...",
      "callout": {
        "type": "example",
        "content": "Think of sitting on a hard bench during a sporting event. The soreness you feel afterward is a mild form of pressure injury..."
      }
    }
  ],
  "relatedProducts": ["heel-boots", "body-wedges", "pressure-relief-mattress"],
  "relatedTreatments": ["offloading", "wound-dressing", "infection-control"],
  "metadata": {
    "title": "Pressure Injuries: Complete Guide | WoundWise",
    "description": "Expert guide to understanding, preventing, and treating pressure injuries (bedsores). Learn from Dr. Alvin May's clinical experience.",
    "keywords": [
      "pressure injuries",
      "bedsores",
      "pressure ulcers",
      "wound care",
      "prevention"
    ],
    "author": "Dr. Alvin May",
    "publishDate": "2024-01-01",
    "lastUpdated": "2024-10-30",
    "readingTime": 12
  }
}
```

---

## Site Structure & Navigation

### Information Architecture

```
Header Navigation:
├── Home
├── Wound Types ▾
│   ├── Overview
│   ├── Pressure Injuries
│   ├── Diabetic Ulcers
│   ├── Arterial Wounds
│   ├── Venous Ulcers
│   ├── Surgical Wounds
│   └── Non-Healing Wounds
├── Treatment & Care ▾
│   ├── Getting Started
│   ├── Infection Control
│   ├── Pain Management
│   ├── Nutrition & Hydration
│   ├── Wound Dressing Guide
│   └── Offloading & Positioning
├── Resources ▾
│   ├── Glossary
│   ├── Wound Journal (Digital Tool)
│   ├── Product Recommendations
│   └── FAQs
├── Books ▾
│   ├── Heal Your Wound
│   └── Wound Healing Journal
└── About ▾
    ├── Dr. Alvin May
    └── Contact

Footer:
├── Quick Links (Same as header)
├── Legal (Privacy, Terms, Disclaimer)
├── Social Media
└── Newsletter Signup
```

### URL Structure

| Page Type    | URL Pattern           | Example                       |
| ------------ | --------------------- | ----------------------------- |
| Homepage     | `/`                   | `/`                           |
| Wound Type   | `/wounds/[slug]`      | `/wounds/diabetic-ulcers`     |
| Treatment    | `/treatments/[slug]`  | `/treatments/pain-management` |
| Glossary     | `/resources/glossary` | `/resources/glossary`         |
| Products     | `/resources/products` | `/resources/products`         |
| Journal Tool | `/resources/journal`  | `/resources/journal`          |
| Book Pages   | `/books/[slug]`       | `/books/heal-your-wound`      |

---

## Component Architecture

### Core Components

#### 1. Layout Components

```tsx
// components/layout/site-header.tsx
- Logo
- Main Navigation
- Mobile Menu
- Search (optional for Phase 2)

// components/layout/site-footer.tsx
- Quick Links
- Newsletter Signup
- Social Links
- Legal Links
```

#### 2. Content Components

```tsx
// components/wound-type-card.tsx
- Thumbnail image
- Title + brief description
- "Learn More" CTA
- Used on overview pages

// components/treatment-section.tsx
- Section heading
- Rich content with formatting
- Callout boxes (tips, warnings, examples)
- Related links

// components/content-callout.tsx
- Different types: info, warning, tip, example
- Icon + styled content
- Based on callout type from JSON

// components/glossary-term.tsx
- Term + definition
- Related terms links
- Pronunciation guide (optional)

// components/faq-accordion.tsx
- Question/Answer pairs
- Collapsible UI
- Category filtering
```

#### 3. Product Components

```tsx
// components/product-card.tsx
- Product image
- Name + description
- Use cases
- Affiliate link CTA
- Disclaimer

// components/product-grid.tsx
- Filterable grid of products
- Category tabs
- Related wound types filter
```

#### 4. Interactive Components

```tsx
// components/journal/digital-journal.tsx
- Date picker/calendar
- Wound tracking inputs
- Notes section
- Export/print functionality

// components/search-bar.tsx (Phase 2)
- Global search across content
- Suggested results
- Recent searches
```

### shadcn/ui Components to Install

```bash
# Core UI Elements
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add separator

# Navigation
npx shadcn@latest add navigation-menu
npx shadcn@latest add breadcrumb

# Content Display
npx shadcn@latest add accordion
npx shadcn@latest add tabs
npx shadcn@latest add alert
npx shadcn@latest add dialog
npx shadcn@latest add sheet # for mobile menu

# Forms (for journal/newsletter)
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add calendar
npx shadcn@latest add select

# Data Display
npx shadcn@latest add table
npx shadcn@latest add avatar
npx shadcn@latest add tooltip
```

---

## Phase-by-Phase Implementation

### Phase 1: Foundation & Core Content (Weeks 1-3)

**Goal**: Launch MVP with essential pages and content

**Tasks**:

1. **Setup & Configuration** (Week 1)

   - [x] Initialize Next.js 16 project
   - [x] Configure Tailwind CSS v4
   - [x] Set up shadcn/ui
   - [ ] Define TypeScript types for content
   - [ ] Create directory structure
   - [ ] Set up git repository

2. **Content Migration** (Week 1-2)

   - [ ] Extract content from source documents
   - [ ] Structure into JSON format
   - [ ] Create content loader utilities
   - [ ] Optimize and prepare images
   - [ ] Write content metadata

3. **Core Pages Development** (Week 2-3)

   - [ ] Homepage with hero + overview
   - [ ] About Dr. May page
   - [ ] 6 wound type pages (dynamic route)
   - [ ] Basic treatment pages (top 5)
   - [ ] Glossary page
   - [ ] Product recommendations page

4. **Layout & Navigation** (Week 2)
   - [ ] Header with navigation
   - [ ] Footer with links
   - [ ] Mobile-responsive menu
   - [ ] Breadcrumbs

**Deliverables**:

- Functional website with all main content
- Responsive design (mobile + desktop)
- SEO-optimized pages
- Affiliate product links functional

---

### Phase 2: Enhanced Features (Weeks 4-5)

**Goal**: Add interactivity and user engagement features

**Tasks**:

1. **Digital Journal Tool**

   - [ ] Calendar interface
   - [ ] Wound tracking form
   - [ ] Local storage for data persistence
   - [ ] Export to PDF feature
   - [ ] Print-friendly layout

2. **Search Functionality**

   - [ ] Implement content search
   - [ ] Search results page
   - [ ] Auto-suggestions

3. **Enhanced Navigation**

   - [ ] "Related Content" sections
   - [ ] "You May Also Like" cards
   - [ ] Improved internal linking

4. **User Engagement**
   - [ ] Newsletter signup form
   - [ ] Social sharing buttons
   - [ ] Print-friendly versions

**Deliverables**:

- Interactive journal tool
- Site search
- Improved user engagement

---

### Phase 3: Polish & Optimization (Week 6)

**Goal**: Performance optimization and final touches

**Tasks**:

1. **Performance**

   - [ ] Image optimization audit
   - [ ] Code splitting review
   - [ ] Lighthouse score optimization (target: 90+)
   - [ ] Bundle size optimization

2. **SEO Enhancement**

   - [ ] Meta tags audit
   - [ ] Schema.org structured data
   - [ ] XML sitemap
   - [ ] robots.txt
   - [ ] Open Graph tags

3. **Accessibility**

   - [ ] WCAG 2.1 AA compliance check
   - [ ] Keyboard navigation testing
   - [ ] Screen reader testing
   - [ ] Color contrast validation

4. **Testing**
   - [ ] Cross-browser testing
   - [ ] Mobile device testing
   - [ ] Link validation
   - [ ] Content proofread

**Deliverables**:

- Production-ready site
- Performance optimized
- SEO and accessibility compliant

---

### Phase 4: Launch & Iteration (Ongoing)

**Goal**: Deploy and gather user feedback

**Tasks**:

1. **Deployment**

   - [ ] Choose hosting (Vercel recommended)
   - [ ] Configure custom domain
   - [ ] Set up analytics (Google Analytics/Plausible)
   - [ ] Configure error monitoring

2. **Post-Launch**
   - [ ] Monitor analytics
   - [ ] Gather user feedback
   - [ ] A/B test CTAs
   - [ ] Iterate based on data

---

## Product Integration Strategy

### Affiliate Product Categories

Based on content analysis, products fall into these categories:

1. **Wound Dressings**

   - Alginate, Hydrocolloid, Foam, Hydrogel
   - Transparent films, Collagen dressings
   - Antimicrobial dressings

2. **Wound Cleansers**

   - Saline solution
   - Hypochlorous acid
   - Iodine-based solutions

3. **Positioning & Offloading**

   - Heel boots
   - Body wedges
   - Leg elevators
   - Pressure-relief mattresses
   - Chair cushions

4. **Nutritional Supplements**

   - Protein supplements
   - Vitamin C
   - Zinc supplements

5. **Tools & Accessories**
   - Wound measurement tools
   - Medical tape
   - Gauze and bandages

### Implementation Approach

#### Product Data Structure

```json
// content/products/recommendations.json
{
  "products": [
    {
      "id": "heel-boot-01",
      "name": "Pressure Relief Heel Protector Boot",
      "category": "positioning",
      "description": "Soft, padded boots that protect heels from pressure and friction",
      "useCases": [
        "Pressure injury prevention",
        "Heel ulcer protection",
        "Post-surgical heel care"
      ],
      "relatedWounds": ["pressure-injuries", "diabetic-ulcers"],
      "relatedTreatments": ["offloading"],
      "affiliateLink": "https://amazon.com/...?tag=woundwise-20",
      "affiliatePartner": "amazon",
      "imageUrl": "/images/products/heel-boot.jpg",
      "featured": true
    }
  ]
}
```

#### Product Card Component

```tsx
// components/product-card.tsx
export function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>
        <Image src={product.imageUrl} alt={product.name} />
      </CardHeader>
      <CardContent>
        <h3>{product.name}</h3>
        <Badge>{product.category}</Badge>
        <p>{product.description}</p>
        <ul>
          {product.useCases.map((use) => (
            <li key={use}>{use}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            View on Amazon
          </a>
        </Button>
        <p className="text-sm text-muted-foreground">
          As an Amazon Associate, WoundWise earns from qualifying purchases.
        </p>
      </CardFooter>
    </Card>
  );
}
```

### Affiliate Link Management

- **Centralized**: All affiliate links in JSON files
- **Easy Updates**: Change link once, updates everywhere
- **Tracking**: Use UTM parameters for analytics
- **Compliance**: Clear disclosure on every product
- **rel attributes**: Proper `noopener`, `noreferrer`, `sponsored`

---

## SEO & Performance Strategy

### SEO Optimization

#### Technical SEO

```tsx
// app/wounds/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const wound = await getWoundData(params.slug);

  return {
    title: wound.metadata.title,
    description: wound.metadata.description,
    keywords: wound.metadata.keywords,
    authors: [{ name: wound.metadata.author }],
    openGraph: {
      title: wound.metadata.title,
      description: wound.metadata.description,
      type: "article",
      authors: [wound.metadata.author],
      publishedTime: wound.metadata.publishDate,
      modifiedTime: wound.metadata.lastUpdated,
    },
    twitter: {
      card: "summary_large_image",
      title: wound.metadata.title,
      description: wound.metadata.description,
    },
  };
}
```

#### Content Strategy

- Long-form, comprehensive content (avg. 2000+ words/page)
- Clear headings hierarchy (H1 → H2 → H3)
- Internal linking between related topics
- Image alt text for all visuals
- Schema.org markup for medical content

#### Performance Targets

- **Lighthouse Scores**: 90+ across all metrics
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s

### Image Optimization Strategy

- Use Next.js `<Image>` component
- WebP format with fallbacks
- Responsive images (srcset)
- Lazy loading below fold
- Diagram illustrations in SVG when possible

---

## Future Scalability

### Path to CMS (Optional - Post-Launch)

When content updates become frequent:

**Recommended CMS Options**:

1. **Sanity.io** - Structured content, great DX
2. **Contentful** - Enterprise-grade, robust API
3. **Strapi** - Self-hosted, full control

**Migration Path**:

1. Keep existing JSON structure as schema reference
2. Import JSON data into CMS
3. Update content loaders to fetch from CMS API
4. Maintain TypeScript types
5. Zero downtime migration

### Feature Expansion Ideas

**Phase 5+ (Future)**:

- User accounts for journal persistence
- Wound photo upload & tracking
- Appointment reminders
- Caregiver collaboration tools
- Multi-language support
- Telehealth integration
- Community forum (moderated)
- Mobile app (React Native reuse)

### Technical Debt Prevention

- **Component Library**: shadcn/ui provides upgrade path
- **Type Safety**: TypeScript prevents breaking changes
- **Testing**: Add Jest + React Testing Library later
- **Documentation**: Maintain this SYSTEM_DESIGN.md
- **Code Reviews**: Establish PR process early

---

## Appendix

### Content Migration Checklist

From source documents to JSON:

**"Heal Your Wound" Content**:

- [ ] Foreword & Introduction
- [ ] Wound Types (6 sections)
- [ ] Treatment Strategies (6 sections)
- [ ] Glossary (~50 terms)
- [ ] Product Lists
- [ ] FAQs
- [ ] Diagrams (pressure points, skin layers, etc.)

**"Wound Healing Journal" Content**:

- [ ] Journal templates
- [ ] Tracking prompts
- [ ] Calendar structures
- [ ] Instruction pages

### Design System Reference

**Brand Colors**:

- **Primary**: Teal (matching woundwise.com) - `oklch(0.53 0.12 192)`
- **Secondary**: Light teal backgrounds - `oklch(0.95 0.02 192)`
- **Accent**: Warm yellow - `oklch(0.88 0.14 95)`
- **Base**: Zinc neutrals (grays)

**Color Usage**:

- Teal: Primary buttons, links, focus states, brand elements
- Yellow: Callouts, highlights, secondary CTAs, important notices
- Zinc: Text, borders, backgrounds, neutral UI elements

**Dark Mode**:

- Teal brightens to `oklch(0.65 0.14 192)` for better contrast
- Yellow mutes to `oklch(0.75 0.14 95)` to reduce eye strain
- Maintains WCAG AAA contrast ratios

**Typography**:

- Font: Geist Sans (primary), Geist Mono (code)
- Scale: Tailwind default

**Spacing**:

- Border Radius: 0.625rem (10px)

---

## Questions for Dr. May

To finalize the implementation, please clarify:

1. **Content Priority**: Which wound types are most critical to launch first?
2. **Product Partnerships**: Any existing affiliate relationships beyond Amazon?
3. **Branding**: Logo, color preferences, existing brand guidelines?
4. **Analytics**: Specific metrics or tracking requirements?
5. **Legal**: Any medical disclaimers or compliance requirements?
6. **Books**: Link to purchase books, or just informational?
7. **Journal Tool**: Should it sync to cloud or stay local-only?
8. **Contact**: Preferred contact method (form, email, phone)?

---

**Document Version**: 1.0  
**Last Updated**: October 30, 2025  
**Author**: AI Development Team  
**Status**: Draft - Awaiting Dr. May's Review
