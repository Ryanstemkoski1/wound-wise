# 🚀 Sanity CMS - Quick Reference Card

## Essential Commands

```bash
# Development
npm run dev              # Start Next.js dev server (port 3000)
npm run studio           # Start standalone Studio (port 3333)

# Build & Deploy
npm run build            # Production build
npm run start            # Start production server

# Migration
npm run migrate          # Migrate JSON → Sanity (one-time)

# Utilities
npm run lint             # Check code quality
```

---

## URLs

| Environment | App | Studio |
|-------------|-----|--------|
| **Development** | http://localhost:3000 | http://localhost:3000/studio |
| **Production** | https://woundwise.com | https://woundwise.com/studio |
| **Standalone Studio** | N/A | http://localhost:3333 |

---

## Environment Variables

```env
# Required in .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12345
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skxxxxxxxxxxxxx
```

**Get these from**: https://www.sanity.io/manage → Your Project → API

---

## Content Types in CMS

| Type | Count | Description |
|------|-------|-------------|
| **Wound Types** | 6 | Chronic wound categories |
| **Treatments** | 10 | Treatment approaches |
| **Products** | 18 | Affiliate recommendations |
| **Glossary** | 50+ | Medical terminology |
| **FAQs** | Variable | Questions & answers |
| **Metadata** | 1 | Global site settings |

---

## Common Tasks

### Edit Content
1. Visit `/studio`
2. Click content type (e.g., "Wound Types")
3. Click document to edit
4. Make changes
5. Click **Publish**

### Add Content
1. Visit `/studio`
2. Click **+ Create**
3. Choose content type
4. Fill form
5. Click **Publish**

### Link Related Content
1. Find reference field (e.g., "Related Products")
2. Click **+ Add item**
3. Search and select
4. Drag to reorder

---

## File Locations

```
Key Files:
├── sanity.config.ts          ← Main config
├── .env.local                ← Environment vars
├── sanity/schemas/           ← Content schemas
├── lib/sanity.client.ts      ← Sanity client
├── lib/sanity.queries.ts     ← GROQ queries
├── scripts/migrate-to-sanity.ts ← Migration

Documentation:
├── SANITY_SETUP.md           ← Setup guide
├── ADMIN_GUIDE.md            ← For editors
├── SANITY_INTEGRATION.md     ← Tech deep-dive
└── README.md                 ← Project overview
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't find project ID | Check `.env.local` exists |
| CORS error | Add domain to Sanity dashboard → API → CORS |
| Migration failed | Verify API token has Editor permissions |
| Content not showing | Restart dev server |
| Studio won't login | Clear cookies, try incognito |

**Full guide**: `SANITY_SETUP.md` → Troubleshooting

---

## NPM Scripts Explained

| Script | What It Does | When To Use |
|--------|-------------|-------------|
| `npm run dev` | Starts development server | Daily development |
| `npm run studio` | Starts standalone Studio | Content editing only |
| `npm run build` | Builds for production | Before deployment |
| `npm run migrate` | Imports JSON to Sanity | One-time setup |

---

## Data Flow

```
Admin Edit (Studio)
    ↓
Sanity CMS (API)
    ↓
Next.js Fetch (GROQ)
    ↓
ISR Cache (1 hour)
    ↓
User Browser
```

**Cache**: Content updates within 1 hour in production

---

## Sanity Dashboard Quick Links

- **Manage Project**: https://www.sanity.io/manage
- **Create Token**: Projects → API → Tokens → Add API token
- **Configure CORS**: Projects → API → CORS Origins → Add origin
- **View Usage**: Projects → Usage
- **Status Page**: https://status.sanity.io

---

## Content Editor Workflow

```
1. Access Studio
   ↓
2. Navigate to content type
   ↓
3. Select document or create new
   ↓
4. Edit in form
   ↓
5. Click Publish
   ↓
6. Wait up to 1 hour for live update
```

---

## GROQ Query Examples

```javascript
// Get all wound types
*[_type == "woundType"]

// Get one by slug
*[_type == "woundType" && slug.current == "diabetic-ulcers"][0]

// Get with relationships
*[_type == "woundType"] {
  ...,
  "relatedProducts": relatedProducts[]->
}
```

**More**: Check `lib/sanity.queries.ts`

---

## Important Notes

✅ **No Breaking Changes** - JSON files still work  
✅ **Backward Compatible** - Can run without Sanity  
✅ **Production Ready** - Build verified successful  
✅ **Well Documented** - 4 comprehensive guides  

⚠️ **Remember**:
- Content updates take up to 1 hour in production (ISR cache)
- Always test edits in development first
- Keep API token secret (never commit to Git)
- Add production domain to CORS before deploying

---

## Getting Help

**Quick Questions**
- Check: `ADMIN_GUIDE.md` (for editors)
- Check: `SANITY_SETUP.md` (for developers)

**Technical Issues**
- Review: `SANITY_INTEGRATION.md`
- Check: https://www.sanity.io/docs

**Community Support**
- Join: https://slack.sanity.io
- GitHub: https://github.com/sanity-io/sanity

---

## Pre-Launch Checklist

```
Setup Phase:
□ Created Sanity account
□ Created project at sanity.io
□ Copied project ID
□ Created API token with Editor permissions
□ Filled .env.local with credentials

Migration Phase:
□ Ran npm run migrate
□ Verified all content imported
□ Checked Studio access
□ Tested editing content
□ Verified changes appear on site

Production Phase:
□ Added env vars to hosting platform
□ Configured CORS for production domain
□ Tested production Studio login
□ Trained content editors
□ Created backup of content
```

---

**Last Updated**: November 12, 2025  
**CMS Version**: Sanity v4.15.0  
**Status**: Production Ready  

**Print this card for quick reference!** 📋
