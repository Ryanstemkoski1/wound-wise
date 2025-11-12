# WoundWise

> **Educational wound care platform by Dr. Alvin May** | [woundwise.com](https://woundwise.com)

## 🎯 Project Overview

WoundWise is a patient-focused educational platform delivering comprehensive wound care information based on Dr. Alvin May's published works: "Heal Your Wound" and "Wound Healing Journal". The site empowers patients with doctor-authored content, evidence-based treatment strategies, and curated product recommendations.

**Content Management**: Now powered by Sanity CMS for easy admin management with JSON fallback support.

## 🏗️ Current Status

**Phase 3: Sanity CMS Integration** - ✅ COMPLETE

### ✅ Phase 3 Complete (Sanity CMS Integration)

**1. Full CMS Implementation**
- Sanity v4 installed and configured
- 6 comprehensive content schemas (wounds, treatments, products, glossary, FAQs, metadata)
- Embedded Studio at `/studio` route
- Standalone Studio support (`npm run studio`)
- GROQ queries for all content types
- Image handling with CDN support
- Portable text (rich text) editor integration

**2. Content Migration System**
- Automated migration script (`npm run migrate`)
- Converts all JSON files to Sanity documents
- Preserves relationships between content
- One-time migration process
- 30+ documents migrated (wounds, treatments, products, glossary)

**3. Dual-Loading Architecture**
- New content loader with Sanity support
- Backward compatibility with JSON files
- Automatic fallback if Sanity not configured
- ISR (Incremental Static Regeneration) for performance
- 1-hour revalidation cache strategy

**4. Documentation & Developer Experience**
- Comprehensive setup guide (`SANITY_SETUP.md`)
- Environment variable templates (`.env.example`)
- Admin workflow documentation
- Troubleshooting guide

### ✅ Phase 1 Complete (Foundation & Core Content)

- Modern Next.js 16 + React 19 + TypeScript stack
- Tailwind CSS v4 with teal/yellow brand colors (matching woundwise.com)
- shadcn/ui component system ("new-york" style)
- Type-safe content architecture with JSON storage
- All wound type pages (6 types: pressure injuries, diabetic ulcers, venous ulcers, arterial wounds, surgical wounds, non-healing wounds)
- All treatment pages (4 treatments: infection control, wound dressings, offloading/positioning, nutrition/healing)
- Complete site navigation and header
- Footer with legal links
- Resources section (glossary, products, FAQs, books, journal)
- Product recommendations database with affiliate integration
- About Dr. May page
- Full SEO metadata implementation

### ✅ Phase 2 Complete (Enhanced Features)

**1. Digital Journal Tool**

- Interactive calendar component with entry badges
- Settings dialog for reminder preferences
- Entry form with wound measurements and photo tracking
- Local storage persistence (privacy-focused, no server)
- JSON export/import for data portability
- PDF export with jsPDF (multi-page, professional formatting)
- Print-friendly layout with comprehensive CSS
- Tracker page at `/resources/journal/tracker`

**2. Site Search Functionality**

- Static search index (14+ content items)
- Real-time auto-suggestions (minimum 2 characters)
- Intelligent relevance scoring algorithm
- Keyboard navigation (Arrow keys, Enter, Escape)
- Search results page at `/search` with grouped results
- Recent searches in localStorage (max 10)
- Matched term highlighting
- Popular topics and browse categories
- Mobile-responsive search bar in header

**3. Enhanced Navigation - Related Content**

- RelatedContent component (default and compact variants)
- Content relationship mapping system
- "Recommended Treatments" sections on wound pages
- "Related Wound Types" sections
- "You May Also Like" recommendations
- Category-based styling with icons
- Hover animations and visual feedback

**4. User Engagement Features**

- Newsletter signup component (3 variants: default, compact, inline)
- Client-side email validation
- Social sharing buttons (Facebook, Twitter, LinkedIn, Copy Link)
- Print button for medical appointment preparation
- Comprehensive print CSS (250+ lines)
  - Professional page headers/footers
  - Page numbering
  - External link URL display
  - Single-column layout conversion
  - Typography optimization for print
- Footer newsletter integration
- Share/print buttons on all content pages

**5. Accessibility & Polish**

- ARIA labels on all interactive elements
- Screen reader support (role attributes, aria-expanded, aria-controls)
- Keyboard navigation throughout
- Focus indicators on all interactive elements
- Semantic HTML structure
- Alt text on images
- Color contrast WCAG AA compliant

### ✅ Phase 2.5 Complete (Layout & Product System)

**1. Section Component Architecture**

- Created reusable Section component (`components/common/section.tsx`)
- 4 width variants: `default` (max-w-7xl), `narrow` (max-w-4xl), `wide` (max-w-screen-2xl), `full` (max-w-none)
- Default vertical padding: `py-12 md:py-16` (applied to all sections)
- `noPadding` prop for custom spacing requirements
- **All 28 pages refactored** to use standardized Section architecture
- Consistent vertical spacing site-wide

**2. Multi-Vendor Product System**

- Expanded from 8 to **18 products total**
  - 8 Amazon products (positioning, dressings, cleansers, nutrition, tools)
  - 10 La Roche-Posay skincare products (therapeutic balms, moisturizers, cleansers)
- Multi-partner affiliate support (Amazon, La Roche-Posay, extensible)
- Enhanced ProductCard component:
  - Category-specific icons (Bed, Bandage, Droplet, Apple, Wrench, **Sparkles**)
  - Partner-specific button text ("View on Amazon" vs "View on La Roche-Posay")
  - Contextual affiliate disclosures
  - Error handling with fallback to category icons
- External CDN configuration in `next.config.ts`:
  - Amazon: `m.media-amazon.com/images/**`
  - La Roche-Posay: `www.laroche-posay.us/dw/image/**`
- Updated TypeScript types:
  - New `skincare` category
  - `affiliatePartner`: "amazon" | "laroche-posay" | "other"

### 📋 Next Steps (Phase 3 - Future Enhancements)

1. **Backend Integration**

   - Newsletter API endpoint (currently frontend-only)
   - Contact form submission
   - Analytics integration (privacy-focused)

2. **Advanced Features**

   - Advanced search filters (category, date, content type)
   - Bookmark/favorites functionality
   - Print customization options
   - Multi-language support (Spanish priority)

3. **Content Expansion**
   - Video content integration
   - Downloadable patient guides
   - Interactive wound assessment quiz
   - Community resources directory

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
│   │   ├── [slug]/page.tsx      # Dynamic wound type pages (6 types)
│   │   └── page.tsx             # Wounds overview
│   ├── treatments/
│   │   ├── [slug]/page.tsx      # Dynamic treatment pages (4 treatments)
│   │   └── page.tsx             # Treatments overview
│   ├── resources/
│   │   ├── journal/
│   │   │   ├── tracker/page.tsx # Digital journal tool
│   │   │   └── page.tsx         # Journal overview
│   │   ├── glossary/page.tsx
│   │   ├── products/page.tsx
│   │   └── faqs/page.tsx
│   ├── legal/
│   │   ├── terms/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── disclaimer/page.tsx
│   ├── about/page.tsx           # About Dr. May
│   ├── books/page.tsx           # Published books
│   ├── contact/page.tsx         # Contact form
│   ├── search/page.tsx          # Search results page
│   ├── globals.css              # Tailwind v4 + comprehensive print CSS
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/
│   ├── ui/                      # shadcn/ui components (Button, Card, Dialog, etc.)
│   ├── common/                  # Shared components
│   │   ├── section.tsx          # Consistent layout container (4 variants)
│   │   ├── callout.tsx          # Content callout boxes
│   │   └── logo.tsx             # WoundWise logo
│   ├── cards/                   # Card components
│   │   ├── product-card.tsx     # Multi-vendor product cards
│   │   ├── wound-card.tsx       # Wound type cards
│   │   └── treatment-card.tsx   # Treatment cards
│   ├── layout/                  # Layout components
│   │   ├── site-header.tsx      # Main navigation header
│   │   ├── site-footer.tsx      # Footer with newsletter
│   │   └── mobile-nav.tsx       # Mobile navigation menu
│   ├── features/                # Feature-specific components
│   │   ├── search-bar.tsx       # Search with auto-suggestions
│   │   ├── related-content.tsx  # Related content component
│   │   ├── newsletter-signup.tsx # Newsletter subscription form
│   │   ├── share-buttons.tsx    # Social sharing buttons
│   │   └── print-button.tsx     # Print trigger button
│   └── journal/                 # Digital journal components
│       ├── journal-calendar.tsx
│       ├── journal-entry-form.tsx
│       └── journal-settings-dialog.tsx
├── content/                     # JSON content storage (no CMS)
│   ├── wounds/                  # 6 wound type files
│   │   ├── pressure-injuries.json
│   │   ├── diabetic-foot-ulcers.json
│   │   ├── venous-ulcers.json
│   │   ├── arterial-wounds.json
│   │   ├── surgical-wounds.json
│   │   └── non-healing-wounds.json
│   ├── treatments/              # 4 treatment files
│   │   ├── infection-control.json
│   │   ├── wound-dressings.json
│   │   ├── offloading-positioning.json
│   │   └── nutrition-healing.json
│   ├── products/
│   │   └── recommendations.json # 18 products (8 Amazon + 10 La Roche-Posay)
│   ├── glossary.json
│   └── metadata.json
├── lib/
│   ├── content-loader.ts        # Content loading utilities
│   ├── search-index.ts          # Static search index
│   ├── related-content.ts       # Content relationship mapping
│   ├── pdf-export.ts            # PDF generation for journal
│   └── utils.ts                 # Utility functions (cn helper)
├── hooks/
│   └── use-journal-data.ts      # Journal data management hook
├── types/
│   └── content.d.ts             # TypeScript definitions
│       # Product, WoundType, Treatment, etc.
├── public/
│   └── images/                  # Static image assets
└── next.config.ts               # Next.js config with CDN whitelisting
```

## 🎨 Brand Colors

- **Primary (Teal)**: `oklch(0.53 0.12 192)` - Main brand color, buttons, links
- **Accent (Yellow)**: `oklch(0.88 0.14 95)` - Callouts, highlights, secondary CTAs
- **Base (Zinc)**: Neutral grays for text, borders, backgrounds

## 🚀 Development

### First Time Setup

1. **Clone and install dependencies**
```bash
npm install
```

2. **Set up Sanity CMS** (Optional - JSON fallback available)

   a. Create a Sanity account at https://www.sanity.io/
   
   b. Create a new project or use existing one
   
   c. Copy `.env.example` to `.env.local` and fill in your Sanity credentials:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_write_token
   ```
   
   d. Run the migration to import existing JSON content:
   ```bash
   npm run migrate
   ```

3. **Run development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Content Management

**Option 1: Sanity CMS (Recommended for Admins)**
- Access the Studio at: http://localhost:3000/studio
- Edit content through visual interface
- Changes reflect immediately (with revalidation)
- Run standalone Studio: `npm run studio` (port 3333)

**Option 2: JSON Files (Developer Fallback)**
- Edit files in `content/` directory
- Requires rebuild for changes to appear
- Useful for bulk updates or version control

### Available Scripts

```bash
# Development
npm run dev          # Start Next.js dev server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# CMS Management
npm run studio       # Start Sanity Studio standalone (localhost:3333)
npm run migrate      # Migrate JSON content to Sanity (one-time)
```

### Testing the Application

After running `npm run dev`, explore:

- **Search**: Use the search bar in header, try auto-suggestions
- **Journal**: Visit `/resources/journal/tracker` to create entries
- **Related Content**: Navigate wound/treatment pages to see recommendations
- **Social Sharing**: Click share buttons on content pages
- **Print**: Use print button for appointment-ready documents
- **Newsletter**: Try the signup form in footer (frontend-only currently)

## 🎨 Key Features

### 🔍 Site Search

- Real-time auto-suggestions as you type
- Intelligent relevance scoring (title > keywords > content)
- Grouped results by category
- Recent searches saved locally
- Keyboard navigation support

### 📓 Digital Journal Tool

- Track wound healing progress daily
- Measure dimensions, pain levels, exudate
- Photo upload tracking (references only)
- Export to PDF for doctor visits
- Privacy-focused: all data stays local (localStorage)

### 🔗 Smart Navigation

- Related content on every page
- "You May Also Like" recommendations
- Breadcrumb navigation
- Category-based browsing

### 📤 Sharing & Export

- Social media sharing (Facebook, Twitter, LinkedIn)
- Copy link to clipboard
- Print-optimized layouts with headers/footers
- PDF export for journal entries

### ♿ Accessibility

- WCAG AA compliant
- Full keyboard navigation
- Screen reader support (ARIA labels, semantic HTML)
- Color contrast validation
- Focus indicators on all interactive elements

### 🛍️ Product Recommendations

- **18 Total Products**: 8 Amazon + 10 La Roche-Posay
- **Multi-Vendor System**: Scalable affiliate architecture
- **Categories**: Positioning, Dressings, Cleansers, Nutrition, Tools, Skincare
- **Smart Display**: Category icons, partner-specific branding
- **External CDNs**: Optimized image loading from Amazon & La Roche-Posay
- **Contextual Disclosures**: Transparent affiliate relationships

### 🎯 Section Component System

- **Consistent Layout**: All 28 pages use standardized Section wrapper
- **4 Width Variants**:
  - `default` (max-w-7xl) - Standard content width
  - `narrow` (max-w-4xl) - Reading-focused content
  - `wide` (max-w-screen-2xl) - Wide layouts
  - `full` (max-w-none) - Full viewport width
- **Default Padding**: `py-12 md:py-16` automatically applied
- **Flexibility**: Override with `noPadding={true}` for custom spacing

## 📝 Content Management

**Now powered by Sanity CMS** with JSON fallback for backward compatibility.

### Sanity Studio Access

1. **Embedded in Next.js App** (Recommended)
   - URL: http://localhost:3000/studio
   - Runs within the Next.js app
   - Same authentication as production

2. **Standalone Studio**
   ```bash
   npm run studio
   ```
   - URL: http://localhost:3333
   - Separate from Next.js app
   - Useful for content-only work

### Content Types in CMS

- **Wound Types**: 6 major chronic wound categories
- **Treatments**: 10 evidence-based treatment approaches
- **Products**: 18 affiliate product recommendations (Amazon + La Roche-Posay)
- **Glossary Terms**: Medical terminology and definitions
- **FAQs**: Frequently asked questions
- **Site Metadata**: Global site settings

### Admin Workflow

1. **Access Studio**: Visit `/studio` route or run `npm run studio`
2. **Edit Content**: Use visual editor with rich text support
3. **Preview Changes**: Content updates reflect with ISR (Incremental Static Regeneration)
4. **Publish**: Changes go live automatically after saving

### Migration from JSON

First-time setup includes a one-time migration:

```bash
npm run migrate
```

This script:
- Reads all JSON files from `content/` directory
- Creates Sanity documents with proper relationships
- Preserves all existing content and metadata
- Maintains backward compatibility

### Content Architecture

The app uses a **dual-loading strategy**:
- **Primary**: Fetch from Sanity CMS (if configured)
- **Fallback**: Load from JSON files (if Sanity unavailable)

This ensures the site works even without Sanity configured, making it developer-friendly.

## 📝 Content Management (Legacy JSON)

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
- **SANITY_SETUP.md**: Step-by-step CMS setup guide for admins
- **.github/copilot-instructions.md**: Guidelines for AI coding agents
- **Source Materials**: `docs/` folder contains Dr. May's original content

## 🎯 Project Goals

1. **Education First**: Provide comprehensive, accessible wound care information
2. **Patient Empowerment**: Help patients actively participate in healing
3. **Evidence-Based**: Ground all content in clinical research
4. **Privacy-Focused**: No user tracking, all journal data stays local
5. **SEO Optimized**: Ensure discoverability for those seeking help
6. **Performance**: Lighthouse scores 90+ across all metrics
7. **Accessibility**: WCAG AA compliant for all users

## 📊 Performance & Quality

- ✅ **Build**: Zero TypeScript errors, successful production build
- ✅ **SSG**: All 28 routes pre-rendered as static HTML
- ✅ **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- ✅ **Print CSS**: Professional print layouts with headers/footers
- ✅ **Mobile**: Responsive design, touch-friendly interactions
- ✅ **Layout Consistency**: Section component standardization across all pages
- ✅ **Multi-Vendor Products**: 18 products with external CDN optimization
- 🎯 **Target**: Lighthouse 90+ (performance, accessibility, best practices, SEO)

## 🧪 Testing

See `TESTING_CHECKLIST.md` for comprehensive testing guide covering:

- Feature functionality (journal, search, related content, sharing)
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness (phone, tablet, orientations)
- Performance audit (Lighthouse, Core Web Vitals)
- Accessibility audit (keyboard nav, screen readers, color contrast)
- Print layouts across browsers

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

**Last Updated**: October 31, 2025  
**Status**: Phase 2.5 Complete - Production Ready  
**Pages**: 28 static routes | **Products**: 18 (2 vendors) | **Build**: ✅ Successful
