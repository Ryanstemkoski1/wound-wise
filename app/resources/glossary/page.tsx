import Link from "next/link";
import { ChevronRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/section";
import { getGlossaryTerms } from "@/lib/content-loader-sanity";
import { GlossaryClient } from "./glossary-client";

export const metadata = {
  title: "Medical Glossary | WoundWise - Wound Care Terminology",
  description:
    "Clear explanations of 117+ wound care medical terms. Patient-friendly definitions to help you understand medical concepts and communicate with your healthcare team.",
};

export default async function GlossaryPage() {
  const glossaryTerms = await getGlossaryTerms();

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
            href="/resources"
            className="hover:text-foreground transition-colors"
          >
            Resources
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">Medical Glossary</span>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section variant="narrow">
        <div className="space-y-6">
          <Badge variant="secondary">
            <BookOpen className="h-3 w-3 mr-1" />
            Medical Reference
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Medical Glossary
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Clear explanations of wound care terminology to help you understand
            medical concepts and communicate effectively with your healthcare
            team.
          </p>
        </div>
      </Section>

      {/* Interactive Content */}
      <Section variant="narrow">
        <GlossaryClient terms={glossaryTerms} />
      </Section>
    </div>
  );
}
