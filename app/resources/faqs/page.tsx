"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import wound data to extract FAQs
import pressureInjuries from "@/content/wounds/pressure-injuries.json";
import diabeticUlcers from "@/content/wounds/diabetic-ulcers.json";
import venousUlcers from "@/content/wounds/venous-ulcers.json";
import arterialWounds from "@/content/wounds/arterial-wounds.json";
import surgicalWounds from "@/content/wounds/surgical-wounds.json";

type FAQ = {
  question: string;
  answer: string;
  category?: string;
  source?: string;
};

type Category = "all" | "general" | "wound-types" | "treatment" | "products";

const categoryLabels: Record<Category, string> = {
  all: "All Questions",
  general: "General Wound Care",
  "wound-types": "Wound Types",
  treatment: "Treatment & Healing",
  products: "Products & Supplies",
};

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  // Aggregate all FAQs from wound content
  const allFAQs = useMemo(() => {
    const faqs: FAQ[] = [];

    // Helper function to categorize wound-specific FAQs
    const addWoundFAQs = (
      woundData: {
        faqs: { question: string; answer: string; category?: string }[];
      },
      source: string
    ) => {
      woundData.faqs.forEach((faq) => {
        faqs.push({
          question: faq.question,
          answer: faq.answer,
          category: faq.category || "wound-types",
          source,
        });
      });
    };

    // Add FAQs from each wound type
    addWoundFAQs(pressureInjuries, "Pressure Injuries");
    addWoundFAQs(diabeticUlcers, "Diabetic Ulcers");
    addWoundFAQs(venousUlcers, "Venous Ulcers");
    addWoundFAQs(arterialWounds, "Arterial Wounds");
    addWoundFAQs(surgicalWounds, "Surgical Wounds");

    // Add some general FAQs
    const generalFAQs: FAQ[] = [
      {
        question: "How long does it take for a wound to heal?",
        answer:
          "Healing time varies greatly depending on the type and severity of the wound, your overall health, and how well you care for it. Simple wounds may heal in days to weeks, while chronic wounds can take months or longer. Factors like nutrition, blood circulation, infection, and underlying health conditions all affect healing speed. Always follow your healthcare provider's guidance for your specific wound.",
        category: "general",
      },
      {
        question: "When should I see a doctor about a wound?",
        answer:
          "Seek medical attention if you notice: signs of infection (increased redness, warmth, swelling, pus, or fever), wounds that won't stop bleeding, deep wounds, wounds from dirty or rusty objects, wounds on your face or genitals, wounds that haven't started healing within a few days, or if you have diabetes or poor circulation. When in doubt, it's always safer to get professional evaluation.",
        category: "general",
      },
      {
        question: "Can I use hydrogen peroxide to clean my wound?",
        answer:
          "While hydrogen peroxide has been commonly used in the past, current wound care best practices generally recommend against it for routine wound cleaning. Hydrogen peroxide can damage healthy tissue and slow healing. Instead, use sterile saline solution or clean water to gently irrigate wounds. Always follow your healthcare provider's specific instructions for your wound.",
        category: "treatment",
      },
      {
        question: "Should I let my wound air out or keep it covered?",
        answer:
          "Modern wound care research shows that keeping wounds moist and covered with appropriate dressings promotes faster healing and reduces scarring. A moist environment supports cell growth and prevents scab formation that can impede healing. However, the specific type of dressing depends on your wound type, location, and drainage level. Consult your healthcare provider for the best approach for your wound.",
        category: "treatment",
      },
      {
        question: "What foods help wounds heal faster?",
        answer:
          "Nutrition plays a vital role in wound healing. Focus on protein-rich foods (lean meats, fish, eggs, beans, dairy) to support tissue repair, vitamin C (citrus fruits, berries, peppers) for collagen production, zinc (nuts, seeds, whole grains) for immune function, and adequate hydration. If you have a chronic wound or malnutrition, your doctor may recommend protein supplements or vitamin/mineral supplementation.",
        category: "general",
      },
    ];

    faqs.push(...generalFAQs);

    return faqs;
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    allFAQs.forEach((faq) => faq.category && cats.add(faq.category));
    return ["all", ...Array.from(cats).sort()] as Category[];
  }, [allFAQs]);

  // Filter FAQs by category
  const filteredFAQs = useMemo(() => {
    if (selectedCategory === "all") {
      return allFAQs;
    }
    return allFAQs.filter((faq) => faq.category === selectedCategory);
  }, [selectedCategory, allFAQs]);

  return (
    <div className="container py-10 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href="/resources/glossary"
          className="hover:text-foreground transition-colors"
        >
          Resources
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">FAQs</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground">
          Find answers to common questions about wound care, healing, and
          treatment. For personalized advice, always consult your healthcare
          provider.
        </p>
      </div>

      {/* Important Notice */}
      <Card className="bg-primary/5 border-primary/20 mb-10">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-primary mb-2">
                Educational Information Only
              </p>
              <p className="text-sm text-muted-foreground">
                The answers provided here are for educational purposes and
                should not replace professional medical advice. Every wound is
                unique, and treatment should be tailored to your specific
                situation by qualified healthcare professionals.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Browse by Topic</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setSelectedCategory(category)}
            >
              {categoryLabels[category] || category}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          Showing {filteredFAQs.length}{" "}
          {filteredFAQs.length === 1 ? "question" : "questions"}
          {selectedCategory !== "all" &&
            ` in ${categoryLabels[selectedCategory]}`}
        </p>
      </div>

      {/* FAQs Accordion */}
      <section>
        {filteredFAQs.length > 0 ? (
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem
                key={`${faq.question}-${index}`}
                value={`item-${index}`}
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div>
                    <h3 className="font-semibold pr-4">{faq.question}</h3>
                    {faq.source && (
                      <p className="text-xs text-muted-foreground mt-1">
                        From: {faq.source}
                      </p>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Card>
            <CardContent className="pt-6 text-center py-12">
              <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No questions found in this category.
              </p>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Still Have Questions */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Still Have Questions?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Explore Wound Types</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn more about specific wound types and their care
                requirements.
              </p>
              <Link
                href="/wounds"
                className="text-primary hover:underline text-sm font-medium"
              >
                Browse Wound Types →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">
                Review Treatment Strategies
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Discover evidence-based approaches to wound healing and
                management.
              </p>
              <Link
                href="/treatments"
                className="text-primary hover:underline text-sm font-medium"
              >
                View Treatments →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Check the Glossary</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Understand medical terminology related to wound care.
              </p>
              <Link
                href="/resources/glossary"
                className="text-primary hover:underline text-sm font-medium"
              >
                Search Glossary →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Have a question not answered here? We&apos;d love to hear from
                you.
              </p>
              <Link
                href="/contact"
                className="text-primary hover:underline text-sm font-medium"
              >
                Get in Touch →
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Notice */}
      <Card className="bg-destructive/10 border-destructive/30 mt-12">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-destructive mb-3">
            When to Seek Immediate Medical Attention
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            If you experience any of these symptoms, seek emergency medical care
            immediately:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li>Uncontrolled bleeding</li>
            <li>
              Signs of severe infection (high fever, spreading redness, severe
              pain)
            </li>
            <li>
              Wound that won&apos;t stop bleeding after 10 minutes of direct
              pressure
            </li>
            <li>Deep wounds or wounds exposing bone, muscle, or tendons</li>
            <li>Wounds from animal or human bites</li>
            <li>Loss of sensation or ability to move the affected area</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
