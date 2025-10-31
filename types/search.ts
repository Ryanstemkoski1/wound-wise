export type SearchCategory = "wound" | "treatment" | "resource" | "glossary";

export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
  url: string;
  keywords: string[];
  content?: string; // Full content for deeper searching
}

export interface SearchResult extends SearchableItem {
  score: number; // Relevance score 0-100
  matchedTerms: string[];
  excerpt?: string; // Highlighted excerpt from content
}

export interface GroupedSearchResults {
  wounds: SearchResult[];
  treatments: SearchResult[];
  resources: SearchResult[];
  glossary: SearchResult[];
}
