/**
 * Sanity Content Loader
 *
 * Functions for loading content from Sanity CMS with fallback to JSON.
 * Maintains backward compatibility with existing content structure.
 */

import { sanityFetch } from "./sanity.client";
import {
  WOUND_TYPES_QUERY,
  WOUND_TYPE_BY_SLUG_QUERY,
  TREATMENTS_QUERY,
  TREATMENT_BY_SLUG_QUERY,
  PRODUCTS_QUERY,
  GLOSSARY_TERMS_QUERY,
  FAQS_QUERY,
  SITE_METADATA_QUERY,
} from "./sanity.queries";
import type {
  WoundType,
  Treatment,
  Product,
  GlossaryTerm,
} from "@/types/content";

// Helper to convert Sanity portable text to plain string
function portableTextToString(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) return "";
      return block.children.map((child: any) => child.text).join("");
    })
    .join("\n\n");
}

// Helper to convert Sanity image to URL
function getSanityImageUrl(image: any): string | undefined {
  if (!image) return undefined;
  // For now return undefined - images will be handled by urlFor() helper in components
  return undefined;
}

/**
 * Load a single wound type by slug from Sanity
 */
export async function getWoundTypeSanity(
  slug: string
): Promise<WoundType | null> {
  try {
    const data = await sanityFetch<any>({
      query: WOUND_TYPE_BY_SLUG_QUERY,
      params: { slug },
      revalidate: 3600, // 1 hour
    });

    if (!data) return null;

    // Transform Sanity data to match WoundType interface
    return {
      id: data._id,
      slug: data.slug.current,
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      riskFactors: data.riskFactors || [],
      symptoms: data.symptoms || [],
      preventionStrategies: data.preventionStrategies || [],
      treatmentApproaches: data.treatmentApproaches || [],
      sections: data.sections?.map((section: any) => ({
        heading: section.heading,
        content: portableTextToString(section.content),
        callout: section.callout,
      })) || [],
      relatedProducts: data.relatedProducts?.map((p: any) => p._id) || [],
      relatedTreatments: data.relatedTreatments?.map((t: any) => t.slug.current) || [],
      images: [],
      faqs: data.faqs || [],
      metadata: {
        title: data.metaTitle || data.title,
        description: data.metaDescription || data.description,
        keywords: data.keywords || [],
        author: data.author || "Dr. Alvin May",
        publishDate: data.publishDate,
        lastUpdated: data.lastUpdated,
        readingTime: data.readingTime || 10,
      },
    };
  } catch (error) {
    console.error(`Error loading wound type from Sanity "${slug}":`, error);
    return null;
  }
}

/**
 * Load all wound types from Sanity
 */
export async function getAllWoundTypesSanity(): Promise<WoundType[]> {
  try {
    const data = await sanityFetch<any[]>({
      query: WOUND_TYPES_QUERY,
      revalidate: 3600,
    });

    return data.map((item) => ({
      id: item._id,
      slug: item.slug.current,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      riskFactors: item.riskFactors || [],
      symptoms: item.symptoms || [],
      preventionStrategies: item.preventionStrategies || [],
      treatmentApproaches: item.treatmentApproaches || [],
      sections: item.sections?.map((section: any) => ({
        heading: section.heading,
        content: portableTextToString(section.content),
        callout: section.callout,
      })) || [],
      relatedProducts: item.relatedProducts?.map((p: any) => p._id) || [],
      relatedTreatments: item.relatedTreatments?.map((t: any) => t.slug.current) || [],
      images: [],
      faqs: item.faqs || [],
      metadata: {
        title: item.metaTitle || item.title,
        description: item.metaDescription || item.description,
        keywords: item.keywords || [],
        author: item.author || "Dr. Alvin May",
        publishDate: item.publishDate,
        lastUpdated: item.lastUpdated,
        readingTime: item.readingTime || 10,
      },
    }));
  } catch (error) {
    console.error("Error loading wound types from Sanity:", error);
    return [];
  }
}

/**
 * Load a single treatment by slug from Sanity
 */
export async function getTreatmentSanity(
  slug: string
): Promise<Treatment | null> {
  try {
    const data = await sanityFetch<any>({
      query: TREATMENT_BY_SLUG_QUERY,
      params: { slug },
      revalidate: 3600,
    });

    if (!data) return null;

    return {
      id: data._id,
      slug: data.slug.current,
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      overview: portableTextToString(data.overview),
      steps: data.steps || [],
      bestPractices: data.bestPractices || [],
      warnings: data.warnings || [],
      sections: data.sections?.map((section: any) => ({
        heading: section.heading,
        content: portableTextToString(section.content),
        callout: section.callout,
      })) || [],
      relatedWounds: data.relatedWounds?.map((w: any) => w.slug.current) || [],
      relatedProducts: data.relatedProducts?.map((p: any) => p._id) || [],
      images: [],
      metadata: {
        title: data.metaTitle || data.title,
        description: data.metaDescription || data.description,
        keywords: data.keywords || [],
        author: data.author || "Dr. Alvin May",
        publishDate: data.publishDate,
        lastUpdated: data.lastUpdated,
        readingTime: data.readingTime || 10,
      },
    };
  } catch (error) {
    console.error(`Error loading treatment from Sanity "${slug}":`, error);
    return null;
  }
}

