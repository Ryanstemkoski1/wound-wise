# WoundWise - AI Agent Instructions

## ⚠️ CRITICAL: Always Consult SYSTEM_DESIGN.md

**Before starting any work on this project**, read `SYSTEM_DESIGN.md` in the project root. This document contains:

- Complete project architecture and content strategy
- Phase-by-phase implementation plan
- Component specifications and data models
- SEO, performance, and accessibility guidelines
- Product integration strategy

The SYSTEM_DESIGN.md is the **single source of truth** for all architectural decisions.

---

## Project Overview

**WoundWise** is an educational wound care website for Dr. Alvin May (woundwise.com owner). The platform delivers patient-focused medical content based on Dr. May's published works: "Heal Your Wound" and "Wound Healing Journal". Content is stored in JSON files (no CMS), with affiliate product integration for wound care recommendations.

**Mission**: Empower patients with accessible, doctor-authored wound care education.

## Tech Stack & Key Dependencies

- **Framework**: Next.js 16.0.1 (App Router) with React 19.2
- **Styling**: Tailwind CSS v4 with CSS variables, OKLCH color space, and `tw-animate-css`
- **UI Components**: shadcn/ui ("new-york" style), Lucide React icons
- **Utilities**: `clsx`, `tailwind-merge` (combined in `cn()` helper), `class-variance-authority`
- **TypeScript**: Strict mode enabled, path aliases via `@/*`

## Architecture & File Structure

### Path Aliases (tsconfig.json & components.json)

```typescript
"@/*" → root directory
"@/components" → components/
"@/lib" → lib/
"@/hooks" → hooks/
"@/components/ui" → components/ui/ (shadcn components)
```

### Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components organized by purpose
  - `components/ui/` - shadcn/ui components (auto-generated)
  - `components/common/` - Shared components (Section, Callout, Logo)
  - `components/cards/` - Card components (ProductCard, WoundCard, TreatmentCard)
  - `components/layout/` - Layout components (Header, Footer, Navigation)
  - `components/features/` - Feature-specific components (Newsletter, Search, Share)
  - `components/journal/` - Digital journal tool components
- `content/` - JSON-based content storage
  - `content/wounds/` - Wound type data
  - `content/treatments/` - Treatment data
  - `content/products/` - Product recommendations with affiliate links
- `lib/` - Utility functions and shared logic
- `hooks/` - Custom React hooks
- `public/` - Static assets (images, icons)
- `types/` - TypeScript type definitions

## Styling Conventions

### Tailwind CSS v4 with Modern Features

- Uses **OKLCH color space** for better color perception (`oklch(L C H)`)
- **CSS variables** defined in `app/globals.css` with light/dark modes
- **Custom variant** for dark mode: `@custom-variant dark (&:is(.dark *))`
- Import animations: `@import "tw-animate-css"`

### Color System

**Brand Identity** (matching woundwise.com):

- **Primary**: Teal - `oklch(0.53 0.12 192)` in light mode, `oklch(0.65 0.14 192)` in dark mode
- **Accent**: Warm yellow - `oklch(0.88 0.14 95)` in light mode, `oklch(0.75 0.14 95)` in dark mode
- **Base**: Zinc neutrals for text, borders, and backgrounds

**Usage Guidelines**:

- Teal: Primary buttons, links, focus states, brand elements, medical trust signals
- Yellow: Callouts, highlights, warnings, important patient information
- Zinc: Body text, borders, cards, neutral UI elements

**CSS Variables** (defined in `app/globals.css`):

- Semantic tokens: `--primary`, `--secondary`, `--accent`, `--muted`, `--destructive`
- Component tokens: `--card`, `--popover`, `--sidebar`, `--input`, `--border`
- Chart colors: `--chart-1` through `--chart-5` (teal/yellow themed)
- Border radius: `--radius` = 0.625rem (10px)

### Class Name Pattern

Always use the `cn()` utility from `@/lib/utils` for conditional/merged classes:

```tsx
import { cn } from "@/lib/utils";

<div
  className={cn(
    "base-classes",
    conditional && "conditional-classes",
    className
  )}
/>;
```

## Component Development

### Key Reusable Components

**Section Component** (`components/common/section.tsx`):

- Provides consistent max-width containers and vertical spacing
- Variants: `default` (max-w-7xl), `narrow` (max-w-4xl), `wide` (max-w-screen-2xl), `full` (max-w-none)
- Default padding: `py-12 md:py-16` (applied to all sections unless `noPadding={true}`)
- Props: `variant`, `container`, `noPadding`, `className`, `id`
- Usage: Wrap all page sections for consistent layout

**ProductCard Component** (`components/cards/product-card.tsx`):

- Multi-vendor affiliate support (Amazon, La Roche-Posay, other)
- Category-specific icons (positioning, dressing, cleanser, nutrition, tool, skincare)
- Contextual affiliate disclosures based on partner
- Next.js Image with error handling and fallback to category icons
- Button text adapts to partner: "View on Amazon" vs "View on La Roche-Posay"

### shadcn/ui Integration

Components are installed via CLI and placed in `components/ui/`. Configuration in `components.json`:

```bash
npx shadcn@latest add [component-name]
```

**Important**: When adding shadcn components, they auto-import the `cn()` utility and use established path aliases.

### Font Setup (Geist Fonts)

The project uses Geist Sans and Geist Mono from `next/font/google`:

- Defined in `app/layout.tsx` with CSS variables `--font-geist-sans` and `--font-geist-mono`
- Applied via Tailwind theme extension in `globals.css`

### Component Style Guidelines

- Use RSC by default (no `"use client"` unless needed for interactivity)
- Follow shadcn/ui patterns for consistency
- Prefer composition over prop drilling
- Use TypeScript strict mode - always type props and return values

## Development Workflow

### Commands

```bash
npm run dev    # Start development server (localhost:3000)
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

### ESLint Configuration

- Uses ESLint v9 flat config format (`eslint.config.mjs`)
- Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

### TypeScript Settings

- Target: ES2017
- Module resolution: bundler
- Strict mode enabled
- JSX: react-jsx (automatic runtime)

## Dark Mode Implementation

- Class-based strategy: `.dark` class on HTML element
- Automatic dark mode detection via CSS custom variant
- All color tokens have light/dark variants in `globals.css`

## Important Notes

- **No traditional Tailwind config file** - uses Tailwind v4's CSS-first configuration
- **PostCSS** only includes `@tailwindcss/postcss` plugin
- **React 19** introduces new patterns - prefer built-in hooks and features
- **Server Components first** - only use client components when necessary (forms, interactivity, browser APIs)
- **Product System** - Multi-vendor affiliate support (Amazon, La Roche-Posay, extensible)
  - Product images served from CDNs (whitelisted in `next.config.ts`)
  - 18 products total: 8 Amazon + 10 La Roche-Posay skincare products
  - TypeScript types enforce valid categories and affiliate partners
- **Section Component** - All pages use consistent Section wrapper with default padding
  - Override with `noPadding={true}` for custom spacing requirements
  - All 28 pages refactored to use standardized Section architecture
