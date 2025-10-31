# Images Directory

This directory contains images for the WoundWise website.

## Quick Reference

**📋 Total Images**: 44 images generated and integrated (100% complete!)

- ✅ **12 Wound Type Hero Images** - All generated and displaying on wound cards + detail pages
- ✅ **10 Treatment Hero Images** - All generated and displaying on treatment cards + detail pages
- ✅ **18 Product Images** - All generated and displaying on product cards
- ✅ **1 Doctor Headshot** - `dr-may.png` displaying on About page with credentials
- ✅ **1 Homepage Hero** - `homepage-hero.png` displaying in two-column hero layout with text content
- ✅ **2 Medical Diagrams** - Pressure injury diagrams integrated in pressure-injuries page

**🎨 Generation Tools Used**: AI image generation (all PNG format)
**✨ Implementation Status**: COMPLETE - All 44 images organized, integrated, and displaying
**📁 Folder Structure**: Organized into `/wounds`, `/treatments`, `/products` subdirectories

---

## Implementation Summary

### ✅ What's Been Completed:

1. **Image Organization** - All 44 generated images moved from `/generated` to proper subdirectories
2. **Component Updates** - WoundCard, TreatmentCard, ProductCard all updated to display images with icon fallbacks
3. **Detail Pages** - Wound and treatment detail pages display hero images
4. **Homepage Hero** - Two-column responsive layout: text content on left, hero image with quote overlay on right
5. **About Page** - Dr. May's professional photo with credentials and highlights
6. **Build Verified** - All 40 pages building successfully with images loading correctly
7. **File Extensions** - All images are PNG format (as generated)

### 🔧 Components Modified:

- `components/cards/wound-card.tsx` - Now displays wound hero images with icon fallback
- `components/cards/treatment-card.tsx` - Now displays treatment hero images with icon fallback
- `components/cards/product-card.tsx` - Now displays product images with category icon fallback
- `app/wounds/[slug]/page.tsx` - Added hero image section below quick info cards
- `app/treatments/[slug]/page.tsx` - Added hero image section after breadcrumb
- `app/page.tsx` - Refactored to two-column hero: text content + hero image with quote overlay
- `app/about/page.tsx` - Added Dr. May's photo with credentials section
- `content/metadata.json` - Updated author image path to `/images/dr-may.png`

### 📂 Current Folder Structure:

```
public/images/
├── dr-may.png                         ✅ Displaying on About page
├── homepage-hero.png                  ✅ Displaying on homepage
├── wounds/                            ✅ 14 images total
│   ├── arterial-wounds-hero.png
│   ├── burns-hero.png
│   ├── cancer-lesions-hero.png
│   ├── diabetic-ulcers-hero.png
│   ├── end-of-life-wounds-hero.png
│   ├── non-healing-wounds-hero.png
│   ├── pressure-injuries-hero.png
│   ├── pressure-injury-stages.png     ✅ Educational diagram
│   ├── pressure-points.png            ✅ Educational diagram
│   ├── radiation-wounds-hero.png
│   ├── skin-tears-hero.png
│   ├── surgical-wounds-hero.png
│   ├── traumatic-wounds-hero.png
│   └── venous-ulcers-hero.png
├── treatments/                        ✅ 10 images total
│   ├── advanced-therapies-hero.png
│   ├── infection-control-hero.png
│   ├── mobility-exercise-hero.png
│   ├── moisture-management-hero.png
│   ├── nutrition-healing-hero.png
│   ├── offloading-positioning-hero.png
│   ├── pain-management-hero.png
│   ├── wound-cleansing-hero.png
│   ├── wound-debridement-hero.png
│   └── wound-dressings-hero.png
└── products/                          ✅ 18 images total
    ├── heel-boot.png
    ├── body-wedge.png
    ├── compression-socks.png
    ├── hydrocolloid.png
    ├── foam-dressing.png
    ├── saline-wash.png
    ├── protein-supplement.png
    ├── medical-tape.png
    ├── cicaplast-baume.png
    ├── cicaplast-gel.png
    ├── toleriane-cleanser.png
    ├── toleriane-cream.png
    ├── lipikar-balm.png
    ├── lipikar-wash.png
    ├── anthelios-spf50.png
    ├── anthelios-mineral.png
    ├── effaclar-cleanser.png
    └── effaclar-duo.png
```

