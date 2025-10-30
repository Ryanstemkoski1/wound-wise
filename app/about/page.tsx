import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  GraduationCap,
  Heart,
  Award,
  BookOpen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <div className="container py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">About Dr. May</span>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          About Dr. Alvin May
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Board-certified general surgeon with decades of experience in wound
          care, dedicated to empowering patients through accessible,
          doctor-authored education.
        </p>
      </div>

      {/* Mission Statement */}
      <section className="mb-16">
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
      </section>

      {/* Background */}
      <section className="mb-16 max-w-4xl">
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
      </section>

      {/* What Sets WoundWise Apart */}
      <section className="mb-16">
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
      </section>

      {/* Published Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Published Works
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
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
      </section>

      {/* Philosophy */}
      <section className="mb-16 max-w-4xl">
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
      </section>

      {/* Call to Action */}
      <section className="bg-muted/50 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          Start Your Healing Journey
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Explore evidence-based wound care information and discover the
          resources you need to take an active role in your healing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/wounds">Explore Wound Types</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/treatments">View Treatment Strategies</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
