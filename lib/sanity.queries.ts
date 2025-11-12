// Sanity GROQ queries for content fetching

export const WOUND_TYPES_QUERY = `*[_type == "woundType"] | order(title asc) {
  _id,
  title,
  slug,
  subtitle,
  description,
  overview,
  riskFactors,
  symptoms,
  preventionStrategies,
  treatmentApproaches,
  sections,
  faqs,
  imageUrl,
  metaTitle,
  metaDescription,
  keywords,
  author,
  publishDate,
  lastUpdated,
  readingTime,
  "relatedProducts": relatedProducts[]-> {
    _id,
    name,
    slug,
    category,
    description,
    useCases,
    affiliateLink,
    affiliatePartner,
    imageUrl,
    externalImageUrl,
    featured
  },
  "relatedTreatments": relatedTreatments[]-> {
    _id,
    title,
    slug,
    subtitle,
    description
  }
}`;

export const WOUND_TYPE_BY_SLUG_QUERY = `*[_type == "woundType" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  subtitle,
  description,
  overview,
  riskFactors,
  symptoms,
  preventionStrategies,
  treatmentApproaches,
  sections,
  faqs,
  imageUrl,
  metaTitle,
  metaDescription,
  keywords,
  author,
  publishDate,
  lastUpdated,
  readingTime,
  "relatedProducts": relatedProducts[]-> {
    _id,
    name,
    slug,
    category,
    description,
    useCases,
    affiliateLink,
    affiliatePartner,
    imageUrl,
    externalImageUrl,
    featured
  },
  "relatedTreatments": relatedTreatments[]-> {
    _id,
    title,
    slug,
    subtitle,
    description
  }
}`;

export const TREATMENTS_QUERY = `*[_type == "treatment"] | order(title asc) {
  _id,
  title,
  slug,
  subtitle,
  description,
  overview,
  keyPrinciples,
  steps,
  bestPractices,
  warnings,
  sections,
  imageUrl,
  metaTitle,
  metaDescription,
  keywords,
  author,
  publishDate,
  lastUpdated,
  readingTime,
  "relatedWounds": relatedWounds[]-> {
    _id,
    title,
    slug,
    subtitle,
    description
  },
  "relatedProducts": relatedProducts[]-> {
    _id,
    name,
    slug,
    category,
    description,
    useCases,
    affiliateLink,
    affiliatePartner,
    imageUrl,
    externalImageUrl,
    featured
  }
}`;

export const TREATMENT_BY_SLUG_QUERY = `*[_type == "treatment" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  subtitle,
  description,
  overview,
  keyPrinciples,
  steps,
  bestPractices,
  warnings,
  sections,
  imageUrl,
  metaTitle,
  metaDescription,
  keywords,
  author,
  publishDate,
  lastUpdated,
  readingTime,
  "relatedWounds": relatedWounds[]-> {
    _id,
    title,
    slug,
    subtitle,
    description
  },
  "relatedProducts": relatedProducts[]-> {
    _id,
    name,
    slug,
    category,
    description,
    useCases,
    affiliateLink,
    affiliatePartner,
    imageUrl,
    externalImageUrl,
    featured
  }
}`;

export const PRODUCTS_QUERY = `*[_type == "product"] | order(sortOrder asc, name asc) {
  _id,
  name,
  slug,
  category,
  description,
  useCases,
  affiliateLink,
  affiliatePartner,
  imageUrl,
  externalImageUrl,
  featured,
  sortOrder,
  "relatedWounds": relatedWounds[]-> {
    _id,
    title,
    slug
  },
  "relatedTreatments": relatedTreatments[]-> {
    _id,
    title,
    slug
  }
}`;

export const GLOSSARY_TERMS_QUERY = `*[_type == "glossaryTerm"] | order(term asc) {
  _id,
  term,
  slug,
  definition,
  pronunciation,
  category,
  "relatedTerms": relatedTerms[]-> {
    _id,
    term,
    slug
  }
}`;

export const FAQS_QUERY = `*[_type == "faq"] | order(sortOrder asc, question asc) {
  _id,
  question,
  answer,
  category,
  sortOrder
}`;

export const SITE_METADATA_QUERY = `*[_type == "siteMetadata"][0] {
  _id,
  title,
  description,
  keywords,
  author,
  siteUrl,
  socialLinks,
  contactEmail,
  logoUrl
}`;