---

## Image Usage Details

### 🏠 Homepage (`app/page.tsx`)

**Image**: `homepage-hero.png`

- **Location**: Large hero image section after main hero text
- **Size**: 500px height, full width with rounded corners
- **Features**:
  - Quote overlay with gradient background
  - Dr. May's quote about patient empowerment
  - Priority loading for optimal performance

## Usage Details

### 🏠 Homepage (`app/page.tsx`)

**Image**: `homepage-hero.png`

- **Layout**: Two-column responsive grid (text left, image right)
- **Desktop**: Side-by-side layout with 600px image height
- **Mobile**: Stacked layout (text above, image below)
- **Image Features**:
  - 500-600px height based on viewport
  - Rounded corners (rounded-2xl)
  - Dark gradient overlay for text contrast
  - Quote: "Empowering patients with knowledge and compassionate care for better wound healing outcomes." — Dr. Alvin May
  - Priority loading for performance
- **Text Content**: Badge, headline, subtitle, CTA buttons, trust indicators

### 👨‍⚕️ About Page (`app/about/page.tsx`)

**Image**: `dr-may.png`

- **Location**: Two-column section after stats, before mission statement
- **Size**: 500px height on desktop, responsive on mobile
- **Features**:
  - Professional headshot display
  - Credentials and highlights next to photo
  - Board certification, published works, patient advocacy badges

### 🏥 Wound Pages

**Images**: 12 wound hero images + 2 diagrams

- **Card View**: Hero images display on wound cards with icon fallback
- **Detail Pages**: Large hero image (h-96) below quick info cards
- **Diagrams**: Pressure injury stages and pressure points on pressure-injuries page

### 💊 Treatment Pages

**Images**: 10 treatment hero images

- **Card View**: Hero images display on treatment cards with icon fallback
- **Detail Pages**: Large hero image (h-96) after breadcrumb navigation

### 📦 Product Pages

**Images**: 18 product images

- **Card View**: Product images display with white background, icon fallback
- **Features**: Local PNG images preferred, falls back to imageUrl then category icon

---

## Original AI Image Generation Prompts

All images below were generated using the prompts documented in this file. The actual images are now stored as PNG files in their respective subdirectories.

### 1. Wound Type Images (12 total)

**Location**: `/public/images/wounds/`

**Status**: ✅ ALL GENERATED AND INTEGRATED

**Hero Images** (individual wound detail pages):

#### `arterial-wounds-hero.png` ✅

**AI Prompt**: "Professional medical photography, close-up of healthcare provider examining patient's lower leg and foot for arterial insufficiency, medical clinic setting, soft natural lighting, compassionate care, clean white examination room, stethoscope visible, doctor wearing white coat, photorealistic, clinical accuracy, 16:9 aspect ratio"

#### `burns-hero.jpg`

**AI Prompt**: "Professional medical scene, healthcare provider gently applying burn treatment dressing to patient's arm, modern hospital burn unit, sterile medical supplies on tray, soft diffused lighting, caring medical professional in scrubs, clean clinical environment, educational medical photography style, photorealistic, 16:9"

#### `cancer-lesions-hero.jpg`

**AI Prompt**: "Compassionate oncology nurse providing wound care consultation to elderly patient, comfortable hospital room, medical charts on tablet, soft warm lighting, professional medical setting, reassuring atmosphere, dignified patient care, photorealistic medical photography, 16:9"

#### `diabetic-ulcers-hero.jpg`

**AI Prompt**: "Medical professional examining diabetic patient's foot in podiatry clinic, specialized diabetic foot care equipment visible, modern medical office, gentle examination technique, patient sitting comfortably, clean professional setting, educational medical photography, photorealistic, 16:9"

#### `end-of-life-wounds-hero.jpg`

