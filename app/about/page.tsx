import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  GraduationCap,
  Heart,
  Award,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/section";

export const metadata: Metadata = {
  title: "About Dr. Alvin May | Wound Care Specialist",
  description:
    "Learn about Dr. Alvin May, board-certified general surgeon and wound care specialist. Discover his mission to empower patients with accessible wound care education.",
  keywords: [
    "Dr. Alvin May",
    "wound care specialist",
    "general surgeon",
    "wound healing expert",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Enhanced */}
      <Section
        variant="full"
        container={false}
        className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background border-b py-16 md:py-24"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 max-w-4xl animate-in fade-in">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">About Dr. May</span>
          </nav>

          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Badge className="mb-6" variant="secondary">
              Meet Your Educator
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Dr. Alvin May
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Board-certified general surgeon with decades of experience in
              wound care, dedicated to empowering patients through accessible,
              doctor-authored education.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/books">
                  View Published Works
                  <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section
        variant="full"
        container={false}
        className="bg-muted/50 py-12 border-b"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-in fade-in delay-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">1000s</div>
              <div className="text-sm text-muted-foreground">
                Patients Treated
              </div>
            </div>
            <div className="text-center animate-in fade-in delay-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">20+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center animate-in fade-in delay-500">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">2</div>
              <div className="text-sm text-muted-foreground">
                Published Books
              </div>
            </div>
            <div className="text-center animate-in fade-in delay-700">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">
                Patient-Focused
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Doctor Photo Section */}
      <Section variant="narrow">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/dr-may.png"
              alt="Dr. Alvin May - Board-certified wound care specialist"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet Dr. Alvin May</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A board-certified general surgeon with decades of experience in
                wound care, Dr. May has dedicated his career to helping patients
                understand and heal from chronic wounds.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Board-Certified Surgeon
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized training in general surgery with focus on wound
                    care
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Published Author</h3>
                  <p className="text-sm text-muted-foreground">
                    Author of &quot;Heal Your Wound&quot; and creator of the
                    Wound Healing Journal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Patient Advocate</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to empowering patients through education and
                    compassionate care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section variant="narrow">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              To empower patients with accessible, evidence-based wound care
              education that demystifies medical concepts and enables informed
              participation in their healing journey. Every patient deserves to
              understand their condition and feel confident in their care.
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Background */}
      <Section variant="narrow" className="pt-0">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Background & Experience
        </h2>
        <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
          <p className="leading-relaxed">
            Dr. May&apos;s journey in wound care began during his surgical
            training, where he developed skills to perform various operations
            and manage the complex wounds that result from surgical procedures.
            It was during this training that he learned from wound and ostomy
            nurses about approaching, fostering, and caring for chronic
            wounds—and the patients who have them.
          </p>
          <p className="leading-relaxed">
            While learning the craft of being a physician and surgeon, Dr. May
            received a masterclass in the art of wound care. What started as
            clinical training evolved into a passion that would eventually
            define his career, influencing his life in many unexpected ways.
          </p>
          <p className="leading-relaxed">
            Throughout his career, Dr. May has treated thousands of chronic
            wounds—from pressure injuries to diabetic foot ulcers, venous leg
            ulcers to surgical wounds. He has explained wound care concepts
            countless times to patients, always working to make complex medical
            information understandable and actionable.
          </p>
        </div>
      </Section>

      {/* What Sets WoundWise Apart */}
      <Section variant="default" className="pt-0">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          What Sets WoundWise Apart
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Doctor-Authored</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All content is written by Dr. May, ensuring medical accuracy and
                clinical relevance based on decades of hands-on experience
                treating thousands of patients.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Patient-Focused</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Content is written for patients, not medical professionals.
                Complex concepts are explained using clear language, analogies,
                and real-world examples that resonate.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Evidence-Based</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every recommendation is grounded in clinical evidence and
                current best practices, giving you confidence in the information
                you receive.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Published Works */}
      <Section variant="default" className="pt-0">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Published Works
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Heal Your Wound</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Comprehensive Patient Guide
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A comprehensive guide to understanding and healing chronic
                wounds, covering everything from pressure injuries to diabetic
                ulcers with practical, actionable advice.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/books">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Wound Healing Journal</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Patient Tracking Tool
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A structured journal designed to help patients track wound
                progress, document care routines, and communicate effectively
                with healthcare providers.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/books">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Philosophy */}
      <Section variant="narrow" className="pt-0">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Treatment Philosophy
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. May believes that wound healing requires a holistic
                approach—one that addresses not just the visible wound, but the
                whole person. Successful healing involves managing underlying
                medical conditions, optimizing nutrition, ensuring proper blood
                flow, controlling infection, and supporting the patient&apos;s
                overall well-being.
              </p>
              <p>
                He emphasizes that patients are active participants in their
                healing journey, not passive recipients of care. By
                understanding their condition and treatment, patients can make
                informed decisions, recognize complications early, and work
                collaboratively with their healthcare team for optimal outcomes.
              </p>
              <p>
                Above all, Dr. May is committed to hope. While some wounds are
                complex and challenging, proper understanding, appropriate
                treatment, and patient dedication can nearly always unlock
                healing potential and bring patients to a brighter, healthier
                future.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Call to Action */}
      <Section variant="default" className="pt-0">
        <div className="bg-muted/50 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Start Your Healing Journey
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore evidence-based wound care information and discover the
            resources you need to take an active role in your healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/wounds">Explore Wound Types</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/treatments">View Treatment Strategies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