/**
 * Load all treatments from Sanity
 */
export async function getAllTreatmentsSanity(): Promise<Treatment[]> {
  try {
    const data = await sanityFetch<any[]>({
      query: TREATMENTS_QUERY,
      revalidate: 3600,
    });

    return data.map((item) => ({
      id: item._id,
      slug: item.slug.current,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      overview: portableTextToString(item.overview),
      steps: item.steps || [],
      bestPractices: item.bestPractices || [],
      warnings: item.warnings || [],
      sections: item.sections?.map((section: any) => ({
        heading: section.heading,
        content: portableTextToString(section.content),
        callout: section.callout,
      })) || [],
      relatedWounds: item.relatedWounds?.map((w: any) => w.slug.current) || [],
      relatedProducts: item.relatedProducts?.map((p: any) => p._id) || [],
      images: [],
      metadata: {
        title: item.metaTitle || item.title,
        description: item.metaDescription || item.description,
        keywords: item.keywords || [],
        author: item.author || "Dr. Alvin May",
        publishDate: item.publishDate,
        lastUpdated: item.lastUpdated,
        readingTime: item.readingTime || 10,
      },
    }));
  } catch (error) {
    console.error("Error loading treatments from Sanity:", error);
    return [];
  }
}

/**
 * Load all products from Sanity
 */
export async function getAllProductsSanity(): Promise<Product[]> {
  try {
    const data = await sanityFetch<any[]>({
      query: PRODUCTS_QUERY,
      revalidate: 3600,
    });

    return data.map((item) => ({
      id: item._id,
      name: item.name,
      category: item.category,
      description: item.description,
      useCases: item.useCases || [],
      affiliateLink: item.affiliateLink,
      affiliatePartner: item.affiliatePartner,
      imageUrl: item.externalImageUrl || getSanityImageUrl(item.imageUrl) || "",
      relatedWounds: item.relatedWounds?.map((w: any) => w.slug.current) || [],
      relatedTreatments: item.relatedTreatments?.map((t: any) => t.slug.current) || [],
      featured: item.featured || false,
      sortOrder: item.sortOrder,
    }));
  } catch (error) {
    console.error("Error loading products from Sanity:", error);
    return [];
  }
}

/**
 * Load glossary terms from Sanity
 */
export async function getGlossaryTermsSanity(): Promise<GlossaryTerm[]> {
  try {
    const data = await sanityFetch<any[]>({
      query: GLOSSARY_TERMS_QUERY,
      revalidate: 3600,
    });

    return data.map((item) => ({
      term: item.term,
      slug: item.slug.current,
      definition: item.definition,
      pronunciation: item.pronunciation,
      relatedTerms: item.relatedTerms?.map((t: any) => t.term) || [],
      category: item.category,
    }));
  } catch (error) {
    console.error("Error loading glossary from Sanity:", error);
    return [];
  }
}

/**
 * Check if Sanity is configured
 */
export function isSanityConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
  );
}

// Convenience exports without "Sanity" suffix to match original API
export const getAllWoundTypes = getAllWoundTypesSanity;
export const getWoundType = getWoundTypeSanity;
export const getAllTreatments = getAllTreatmentsSanity;
export const getTreatment = getTreatmentSanity;
export const getAllProducts = getAllProductsSanity;
export const getGlossaryTerms = getGlossaryTermsSanity;

// Additional helper functions
export async function getWoundTypeSlugs(): Promise<string[]> {
  const woundTypes = await getAllWoundTypes();
  return woundTypes.map((w) => w.slug);
}

export async function getTreatmentSlugs(): Promise<string[]> {
  const treatments = await getAllTreatments();
  return treatments.map((t) => t.slug);
}

export async function getProductsForWound(
  woundSlug: string
): Promise<Product[]> {
  const woundType = await getWoundType(woundSlug);
  if (!woundType || !woundType.relatedProducts?.length) {
    return [];
  }

  const allProducts = await getAllProducts();
  return allProducts.filter((p) =>
    woundType.relatedProducts?.includes(p.id)
  );
}