**AI Prompt**: "Gentle palliative care nurse providing comfort care to hospice patient, peaceful bedroom setting, soft natural window light, compassionate touch, dignity in care, medical supplies discreetly arranged, warm caring atmosphere, photorealistic, respectful medical photography, 16:9"

#### `non-healing-wounds-hero.jpg`

**AI Prompt**: "Wound care specialist examining chronic wound with modern diagnostic tools, advanced wound care clinic, medical magnification device, sterile environment, professional medical setting, patient's leg being examined, clinical photography style, photorealistic, 16:9"

#### `pressure-injuries-hero.jpg`

**AI Prompt**: "Hospital nurse demonstrating proper pressure injury prevention techniques, patient repositioning in adjustable hospital bed, pressure-relieving cushions visible, modern hospital room, educational medical demonstration, professional healthcare setting, photorealistic, 16:9"

#### `radiation-wounds-hero.jpg`

**AI Prompt**: "Radiation oncology nurse providing specialized skin care to radiation therapy patient, oncology clinic setting, gentle skin assessment, medical documentation visible, compassionate care, modern cancer treatment center, professional medical photography, photorealistic, 16:9"

#### `skin-tears-hero.jpg`

**AI Prompt**: "Geriatric nurse gently treating elderly patient's skin tear on forearm, senior care facility, delicate wound care supplies, soft natural lighting, compassionate elderly care, professional medical technique, photorealistic medical photography, 16:9"

#### `surgical-wounds-hero.jpg`

**AI Prompt**: "Post-operative nurse removing surgical staples or checking incision healing, modern surgical recovery room, sterile medical instruments, professional post-op care, patient in hospital gown, clean clinical environment, medical photography style, photorealistic, 16:9"

#### `traumatic-wounds-hero.jpg`

**AI Prompt**: "Emergency room physician treating traumatic injury, modern ER setting, sterile medical supplies organized on tray, urgent but controlled medical care, professional trauma care, bright clinical lighting, photorealistic medical scene, 16:9"

#### `venous-ulcers-hero.jpg`

**AI Prompt**: "Vascular specialist applying compression therapy to patient's lower leg, modern vascular clinic, compression bandages and stockings visible, professional medical consultation, patient seated comfortably, clean medical office, educational photography, photorealistic, 16:9"

**Educational Diagrams** (Optional - for pressure injuries page):

#### `pressure-injury-stages.svg`

**AI Prompt**: "Medical educational diagram showing 4 stages of pressure injury progression, clean vector illustration style, cross-section view of skin layers (epidermis, dermis, subcutaneous tissue, muscle, bone), labeled stages 1-4 with progressive tissue damage, medical textbook quality, professional color coding (light pink for stage 1, deeper red for stages 2-4), clear anatomical labels, white background, suitable for medical education"

**Alternative Approach**: Create as SVG diagram using vector graphics tools (Adobe Illustrator, Figma) or commission from medical illustrator for anatomical accuracy.

#### `pressure-points.svg`

**AI Prompt**: "Clean medical diagram of human body showing common pressure injury locations, front and back view, simplified anatomical outline, red dots marking pressure points (heels, sacrum, elbows, shoulders, hips, ankles), medical illustration style, labeled annotations, white background, educational poster quality, vector style"

**Alternative Approach**: Create as SVG using anatomical templates or hire medical illustrator.

**Card Thumbnails** (Optional - for wounds listing page):

- Use same filenames without `-hero` suffix (e.g., `arterial-wounds.jpg`)
- Recommended: 400x300px or 16:9 aspect ratio
- Currently handled by icon fallbacks in WoundCard component

### 2. Treatment Images (10 total)

**Location**: `/public/images/treatments/`

**Current Status**: Using themed icon fallbacks (Stethoscope, Shield, Droplet, Bandage, Apple, Activity, Heart, Sparkles, Zap icons)

**Hero Images** (Optional - for individual treatment pages):

#### `advanced-therapies-hero.jpg`

**AI Prompt**: "Modern wound care clinic showing negative pressure wound therapy (NPWT) device in use, medical professional monitoring advanced wound treatment equipment, sleek medical technology, hospital setting, patient receiving treatment comfortably, professional healthcare environment, photorealistic, 16:9"

