import Link from "next/link";
import {
  Heart,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Shield,
  Sparkles,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const woundTypes = [
  {
    slug: "pressure-injuries",
    title: "Pressure Injuries",
    description: "Prevention and care for bedsores and pressure ulcers",
    icon: Target,
    color: "text-primary",
  },
  {
    slug: "diabetic-ulcers",
    title: "Diabetic Ulcers",
    description: "Specialized care for diabetes-related wounds",
    icon: Heart,
    color: "text-accent-foreground",
  },
  {
    slug: "venous-ulcers",
    title: "Venous Ulcers",
    description: "Managing chronic leg wounds from circulation issues",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    slug: "surgical-wounds",
    title: "Surgical Wounds",
    description: "Post-operative wound care and healing",
    icon: Shield,
    color: "text-accent-foreground",
  },
];

const features = [
  {
    icon: Award,
    title: "Evidence-Based",
    description:
      "Treatment strategies grounded in clinical research and proven patient outcomes",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Guides",
    description:
      "In-depth resources covering prevention, treatment, and healing for every wound type",
  },
  {
    icon: Users,
    title: "Patient Empowerment",
    description:
      "Tools and knowledge to take an active role in your healing journey",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Understanding the emotional and physical challenges of wound healing",
  },
];

const quickLinks = [
  {
    title: "Wound Types",
    href: "/wounds",
    description: "Explore different wound categories",
    icon: Target,
  },
  {
    title: "Treatment Strategies",
    href: "/treatments",
    description: "Evidence-based healing approaches",
    icon: Sparkles,
  },
  {
    title: "Product Recommendations",
    href: "/resources/products",
    description: "Quality wound care supplies",
    icon: CheckCircle2,
  },
  {
    title: "FAQs",
    href: "/resources/faqs",
    description: "Answers to common questions",
    icon: BookOpen,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with gradient and animations */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Badge
              className="mb-6 animate-in fade-in delay-200"
              variant="secondary"
            >
              Doctor-Authored Wound Care Education
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 delay-300">
              Expert Wound Care
              <span className="block text-primary mt-2 animate-in fade-in slide-in-from-bottom-4 delay-500">
                Education & Guidance
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 delay-700">
              Comprehensive, evidence-based resources created by Dr. Alvin May
              to empower your wound healing journey. From prevention to
              treatment, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 delay-1000">
              <Button size="lg" asChild className="group">
                <Link href="/wounds">
                  Explore Wound Types
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/treatments">View Treatments</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-in fade-in delay-1000">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Doctor-Authored</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Evidence-Based</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Patient-Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Wound Types */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Wound Types
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about different types of wounds and their specialized care
            requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {woundTypes.map((wound, index) => {
            const Icon = wound.icon;
            return (
              <Card
                key={wound.slug}
                className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className={`h-6 w-6 ${wound.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link href={`/wounds/${wound.slug}`}>{wound.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {wound.description}
                  </p>
                  <Link
                    href={`/wounds/${wound.slug}`}
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center group"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="/wounds">
              View All Wound Types
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why WoundWise - Enhanced */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose WoundWise?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted wound care education backed by medical expertise and
              clinical experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="text-center animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Dr. May - New Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">
                About the Author
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Dr. Alvin May
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dr. Alvin May is a dedicated wound care specialist with a
                passion for patient education and empowerment. With extensive
                surgical training and years of experience treating complex
                wounds, Dr. May understands the challenges patients face during
                their healing journey.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Through WoundWise, Dr. May shares evidence-based knowledge in an
                accessible format, helping patients become active participants
                in their own care. His published works, including &quot;Heal
                Your Wound&quot; and the &quot;Wound Healing Journal,&quot; have
                helped countless patients navigate the complexities of wound
                healing.
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn More About Dr. May
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Medical Expertise</h4>
                      <p className="text-sm text-muted-foreground">
                        Extensive surgical training with specialized focus on
                        wound care and healing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Published Author</h4>
                      <p className="text-sm text-muted-foreground">
                        Author of comprehensive patient guides on wound healing
                        and care
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Patient-Centered</h4>
                      <p className="text-sm text-muted-foreground">
                        Committed to empowering patients through education and
                        compassionate care
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand and manage wound care
              effectively
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {link.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {link.description}
                      </p>
                      <span className="text-sm font-medium text-primary inline-flex items-center">
                        Explore
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Updates / Blog Preview - New Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured Content
              </h2>
              <p className="text-muted-foreground">
                Essential wound care knowledge and resources
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Badge className="mb-4">Essential Guide</Badge>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  <Link href="/books">Heal Your Wound</Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Dr. May&apos;s comprehensive guide to understanding and
                  managing wounds. Learn evidence-based strategies for faster,
                  safer healing.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/books">
                    View Book Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Badge className="mb-4" variant="secondary">
                  Patient Tool
                </Badge>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  <Link href="/resources/journal">Wound Healing Journal</Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Track your healing progress with our structured journaling
                  system. Improve communication with your healthcare team.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/resources/journal">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="bg-linear-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Healing Journey Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access comprehensive guides on wound types, treatment strategies,
              and healing resources. Empower yourself with knowledge and take
              control of your recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/wounds">
                  Explore Wound Types
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Meet Dr. May</Link>
              </Button>
            </div>

            {/* Additional trust elements */}
            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by patients seeking reliable wound care information
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Regularly Updated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Medically Reviewed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
