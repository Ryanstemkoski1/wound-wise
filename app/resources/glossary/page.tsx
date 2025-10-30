"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// This would normally come from getGlossaryTerms()
const glossaryTerms = [
  {
    term: "Pressure Injury",
    slug: "pressure-injury",
    definition:
      "A localized injury to the skin and/or underlying tissue, usually over a bony prominence, resulting from sustained pressure or pressure in combination with shear forces.",
    category: "medical",
    relatedTerms: ["bedsore", "tissue-necrosis", "offloading"],
  },
  // Additional terms would be loaded here
];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(glossaryTerms.map((t) => t.category).filter(Boolean));
    return Array.from(cats).sort();
  }, []);

  const filteredTerms = useMemo(() => {
    return glossaryTerms
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
  }, [searchQuery, selectedCategory]);

  const groupedTerms = useMemo(() => {
    const groups: Record<string, typeof glossaryTerms> = {};
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
    <div className="container py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href="/resources"
          className="hover:text-foreground transition-colors"
        >
          Resources
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Medical Glossary</span>
      </nav>

      {/* Header */}
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Medical Glossary
        </h1>
        <p className="text-xl text-muted-foreground">
          Clear explanations of wound care terminology to help you understand
          medical concepts and communicate effectively with your healthcare
          team.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search terms..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            All Terms ({glossaryTerms.length})
          </Badge>
          {categories.map((category) => {
            const count = glossaryTerms.filter(
              (t) => t.category === category
            ).length;
            return (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer capitalize"
                onClick={() => setSelectedCategory(category)}
              >
                {category} ({count})
              </Badge>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground mb-6">
        Showing {filteredTerms.length}{" "}
        {filteredTerms.length === 1 ? "term" : "terms"}
      </p>

      {/* Glossary Terms */}
      <div className="space-y-8">
        {Object.entries(groupedTerms).map(([letter, terms]) => (
          <div key={letter}>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b">{letter}</h2>
            <div className="grid gap-4">
              {terms.map((term) => (
                <Card key={term.slug}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-xl">{term.term}</CardTitle>
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
      </div>

      {filteredTerms.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">
              No terms found matching your search.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