#### `infection-control-hero.jpg`

**AI Prompt**: "Infection control nurse demonstrating sterile wound cleaning technique, hands wearing sterile gloves, antimicrobial wound cleansing supplies on sterile field, professional medical procedure, hospital setting, focus on sterile technique, clinical photography, photorealistic, 16:9"

#### `mobility-exercise-hero.jpg`

**AI Prompt**: "Physical therapist helping patient with gentle leg exercises for wound healing improvement, modern rehabilitation gym, supportive mobility equipment, encouraging therapeutic environment, professional physical therapy session, natural lighting, photorealistic, 16:9"

#### `moisture-management-hero.jpg`

**AI Prompt**: "Close-up of healthcare provider applying advanced moisture-balancing wound dressing, modern wound care products visible, professional dressing application technique, clean clinical setting, medical supplies organized, educational wound care photography, photorealistic, 16:9"

#### `nutrition-healing-hero.jpg`

**AI Prompt**: "Registered dietitian consulting with patient about wound healing nutrition, healthy protein-rich foods displayed on table, medical nutrition consultation room, food models and educational materials, professional healthcare setting, warm encouraging atmosphere, photorealistic, 16:9"

#### `offloading-positioning-hero.jpg`

**AI Prompt**: "Nurse demonstrating proper patient positioning with pressure-relieving cushions and specialized medical positioning devices, hospital bed with adjustable features, pressure redistribution equipment visible, professional patient care, modern hospital room, photorealistic, 16:9"

#### `pain-management-hero.jpg`

**AI Prompt**: "Compassionate pain management consultation, healthcare provider discussing pain control options with patient, comfortable medical office, pain scale chart visible, empathetic doctor-patient interaction, professional medical consultation setting, photorealistic, 16:9"

#### `wound-cleansing-hero.jpg`

**AI Prompt**: "Medical professional performing gentle wound irrigation with sterile saline solution, wound cleansing supplies on sterile tray, clean clinical technique, modern wound care clinic, professional medical procedure, educational medical photography, photorealistic, 16:9"

#### `wound-debridement-hero.jpg`

**AI Prompt**: "Wound care specialist performing surgical debridement procedure, sterile instruments on medical tray, professional wound care clinic, focused medical procedure, sterile field maintained, modern medical setting, clinical photography style, photorealistic, 16:9"

#### `wound-dressings-hero.jpg`

**AI Prompt**: "Organized display of various modern wound dressing types (foam, hydrocolloid, alginate, transparent film) arranged professionally, medical supply room or wound care clinic, educational product demonstration, clean professional medical photography, well-lit clinical environment, photorealistic, 16:9"

**Card Thumbnails** (Optional - for treatments listing page):

- Use same filenames without `-hero` suffix
- Recommended: 400x300px or 16:9 aspect ratio
- Currently handled by icon fallbacks in TreatmentCard component

### 3. Product Images (18 total)

**Location**: `/public/images/products/`

**Current Status**: Using category-based icon fallbacks (Bed, Bandage, Droplet, Apple, Wrench, Sparkles icons)

**Amazon Products** (8 items):

**IMPORTANT**: For product images, it's recommended to use actual product photos from Amazon rather than AI-generated images for:

- Better affiliate conversion rates
- Accurate product representation
- Legal/trademark compliance
- Amazon Associates program compliance

To obtain real product images:

1. Find product on Amazon
2. Right-click on main product image → "Copy image address"
3. Use URL in your code, or download and host locally
4. Ensure compliance with Amazon Associates Operating Agreement

**If using AI generation for mockups only:**

#### `heel-boot.jpg`

**AI Prompt**: "Professional product photography, medical heel protection boot offloading device, black and grey medical orthopedic boot, clean white background, studio lighting, product shot, e-commerce style, photorealistic"

#### `body-wedge.jpg`

**AI Prompt**: "Product photography, blue foam positioning wedge pillow for medical use, triangular shape, white background, studio lighting, clean professional product shot, medical supply catalog style"

