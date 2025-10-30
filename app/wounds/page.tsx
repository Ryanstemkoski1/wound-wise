import { Metadata } from "next";
import Link from "next/link";
import { getAllWoundTypes } from "@/lib/content-loader";
import { WoundCard } from "@/components/wound-card";
import { Button } from "@/components/ui/button";

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
      {/* Hero Section */}
      <section className="bg-linear-to-b from-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Understanding Wound Types
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive, doctor-authored guides to help you understand
              different types of chronic wounds, their causes, and
              evidence-based treatment approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Featured Wounds */}
      {featuredWounds.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Most Common Wound Types</h2>
            <p className="text-muted-foreground">
              Essential guides to the most frequently encountered chronic wounds
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWounds.map((wound) => (
              <WoundCard key={wound.id} wound={wound} />
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

      {/* Educational Resources CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our comprehensive resources including treatment guides,
            product recommendations, and educational tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default">
              <Link href="/resources">Browse Resources</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">About Dr. May</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Understanding Chronic Wounds
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  What is a Chronic Wound?
                </h3>
                <p className="text-sm text-muted-foreground">
                  A chronic wound is one that does not heal in the expected
                  timeframe, typically more than 4-6 weeks. These wounds often
                  require specialized care and addressing underlying health
                  conditions.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Who is Affected?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Over 6.5 million Americans are affected by chronic wounds.
                  Risk factors include diabetes, poor circulation, immobility,
                  advanced age, and certain medical conditions.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                  The Holistic Approach
                </h3>
                <p className="text-sm text-muted-foreground">
                  Effective wound healing requires more than just treating the
                  wound itself. Nutrition, infection control, pressure relief,
                  and addressing underlying conditions are all essential.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  You Are Not Alone
                </h3>
                <p className="text-sm text-muted-foreground">
                  Working closely with your healthcare team and actively
                  participating in your care leads to the best outcomes. This
                  resource is here to help you on your healing journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
