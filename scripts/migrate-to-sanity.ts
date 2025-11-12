/**
 * Migration script to import existing JSON content into Sanity CMS
 * 
 * Usage:
 * 1. Set up your .env.local with SANITY_API_TOKEN
 * 2. Run: npx tsx scripts/migrate-to-sanity.ts
 */

import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load .env.local file
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-11-12",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Helper to convert text to portable text blocks
function textToPortableText(text: string) {
  if (!text) return [];
  
  const paragraphs = text.split("\n\n").filter(Boolean);
  return paragraphs.map((para) => ({
    _type: "block",
    _key: Math.random().toString(36).substring(7),
    style: "normal",
    children: [
      {
        _type: "span",
        _key: Math.random().toString(36).substring(7),
        text: para,
        marks: [],
      },
    ],
    markDefs: [],
  }));
}

// Migrate wound types
async function migrateWounds() {
  console.log("\n🏥 Migrating wound types...");
  const woundsDir = path.join(process.cwd(), "content", "wounds");
  const files = fs.readdirSync(woundsDir);

  for (const file of files) {
    if (!file.endsWith(".json")) continue;

    const content = JSON.parse(
      fs.readFileSync(path.join(woundsDir, file), "utf-8")
    );
    
    const slug = file.replace(".json", "");
    
    const doc = {
      _type: "woundType",
      _id: `wound-${slug}`,
      title: content.title,
      slug: {
        _type: "slug",
        current: slug,
      },
      subtitle: content.subtitle,
      description: content.description,
      overview: textToPortableText(content.overview || ""),
      riskFactors: content.riskFactors || [],
      symptoms: content.symptoms || [],
      preventionStrategies: content.preventionStrategies || [],
      treatmentApproaches: content.treatmentApproaches || [],
      sections: content.sections?.map((section: any) => ({
        _type: "object",
        _key: Math.random().toString(36).substring(7),
        heading: section.heading,
        content: textToPortableText(section.content || ""),
        callout: section.callout
          ? {
              _type: "object",
              type: section.callout.type,
              content: section.callout.content,
            }
          : undefined,
      })) || [],
      faqs: content.faqs?.map((faq: any) => ({
        _type: "object",
        _key: Math.random().toString(36).substring(7),
        question: faq.question,
        answer: faq.answer,
      })) || [],
      metaTitle: content.metadata?.title,
      metaDescription: content.metadata?.description,
      keywords: content.metadata?.keywords || [],
      author: content.metadata?.author || "Dr. Alvin May",
      publishDate: content.metadata?.publishDate,
      lastUpdated: content.metadata?.lastUpdated || new Date().toISOString(),
      readingTime: content.metadata?.readingTime,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`✅ Migrated: ${content.title}`);
    } catch (error) {
      console.error(`❌ Error migrating ${file}:`, error);
    }
  }
}

// Migrate treatments
async function migrateTreatments() {
  console.log("\n💊 Migrating treatments...");
  const treatmentsDir = path.join(process.cwd(), "content", "treatments");
  const files = fs.readdirSync(treatmentsDir);

  for (const file of files) {
    if (!file.endsWith(".json")) continue;

    const content = JSON.parse(
      fs.readFileSync(path.join(treatmentsDir, file), "utf-8")
    );
    
    const slug = file.replace(".json", "");
    
    const doc = {
      _type: "treatment",
      _id: `treatment-${slug}`,
      title: content.title,
      slug: {
        _type: "slug",
        current: slug,
      },
      subtitle: content.subtitle,
      description: content.description,
      overview: textToPortableText(content.overview || ""),
      keyPrinciples: content.keyPrinciples || [],
      steps: content.steps?.map((step: any, index: number) => ({
        _type: "object",
        _key: Math.random().toString(36).substring(7),
        stepNumber: index + 1,
        title: step.title,
        description: step.description || "",
        details: step.details || [],
      })) || [],
      bestPractices: content.bestPractices || [],
      warnings: content.warnings || [],
      sections: content.sections?.map((section: any) => ({
        _type: "object",
        _key: Math.random().toString(36).substring(7),
        heading: section.heading,
        content: textToPortableText(section.content || ""),
        callout: section.callout
          ? {
              _type: "object",
              type: section.callout.type,
              content: section.callout.content,
            }
          : undefined,
      })) || [],
      metaTitle: content.metadata?.title,
      metaDescription: content.metadata?.description,
      keywords: content.metadata?.keywords || [],
      author: content.metadata?.author || "Dr. Alvin May",
      publishDate: content.metadata?.publishDate,
      lastUpdated: content.metadata?.lastUpdated || new Date().toISOString(),
      readingTime: content.metadata?.readingTime,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`✅ Migrated: ${content.title}`);
    } catch (error) {
      console.error(`❌ Error migrating ${file}:`, error);
    }
  }
}

// Migrate products
async function migrateProducts() {
  console.log("\n🛍️  Migrating products...");
  const productsFile = path.join(
    process.cwd(),
    "content",
    "products",
    "recommendations.json"
  );
  const data = JSON.parse(fs.readFileSync(productsFile, "utf-8"));

  for (const product of data.products) {
    const doc = {
      _type: "product",
      _id: `product-${product.id}`,
      name: product.name,
      slug: {
        _type: "slug",
        current: product.id,
      },
      category: product.category,
      description: product.description,
      useCases: product.useCases || [],
      affiliateLink: product.affiliateLink,
      affiliatePartner: product.affiliatePartner,
      externalImageUrl: product.imageUrl,
      featured: product.featured || false,
      sortOrder: product.sortOrder || 999,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`✅ Migrated: ${product.name}`);
    } catch (error) {
      console.error(`❌ Error migrating product ${product.id}:`, error);
    }
  }
}

// Migrate glossary
async function migrateGlossary() {
  console.log("\n📚 Migrating glossary...");
  const glossaryFile = path.join(process.cwd(), "content", "glossary.json");
  const data = JSON.parse(fs.readFileSync(glossaryFile, "utf-8"));

  for (const term of data.terms || []) {
    const slug = term.term
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const doc = {
      _type: "glossaryTerm",
      _id: `term-${slug}`,
      term: term.term,
      slug: {
        _type: "slug",
        current: slug,
      },
      definition: term.definition,
      pronunciation: term.pronunciation,
      category: term.category || "general",
    };

    try {
      await client.createOrReplace(doc);
      console.log(`✅ Migrated: ${term.term}`);
    } catch (error) {
      console.error(`❌ Error migrating term ${term.term}:`, error);
    }
  }
}

// Main migration function
async function migrate() {
  console.log("🚀 Starting migration to Sanity...");
  console.log(`Project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);
  console.log(`Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}`);

  if (!process.env.SANITY_API_TOKEN) {
    console.error("❌ SANITY_API_TOKEN not found in environment variables");
    process.exit(1);
  }

  try {
    await migrateWounds();
    await migrateTreatments();
    await migrateProducts();
    await migrateGlossary();

    console.log("\n✨ Migration completed successfully!");
    console.log("\n📝 Next steps:");
    console.log("1. Run: npm run dev");
    console.log("2. Visit: http://localhost:3000/studio");
    console.log("3. Link references between documents");
    console.log("4. Update content loader to use Sanity");
  } catch (error) {
    console.error("\n❌ Migration failed:", error);
    process.exit(1);
  }
}

// Run migration
migrate();
