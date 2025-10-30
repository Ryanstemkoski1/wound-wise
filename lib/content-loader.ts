/**
 * Content Loader Utilities
 *
 * Functions for loading and parsing JSON content files.
 * These utilities provide type-safe access to all site content.
 */

import { promises as fs } from "fs";
import path from "path";
import type {
  WoundType,
  Treatment,
  Product,
  GlossaryTerm,
  SiteMetadata,
  WoundTypeCollection,
  TreatmentCollection,
  ProductCollection,
  GlossaryCollection,
} from "@/types/content";

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Load a single wound type by slug
 */
export async function getWoundType(slug: string): Promise<WoundType | null> {
  try {
    const filePath = path.join(CONTENT_DIR, "wounds", `${slug}.json`);
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents) as WoundType;
  } catch (error) {
    console.error(`Error loading wound type "${slug}":`, error);
    return null;
  }
}

/**
 * Load all wound types
 */
export async function getAllWoundTypes(): Promise<WoundType[]> {
  try {
    const woundsDir = path.join(CONTENT_DIR, "wounds");
    const files = await fs.readdir(woundsDir);

    const wounds = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
          const slug = file.replace(".json", "");
          return getWoundType(slug);
        })
    );

    return wounds.filter((wound): wound is WoundType => wound !== null);
  } catch (error) {
    console.error("Error loading wound types:", error);
    return [];
  }
}

/**
 * Load a single treatment by slug
 */
export async function getTreatment(slug: string): Promise<Treatment | null> {
  try {
    const filePath = path.join(CONTENT_DIR, "treatments", `${slug}.json`);
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents) as Treatment;
  } catch (error) {
    console.error(`Error loading treatment "${slug}":`, error);
    return null;
  }
}

/**
 * Load all treatments
 */
export async function getAllTreatments(): Promise<Treatment[]> {
  try {
    const treatmentsDir = path.join(CONTENT_DIR, "treatments");
    const files = await fs.readdir(treatmentsDir);

    const treatments = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
          const slug = file.replace(".json", "");
          return getTreatment(slug);
        })
    );

    return treatments.filter(
      (treatment): treatment is Treatment => treatment !== null
    );
  } catch (error) {
    console.error("Error loading treatments:", error);
    return [];
  }
}

/**
 * Load all products
 */
export async function getAllProducts(): Promise<Product[]> {
  try {
    const filePath = path.join(CONTENT_DIR, "products", "recommendations.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents) as ProductCollection;
    return data.products;
  } catch (error) {
    console.error("Error loading products:", error);
    return [];
  }
}

/**
 * Get products by category
 */
export async function getProductsByCategory(
  category: Product["category"]
): Promise<Product[]> {
  const allProducts = await getAllProducts();
  return allProducts.filter((product) => product.category === category);
}

/**
 * Get products related to a wound type
 */
export async function getProductsForWound(
  woundSlug: string
): Promise<Product[]> {
  const allProducts = await getAllProducts();
  return allProducts.filter((product) =>
    product.relatedWounds.includes(woundSlug)
  );
}

/**
 * Get products related to a treatment
 */
export async function getProductsForTreatment(
  treatmentSlug: string
): Promise<Product[]> {
  const allProducts = await getAllProducts();
  return allProducts.filter((product) =>
    product.relatedTreatments.includes(treatmentSlug)
  );
}

/**
 * Load glossary terms
 */
export async function getGlossaryTerms(): Promise<GlossaryTerm[]> {
  try {
    const filePath = path.join(CONTENT_DIR, "glossary.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents) as GlossaryCollection;
    return data.terms;
  } catch (error) {
    console.error("Error loading glossary:", error);
    return [];
  }
}

/**
 * Get a single glossary term by slug
 */
export async function getGlossaryTerm(
  slug: string
): Promise<GlossaryTerm | null> {
  const terms = await getGlossaryTerms();
  return terms.find((term) => term.slug === slug) || null;
}

/**
 * Load site metadata
 */
export async function getSiteMetadata(): Promise<SiteMetadata | null> {
  try {
    const filePath = path.join(CONTENT_DIR, "metadata.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents) as SiteMetadata;
  } catch (error) {
    console.error("Error loading site metadata:", error);
    return null;
  }
}

/**
 * Generate static params for wound type pages
 */
export async function getWoundTypeSlugs(): Promise<string[]> {
  const wounds = await getAllWoundTypes();
  return wounds.map((wound) => wound.slug);
}

/**
 * Generate static params for treatment pages
 */
export async function getTreatmentSlugs(): Promise<string[]> {
  const treatments = await getAllTreatments();
  return treatments.map((treatment) => treatment.slug);
}

/**
 * Calculate reading time from content
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
