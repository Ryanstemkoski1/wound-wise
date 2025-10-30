import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us | WoundWise",
  description:
    "Get in touch with WoundWise. Contact us with questions about wound care education or our resources.",
};

export default function ContactPage() {
  return (
    <div className="container py-10 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Contact</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
      <p className="text-xl text-muted-foreground mb-8">
        We&apos;re here to help you on your healing journey. Reach out with
        questions, feedback, or suggestions.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Email Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For general inquiries, questions about our content, or
                  feedback.
                </p>
                <a
                  href="mailto:info@woundwise.com"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  info@woundwise.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Based in the United States
                  <br />
                  Serving patients worldwide through online education
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Important Notice */}
      <Card className="bg-destructive/10 border-destructive/30 mb-10">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-destructive mb-3">
            Important: This Is Not Emergency Care
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            <strong>WoundWise is an educational resource only.</strong> We do
            not provide medical advice, diagnosis, or treatment through this
            website or via email.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>
              If you have a medical emergency or urgent wound concern:
            </strong>
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mt-2">
            <li>Call 911 or go to your nearest emergency room immediately</li>
            <li>Contact your healthcare provider or wound care specialist</li>
            <li>Do not delay seeking professional medical care</li>
          </ul>
        </CardContent>
      </Card>

      {/* What We Can Help With */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What We Can Help With</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">General Questions</h3>
              <p className="text-sm text-muted-foreground">
                Questions about our educational content, resources, or how to
                use the website effectively.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Feedback & Suggestions</h3>
              <p className="text-sm text-muted-foreground">
                Your feedback helps us improve. Share your thoughts on our
                content, suggest topics you&apos;d like to see covered, or
                report any website issues.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Book Inquiries</h3>
              <p className="text-sm text-muted-foreground">
                Questions about Dr. May&apos;s published books, &quot;Heal Your
                Wound&quot; and the &quot;Wound Healing Journal,&quot; including
                purchasing and availability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">
                Media & Partnership Inquiries
              </h3>
              <p className="text-sm text-muted-foreground">
                For media requests, speaking engagements, collaborations, or
                partnership opportunities, please email us with details about
                your inquiry.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Connect on Social Media */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
        <p className="text-muted-foreground mb-6">
          Follow WoundWise on social media for wound care tips, updates, and
          educational content.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://facebook.com/woundwise"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://twitter.com/woundwise"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://instagram.com/woundwise"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://youtube.com/@woundwise"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Youtube className="h-5 w-5" />
              YouTube
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4 italic">
          Note: Social media links are placeholders. Actual accounts to be
          established.
        </p>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Quick Answers</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">
                Can I get medical advice through email?
              </h3>
              <p className="text-sm text-muted-foreground">
                No. WoundWise provides general educational information only. We
                cannot provide personalized medical advice, diagnose conditions,
                or recommend specific treatments for your situation. Please
                consult your healthcare provider.
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">
                How do I purchase Dr. May&apos;s books?
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Dr. May&apos;s books are available on Amazon and other major
                retailers. Visit our{" "}
                <Link href="/books" className="text-primary hover:underline">
                  Books page
                </Link>{" "}
                for purchasing links and more information.
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">
                Are the product recommendations paid endorsements?
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                WoundWise participates in the Amazon Associates Program. We may
                earn a small commission when you purchase products through our
                affiliate links, at no cost to you. Our recommendations are
                based on clinical knowledge and wound care expertise. See our{" "}
                <Link
                  href="/legal/disclaimer"
                  className="text-primary hover:underline"
                >
                  Medical Disclaimer
                </Link>{" "}
                for more information.
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">
                Can I reuse content from WoundWise?
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Content on WoundWise is protected by copyright. You may read and
                reference it for personal use, but reproduction or commercial
                use requires permission. Please review our{" "}
                <Link
                  href="/legal/terms"
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                for details, or contact us to discuss licensing.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Response Time */}
      <Card className="bg-muted">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-2">Response Time</h3>
          <p className="text-sm text-muted-foreground">
            We strive to respond to all inquiries within 2-3 business days.
            During busy periods, response times may be longer. Thank you for
            your patience.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            For the most comprehensive answers to common questions, visit our{" "}
            <Link
              href="/resources/faqs"
              className="text-primary hover:underline font-medium"
            >
              Frequently Asked Questions
            </Link>{" "}
            page.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