#### `compression-socks.jpg`

**AI Prompt**: "Medical compression stockings product photo, beige/nude color, knee-high length, 20-30mmHg graduated compression, clean white background, professional product photography, medical catalog style"

#### `hydrocolloid.jpg`

**AI Prompt**: "Hydrocolloid wound dressing product photo, square beige/tan adhesive dressing pad, packaged medical product, clean white background, professional medical supply photography"

#### `foam-dressing.jpg`

**AI Prompt**: "Foam wound dressing product photo, square white absorbent foam pad with border, medical product packaging visible, clean white background, professional medical catalog photography"

#### `saline-wash.jpg`

**AI Prompt**: "Sterile saline wound wash spray bottle product photo, blue and white medical packaging, squeeze bottle design, clean white background, professional medical product photography"

#### `protein-supplement.jpg`

**AI Prompt**: "Protein powder supplement container product photo, large cylindrical plastic tub with nutrition label, health/medical supplement packaging, white background, professional product photography, e-commerce style"

#### `medical-tape.jpg`

**AI Prompt**: "Medical paper tape roll product photo, white hypoallergenic surgical tape on spool, medical adhesive packaging visible, clean white background, professional medical supply photography"

**La Roche-Posay Products** (10 items):

**IMPORTANT**: For brand-name skincare products, it's strongly recommended to use official product photos from:

- La Roche-Posay official website (laroche-posay.us)
- Brand partner asset libraries (request access as affiliate)
- Authorized retailer websites (CVS, Walgreens, Dermstore)

Using official product images ensures:

- Trademark compliance
- Accurate product representation
- Brand partnership compliance
- Better customer recognition and conversion

**If using AI generation for mockups only (not recommended for branded products):**

#### `cicaplast-baume.jpg`

**AI Prompt**: "Product photography, white and blue tube of dermatological repair balm, La Roche-Posay Cicaplast Baume B5, 40ml tube packaging, clean white background, professional skincare product photography, e-commerce style"

#### `cicaplast-gel.jpg`

**AI Prompt**: "Skincare product photo, white tube with blue accents, soothing gel cream packaging, dermatological care product, clean white background, professional product photography"

#### `toleriane-cleanser.jpg`

**AI Prompt**: "Facial cleanser pump bottle, white and grey packaging, dermatological gentle cleanser, 400ml pump bottle, clean white background, professional skincare photography"

#### `toleriane-cream.jpg`

**AI Prompt**: "Dermatological face cream jar, white and grey packaging, moisturizing cream container, professional skincare product photo, white background"

#### `lipikar-balm.jpg`

**AI Prompt**: "Body balm pump bottle, white and blue packaging, 400ml dermatological body moisturizer, professional product photography, white background"

#### `lipikar-wash.jpg`

**AI Prompt**: "Body wash pump bottle, white and blue packaging, gentle cleansing cream wash, dermatological product, clean white background, professional product photo"

#### `anthelios-spf50.jpg`

**AI Prompt**: "Sunscreen bottle, white and orange packaging, SPF 60 sun protection lotion, dermatological sunscreen, clean white background, professional product photography"

#### `anthelios-mineral.jpg`

**AI Prompt**: "Mineral sunscreen tube, white and orange packaging, SPF 50 mineral sunblock, dermatological sun protection, white background, professional product photo"

#### `effaclar-cleanser.jpg`

**AI Prompt**: "Medicated gel cleanser tube, white and blue-green packaging, acne treatment cleanser, dermatological skincare, clean white background, professional product photography"

#### `effaclar-duo.jpg`

**AI Prompt**: "Dual acne treatment tube, white and blue-green packaging, dermatological acne care product, clean white background, professional skincare photography"

**Recommended Alternative**: Contact La Roche-Posay brand partnership team or download high-resolution product images from their official press kit/affiliate resources.

**Image Specifications**:

- Format: JPG or PNG
- Dimensions: 800x800px (square, product shot)
- Optimization: <150KB per image
- Source: Can use Amazon product images or official brand photos (ensure compliance with affiliate program terms)

