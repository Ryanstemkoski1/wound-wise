/**
 * WoundWise Content Type Definitions
 *
 * These types define the structure of all JSON content files
 * for the WoundWise educational platform.
 */

export interface WoundType {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  riskFactors: string[];
  symptoms: string[];
  preventionStrategies: string[];
  treatmentApproaches: string[];
  sections: ContentSection[];
  relatedProducts: string[]; // Product IDs
  relatedTreatments: string[]; // Treatment slugs
  images: ImageAsset[];
  faqs: FAQ[];
  metadata: PageMetadata;
}

export interface Treatment {
  id?: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  overview?: string;
  keyBenefits?: string[];
  steps?: TreatmentStep[];
  bestPractices?: string[];
  warnings?: string[];
  relatedWounds?: string[]; // Wound type slugs
  relatedProducts?: string[]; // Product IDs
  images?: ImageAsset[];
  sections?: ContentSection[];
  metadata?: PageMetadata;
  featured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category:
    | "dressing"
    | "cleanser"
    | "tool"
    | "nutrition"
    | "positioning"
    | "skincare";
  description: string;
  useCases: string[];
  affiliateLink: string;
  affiliatePartner: "amazon" | "other";
  imageUrl: string;
  relatedWounds: string[]; // Wound type slugs
  relatedTreatments: string[]; // Treatment slugs
  featured?: boolean;
}

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  relatedTerms: string[]; // Other term slugs
  pronunciation?: string;
  category?: "medical" | "treatment" | "anatomy" | "general";
}

export interface ContentSection {
  heading: string;
  content: string;
  subsections?: ContentSection[];
  callout?: ContentCallout;
  images?: ImageAsset[];
}

export interface ContentCallout {
  type: "info" | "warning" | "tip" | "example" | "story";
  title?: string;
  content: string;
}

export interface TreatmentStep {
  stepNumber: number;
  title: string;
  description: string;
  tips?: string[];
  warnings?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface ImageAsset {
  url: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
}

export interface PageMetadata {
  title: string; // SEO title
  description: string; // Meta description
  keywords: string[];
  author: string;
  publishDate: string; // ISO date string
  lastUpdated: string; // ISO date string
  readingTime: number; // Minutes
  featured?: boolean;
}

export interface SiteMetadata {
  siteName: string;
  siteUrl: string;
  description: string;
  author: {
    name: string;
    title: string;
    credentials: string;
    bio: string;
    image: string;
  };
  social: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
  contact: {
    email: string;
    phone?: string;
  };
  legal: {
    privacyPolicy: string;
    termsOfService: string;
    medicalDisclaimer: string;
  };
}

// Collection types for grouped content
export interface WoundTypeCollection {
  wounds: WoundType[];
}

export interface TreatmentCollection {
  treatments: Treatment[];
}

export interface ProductCollection {
  products: Product[];
}

export interface GlossaryCollection {
  terms: GlossaryTerm[];
}
