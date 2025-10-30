import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Shield, Heart } from "lucide-react";
import { TreatmentCard } from "@/components/treatment-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Wound Care Treatments & Strategies",
  description:
    "Evidence-based wound care treatments and strategies from Dr. Alvin May. Learn about infection control, nutrition, dressing selection, and comprehensive wound management approaches.",
  keywords: [
    "wound care",
    "wound treatment",
    "infection control",
    "wound dressing",
    "nutrition",
    "wound healing",
    "Dr. Alvin May",
  ],
};

// Placeholder treatments - will be replaced with actual content
const treatments = [
  {
    slug: "infection-control",
    title: "Infection Control",
    subtitle: "Preventing and Managing Wound Infections",
    description:
      "Learn to recognize signs of infection, implement proper wound cleansing techniques, and follow infection prevention measures essential for successful wound healing.",
    keyBenefits: [
      "Early detection of infection signs",
      "Proper wound cleansing protocols",
      "Evidence-based prevention strategies",
    ],
    featured: true,
  },
  {
    slug: "wound-dressings",
    title: "Wound Dressings Guide",
    subtitle: "Choosing the Right Dressing for Your Wound",
    description:
      "Comprehensive guide to wound dressing types, selection criteria, and application techniques for optimal moisture balance and healing environment.",
    keyBenefits: [
      "Understand different dressing types",
      "Match dressings to wound characteristics",
      "Learn proper application techniques",
    ],
    featured: true,
  },
  {
    slug: "offloading-positioning",
    title: "Offloading & Positioning",
    subtitle: "Reducing Pressure to Promote Healing",
    description:
      "Master repositioning techniques and offloading strategies to redistribute pressure, improve circulation, and create an optimal healing environment.",
    keyBenefits: [
      "Proper repositioning schedules",
      "Effective use of positioning devices",
      "Pressure relief techniques",
    ],
    featured: true,
  },
  {
    slug: "nutrition-healing",
    title: "Nutrition for Wound Healing",
    subtitle: "Fueling Your Body's Repair Process",
    description:
      "Discover the critical role of nutrition and hydration in wound healing, including protein requirements, essential vitamins, and practical dietary strategies.",
    keyBenefits: [
      "Protein and calorie requirements",
      "Essential vitamins and minerals",
      "Practical meal planning tips",
    ],
    featured: true,
  },
];

export default function TreatmentsPage() {
  const featuredTreatments = treatments.filter((t) => t.featured);
  const otherTreatments = treatments.filter((t) => !t.featured);

  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Evidence-Based Wound Care Treatments
        </h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive treatment strategies and best practices for managing
          chronic wounds, based on Dr. May&apos;s decades of clinical
          experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/wounds">View Wound Types</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/resources/glossary">Medical Glossary</Link>
          </Button>
        </div>
      </div>

      {/* Core Treatment Strategies */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Core Treatment Strategies
          </h2>
          <p className="text-lg text-muted-foreground">
            Essential wound care approaches that form the foundation of
            successful healing.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>
      </section>

      {/* Additional Treatments */}
      {otherTreatments.length > 0 && (
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Additional Treatment Approaches
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized strategies for specific wound care challenges.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherTreatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </section>
      )}

      {/* Holistic Approach Section */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            A Holistic Approach to Wound Healing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Effective wound management extends beyond just treating the visible
            wound. It requires addressing the whole person—physical, medical,
            and environmental factors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Prevention First</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                The best treatment is prevention. Learn strategies to protect
                vulnerable skin, manage risk factors, and stop problems before
                they start.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Comprehensive Care</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Healing requires addressing underlying conditions, nutrition,
                mobility, and psychosocial factors—not just applying dressings.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Patient Empowerment</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                You are an active participant in your healing journey.
                Understanding your treatment empowers better outcomes and
                informed decisions.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted/50 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          Need Help Understanding Your Wound?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Start by identifying your wound type to access tailored treatment
          information and care strategies specific to your situation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/wounds">Explore Wound Types</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/resources/products">View Recommended Products</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
