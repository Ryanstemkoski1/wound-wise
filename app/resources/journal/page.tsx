import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Download,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Wound Healing Journal | Track Your Healing Progress | WoundWise",
  description:
    "Learn about the benefits of wound journaling and how Dr. May's Wound Healing Journal can help you track your healing progress and communicate with your healthcare team.",
  keywords: [
    "wound journal",
    "healing tracker",
    "wound care documentation",
    "patient tracking",
    "wound healing progress",
  ],
};

export default function JournalPage() {
  return (
    <div className="container py-10">
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
        <span className="text-foreground font-medium">
          Wound Healing Journal
        </span>
      </nav>

      {/* Hero Section */}
      <div className="max-w-3xl mb-12">
        <Badge className="mb-4">Patient Empowerment Tool</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          The Wound Healing Journal
        </h1>
        <p className="text-xl text-muted-foreground">
          Take an active role in your healing journey. Document your wound care,
          track your progress, and communicate more effectively with your
          healthcare team.
        </p>
      </div>

      {/* Why Keep a Journal */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Why Keep a Wound Healing Journal?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                Track Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Monitor changes in wound size, appearance, and healing over time.
              Documenting your wound&apos;s progression helps you and your
              healthcare team identify what&apos;s working and what may need
              adjustment.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                Improve Communication
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Provide your healthcare team with detailed, accurate information
              about your wound care routine, symptoms, and concerns. Better
              communication leads to better care.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                Identify Patterns
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Recognize patterns between your activities, nutrition,
              medications, and wound healing. Understanding these connections
              can help you make informed decisions about your care.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                Stay Motivated
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Seeing your progress documented can provide encouragement during
              challenging times. Even small improvements are worth celebrating
              and can keep you motivated to continue your care routine.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Track */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What Should You Track?</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-primary">
                  Daily Documentation
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wound appearance (color, size, drainage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pain levels throughout the day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dressing changes and products used</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Signs of infection (redness, warmth, odor)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Activities and mobility levels</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-primary">
                  Overall Health Factors
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Nutrition and fluid intake</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Medications and supplements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sleep quality and duration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Stress levels and emotional well-being</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Questions or concerns for your healthcare provider
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dr. May's Journal */}
      <section className="mb-12">
        <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">
                Dr. May&apos;s Wound Healing Journal
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              A comprehensive, physician-designed journal specifically created
              to help wound care patients track their healing journey. This
              structured journal includes:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Daily Tracking Pages</p>
                  <p className="text-sm text-muted-foreground">
                    Structured prompts for consistent documentation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Wound Assessment Charts</p>
                  <p className="text-sm text-muted-foreground">
                    Visual guides for measuring and describing wounds
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Medication Trackers</p>
                  <p className="text-sm text-muted-foreground">
                    Keep tabs on prescriptions and supplements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Appointment Organizers</p>
                  <p className="text-sm text-muted-foreground">
                    Prepare questions and record provider instructions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Nutrition Logs</p>
                  <p className="text-sm text-muted-foreground">
                    Monitor protein and nutrient intake for healing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Educational Tips</p>
                  <p className="text-sm text-muted-foreground">
                    Wound care guidance throughout the journal
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a
                  href="https://www.amazon.com/dp/PLACEHOLDER?tag=woundwise-20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purchase on Amazon
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/books">
                  Learn More About the Journal
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Template */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Free Downloadable Template</h2>
        <Card className="bg-accent/10 border-accent/30">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">
                  Start Journaling Today
                </h3>
                <p className="text-muted-foreground mb-4">
                  Download our free basic wound tracking template to get started
                  with documenting your healing journey. This simple PDF
                  template includes essential tracking fields for daily wound
                  care documentation.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Note: The free template provides basic tracking. Dr.
                  May&apos;s full Wound Healing Journal offers comprehensive
                  features, educational content, and structured guidance for
                  long-term wound management.
                </p>
              </div>
              <div className="shrink-0">
                <Button size="lg" variant="secondary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Free Template
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Coming Soon
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tips for Effective Journaling */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Tips for Effective Journaling
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Be Consistent</h3>
              <p className="text-sm text-muted-foreground">
                Document your wound at the same time each day, ideally during
                dressing changes. Consistency helps you notice subtle changes
                and patterns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Use Photos</h3>
              <p className="text-sm text-muted-foreground">
                Take photos of your wound regularly (with permission from your
                healthcare provider). Visual records can reveal progress
                that&apos;s hard to describe in words.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Be Honest</h3>
              <p className="text-sm text-muted-foreground">
                Record what actually happened, not what you think should have
                happened. Honesty helps your healthcare team provide the best
                care.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Note Everything</h3>
              <p className="text-sm text-muted-foreground">
                Even seemingly unrelated factors (stress, illness, travel) can
                affect wound healing. Document anything that might be relevant.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Bring It to Appointments</h3>
              <p className="text-sm text-muted-foreground">
                Share your journal with your healthcare team. It provides
                valuable context they wouldn&apos;t otherwise have about your
                day-to-day healing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Celebrate Progress</h3>
              <p className="text-sm text-muted-foreground">
                Note positive changes and milestones, no matter how small.
                Recognizing progress keeps you motivated through the healing
                process.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">
                <Link
                  href="/books"
                  className="hover:text-primary transition-colors"
                >
                  Dr. May&apos;s Books
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore both &quot;Heal Your Wound&quot; and the &quot;Wound
                Healing Journal&quot; for comprehensive wound care education and
                tracking.
              </p>
              <Link
                href="/books"
                className="text-primary hover:underline text-sm font-medium"
              >
                View Books →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">
                <Link
                  href="/wounds"
                  className="hover:text-primary transition-colors"
                >
                  Understanding Your Wound
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about different wound types and what specific factors you
                should monitor for your wound type.
              </p>
              <Link
                href="/wounds"
                className="text-primary hover:underline text-sm font-medium"
              >
                Explore Wound Types →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">
                <Link
                  href="/treatments"
                  className="hover:text-primary transition-colors"
                >
                  Treatment Strategies
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Discover evidence-based treatment approaches to document and
                discuss with your healthcare team.
              </p>
              <Link
                href="/treatments"
                className="text-primary hover:underline text-sm font-medium"
              >
                View Treatments →
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
