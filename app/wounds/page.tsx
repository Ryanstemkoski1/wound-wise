import { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Shield,
  BookOpen,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { getAllWoundTypes } from "@/lib/content-loader";
import { WoundCard } from "@/components/wound-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Wound Types Guide | WoundWise",
  description:
    "Comprehensive guides to understanding different types of chronic wounds including pressure injuries, diabetic ulcers, venous and arterial wounds. Expert information from Dr. Alvin May.",
  keywords: [
    "wound types",
    "pressure injuries",
    "diabetic ulcers",
    "venous ulcers",
    "arterial wounds",
    "wound care",
  ],
};

export default async function WoundsPage() {
  const wounds = await getAllWoundTypes();

  // Separate featured and regular wounds
  const featuredWounds = wounds.filter((w) => w.metadata.featured);
  const regularWounds = wounds.filter((w) => !w.metadata.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background border-b">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Badge
              className="mb-6 animate-in fade-in delay-200"
              variant="secondary"
            >
              Comprehensive Wound Care Education
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 delay-300">
              Understanding Wound Types
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 delay-500">
              Comprehensive, doctor-authored guides to help you understand
              different types of chronic wounds, their causes, and
              evidence-based treatment approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 delay-700">
              <Button asChild size="lg">
                <Link href="/treatments">Treatment Strategies</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/glossary">Medical Glossary</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - New */}
      <section className="bg-muted/50 py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-in fade-in delay-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">6.5M+</div>
              <div className="text-sm text-muted-foreground">
                Americans Affected
              </div>
            </div>
            <div className="text-center animate-in fade-in delay-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">
                Wound Type Guides
              </div>
            </div>
            <div className="text-center animate-in fade-in delay-500">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">
                Evidence-Based
              </div>
            </div>
            <div className="text-center animate-in fade-in delay-700">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">Free</div>
              <div className="text-sm text-muted-foreground">
                Educational Content
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Wounds */}
      {featuredWounds.length > 0 && (
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="mb-10 text-center md:text-left animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Most Common Wound Types
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Essential guides to the most frequently encountered chronic wounds
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWounds.map((wound, index) => (
              <div
                key={wound.id}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <WoundCard wound={wound} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Other Wounds */}
      {regularWounds.length > 0 && (
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Additional Wound Types</h2>
            <p className="text-muted-foreground">
              Specialized information for less common wound presentations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularWounds.map((wound) => (
              <WoundCard key={wound.id} wound={wound} />
            ))}
          </div>
        </section>
      )}

      {/* Educational Resources CTA - Enhanced */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-linear-to-br from-primary/5 to-accent/5 border-primary/20 shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need More Information?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our comprehensive resources including treatment guides,
                product recommendations, and educational tools to support your
                healing journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="default">
                  <Link href="/treatments">View Treatment Strategies</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/resources/products">Browse Products</Link>
                </Button>
              </div>

              {/* Quick Links */}
              <div className="mt-10 pt-8 border-t border-primary/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <Link
                    href="/resources/glossary"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Medical Glossary
                  </Link>
                  <Link
                    href="/resources/faqs"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/books"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Dr. May&apos;s Books
                  </Link>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Dr. May
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Facts Section - Enhanced */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Understanding Chronic Wounds
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key information to help you understand wound healing and care
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        What is a Chronic Wound?
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A chronic wound is one that does not heal in the
                        expected timeframe, typically more than 4-6 weeks. These
                        wounds often require specialized care and addressing
                        underlying health conditions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Who is Affected?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Over 6.5 million Americans are affected by chronic
                        wounds. Risk factors include diabetes, poor circulation,
                        immobility, advanced age, and certain medical
                        conditions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        The Holistic Approach
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Effective wound healing requires more than just treating
                        the wound itself. Nutrition, infection control, pressure
                        relief, and addressing underlying conditions are all
                        essential.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-in fade-in slide-in-from-bottom-4 delay-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">You Are Not Alone</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Working closely with your healthcare team and actively
                        participating in your care leads to the best outcomes.
                        This resource is here to help you on your healing
                        journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
