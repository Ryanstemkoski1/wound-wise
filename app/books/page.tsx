import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, ExternalLink } from "lucide-react";
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
  title: "Books by Dr. Alvin May | WoundWise",
  description:
    "Explore Dr. Alvin May's published works: Heal Your Wound comprehensive guide and the Wound Healing Journal patient tracking tool.",
  keywords: [
    "Heal Your Wound",
    "Wound Healing Journal",
    "Dr. Alvin May",
    "wound care books",
  ],
};

export default function BooksPage() {
  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Books</span>
      </nav>

      {/* Header */}
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Books by Dr. Alvin May
        </h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive wound care resources designed to empower patients with
          knowledge and practical tools for their healing journey.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-8 lg:grid-cols-2 mb-16">
        {/* Heal Your Wound */}
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <Badge variant="default">Featured</Badge>
            </div>
            <CardTitle className="text-2xl mb-2">Heal Your Wound</CardTitle>
            <CardDescription className="text-base">
              A Comprehensive Guide to Understanding and Healing Chronic Wounds
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">What You&apos;ll Learn:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Understanding different types of chronic wounds (pressure
                    injuries, diabetic ulcers, venous ulcers, arterial wounds,
                    surgical wounds)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    How wounds heal and what can go wrong in the healing process
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Evidence-based treatment strategies and best practices
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Infection control, nutrition, offloading, and pain
                    management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>How to work effectively with your healthcare team</span>
                </li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Who This Book Is For:</h3>
              <p className="text-muted-foreground mb-4">
                Patients dealing with chronic wounds, family caregivers, and
                anyone seeking to understand wound care beyond basic medical
                jargon. Written in accessible language with real-world examples
                and practical analogies.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Purchase on Amazon
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <Link href="/wounds">Preview Content on WoundWise</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Wound Healing Journal */}
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <Badge variant="secondary">Companion Tool</Badge>
            </div>
            <CardTitle className="text-2xl mb-2">
              Wound Healing Journal
            </CardTitle>
            <CardDescription className="text-base">
              Track Your Progress and Communicate Effectively with Your
              Healthcare Team
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Features:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Structured daily wound tracking templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Space to document wound appearance, size, drainage, and pain
                    levels
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Treatment and dressing change logs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Medication and nutrition tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Questions and concerns section for healthcare visits
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Progress milestones and celebration pages</span>
                </li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Why Keep a Wound Journal:</h3>
              <p className="text-muted-foreground mb-4">
                Documenting your wound care journey helps identify patterns,
                track what works, and provide detailed information to your
                healthcare team. It empowers you to become an active participant
                in your healing process.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Purchase on Amazon
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <Link href="/resources/journal">
                  Learn More About Journaling
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Why These Books Matter */}
      <section className="max-w-4xl mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Why These Books Matter
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Chronic wounds can be overwhelming, confusing, and isolating.
                Medical terminology feels foreign, treatment plans seem
                complicated, and it&apos;s hard to know what questions to ask.
                These books bridge that gap.
              </p>
              <p>
                Dr. May has spent decades explaining wound care to patients,
                translating complex medical concepts into understandable
                language. These books distill that experience, providing the
                knowledge and tools you need to understand your condition,
                participate actively in your care, and work effectively with
                your healthcare team.
              </p>
              <p>
                Whether you&apos;re newly diagnosed with a chronic wound or have
                been struggling for months, these resources offer clarity, hope,
                and practical strategies for your healing journey.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="bg-muted/50 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          Explore Free Content on WoundWise
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Much of the content from these books is available for free on this
          website. Start learning about your wound type and treatment options
          today.
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
