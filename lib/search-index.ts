import type { SearchableItem } from "@/types/search";

/**
 * Static search index for all content on the site.
 * In a larger app, this would be generated at build time or fetched from an API.
 */
export const searchIndex: SearchableItem[] = [
  // Wound Types
  {
    id: "pressure-injuries",
    title: "Pressure Injuries (Bedsores)",
    description:
      "Understanding pressure injuries, their stages, prevention strategies, and evidence-based treatment approaches for optimal healing.",
    category: "wound",
    url: "/wounds/pressure-injuries",
    keywords: [
      "pressure injuries",
      "bedsores",
      "pressure ulcers",
      "decubitus ulcers",
      "pressure sores",
      "stage 1",
      "stage 2",
      "stage 3",
      "stage 4",
      "unstageable",
      "deep tissue injury",
      "prevention",
      "repositioning",
      "support surfaces",
      "skin care",
      "nutrition",
      "moisture management",
    ],
    content:
      "Pressure injuries develop when sustained pressure on the skin reduces blood flow to vulnerable areas. Common sites include heels, sacrum, and bony prominences. Prevention focuses on regular repositioning, proper support surfaces, skin care, nutrition optimization, and moisture management.",
  },
  {
    id: "diabetic-ulcers",
    title: "Diabetic Foot Ulcers",
    description:
      "Comprehensive guide to diabetic foot ulcers, including neuropathy, vascular disease, infection prevention, and specialized wound care.",
    category: "wound",
    url: "/wounds/diabetic-ulcers",
    keywords: [
      "diabetic ulcers",
      "diabetic foot ulcers",
      "neuropathy",
      "peripheral neuropathy",
      "vascular disease",
      "PAD",
      "peripheral arterial disease",
      "blood sugar",
      "glucose control",
      "foot care",
      "infection",
      "amputation prevention",
      "offloading",
      "total contact cast",
      "diabetes complications",
    ],
    content:
      "Diabetic foot ulcers result from peripheral neuropathy and vascular disease. Prevention requires daily foot inspections, proper footwear, blood sugar control, and professional foot care. Treatment involves infection control, offloading, vascular assessment, and specialized wound dressings.",
  },
  {
    id: "venous-ulcers",
    title: "Venous Leg Ulcers",
    description:
      "Expert guidance on venous insufficiency ulcers, including compression therapy, edema management, and chronic wound healing strategies.",
    category: "wound",
    url: "/wounds/venous-ulcers",
    keywords: [
      "venous ulcers",
      "venous leg ulcers",
      "venous insufficiency",
      "chronic venous disease",
      "varicose veins",
      "edema",
      "compression therapy",
      "compression stockings",
      "compression bandages",
      "leg elevation",
      "calf muscle pump",
      "ankle exercises",
      "lymphedema",
    ],
    content:
      "Venous leg ulcers occur due to chronic venous insufficiency and valve dysfunction. The gold standard treatment is compression therapy, combined with leg elevation, exercise, and appropriate wound dressings. Management focuses on reducing edema and improving venous return.",
  },
  {
    id: "arterial-wounds",
    title: "Arterial Wounds",
    description:
      "Understanding arterial insufficiency wounds, vascular assessment, revascularization options, and specialized care for ischemic wounds.",
    category: "wound",
    url: "/wounds/arterial-wounds",
    keywords: [
      "arterial wounds",
      "arterial ulcers",
      "arterial insufficiency",
      "ischemic wounds",
      "peripheral arterial disease",
      "PAD",
      "claudication",
      "rest pain",
      "ABI",
      "ankle-brachial index",
      "revascularization",
      "angioplasty",
      "bypass surgery",
      "vascular assessment",
      "smoking cessation",
    ],
    content:
      "Arterial wounds result from inadequate blood flow due to peripheral arterial disease. Symptoms include claudication, rest pain, and delayed healing. Treatment requires vascular assessment, possible revascularization, smoking cessation, and careful wound protection without compression.",
  },
  {
    id: "surgical-wounds",
    title: "Surgical Wounds",
    description:
      "Post-surgical wound care, healing by primary and secondary intention, infection prevention, and surgical site care guidelines.",
    category: "wound",
    url: "/wounds/surgical-wounds",
    keywords: [
      "surgical wounds",
      "post-operative wounds",
      "incision care",
      "surgical site infection",
      "SSI",
      "primary intention",
      "secondary intention",
      "tertiary intention",
      "delayed primary closure",
      "sutures",
      "staples",
      "wound dehiscence",
      "seroma",
      "hematoma",
      "surgical drain",
    ],
    content:
      "Surgical wounds heal by primary intention when edges are approximated, or secondary intention when left open. Post-operative care includes infection prevention, proper dressing selection, monitoring for complications like dehiscence or seroma, and appropriate wound protection.",
  },

  // Treatments
  {
    id: "infection-control",
    title: "Infection Control & Prevention",
    description:
      "Evidence-based strategies for preventing and managing wound infections, including biofilm management and antimicrobial approaches.",
    category: "treatment",
    url: "/treatments/infection-control",
    keywords: [
      "infection control",
      "wound infection",
      "biofilm",
      "antimicrobial",
      "antibiotics",
      "antiseptic",
      "silver dressings",
      "iodine",
      "PHMB",
      "methicillin-resistant staphylococcus aureus",
      "MRSA",
      "signs of infection",
      "local infection",
      "systemic infection",
      "cellulitis",
      "osteomyelitis",
    ],
    content:
      "Wound infection control requires recognizing signs of infection, biofilm management, appropriate antimicrobial dressing selection, and systemic antibiotics when indicated. Prevention strategies include proper wound cleansing, debridement, and moisture balance.",
  },
  {
    id: "wound-dressings",
    title: "Wound Dressings & Products",
    description:
      "Comprehensive guide to selecting appropriate wound dressings based on wound characteristics, exudate levels, and healing phases.",
    category: "treatment",
    url: "/treatments/wound-dressings",
    keywords: [
      "wound dressings",
      "dressing selection",
      "foam dressings",
      "hydrocolloid",
      "alginate",
      "hydrogel",
      "transparent film",
      "gauze",
      "collagen",
      "silver dressings",
      "negative pressure",
      "NPWT",
      "wound vac",
      "exudate management",
      "moisture balance",
    ],
    content:
      "Dressing selection depends on wound characteristics including depth, exudate level, infection status, and healing phase. Options include foam, hydrocolloid, alginate, hydrogel, and advanced therapies like negative pressure wound therapy. Maintain moist wound healing environment.",
  },
  {
    id: "offloading-positioning",
    title: "Offloading & Pressure Relief",
    description:
      "Techniques for reducing pressure on wounds, including specialized devices, repositioning strategies, and mobility aids.",
    category: "treatment",
    url: "/treatments/offloading-positioning",
    keywords: [
      "offloading",
      "pressure relief",
      "total contact cast",
      "TCC",
      "walking boot",
      "removable cast walker",
      "pressure redistribution",
      "support surfaces",
      "specialty mattress",
      "air mattress",
      "foam overlay",
      "heel protectors",
      "repositioning",
      "turning schedule",
      "mobility aids",
    ],
    content:
      "Offloading reduces mechanical stress on wounds to promote healing. Techniques include total contact casting for diabetic foot ulcers, specialty support surfaces for pressure injuries, regular repositioning schedules, and appropriate use of heel protectors and cushions.",
  },
  {
    id: "nutrition-healing",
    title: "Nutrition for Wound Healing",
    description:
      "Nutritional requirements for optimal wound healing, including protein, vitamins, minerals, and hydration strategies.",
    category: "treatment",
    url: "/treatments/nutrition-healing",
    keywords: [
      "nutrition",
      "wound healing nutrition",
      "protein",
      "vitamin C",
      "vitamin A",
      "zinc",
      "hydration",
      "calories",
      "malnutrition",
      "nutritional assessment",
      "dietary supplements",
      "protein shakes",
      "amino acids",
      "arginine",
      "glutamine",
      "wound healing diet",
    ],
    content:
      "Adequate nutrition is essential for wound healing. Requirements include increased protein (1.25-1.5 g/kg/day), vitamin C, vitamin A, zinc, and sufficient calories and hydration. Nutritional assessment and supplementation may be necessary for optimal healing outcomes.",
  },

  // Resources
  {
    id: "wound-care-glossary",
    title: "Wound Care Glossary",
    description:
      "Comprehensive glossary of wound care terminology, medical terms, and treatment definitions for patient education.",
    category: "glossary",
    url: "/resources/glossary",
    keywords: [
      "glossary",
      "terminology",
      "definitions",
      "medical terms",
      "wound care terms",
      "debridement",
      "granulation",
      "epithelialization",
      "slough",
      "eschar",
      "undermining",
      "tunneling",
      "maceration",
      "periwound",
    ],
    content:
      "The wound care glossary provides clear definitions of medical terminology to help patients understand their wound care treatment plan and communicate effectively with healthcare providers.",
  },
  {
    id: "frequently-asked-questions",
    title: "Frequently Asked Questions",
    description:
      "Common questions about wound healing, treatment options, prevention strategies, and when to seek medical attention.",
    category: "resource",
    url: "/resources/faqs",
    keywords: [
      "FAQ",
      "frequently asked questions",
      "common questions",
      "wound healing questions",
      "how long to heal",
      "when to see doctor",
      "signs of infection",
      "wound care questions",
      "treatment questions",
      "insurance coverage",
      "home care",
    ],
    content:
      "Frequently asked questions cover common concerns about wound healing timelines, infection signs, when to seek medical care, treatment options, and practical home care advice.",
  },
  {
    id: "wound-care-products",
    title: "Recommended Wound Care Products",
    description:
      "Evidence-based product recommendations for wound care, including dressings, cleansers, and support devices with affiliate links.",
    category: "resource",
    url: "/resources/products",
    keywords: [
      "products",
      "wound care products",
      "dressings",
      "bandages",
      "cleansers",
      "wound wash",
      "saline",
      "gauze",
      "tape",
      "scissors",
      "gloves",
      "heel protectors",
      "cushions",
      "compression stockings",
      "recommendations",
    ],
    content:
      "Curated selection of wound care products recommended by Dr. May, including dressings, cleansers, and support devices available through trusted retailers.",
  },
  {
    id: "wound-healing-journal",
    title: "Wound Healing Journal & Tracker",
    description:
      "Digital and printable wound tracking tools to monitor healing progress and communicate with healthcare providers.",
    category: "resource",
    url: "/resources/journal",
    keywords: [
      "journal",
      "wound journal",
      "tracking",
      "wound tracker",
      "healing tracker",
      "progress tracking",
      "digital journal",
      "printable template",
      "wound diary",
      "healing log",
      "pain tracking",
      "drainage tracking",
      "photo documentation",
    ],
    content:
      "Interactive digital journal and printable templates for tracking wound healing progress, including pain levels, drainage, measurements, and notes for healthcare provider visits.",
  },
  {
    id: "heal-your-wound-book",
    title: "Heal Your Wound - Book by Dr. Alvin May",
    description:
      "Comprehensive patient guide to wound healing based on Dr. May's clinical experience and evidence-based practices.",
    category: "resource",
    url: "/resources/books#heal-your-wound",
    keywords: [
      "heal your wound",
      "book",
      "patient guide",
      "wound healing book",
      "Dr. Alvin May",
      "patient education",
      "comprehensive guide",
      "evidence-based",
    ],
    content:
      "Heal Your Wound is Dr. May's comprehensive patient guide covering all aspects of wound healing, prevention, and treatment based on decades of clinical experience.",
  },
];

/**
 * Normalize search query for better matching
 */
export function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ") // Replace punctuation with spaces
    .replace(/\s+/g, " "); // Collapse multiple spaces
}

/**
 * Get search suggestions based on partial query
 */
export function getSearchSuggestions(
  query: string,
  limit: number = 5
): string[] {
  if (!query || query.length < 2) return [];

  const normalized = normalizeQuery(query);
  const suggestions = new Set<string>();

  // Look for matching titles and keywords
  searchIndex.forEach((item) => {
    // Match in title
    if (item.title.toLowerCase().includes(normalized)) {
      suggestions.add(item.title);
    }

    // Match in keywords
    item.keywords.forEach((keyword) => {
      if (keyword.includes(normalized)) {
        suggestions.add(keyword);
      }
    });
  });

  return Array.from(suggestions).slice(0, limit);
}
