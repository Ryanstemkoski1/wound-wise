# Sanity CMS Setup Guide - WoundWise

## Overview

WoundWise uses Sanity CMS for content management, providing a user-friendly admin interface for Dr. May and content managers. This guide covers complete setup from scratch.

---

## Prerequisites

- Node.js 18+ installed
- Git installed
- A Sanity account (free tier available)

---

## Step 1: Create Sanity Project

### Option A: Via Sanity CLI (Recommended)

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login to Sanity
sanity login

# The project is already configured in sanity.config.ts
# Just need to create a project in Sanity dashboard
```

### Option B: Via Sanity Dashboard

1. Go to https://www.sanity.io/manage
2. Click "Create Project"
3. Choose project name: **WoundWise CMS**
4. Choose dataset name: **production**
5. Copy the Project ID

---

## Step 2: Configure Environment Variables

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your Sanity credentials:**
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc12345
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=skxxxxxxxxxxxxx
   ```

### Getting Your API Token

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Name it: "WoundWise Write Token"
6. Permissions: **Editor** (allows read + write)
7. Copy the token and paste into `.env.local`

---

## Step 3: Migrate Existing Content

Run the migration script to import all JSON content into Sanity:

```bash
npm run migrate
```

This will:
- ✅ Import 6 wound types
- ✅ Import 10 treatments
- ✅ Import 18 products
- ✅ Import glossary terms
- ✅ Set up proper references between documents

**Expected Output:**
```
🚀 Starting migration to Sanity...
Project: abc12345
Dataset: production

🏥 Migrating wound types...
✅ Migrated: Pressure Injuries (Bedsores)
✅ Migrated: Diabetic Foot Ulcers
...

💊 Migrating treatments...
✅ Migrated: Infection Control
...

🛍️  Migrating products...
✅ Migrated: Pressure Relief Heel Protector Boot
...

📚 Migrating glossary...
✅ Migrated: Debridement
...

✨ Migration completed successfully!
```

---

## Step 4: Access Sanity Studio

### Embedded Studio (Recommended)

1. Start Next.js dev server:
   ```bash
   npm run dev
   ```

2. Visit: http://localhost:3000/studio

3. Log in with your Sanity account

### Standalone Studio

```bash
npm run studio
```

Then visit: http://localhost:3333

---

## Step 5: Configure CORS for Studio

For the Studio to work in production, you need to allow your domain:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to **API** → **CORS Origins**
4. Add these origins:
   - `http://localhost:3000` (development)
   - `https://woundwise.com` (production)
   - `https://www.woundwise.com` (production www)

---

## Understanding the Content Structure

### Wound Types Schema

- **Basic Info**: Title, slug, subtitle, description
- **Medical Content**: Risk factors, symptoms, prevention strategies
- **Rich Content**: Sections with portable text (rich text editor)
- **Relationships**: Links to related treatments and products
- **SEO**: Meta title, description, keywords
- **FAQs**: Inline question/answer pairs

### Treatments Schema

- **Basic Info**: Title, slug, subtitle, description
- **Treatment Details**: Steps, best practices, warnings
- **Content Sections**: Flexible rich text sections
- **Relationships**: Links to related wounds and products
- **SEO**: Full metadata support

### Products Schema

- **Product Info**: Name, category, description
- **Affiliate Data**: Link, partner (Amazon/La Roche-Posay/Other)
- **Images**: Upload or external CDN URL
- **Relationships**: Links to related wounds and treatments
- **Display**: Featured flag, sort order

### Glossary Terms

- **Term Data**: Term, definition, pronunciation
- **Organization**: Category, related terms
- **SEO**: Auto-generated slugs

---

## Content Editing Workflow

### 1. Navigate Content

In Studio sidebar:
- 📄 **Wound Types** - All chronic wound categories
- 💊 **Treatments** - Treatment approaches
- 🛍️ **Products** - Affiliate product catalog
- 📚 **Glossary Terms** - Medical terminology
- ❓ **FAQs** - Frequently asked questions
- ⚙️ **Site Metadata** - Global settings

