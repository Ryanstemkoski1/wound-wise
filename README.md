# WoundWise

> **Educational wound care platform by Dr. Alvin May** | [woundwise.com](https://woundwise.com)

## 🎯 Project Overview

WoundWise is a patient-focused educational platform delivering comprehensive wound care information based on Dr. Alvin May's published works: "Heal Your Wound" and "Wound Healing Journal". The site empowers patients with doctor-authored content, evidence-based treatment strategies, and curated product recommendations.

## 🏗️ Current Status

**Phase 1: Foundation & Core Content** - ✅ In Progress

### ✅ Completed

- Modern Next.js 16 + React 19 + TypeScript stack
- Tailwind CSS v4 with teal/yellow brand colors (matching woundwise.com)
- shadcn/ui component system ("new-york" style)
- Type-safe content architecture with JSON storage
- Content loader utilities with TypeScript types
- Core UI components (Button, Card, Badge)
- Custom components (WoundCard, ProductCard, Callout)
- Dynamic wound type pages (`/wounds/[slug]`)
- Wounds overview page (`/wounds`)
- Sample content: Pressure Injuries (complete)
- Product recommendations database (8 products)
- Glossary terms (20 entries)

### 🚧 In Progress

- Additional wound type content migration (5 remaining)
- Treatment pages infrastructure
- Site header and navigation

### 📋 Next Steps

1. Complete wound type content migration from source documents
2. Create treatment pages and content
3. Build site navigation and header component
4. Create footer with legal links
5. Develop resources section (glossary, products, FAQs)
6. Implement About Dr. May page
7. SEO optimization and metadata completion

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1 (App Router, React Server Components)
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS v4 (CSS-first config, OKLCH color space)
- **Components**: shadcn/ui with Radix UI primitives
- **Language**: TypeScript 5 (strict mode)
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
wound-wise/
├── app/                          # Next.js App Router
│   ├── wounds/
│   │   ├── [slug]/page.tsx      # Dynamic wound type pages
│   │   └── page.tsx             # Wounds overview
│   ├── globals.css              # Tailwind v4 + CSS variables
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── callout.tsx              # Content callout boxes
│   ├── product-card.tsx         # Product display cards
│   └── wound-card.tsx           # Wound type cards
├── content/                     # JSON content storage
│   ├── wounds/
│   │   └── pressure-injuries.json
│   ├── products/
│   │   └── recommendations.json
│   ├── glossary.json
│   └── metadata.json
├── lib/
│   ├── content-loader.ts        # Content loading utilities
│   └── utils.ts                 # Utility functions
├── types/
│   └── content.d.ts             # TypeScript definitions
├── public/                      # Static assets
├── docs/                        # Source materials
├── SYSTEM_DESIGN.md             # ⚠️ CRITICAL: Project architecture
└── .github/
    └── copilot-instructions.md  # AI agent guidelines
```

## 🎨 Brand Colors

- **Primary (Teal)**: `oklch(0.53 0.12 192)` - Main brand color, buttons, links
- **Accent (Yellow)**: `oklch(0.88 0.14 95)` - Callouts, highlights, secondary CTAs
- **Base (Zinc)**: Neutral grays for text, borders, backgrounds

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint code
npm run lint
```

Visit [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

Content is stored in JSON files (no CMS) for simplicity and version control:

- **Wound Types**: `content/wounds/*.json`
- **Treatments**: `content/treatments/*.json`
- **Products**: `content/products/recommendations.json`
- **Glossary**: `content/glossary.json`
- **Site Metadata**: `content/metadata.json`

All content follows TypeScript interfaces defined in `types/content.d.ts`.

## 🔧 Adding shadcn/ui Components

**Always use the CLI** - never manually create components:

```bash
npx shadcn@latest add [component-name]
```

Example:

```bash
npx shadcn@latest add accordion alert dialog
```

## 📚 Documentation

- **SYSTEM_DESIGN.md**: Complete project architecture, content strategy, implementation phases
- **.github/copilot-instructions.md**: Guidelines for AI coding agents
- **Source Materials**: `docs/` folder contains Dr. May's original content

## 🎯 Project Goals

1. **Education First**: Provide comprehensive, accessible wound care information
2. **Patient Empowerment**: Help patients actively participate in healing
3. **Evidence-Based**: Ground all content in clinical research
4. **SEO Optimized**: Ensure discoverability for those seeking help
5. **Performance**: Lighthouse scores 90+ across all metrics

## 👨‍⚕️ About

**Author**: Dr. Alvin May, MD  
**Specialty**: Wound Care & General Surgery  
**Location**: Southern California  
**Books**:

- "Heal Your Wound"
- "Wound Healing Journal"

## 📄 License

Private project - All rights reserved

---

**Last Updated**: October 30, 2025  
**Status**: Active Development - Phase 1
