import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Shield,
  Heart,
  ChevronRight,
  Activity,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { TreatmentCard } from "@/components/treatment-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Treatments</span>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background rounded-lg mb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-4xl text-center space-y-6 px-6 py-16 md:py-20">
          <Badge
            variant="secondary"
            className="animate-in fade-in slide-in-from-bottom-4"
          >
            Evidence-Based Treatment Strategies
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-in fade-in slide-in-from-bottom-4 delay-200">
            Comprehensive Wound Care Treatments
          </h1>
          <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 delay-300 max-w-3xl mx-auto">
            Evidence-based strategies and best practices for managing chronic
            wounds, based on Dr. May&apos;s decades of clinical experience and
            published research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-4 delay-500">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/wounds">View Wound Types</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/resources/glossary">Medical Glossary</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-in fade-in delay-200">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-1">4</div>
            <div className="text-sm text-muted-foreground">
              Core Treatment Strategies
            </div>
          </div>
          <div className="text-center animate-in fade-in delay-300">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-1">Holistic</div>
            <div className="text-sm text-muted-foreground">
              Patient-Centered Approach
            </div>
          </div>
          <div className="text-center animate-in fade-in delay-500">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Evidence-Based</div>
          </div>
          <div className="text-center animate-in fade-in delay-700">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-1">20+</div>
            <div className="text-sm text-muted-foreground">
              Years Clinical Experience
            </div>
          </div>
        </div>
      </section>

      {/* Core Treatment Strategies */}
      <section className="mb-16">
        <div className="mb-8 text-center animate-in fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Core Treatment Strategies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Essential wound care approaches that form the foundation of
            successful healing—backed by clinical research and Dr. May&apos;s
            extensive practice.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredTreatments.map((treatment, index) => (
            <div
              key={treatment.slug}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <TreatmentCard treatment={treatment} />
            </div>
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
        <div className="mb-8 text-center animate-in fade-in">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            Comprehensive Care Philosophy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            A Holistic Approach to Wound Healing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Effective wound management extends beyond just treating the visible
            wound. It requires addressing the whole person—physical, medical,
            and environmental factors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="animate-in fade-in slide-in-from-bottom-4 delay-200 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
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

          <Card className="animate-in fade-in slide-in-from-bottom-4 delay-300 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
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

          <Card className="animate-in fade-in slide-in-from-bottom-4 delay-500 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
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
      <section className="relative overflow-hidden rounded-lg">
        <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-primary mb-2">
                <CheckCircle2 className="h-4 w-4" />
                Free Educational Resource
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Need Help Understanding Your Wound?
              </h2>
              <p className="text-muted-foreground text-lg">
                Start by identifying your wound type to access tailored
                treatment information and care strategies specific to your
                situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/wounds">Explore Wound Types</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/resources/products">
                    View Recommended Products
                  </Link>
                </Button>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <Link
                  href="/resources/glossary"
                  className="p-4 rounded-lg border bg-card hover:bg-accent hover:border-primary/50 transition-all duration-300 group"
                >
                  <BookOpen className="h-5 w-5 text-primary mb-2 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium">Glossary</div>
                </Link>
                <Link
                  href="/resources/faqs"
                  className="p-4 rounded-lg border bg-card hover:bg-accent hover:border-primary/50 transition-all duration-300 group"
                >
                  <Heart className="h-5 w-5 text-primary mb-2 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium">FAQs</div>
                </Link>
                <Link
                  href="/books"
                  className="p-4 rounded-lg border bg-card hover:bg-accent hover:border-primary/50 transition-all duration-300 group"
                >
                  <BookOpen className="h-5 w-5 text-primary mb-2 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium">Books</div>
                </Link>
                <Link
                  href="/about"
                  className="p-4 rounded-lg border bg-card hover:bg-accent hover:border-primary/50 transition-all duration-300 group"
                >
                  <Users className="h-5 w-5 text-primary mb-2 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium">About Dr. May</div>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