### 4. Doctor & Team Photos

**Location**: `/public/images/`

#### `dr-may.jpg` - Dr. Alvin May Professional Headshot

**AI Prompt**: "Professional medical headshot portrait, male physician in his 50s-60s, wearing white doctor's coat over business attire, warm friendly smile, glasses, compassionate expression, medical office background slightly blurred, professional healthcare photography, natural lighting, high-quality portrait, photorealistic, square format 1:1"

**Specifications**:

- Dimensions: 400x400px minimum (square format)
- Style: Professional but approachable
- Background: Medical office or neutral professional setting
- Usage: About page, author bylines, credibility
- Referenced in `content/metadata.json`

### 5. Hero & Background Images (Optional)

**Location**: `/public/images/heroes/`

#### `homepage-hero.jpg` - Homepage Hero Image

**AI Prompt**: "Warm caring scene, compassionate healthcare professional (nurse or doctor) consulting with elderly patient in modern medical office, gentle supportive interaction, natural window lighting, professional medical environment, diverse patients, empathetic care, hope and healing atmosphere, photorealistic, cinematic quality, 16:9 landscape format"

**Specifications**:

- Dimensions: 1920x1080px (16:9 landscape)
- Mood: Warm, caring, professional, hopeful
- Usage: Homepage hero section
- Focus: Doctor-patient relationship, trust, expertise

## Implementation Priority

### Phase 1: Core Content (Current - Icon Fallbacks ✓)

- Site is fully functional with Lucide icon placeholders
- No images required for MVP launch
- WoundCard, TreatmentCard, and ProductCard components handle missing images gracefully

### Phase 2: Product Photos (High ROI)

- Add 18 product images to increase affiliate conversion
- Source from Amazon/brand CDNs (check whitelisting in `next.config.ts`)
- Update ProductCard component to prefer images over icons

### Phase 3: Doctor Photo (Credibility)

- Add Dr. May headshot to About page
- Include in author bylines on content pages
- Build trust and authority

### Phase 4: Wound/Treatment Thumbnails (Enhanced UX)

- Add card thumbnails for listing pages
- Improve visual hierarchy and navigation
- Educational value - help patients identify wound types

### Phase 5: Hero Images (Polish)

- Add hero images to individual content pages
- Optional but enhances professional appearance
- Can use stock medical photos (ensure licensing)

## Image Guidelines

### Technical Requirements

- **Format**:
  - JPG for photos (better compression)
  - PNG for graphics with transparency
  - SVG for diagrams and illustrations (scalable, accessible)
- **Optimization**:
  - Compress all images before upload (<200KB target)
  - Use tools like TinyPNG, ImageOptim, or Sharp
- **Dimensions**:
  - Product photos: 800x800px (1:1)
  - Card thumbnails: 400x300px (4:3) or 640x360px (16:9)
  - Hero images: 1920x1080px (16:9) or 1600x900px
  - Doctor headshot: 400x400px (1:1)
- **Naming Convention**:
  - Lowercase, hyphen-separated (e.g., `diabetic-ulcers-hero.jpg`)
  - Match JSON references exactly

### Medical & Accessibility Standards

- **Copyright**: Ensure proper licensing for all medical images
  - Stock photos: Purchase from medical stock libraries
  - Product photos: Use official brand images (affiliate-compliant)
  - Diagrams: Create original or use open-source medical illustrations
- **Accuracy**: All medical imagery must be clinically accurate
  - Review with medical professional before publishing
  - Avoid graphic/disturbing wound images (educational, not sensational)
- **Accessibility**:
  - High contrast for visibility
  - Include descriptive alt text (already in JSON)
  - Avoid text in images (use HTML/CSS overlays instead)
- **Patient Sensitivity**:
  - Use professional medical photography standards
  - Avoid identifiable patient photos without consent
  - Prefer diagrams/illustrations for educational content

### Content Sources

**Recommended Medical Stock Photo Sites**:

- Shutterstock Medical Collection
- iStock Medical Images
- Science Photo Library
- Adobe Stock Healthcare

**Free/Open Source Options**:

