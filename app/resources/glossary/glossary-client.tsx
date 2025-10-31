"use client";

import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { GlossaryTerm } from "@/types/content";

interface GlossaryClientProps {
  terms: GlossaryTerm[];
}

export function GlossaryClient({ terms }: GlossaryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(terms.map((t) => t.category).filter(Boolean));
    return Array.from(cats).sort();
  }, [terms]);

  const filteredTerms = useMemo(() => {
    return terms
      .filter((term) => {
        const matchesSearch =
          !searchQuery ||
          term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          term.definition.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          !selectedCategory || term.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [terms, searchQuery, selectedCategory]);

  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach((term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  return (
    <>
      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <Search className="h-6 w-6 text-primary" />
          </div>
          <div className="text-2xl font-bold mb-1">{terms.length}</div>
          <div className="text-sm text-muted-foreground">Medical Terms</div>
        </div>
        <div className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <Filter className="h-6 w-6 text-primary" />
          </div>
          <div className="text-2xl font-bold mb-1">{categories.length}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
        <div className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <Search className="h-6 w-6 text-primary" />
          </div>
          <div className="text-2xl font-bold mb-1">Instant</div>
          <div className="text-sm text-muted-foreground">Search Results</div>
        </div>
        <div className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <Search className="h-6 w-6 text-primary" />
          </div>
          <div className="text-2xl font-bold mb-1">A-Z</div>
          <div className="text-sm text-muted-foreground">
            Alphabetical Index
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4 mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search terms or definitions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            All Terms ({terms.length})
          </Badge>
          {categories.map((category) => {
            const count = terms.filter((t) => t.category === category).length;
            return (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer capitalize"
                onClick={() => setSelectedCategory(category || null)}
              >
                {category} ({count})
              </Badge>
            );
          })}
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground">
          Showing {filteredTerms.length}{" "}
          {filteredTerms.length === 1 ? "term" : "terms"}
        </p>
      </div>

      {/* Glossary Terms */}
      <div className="space-y-8">
        {Object.entries(groupedTerms).map(([letter, letterTerms]) => (
          <div key={letter}>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b">{letter}</h2>
            <div className="grid gap-4">
              {letterTerms.map((term) => (
                <Card key={term.slug}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-xl">{term.term}</CardTitle>
                        {term.pronunciation && (
                          <p className="text-sm text-muted-foreground italic">
                            {term.pronunciation}
                          </p>
                        )}
                      </div>
                      {term.category && (
                        <Badge
                          variant="secondary"
                          className="capitalize shrink-0"
                        >
                          {term.category}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {term.definition}
                    </CardDescription>
                    {term.relatedTerms && term.relatedTerms.length > 0 && (
                      <div className="text-sm">
                        <span className="font-medium text-foreground">
                          Related:{" "}
                        </span>
                        <span className="text-muted-foreground">
                          {term.relatedTerms.join(", ")}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {filteredTerms.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                No terms found matching your search. Try different keywords or
                clear your filters.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
