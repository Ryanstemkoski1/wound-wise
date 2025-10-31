import { useState, useMemo, useCallback } from "react";
import type { SearchResult, GroupedSearchResults } from "@/types/search";
import { searchIndex, normalizeQuery } from "@/lib/search-index";

/**
 * Custom hook for client-side search functionality
 */
export function useSearch(query: string) {
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    // Initialize from localStorage on mount
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("woundwise-recent-searches");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [];
      }
    }
    return [];
  });

  // Save query to recent searches
  const saveToRecent = useCallback((searchQuery: string) => {
    if (!searchQuery || searchQuery.length < 2) return;

    setRecentSearches((prev) => {
      const trimmed = searchQuery.trim();
      const updated = [trimmed, ...prev.filter((q) => q !== trimmed)].slice(
        0,
        10
      );
      localStorage.setItem(
        "woundwise-recent-searches",
        JSON.stringify(updated)
      );
      return updated;
    });
  }, []);

  // Clear recent searches
  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem("woundwise-recent-searches");
  }, []);

  // Perform search and calculate relevance scores
  const results = useMemo<SearchResult[]>(() => {
    if (!query || query.trim().length < 2) {
      return [];
    }

    const normalized = normalizeQuery(query);
    const terms = normalized.split(" ").filter((t) => t.length > 0);

    const scoredResults: SearchResult[] = searchIndex
      .map((item) => {
        let score = 0;
        const matchedTerms: string[] = [];

        // Normalize item text fields
        const titleLower = item.title.toLowerCase();
        const descLower = item.description.toLowerCase();
        const contentLower = item.content?.toLowerCase() || "";
        const keywordsLower = item.keywords.map((k) => k.toLowerCase());

        terms.forEach((term) => {
          // Exact title match - highest score
          if (titleLower === term) {
            score += 100;
            matchedTerms.push(term);
          }
          // Title contains term
          else if (titleLower.includes(term)) {
            score += 50;
            matchedTerms.push(term);
          }

          // Keyword exact match
          if (keywordsLower.includes(term)) {
            score += 30;
            matchedTerms.push(term);
          }
          // Keyword contains term
          else if (keywordsLower.some((k) => k.includes(term))) {
            score += 20;
            matchedTerms.push(term);
          }

          // Description match
          if (descLower.includes(term)) {
            score += 15;
            matchedTerms.push(term);
          }

          // Content match
          if (contentLower.includes(term)) {
            score += 5;
            matchedTerms.push(term);
          }
        });

        // Bonus for matching multiple terms
        if (matchedTerms.length > 1) {
          score += matchedTerms.length * 10;
        }

        // Generate excerpt with matched terms
        let excerpt = item.description;
        if (score > 0 && item.content) {
          // Find first occurrence of any term in content
          const firstMatch = terms.find((term) => contentLower.includes(term));
          if (firstMatch) {
            const index = contentLower.indexOf(firstMatch);
            const start = Math.max(0, index - 50);
            const end = Math.min(item.content.length, index + 100);
            excerpt =
              (start > 0 ? "..." : "") +
              item.content.slice(start, end) +
              (end < item.content.length ? "..." : "");
          }
        }

        return {
          ...item,
          score,
          matchedTerms: Array.from(new Set(matchedTerms)),
          excerpt,
        };
      })
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score);

    return scoredResults;
  }, [query]);

  // Group results by category
  const groupedResults = useMemo<GroupedSearchResults>(() => {
    return {
      wounds: results.filter((r) => r.category === "wound"),
      treatments: results.filter((r) => r.category === "treatment"),
      resources: results.filter((r) => r.category === "resource"),
      glossary: results.filter((r) => r.category === "glossary"),
    };
  }, [results]);

  return {
    results,
    groupedResults,
    totalResults: results.length,
    recentSearches,
    saveToRecent,
    clearRecentSearches,
  };
}