- Unsplash (search: medical, healthcare, doctor)
- Pexels (search: hospital, nurse, patient care)
- Wikimedia Commons (medical diagrams, anatomy)
- OpenStax Anatomy & Physiology (open textbook illustrations)

**Product Images**:

- Amazon Product Advertising API (affiliate program)
- La Roche-Posay brand asset library (request access)
- Official brand websites (check terms of use)

## Next.js Image Configuration

Update `next.config.ts` to whitelist external image domains:

```typescript
images: {
  remotePatterns: [
    { hostname: 'm.media-amazon.com' },
    { hostname: 'images-na.ssl-images-amazon.com' },
    { hostname: 'laroche-posay.com' },
    // Add other CDN domains as needed
  ],
}
```

## File Structure

```
public/
├── images/
│   ├── dr-may.jpg                    # Doctor headshot
│   ├── wounds/                        # Wound type images (12)
│   │   ├── arterial-wounds.jpg
│   │   ├── burns.jpg
│   │   ├── cancer-lesions.jpg
│   │   ├── diabetic-ulcers.jpg
│   │   ├── end-of-life-wounds.jpg
│   │   ├── non-healing-wounds.jpg
│   │   ├── pressure-injuries.jpg
│   │   ├── radiation-wounds.jpg
│   │   ├── skin-tears.jpg
│   │   ├── surgical-wounds.jpg
│   │   ├── traumatic-wounds.jpg
│   │   ├── venous-ulcers.jpg
│   │   ├── pressure-injury-stages.svg  # Educational diagram
│   │   └── pressure-points.svg         # Educational diagram
│   ├── treatments/                    # Treatment images (10)
│   │   ├── advanced-therapies.jpg
│   │   ├── infection-control.jpg
│   │   ├── mobility-exercise.jpg
│   │   ├── moisture-management.jpg
│   │   ├── nutrition-healing.jpg
│   │   ├── offloading-positioning.jpg
│   │   ├── pain-management.jpg
│   │   ├── wound-cleansing.jpg
│   │   ├── wound-debridement.jpg
│   │   └── wound-dressings.jpg
│   └── products/                      # Product images (18)
│       ├── heel-boot.jpg              # Amazon products
│       ├── body-wedge.jpg
│       ├── compression-socks.jpg
│       ├── hydrocolloid.jpg
│       ├── foam-dressing.jpg
│       ├── saline-wash.jpg
│       ├── protein-supplement.jpg
│       ├── medical-tape.jpg
│       ├── cicaplast-baume.jpg        # La Roche-Posay products
│       ├── cicaplast-gel.jpg
│       ├── toleriane-cleanser.jpg
│       ├── toleriane-cream.jpg
│       ├── lipikar-balm.jpg
│       ├── lipikar-wash.jpg
│       ├── anthelios-spf50.jpg
│       ├── anthelios-mineral.jpg
│       ├── effaclar-cleanser.jpg
│       └── effaclar-duo.jpg
```

## Notes

- **No images are required** for the site to function - all components have icon fallbacks
- Images enhance credibility, conversion, and user experience
- Prioritize product photos for affiliate revenue
- Ensure all medical imagery meets ethical and legal standards
- Test accessibility with screen readers after adding images

---

## AI Image Generation Guide

### Recommended AI Tools

**For Medical/Healthcare Scenes (Wounds & Treatments):**

- **Midjourney** (v6+) - Best for photorealistic medical photography
- **DALL-E 3** - Good for professional healthcare scenes, built-in safety filters
- **Leonardo.AI** - Medical photography models available
- **Stable Diffusion** (with appropriate models) - Local generation, full control

**For Product Photography:**

- **Actual product photos strongly recommended** over AI generation
- If using AI: Midjourney or DALL-E 3 with "product photography" style

**For Medical Diagrams:**

- **Adobe Firefly** - Vector-friendly outputs
- **Canva AI** - Simple diagram generation
- **Better alternative**: Commission medical illustrator or use vector tools (Figma, Illustrator)

### Important Prompt Tips

**For Medical Scenes:**

