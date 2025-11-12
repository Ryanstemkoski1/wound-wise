# Quick Start Guide for Admins

> **For Dr. May and Content Administrators**

This is a simplified guide to get you started with content management in under 10 minutes.

---

## What You Need

1. A Sanity account (free - create at https://www.sanity.io/)
2. Access to the WoundWise project (your developer will provide)
3. A modern web browser (Chrome, Firefox, Safari, Edge)

---

## Accessing the Content Editor

### Option 1: Production Site (After Launch)
Visit: **https://woundwise.com/studio**

### Option 2: Development Site (Before Launch)
1. Ask your developer to start the site
2. Visit: **http://localhost:3000/studio**

### First Time Login
1. Click "Sign in with Google" or "Sign in with GitHub"
2. Authorize Sanity to access your account
3. You'll see the content management interface

---

## Understanding the Interface

### Left Sidebar - Content Types

Click any of these to view and edit content:

- **📄 Wound Types** - The 6 main chronic wound categories
- **💊 Treatments** - Treatment approaches and methods
- **🛍️ Products** - Product recommendations for patients
- **📚 Glossary Terms** - Medical terminology and definitions
- **❓ FAQs** - Frequently asked questions
- **⚙️ Site Metadata** - Global site settings (logo, contact info)

### Main Area - Document List

- Shows all documents of the selected type
- Click any document to open the editor
- Use search box to find specific content

### Right Panel - Editor

- Form with all fields for the document
- Fill in, edit, or update any field
- Click "Publish" when done

---

## Common Tasks

### ✏️ Edit Existing Content

1. Click the content type in sidebar (e.g., "Wound Types")
2. Click the document you want to edit (e.g., "Diabetic Foot Ulcers")
3. Make your changes in the form
4. Click the green **"Publish"** button at bottom
5. ✅ Changes go live within 1 hour!

### ➕ Add New Content

1. Click the **"+ Create"** button at top
2. Choose the content type
3. Fill in all required fields (marked with *)
4. Click **"Publish"**
5. ✅ New content appears on site!

### 🗑️ Delete Content

1. Open the document you want to delete
2. Click the three dots menu (⋯) at top right
3. Select **"Delete"**
4. Confirm the deletion
5. ✅ Content removed from site!

---

## Editing Rich Text Content

Many fields use a rich text editor (looks like a mini word processor).

### Formatting Toolbar

- **B** - Bold text
- *I* - Italic text
- **H2**, **H3** - Headings
- **•** - Bullet list
- **1.** - Numbered list
- **🔗** - Add link

### Tips

- Press **Enter** for new paragraph
- Press **Shift + Enter** for line break
- Use headings to organize long content
- Keep paragraphs short for readability

---

## Linking Related Content

Some fields let you link to other content (e.g., "Related Products").

### How to Add References

1. Find the reference field (e.g., "Related Products")
2. Click **"+ Add item"**
3. Start typing to search
4. Click the item you want to link
5. Repeat to add more references
6. Drag items to reorder

### Why Link Content?

- Shows related information to users
- Helps users navigate the site
- Improves SEO

---

## SEO Fields (Important!)

Every content page has SEO fields at the bottom:

### SEO Title
- The title that appears in Google search results
- Keep under 60 characters
- Include main keyword

### SEO Description
- The description under the title in Google
- Keep under 160 characters
- Make it compelling - people decide to click based on this!

### Keywords
- Important words related to the content
- Add 5-10 relevant keywords
- Click "+ Add item" to add each keyword

### Example

**Bad SEO Title**: "Pressure Injuries"

**Good SEO Title**: "Pressure Injuries (Bedsores): Complete Guide | WoundWise"

**Bad Description**: "Information about pressure injuries."

**Good Description**: "Expert guide to understanding, preventing, and treating pressure injuries (bedsores). Learn from Dr. Alvin May's clinical experience."

---

## Product Management

Products have special fields:

### Category
Choose from:
- **Positioning** - Cushions, boots, mattresses
- **Dressing** - Bandages, wraps
- **Cleanser** - Cleaning solutions
- **Nutrition** - Supplements
- **Tool** - Medical tools
- **Skincare** - Creams, balms

### Affiliate Partner
- **Amazon** - Products on Amazon
- **La Roche-Posay** - Skincare products
- **Other** - Other sources

### Featured Product
Check this box to highlight the product on main pages.

---

## Common Questions

### "How long until my changes appear?"

**Development**: Instantly (after page refresh)

**Production**: Within 1 hour (automatic)

### "Can I preview before publishing?"

Not yet - this is a future enhancement. For now, publish and check the live site.

### "What if I make a mistake?"

Don't worry! You can:
1. Edit the document again to fix it
2. Ask your developer to restore from backup
3. All changes are logged in Sanity

### "Who else can edit content?"

Anyone you invite to the Sanity project. Your developer can manage team members in the Sanity dashboard.

### "Can I edit on my phone?"

Yes! The Studio works on mobile browsers, but a desktop/laptop is recommended for longer editing sessions.

---

## Best Practices

### ✅ Do

- Write in clear, patient-friendly language
- Keep paragraphs short (2-4 sentences)
- Use headings to organize content
- Add keywords for SEO
- Link related content
- Review your work before publishing

### ❌ Don't

- Copy/paste from Word (formatting issues - paste as plain text)
- Use all caps (looks like shouting)
- Forget SEO fields
- Publish incomplete content
- Leave required fields empty

---

## Need Help?

### Technical Issues
Contact your developer with:
- What you were trying to do
- What happened instead
- Screenshot if possible

### Content Questions
- Review the original book content in `docs/` folder
- Check similar pages for examples
- Ask Dr. May for medical accuracy

### Sanity Platform Issues
- Check: https://status.sanity.io
- Contact: support@sanity.io

---

## Quick Reference Card

```
Access Studio:    /studio route on your site
Search Content:   Use search box at top
New Content:      Click "+ Create" button
Edit Content:     Click document → edit → publish
Delete Content:   Open doc → ⋯ menu → delete
Add Reference:    In ref field → "+ Add item"
Format Text:      Use toolbar (B, I, headings)
SEO Fields:       Scroll to bottom of form
Save Work:        Auto-saves! Green publish when ready
```

---

## Training Checklist

Practice these tasks to get comfortable:

- [ ] Log into the Studio
- [ ] Navigate between content types
- [ ] Open and view a wound type
- [ ] Edit a treatment description
- [ ] Add formatting to text (bold, heading)
- [ ] Update SEO title and description
- [ ] Add a related product reference
- [ ] Create a new FAQ
- [ ] Delete a test FAQ
- [ ] Publish your changes
- [ ] View changes on the live site

**Time needed**: 30 minutes to complete all tasks

---

**Welcome to content management! 🎉**

You now have full control over WoundWise content. Remember: you can't break anything permanently - everything can be fixed or restored.

If you get stuck, don't hesitate to ask your developer for help.

---

**Document Version**: 1.0  
**Last Updated**: November 12, 2025  
**Difficulty**: Beginner-Friendly  
**Time to Learn**: 30 minutes
