import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/cards/product-card";
import {
  getTreatment,
  getTreatmentSlugs,
  getAllProducts,
} from "@/lib/content-loader";
import { Callout } from "@/components/common/callout";
import { RelatedContent } from "@/components/features/related-content";
import { YouMayAlsoLike } from "@/components/features/you-may-also-like";
import { ShareButtons } from "@/components/features/share-buttons";
import { PrintButton } from "@/components/features/print-button";
import { getRelatedContent } from "@/lib/related-content";
import { Section } from "@/components/common/section";

type TreatmentPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getTreatmentSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = await getTreatment(slug);

  if (!treatment || !treatment.metadata) {
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
      publishedTime: treatment.metadata.publishDate,
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.metadata.title,
      description: treatment.metadata.description,
    },
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = await getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  // Get related products
  const allProducts = await getAllProducts();
  const relatedProducts = treatment.relatedProducts
    ? allProducts.filter((p) => treatment.relatedProducts?.includes(p.id))
    : [];

  return (
    <div>
      {/* Breadcrumb */}
      <Section variant="narrow" className="py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
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
      </Section>

      {/* Hero Section */}
      <Section variant="narrow">
        <div className="flex items-center gap-3 mb-4">
          {treatment.featured && (
            <Badge variant="default">Essential Treatment</Badge>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{treatment.metadata?.readingTime} min read</span>
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
      </Section>

      {/* Treatment Content */}
      <Section variant="narrow" className="pt-0">
        <article className="prose prose-lg max-w-none">
          {treatment.sections?.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
              <div className="text-lg leading-relaxed whitespace-pre-line mb-6">
                {section.content}
              </div>

              {section.callout && <Callout callout={section.callout} />}

              {section.subsections &&
                section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="ml-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-3">
                      {subsection.heading}
                    </h3>
                    <div className="text-base leading-relaxed whitespace-pre-line">
                      {subsection.content}
                    </div>
                    {subsection.callout && (
                      <Callout callout={subsection.callout} />
                    )}
                  </div>
                ))}
            </section>
          ))}
        </article>
      </Section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section variant="default" className="border-t">
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
        </Section>
      )}

      {/* Related Content */}
      <Section variant="default" className="border-t">
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
      </Section>

      {/* Back to Treatments */}
      <Section variant="narrow" className="border-t py-8">
        <div className="text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            ← Back to All Treatments
          </Link>
        </div>
      </Section>
    </div>
  );
}
