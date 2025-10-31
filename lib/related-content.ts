/**
 * Related content mapping for intelligent cross-linking
 */

export interface RelatedItem {
  title: string;
  href: string;
  description: string;
  category: "wound" | "treatment" | "resource";
}

interface RelatedContentMap {
  [key: string]: {
    relatedWounds?: string[];
    relatedTreatments?: string[];
    relatedResources?: string[];
  };
}

// Content database
export const contentDatabase: Record<string, RelatedItem> = {
  // Wounds
  "pressure-injuries": {
    title: "Pressure Injuries (Bedsores)",
    href: "/wounds/pressure-injuries",
    description: "Understanding and treating pressure ulcers",
    category: "wound",
  },
  "diabetic-ulcers": {
    title: "Diabetic Foot Ulcers",
    href: "/wounds/diabetic-ulcers",
    description: "Specialized care for diabetic foot wounds",
    category: "wound",
  },
  "venous-ulcers": {
    title: "Venous Leg Ulcers",
    href: "/wounds/venous-ulcers",
    description: "Managing chronic venous insufficiency wounds",
    category: "wound",
  },
  "arterial-wounds": {
    title: "Arterial Wounds",
    href: "/wounds/arterial-wounds",
    description: "Treatment for ischemic wounds",
    category: "wound",
  },
  "surgical-wounds": {
    title: "Surgical Wounds",
    href: "/wounds/surgical-wounds",
    description: "Post-operative wound care",
    category: "wound",
  },

  // Treatments
  "infection-control": {
    title: "Infection Control & Prevention",
    href: "/treatments/infection-control",
    description: "Preventing and managing wound infections",
    category: "treatment",
  },
  "wound-dressings": {
    title: "Wound Dressings & Products",
    href: "/treatments/wound-dressings",
    description: "Selecting appropriate wound dressings",
    category: "treatment",
  },
  "offloading-positioning": {
    title: "Offloading & Pressure Relief",
    href: "/treatments/offloading-positioning",
    description: "Reducing pressure on wounds",
    category: "treatment",
  },
  "nutrition-healing": {
    title: "Nutrition for Wound Healing",
    href: "/treatments/nutrition-healing",
    description: "Dietary support for optimal healing",
    category: "treatment",
  },

  // Resources
  glossary: {
    title: "Wound Care Glossary",
    href: "/resources/glossary",
    description: "Understanding medical terminology",
    category: "resource",
  },
  products: {
    title: "Product Recommendations",
    href: "/resources/products",
    description: "Trusted wound care products",
    category: "resource",
  },
  journal: {
    title: "Wound Healing Journal",
    href: "/resources/journal",
    description: "Track your healing progress",
    category: "resource",
  },
  faqs: {
    title: "Frequently Asked Questions",
    href: "/resources/faqs",
    description: "Common wound care questions",
    category: "resource",
  },
};

// Related content mapping
const relatedContentMap: RelatedContentMap = {
  "pressure-injuries": {
    relatedWounds: ["surgical-wounds", "diabetic-ulcers"],
    relatedTreatments: [
      "offloading-positioning",
      "wound-dressings",
      "nutrition-healing",
    ],
    relatedResources: ["products", "journal"],
  },
  "diabetic-ulcers": {
    relatedWounds: ["arterial-wounds", "pressure-injuries"],
    relatedTreatments: [
      "offloading-positioning",
      "infection-control",
      "nutrition-healing",
    ],
    relatedResources: ["products", "journal"],
  },
  "venous-ulcers": {
    relatedWounds: ["arterial-wounds", "surgical-wounds"],
    relatedTreatments: [
      "wound-dressings",
      "infection-control",
      "nutrition-healing",
    ],
    relatedResources: ["products", "glossary"],
  },
  "arterial-wounds": {
    relatedWounds: ["diabetic-ulcers", "venous-ulcers"],
    relatedTreatments: [
      "wound-dressings",
      "nutrition-healing",
      "infection-control",
    ],
    relatedResources: ["products", "faqs"],
  },
  "surgical-wounds": {
    relatedWounds: ["pressure-injuries", "venous-ulcers"],
    relatedTreatments: [
      "infection-control",
      "wound-dressings",
      "nutrition-healing",
    ],
    relatedResources: ["products", "glossary"],
  },

  "infection-control": {
    relatedWounds: ["diabetic-ulcers", "surgical-wounds", "pressure-injuries"],
    relatedTreatments: ["wound-dressings", "nutrition-healing"],
    relatedResources: ["products", "glossary"],
  },
  "wound-dressings": {
    relatedWounds: ["pressure-injuries", "venous-ulcers", "surgical-wounds"],
    relatedTreatments: ["infection-control", "offloading-positioning"],
    relatedResources: ["products", "glossary"],
  },
  "offloading-positioning": {
    relatedWounds: ["pressure-injuries", "diabetic-ulcers"],
    relatedTreatments: ["wound-dressings", "nutrition-healing"],
    relatedResources: ["products", "journal"],
  },
  "nutrition-healing": {
    relatedWounds: ["pressure-injuries", "diabetic-ulcers", "surgical-wounds"],
    relatedTreatments: ["infection-control", "wound-dressings"],
    relatedResources: ["glossary", "faqs"],
  },
};

/**
 * Get related content for a specific page
 */
export function getRelatedContent(pageId: string) {
  const relations = relatedContentMap[pageId];
  if (!relations) {
    return {
      relatedWounds: [],
      relatedTreatments: [],
      relatedResources: [],
    };
  }

  return {
    relatedWounds: (relations.relatedWounds || [])
      .map((id) => contentDatabase[id])
      .filter(Boolean),
    relatedTreatments: (relations.relatedTreatments || [])
      .map((id) => contentDatabase[id])
      .filter(Boolean),
    relatedResources: (relations.relatedResources || [])
      .map((id) => contentDatabase[id])
      .filter(Boolean),
  };
}

/**
 * Get "You May Also Like" suggestions (combines all related content)
 */
export function getYouMayAlsoLike(
  pageId: string,
  limit: number = 3
): RelatedItem[] {
  const relations = relatedContentMap[pageId];
  if (!relations) return [];

  const allRelated = [
    ...(relations.relatedWounds || []),
    ...(relations.relatedTreatments || []),
    ...(relations.relatedResources || []),
  ];

  return allRelated
    .map((id) => contentDatabase[id])
    .filter(Boolean)
    .slice(0, limit);
}
