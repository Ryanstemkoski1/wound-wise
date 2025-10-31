"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  ChevronRight,
  FileText,
  Stethoscope,
  BookOpen,
  MessageCircle,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/hooks/use-search";
import { Section } from "@/components/common/section";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const {
    groupedResults,
    totalResults,
    recentSearches,
    saveToRecent,
    clearRecentSearches,
  } = useSearch(query);

  // Save to recent searches when query changes
  useEffect(() => {
    if (query && query.length >= 2) {
      saveToRecent(query);
    }
  }, [query, saveToRecent]);

  const highlightMatches = (text: string, matchedTerms: string[]) => {
    if (matchedTerms.length === 0) return text;

    let highlighted = text;
    matchedTerms.forEach((term) => {
      const regex = new RegExp(`(${term})`, "gi");
      highlighted = highlighted.replace(
        regex,
        "<mark class='bg-accent/50 px-0.5 rounded'>$1</mark>"
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-card border-b">
        <Section variant="narrow" className="py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Search</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Search className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Search Results</h1>
          </div>

          {query && (
            <p className="text-lg text-muted-foreground">
              {totalResults > 0 ? (
                <>
                  Found{" "}
                  <span className="font-semibold text-foreground">
                    {totalResults}
                  </span>{" "}
                  result{totalResults !== 1 ? "s" : ""} for &ldquo;
                  <span className="font-semibold text-foreground">{query}</span>
                  &rdquo;
                </>
              ) : (
                <>
                  No results found for &ldquo;
                  <span className="font-semibold text-foreground">{query}</span>
                  &rdquo;
                </>
              )}
            </p>
          )}
        </Section>
      </div>

      <Section variant="narrow" className="py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Results */}
          <div className="lg:col-span-2 space-y-8">
            {!query || query.length < 2 ? (
              <Card>
                <CardHeader>
                  <CardTitle>Search WoundWise</CardTitle>
                  <CardDescription>
                    Enter at least 2 characters to search for wound types,
                    treatments, resources, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Try searching for:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/search?q=pressure%20injuries">
                      <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-secondary/80"
                      >
                        Pressure Injuries
                      </Badge>
                    </Link>
                    <Link href="/search?q=diabetic%20foot">
                      <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-secondary/80"
                      >
                        Diabetic Foot
                      </Badge>
                    </Link>
                    <Link href="/search?q=infection">
                      <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-secondary/80"
                      >
                        Infection
                      </Badge>
                    </Link>
                    <Link href="/search?q=dressings">
                      <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-secondary/80"
                      >
                        Dressings
                      </Badge>
                    </Link>
                    <Link href="/search?q=nutrition">
                      <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-secondary/80"
                      >
                        Nutrition
                      </Badge>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : totalResults === 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle>No Results Found</CardTitle>
                  <CardDescription>
                    We couldn&apos;t find any content matching your search.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Suggestions:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Check your spelling</li>
                      <li>Try different keywords</li>
                      <li>Use more general terms</li>
                      <li>Browse our main sections below</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">
                      Browse by category:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Link href="/wounds">
                        <Card className="hover:border-primary transition-colors cursor-pointer">
                          <CardContent className="p-4 flex items-center gap-3">
                            <Stethoscope className="h-5 w-5 text-primary" />
                            <span className="font-medium">Wound Types</span>
                          </CardContent>
                        </Card>
                      </Link>
                      <Link href="/treatments">
                        <Card className="hover:border-primary transition-colors cursor-pointer">
                          <CardContent className="p-4 flex items-center gap-3">
                            <FileText className="h-5 w-5 text-primary" />
                            <span className="font-medium">Treatments</span>
                          </CardContent>
                        </Card>
                      </Link>
                      <Link href="/resources/glossary">
                        <Card className="hover:border-primary transition-colors cursor-pointer">
                          <CardContent className="p-4 flex items-center gap-3">
                            <BookOpen className="h-5 w-5 text-primary" />
                            <span className="font-medium">Glossary</span>
                          </CardContent>
                        </Card>
                      </Link>
                      <Link href="/resources/faqs">
                        <Card className="hover:border-primary transition-colors cursor-pointer">
                          <CardContent className="p-4 flex items-center gap-3">
                            <MessageCircle className="h-5 w-5 text-primary" />
                            <span className="font-medium">FAQs</span>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                {/* Wounds */}
                {groupedResults.wounds.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-semibold">Wound Types</h2>
                      <Badge variant="secondary">
                        {groupedResults.wounds.length}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      {groupedResults.wounds.map((result) => (
                        <Link key={result.id} href={result.url}>
                          <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                {highlightMatches(
                                  result.title,
                                  result.matchedTerms
                                )}
                              </CardTitle>
                              <CardDescription>
                                {highlightMatches(
                                  result.excerpt || result.description,
                                  result.matchedTerms
                                )}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Treatments */}
                {groupedResults.treatments.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-semibold">Treatments</h2>
                      <Badge variant="secondary">
                        {groupedResults.treatments.length}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      {groupedResults.treatments.map((result) => (
                        <Link key={result.id} href={result.url}>
                          <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                {highlightMatches(
                                  result.title,
                                  result.matchedTerms
                                )}
                              </CardTitle>
                              <CardDescription>
                                {highlightMatches(
                                  result.excerpt || result.description,
                                  result.matchedTerms
                                )}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Resources */}
                {groupedResults.resources.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-semibold">Resources</h2>
                      <Badge variant="secondary">
                        {groupedResults.resources.length}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      {groupedResults.resources.map((result) => (
                        <Link key={result.id} href={result.url}>
                          <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                {highlightMatches(
                                  result.title,
                                  result.matchedTerms
                                )}
                              </CardTitle>
                              <CardDescription>
                                {highlightMatches(
                                  result.excerpt || result.description,
                                  result.matchedTerms
                                )}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Glossary */}
                {groupedResults.glossary.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-semibold">Glossary</h2>
                      <Badge variant="secondary">
                        {groupedResults.glossary.length}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      {groupedResults.glossary.map((result) => (
                        <Link key={result.id} href={result.url}>
                          <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                {highlightMatches(
                                  result.title,
                                  result.matchedTerms
                                )}
                              </CardTitle>
                              <CardDescription>
                                {highlightMatches(
                                  result.excerpt || result.description,
                                  result.matchedTerms
                                )}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Recent Searches</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearRecentSearches}
                      className="h-8 px-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <Link
                        key={index}
                        href={`/search?q=${encodeURIComponent(search)}`}
                      >
                        <div className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                          <Search className="h-3 w-3 inline mr-2" />
                          {search}
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Popular Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Link href="/search?q=pressure%20injuries">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Pressure Injuries
                    </Badge>
                  </Link>
                  <Link href="/search?q=diabetic%20ulcers">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Diabetic Ulcers
                    </Badge>
                  </Link>
                  <Link href="/search?q=infection%20control">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Infection Control
                    </Badge>
                  </Link>
                  <Link href="/search?q=wound%20dressings">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Wound Dressings
                    </Badge>
                  </Link>
                  <Link href="/search?q=nutrition">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Nutrition
                    </Badge>
                  </Link>
                  <Link href="/search?q=compression%20therapy">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
                    >
                      Compression Therapy
                    </Badge>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Browse Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Browse All</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/wounds">
                  <div className="flex items-center gap-2 text-sm hover:text-primary transition-colors cursor-pointer">
                    <Stethoscope className="h-4 w-4" />
                    <span>All Wound Types</span>
                  </div>
                </Link>
                <Link href="/treatments">
                  <div className="flex items-center gap-2 text-sm hover:text-primary transition-colors cursor-pointer">
                    <FileText className="h-4 w-4" />
                    <span>All Treatments</span>
                  </div>
                </Link>
                <Link href="/resources/glossary">
                  <div className="flex items-center gap-2 text-sm hover:text-primary transition-colors cursor-pointer">
                    <BookOpen className="h-4 w-4" />
                    <span>Glossary</span>
                  </div>
                </Link>
                <Link href="/resources/faqs">
                  <div className="flex items-center gap-2 text-sm hover:text-primary transition-colors cursor-pointer">
                    <MessageCircle className="h-4 w-4" />
                    <span>FAQs</span>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 animate-pulse" />
            <p className="text-muted-foreground">Loading search...</p>
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