### 2. Edit a Document

1. Click on any document to open editor
2. Make changes in the form
3. Click **Publish** button (green)
4. Changes go live immediately

### 3. Using the Rich Text Editor

The portable text editor supports:
- **Formatting**: Bold, italic, underline
- **Structure**: Headings, lists, blockquotes
- **Links**: Internal and external
- **Line breaks**: Shift+Enter for soft breaks

### 4. Managing Relationships

To link content:
1. Find the reference field (e.g., "Related Products")
2. Click "+ Add item"
3. Search and select from existing documents
4. Order matters - drag to reorder

### 5. SEO Optimization

Each document has SEO fields:
- **Meta Title**: Custom title for search engines (60 chars)
- **Meta Description**: Custom description (160 chars)
- **Keywords**: Array of relevant keywords
- **Publish Date**: When content was first created
- **Last Updated**: Automatically tracked

---

## Troubleshooting

### "Cannot find project ID"

**Solution**: Make sure `.env.local` exists and contains valid credentials.

### "CORS error in Studio"

**Solution**: Add your domain to CORS origins in Sanity dashboard.

### "Migration failed"

**Solution**: 
1. Check your API token has **Editor** permissions
2. Verify the token is in `.env.local` as `SANITY_API_TOKEN`
3. Make sure JSON files exist in `content/` directory

### "Content not appearing on site"

**Solution**:
1. Restart dev server: `Ctrl+C` then `npm run dev`
2. Clear Next.js cache: delete `.next/` folder
3. Check browser console for errors

### "Studio login not working"

**Solution**:
1. Clear browser cookies for localhost
2. Try incognito mode
3. Verify your Sanity account is active

---

## Production Deployment

### 1. Vercel Deployment

Add environment variables in Vercel:
1. Go to project settings
2. Navigate to **Environment Variables**
3. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN` (if using migrations/writes)

### 2. Studio in Production

The Studio is automatically deployed with your Next.js app at:
```
https://woundwise.com/studio
```

No separate deployment needed!

### 3. Update CORS

Remember to add your production domain to Sanity CORS settings.

---

## Content Revalidation

The app uses **Incremental Static Regeneration (ISR)**:

- **Revalidation Time**: 1 hour (3600 seconds)
- **Behavior**: Content updates within 1 hour of changes
- **Cache Strategy**: Stale-while-revalidate

To force immediate revalidation (in production):
1. Use Sanity webhooks (advanced)
2. Or wait up to 1 hour for ISR
3. Or redeploy the site

---

## Backup Strategy

### Export All Content

Use Sanity CLI to export:

```bash
sanity dataset export production backup.tar.gz
```

### Import Content

```bash
sanity dataset import backup.tar.gz production
```

### Version Control

All schemas are in Git, so your content structure is versioned.

---

## Advanced: Webhooks

To get instant updates in production:

1. Create a revalidation API route in Next.js
2. Set up webhook in Sanity dashboard
3. Configure webhook secret for security
4. Trigger revalidation on content changes

(Not required for v1 - ISR works well)

---

## Support & Resources

- **Sanity Docs**: https://www.sanity.io/docs
- **Next.js + Sanity**: https://www.sanity.io/docs/nextjs
- **Studio Customization**: https://www.sanity.io/docs/studio
- **GROQ Query Language**: https://www.sanity.io/docs/groq

---

## Quick Reference

```bash
# Start development with Studio
npm run dev
# Visit: http://localhost:3000
# Studio: http://localhost:3000/studio

# Run standalone Studio
npm run studio
# Visit: http://localhost:3333

# Migrate JSON to Sanity (one-time)
npm run migrate

# Export content backup
sanity dataset export production backup.tar.gz

# Deploy to production
npm run build
# Then deploy via Vercel/Netlify
```

---

**Last Updated**: November 12, 2025  
**Status**: Production Ready  
**CMS Version**: Sanity v4.15.0