1. Always include: "professional medical photography", "photorealistic", "clinical accuracy"
2. Specify lighting: "soft natural lighting" or "bright clinical lighting"
3. Include setting: "modern hospital", "medical clinic", "professional healthcare environment"
4. Emphasize care quality: "compassionate care", "professional medical setting", "patient dignity"
5. Avoid graphic content: Never request actual wound images - focus on care delivery
6. Specify aspect ratio: Add "16:9" or "1:1" at end of prompt

**Quality Modifiers:**

- Add to end of prompts: "photorealistic, high quality, professional photography, 8k resolution"
- For products: "studio lighting, white background, commercial product photography"
- For medical: "clinical photography style, medical documentation quality"

### Negative Prompts (What to Avoid)

Add these to negative prompt field if available:

- "cartoon, illustration, low quality, blurry, distorted, graphic wounds, blood, gore, medical procedures, surgery, invasive, disturbing, unprofessional"

### Ethical Considerations for Medical AI Images

**DO:**
✅ Generate images of healthcare professionals providing care
✅ Show medical consultations and patient education
✅ Depict medical equipment and supplies
✅ Create professional healthcare environment scenes
✅ Focus on compassionate, dignified patient care

**DON'T:**
❌ Generate graphic wound images (use medical stock photography instead)
❌ Show actual medical procedures in detail
❌ Create images that could be misleading about medical conditions
❌ Use AI for clinical diagnostic imagery
❌ Generate identifiable patient faces (keep generic/diverse)

### Post-Processing

After generating images:

1. **Resize to specifications**: Use tools like Photoshop, GIMP, or online resizers
2. **Optimize file size**: TinyPNG, ImageOptim, or Squoosh
3. **Check accessibility**: Ensure sufficient contrast, clarity
4. **Medical review**: Have healthcare professional verify appropriateness
5. **Add to project**: Save in appropriate `/public/images/` subdirectory

### Batch Generation Workflow

1. **Copy prompts** from this README for your chosen category
2. **Generate in batches**: Do all wound heroes, then treatment heroes, etc.
3. **Review for consistency**: Ensure similar lighting, style, quality
4. **Select best outputs**: AI tools often give multiple variations
5. **Rename files**: Match exact filenames from this README
6. **Optimize**: Batch compress before adding to project
7. **Test**: Add to site and verify display

### Example Midjourney Command

```
/imagine prompt: Professional medical photography, compassionate healthcare provider examining patient's lower leg and foot for arterial insufficiency, medical clinic setting, soft natural lighting, caring consultation, clean white examination room, stethoscope visible, doctor wearing white coat, photorealistic, clinical accuracy, 16:9 aspect ratio --v 6 --style raw --ar 16:9
```

### Example DALL-E 3 Prompt

```
Create a professional medical photograph showing a healthcare provider gently applying burn treatment dressing to a patient's arm in a modern hospital burn unit. The scene should include sterile medical supplies on a tray, soft diffused lighting, and a caring medical professional in scrubs. The environment should be clean and clinical with an educational medical photography style. Photorealistic, 16:9 aspect ratio.
```

### Legal & Compliance Notes

- **AI-generated images**: Generally safe for commercial use (check specific tool's terms)
- **Medical accuracy**: Have healthcare professional review before publishing
- **Brand products**: Use official photos for La Roche-Posay and Amazon products
- **Patient privacy**: AI images don't have privacy issues, but keep generic
- **Affiliate compliance**: Real product photos perform better for conversions
- **Attribution**: Some tools require attribution - check your license

### When NOT to Use AI Images

**Use real photography/official images for:**

1. **Product photos** - Amazon and La Roche-Posay products (affiliate compliance)
2. **Dr. Alvin May headshot** - Use actual professional photo
3. **Clinical diagrams** - Commission medical illustrator for accuracy
4. **Wound documentation** - Use licensed medical stock photography

**AI images work well for:**

- General healthcare environment scenes
- Doctor-patient consultation scenarios
- Treatment delivery demonstrations (no graphic procedures)
- Professional medical office backgrounds
- Educational scene setting
