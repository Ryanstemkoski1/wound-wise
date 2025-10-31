# Images Directory

This directory contains images for the WoundWise website.

## Current Status

### Product Images

**Status**: Using category-based icon fallbacks (Lucide icons)

Product cards currently display category-specific icons instead of product images:

- **Positioning**: Bed icon (heel boots, wedges, compression socks)
- **Dressing**: Bandage icon (hydrocolloid, foam dressings)
- **Cleanser**: Droplet icon (saline wash)
- **Nutrition**: Apple icon (protein supplements)
- **Tool**: Wrench icon (medical tape, supplies)

The ProductCard component (`components/cards/product-card.tsx`) handles this automatically.

### To Add Real Product Images Later:

1. **Obtain Images**: Get product images from Amazon or take your own photos
2. **Image Format**: Use JPG or PNG format
3. **Naming**: Match the filenames in `content/products/recommendations.json`:

   - `heel-boot.jpg`
   - `body-wedge.jpg`
   - `hydrocolloid.jpg`
   - `foam-dressing.jpg`
   - `saline-wash.jpg`
   - `protein-supplement.jpg`
   - `medical-tape.jpg`
   - `compression-socks.jpg`

4. **Dimensions**: Recommended 800x800px or similar square aspect ratio
5. **Optimization**: Compress images before adding to reduce page load times

6. **Update ProductCard**: Modify `components/cards/product-card.tsx` to use Next.js Image component with the image URLs

### Wound Diagrams

**Location**: `/images/wounds/`
**Status**: Not currently displayed (wound.images not rendered)

Referenced but not yet implemented:

- `pressure-injury-stages.svg` - Diagram of pressure injury stages
- `pressure-points.svg` - Common pressure points on body

### Doctor Photo

**Location**: `/images/dr-may.jpg`
**Status**: Not currently displayed

Referenced in `content/metadata.json` but not used in any pages yet.

## Future Image Needs

When ready to add images:

1. **Product photos** - Can source from Amazon or suppliers
2. **Wound diagrams** - Medical illustrations (ensure copyright/licensing)
3. **Doctor headshot** - Professional photo of Dr. Alvin May
4. **Hero images** - Optional background images for landing sections
5. **Educational diagrams** - Wound healing process, anatomy illustrations

## Image Guidelines

- **Format**: JPG for photos, SVG/PNG for diagrams
- **Size**: Optimize for web (<200KB per image)
- **Alt text**: Always include descriptive alt text (already in JSON data)
- **Copyright**: Ensure you have rights to use all images
- **Accessibility**: High contrast, clear visuals for medical accuracy
