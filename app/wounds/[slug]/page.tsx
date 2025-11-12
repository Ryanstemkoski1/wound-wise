import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getWoundType,
  getWoundTypeSlugs,
  getProductsForWound,
} from "@/lib/content-loader-sanity";
import { Callout } from "@/components/common/callout";
import { ProductCard } from "@/components/cards/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/features/related-content";
import { YouMayAlsoLike } from "@/components/features/you-may-also-like";
import { ShareButtons } from "@/components/features/share-buttons";
import { PrintButton } from "@/components/features/print-button";
import { getRelatedContent } from "@/lib/related-content";
import { Section } from "@/components/common/section";

interface WoundPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getWoundTypeSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: WoundPageProps): Promise<Metadata> {
  const { slug } = await params;
  const wound = await getWoundType(slug);

  if (!wound) {
    return {
      title: "Wound Type Not Found | WoundWise",
    };
  }

  return {
    title: wound.metadata.title,
    description: wound.metadata.description,
    keywords: wound.metadata.keywords,
    authors: [{ name: wound.metadata.author }],
    openGraph: {
      title: wound.metadata.title,
      description: wound.metadata.description,
      type: "article",
      authors: [wound.metadata.author],
      publishedTime: wound.metadata.publishDate,
      modifiedTime: wound.metadata.lastUpdated,
    },
    twitter: {
      card: "summary_large_image",
      title: wound.metadata.title,
      description: wound.metadata.description,
    },
  };
}

export default async function WoundPage({ params }: WoundPageProps) {
  const { slug } = await params;
  const wound = await getWoundType(slug);

  if (!wound) {
    notFound();
  }

  const relatedProducts = await getProductsForWound(slug);

  return (
    <div>
      {/* Hero Section */}
      <Section
        variant="full"
        container={false}
        className="bg-linear-to-b from-primary/5 to-background border-b py-12 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/wounds"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Wound Types
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {wound.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {wound.subtitle}
            </p>
            <p className="text-lg leading-relaxed">{wound.description}</p>

            {/* Share Buttons */}
            <div className="mt-6 flex items-center gap-4">
              <ShareButtons title={wound.title} variant="compact" />
              <PrintButton />
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {wound.metadata.featured && (
                <Badge variant="secondary">Featured Content</Badge>
              )}
              <Badge variant="outline">
                {wound.metadata.readingTime} min read
              </Badge>
              <Badge variant="outline">
                Updated{" "}
                {new Date(wound.metadata.lastUpdated).toLocaleDateString()}
              </Badge>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Info Cards */}
      <Section variant="narrow">
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {/* Risk Factors */}
          {wound.quickInfo?.riskFactors &&
            wound.quickInfo.riskFactors.length > 0 && (
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-destructive"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Risk Factors
                </h3>
                <ul className="text-sm space-y-2">
                  {wound.quickInfo.riskFactors
                    .slice(0, 5)
                    .map((factor, index) => (
                      <li key={index} className="text-muted-foreground">
                        • {factor}
                      </li>
                    ))}
                </ul>
              </div>
            )}

          {/* Symptoms */}
          {wound.quickInfo?.warningSigns &&
            wound.quickInfo.warningSigns.length > 0 && (
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-accent-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Warning Signs
                </h3>
                <ul className="text-sm space-y-2">
                  {wound.quickInfo.warningSigns
                    .slice(0, 5)
                    .map((symptom, index) => (
                      <li key={index} className="text-muted-foreground">
                        • {symptom}
                      </li>
                    ))}
                </ul>
              </div>
            )}

          {/* Prevention */}
          {wound.quickInfo?.prevention &&
            wound.quickInfo.prevention.length > 0 && (
              <div className="bg-card border rounded-lg p-6">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Prevention
                </h3>
                <ul className="text-sm space-y-2">
                  {wound.quickInfo.prevention
                    .slice(0, 5)
                    .map((strategy, index) => (
                      <li key={index} className="text-muted-foreground">
                        • {strategy}
                      </li>
                    ))}
                </ul>
              </div>
            )}
        </div>
      </Section>

      {/* Hero Image */}
      <Section variant="narrow" noPadding className="py-8">
        <div className="relative w-full h-96 rounded-xl overflow-hidden">
          <Image
            src={`/images/wounds/${wound.slug}-hero.png`}
            alt={`${wound.title} - Professional medical care scene`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Section>

      {/* Main Content */}
      <Section variant="narrow">
        <article className="prose prose-lg max-w-none">
          {wound.sections.map((section, index) => (
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
        <Section variant="default" container={false} className="bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-2">Recommended Products</h2>
              <p className="text-muted-foreground mb-8">
                Evidence-based product recommendations for{" "}
                {wound.title.toLowerCase()} care
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Related Content */}
      <Section variant="default">
        {(() => {
          const related = getRelatedContent(slug);
          return (
            <>
              {/* Related Treatments */}
              {related.relatedTreatments.length > 0 && (
                <RelatedContent
                  items={related.relatedTreatments}
                  title="Recommended Treatments"
                  description={`Evidence-based treatment approaches for ${wound.title.toLowerCase()}`}
                />
              )}

              {/* Related Wound Types */}
              {related.relatedWounds.length > 0 && (
                <RelatedContent
                  items={related.relatedWounds}
                  title="Related Wound Types"
                  description="Similar wounds you might want to learn about"
                />
              )}

              {/* Related Resources */}
              {related.relatedResources.length > 0 && (
                <RelatedContent
                  items={related.relatedResources}
                  title="Helpful Resources"
                  description="Tools and guides to support your healing journey"
                  variant="compact"
                />
              )}
            </>
          );
        })()}
      </Section>

      {/* FAQs */}
      {wound.faqs && wound.faqs.length > 0 && (
        <Section variant="narrow">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {wound.faqs.map((faq, index) => (
              <div key={index} className="border-b pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* You May Also Like */}
      <Section variant="default" container={false} className="bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <YouMayAlsoLike pageId={slug} />
          </div>
        </div>
      </Section>

      {/* Related Treatments CTA */}
      {wound.relatedTreatments.length > 0 && (
        <Section variant="narrow" container={false} className="bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Explore Treatment Options
              </h2>
              <p className="text-muted-foreground mb-6">
                Learn about evidence-based treatments for{" "}
                {wound.title.toLowerCase()}
              </p>
              <Button asChild size="lg">
                <Link href="/treatments">View All Treatments</Link>
              </Button>
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}
