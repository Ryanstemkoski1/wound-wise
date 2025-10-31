import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/cards/product-card";
import { getAllProducts } from "@/lib/content-loader";
import { RelatedContent } from "@/components/features/related-content";
import { YouMayAlsoLike } from "@/components/features/you-may-also-like";
import { ShareButtons } from "@/components/features/share-buttons";
import { PrintButton } from "@/components/features/print-button";
import { getRelatedContent } from "@/lib/related-content";

// Placeholder: In real implementation, this would load from JSON
const treatments = {
  "infection-control": {
    slug: "infection-control",
    title: "Infection Control",
    subtitle: "Preventing and Managing Wound Infections",
    description:
      "Effective infection control is critical for wound healing. Learn to recognize signs of infection, implement proper cleansing techniques, and follow evidence-based prevention measures.",
    featured: true,
    metadata: {
      title: "Wound Infection Control: Prevention & Treatment | WoundWise",
      description:
        "Expert guidance on wound infection control from Dr. Alvin May. Learn to recognize infection signs, proper wound cleansing, and prevention strategies.",
      keywords: [
        "wound infection",
        "infection control",
        "wound cleansing",
        "signs of infection",
        "Dr. Alvin May",
      ],
      readingTime: 8,
      lastUpdated: "2024-01-15",
    },
    relatedProducts: [
      "saline-wound-wash",
      "foam-dressing",
      "hydrocolloid-dressing",
    ],
  },
};

type TreatmentPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments[slug as keyof typeof treatments];

  if (!treatment) {
    return {
      title: "Treatment Not Found",
    };
  }

  return {
    title: treatment.metadata.title,
    description: treatment.metadata.description,
    keywords: treatment.metadata.keywords,
    openGraph: {
      title: treatment.metadata.title,
      description: treatment.metadata.description,
      type: "article",
      publishedTime: treatment.metadata.lastUpdated,
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.metadata.title,
      description: treatment.metadata.description,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(treatments).map((slug) => ({
    slug,
  }));
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = treatments[slug as keyof typeof treatments];

  if (!treatment) {
    notFound();
  }

  // Get related products
  const allProducts = await getAllProducts();
  const relatedProducts = treatment.relatedProducts
    ? allProducts.filter((p) => treatment.relatedProducts?.includes(p.id))
    : [];

  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href="/treatments"
          className="hover:text-foreground transition-colors"
        >
          Treatments
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">{treatment.title}</span>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          {treatment.featured && (
            <Badge variant="default">Essential Treatment</Badge>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{treatment.metadata.readingTime} min read</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          {treatment.title}
        </h1>

        {treatment.subtitle && (
          <p className="text-xl text-muted-foreground mb-6">
            {treatment.subtitle}
          </p>
        )}

        <p className="text-lg leading-relaxed">{treatment.description}</p>

        {/* Share and Print Buttons */}
        <div className="mt-6 flex items-center gap-4">
          <ShareButtons title={treatment.title} variant="compact" />
          <PrintButton />
        </div>
      </div>

      {/* Placeholder Content - Replace with actual treatment content */}
      <div className="max-w-4xl space-y-12 mb-16">
        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Coming Soon
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Content In Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive treatment content is being developed from Dr.
                May&apos;s published works. This page will include detailed
                guidance, step-by-step instructions, best practices, and
                evidence-based strategies for {treatment.title.toLowerCase()}.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t pt-12 mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Recommended Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Products that support effective {treatment.title.toLowerCase()}.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Related Content */}
      <section className="border-t pt-12 mb-12">
        <div className="space-y-12">
          {(() => {
            const related = getRelatedContent(slug);
            return (
              <>
                {/* Applicable Wound Types */}
                {related.relatedWounds.length > 0 && (
                  <RelatedContent
                    items={related.relatedWounds}
                    title="Applicable Wound Types"
                    description={`Wound conditions where ${treatment.title.toLowerCase()} is commonly used`}
                  />
                )}

                {/* Related Treatments */}
                {related.relatedTreatments.length > 0 && (
                  <RelatedContent
                    items={related.relatedTreatments}
                    title="Related Treatments"
                    description="Complementary treatment approaches"
                  />
                )}
              </>
            );
          })()}

          {/* You May Also Like */}
          <YouMayAlsoLike pageId={slug} />
        </div>
      </section>

      {/* Back to Treatments */}
      <div className="border-t pt-8 text-center">
        <Link
          href="/treatments"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          ← Back to All Treatments
        </Link>
      </div>
    </div>
  );
}
