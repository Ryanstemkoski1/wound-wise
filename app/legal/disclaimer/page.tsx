import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/common/section";

export const metadata: Metadata = {
  title: "Medical Disclaimer | WoundWise",
  description:
    "Important medical disclaimer and terms of use for WoundWise educational content.",
};

export default function DisclaimerPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <Section variant="narrow" className="py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">
            Medical Disclaimer
          </span>
        </nav>
      </Section>

      <Section variant="narrow">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Medical Disclaimer
        </h1>

        <Card className="bg-accent/50 border-accent mb-8">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-accent-foreground shrink-0 mt-1" />
              <div className="space-y-2">
                <p className="font-semibold text-accent-foreground">
                  Important: This Website Provides Educational Information Only
                </p>
                <p className="text-sm text-accent-foreground/90">
                  The information on this website is not a substitute for
                  professional medical advice, diagnosis, or treatment. Always
                  consult your physician or qualified healthcare provider.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Purpose of This Website</h2>
            <p className="text-muted-foreground leading-relaxed">
              WoundWise is an educational platform designed to help patients
              better understand chronic wounds and their treatment. The content
              is based on Dr. Alvin May&apos;s clinical experience and published
              works, including &quot;Heal Your Wound&quot; and the &quot;Wound
              Healing Journal.&quot;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This website aims to empower patients with knowledge, but it
              cannot replace individualized medical care from qualified
              healthcare professionals who can examine you, order appropriate
              tests, and develop personalized treatment plans.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Not Medical Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information provided on WoundWise is for general educational
              purposes only and should not be considered medical advice. Nothing
              on this website should be used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Diagnose any medical condition</li>
              <li>Replace consultation with a licensed healthcare provider</li>
              <li>
                Determine specific treatment approaches for your individual
                situation
              </li>
              <li>Make decisions about starting or stopping medications</li>
              <li>Substitute for emergency medical care</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Always Consult Your Healthcare Provider
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every patient is unique, and wound care must be individualized
              based on your specific medical history, current health conditions,
              medications, and wound characteristics. Always consult with your
              physician, wound care specialist, or other qualified healthcare
              provider before:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Starting any new treatment or therapy</li>
              <li>Changing your current wound care routine</li>
              <li>Using any products mentioned on this website</li>
              <li>Making decisions about your medical care</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              When to Seek Immediate Medical Attention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Seek immediate medical attention if you experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Signs of serious infection (fever, chills, rapidly spreading
                redness)
              </li>
              <li>Severe pain not controlled by prescribed medications</li>
              <li>Sudden worsening of wound condition</li>
              <li>Foul-smelling drainage or pus</li>
              <li>Red streaking from the wound</li>
              <li>Any symptoms that concern you</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Do not delay seeking medical care based on information you read on
              this website. If you think you have a medical emergency, call 911
              or go to the nearest emergency department immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              No Doctor-Patient Relationship
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Using this website does not create a doctor-patient relationship
              between you and Dr. Alvin May or any other healthcare provider.
              The information provided is general in nature and cannot address
              your specific medical situation. For personalized medical advice,
              you must establish a formal relationship with a healthcare
              provider who can examine you and review your medical history.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Accuracy and Currency of Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide accurate, up-to-date information based
              on current medical knowledge and Dr. May&apos;s clinical
              experience, medical science evolves constantly. Information that
              was accurate when published may become outdated as new research
              emerges. We cannot guarantee that all information on this website
              is complete, accurate, or current.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Treatment recommendations and medical guidelines change over time.
              Always verify information with your healthcare provider and follow
              their guidance, which will be based on the most current evidence
              and your individual needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Product Information and Affiliate Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may recommend specific wound care products and
              include affiliate links (primarily through Amazon Associates).
              These recommendations are based on Dr. May&apos;s clinical
              experience and are provided for educational purposes only.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Product recommendations are general suggestions and may not be
              appropriate for your specific wound or medical condition. Before
              using any product, consult your healthcare provider to ensure
              it&apos;s suitable for your situation. We earn a commission on
              qualifying purchases through affiliate links, but this does not
              influence our product recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              WoundWise, Dr. Alvin May, and all associated parties are not
              liable for any damages arising from your use of this website or
              reliance on information provided herein. This includes, but is not
              limited to, direct, indirect, incidental, consequential, or
              punitive damages.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By using this website, you acknowledge that you understand and
              accept this disclaimer and agree to hold WoundWise and Dr. Alvin
              May harmless from any claims arising from your use of the
              information provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">External Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may contain links to external sites. We are not
              responsible for the content, accuracy, or practices of external
              websites. Links are provided for convenience and do not constitute
              endorsement of the linked sites or their content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Questions or Concerns</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about your wound or medical condition,
              please contact your healthcare provider directly. For questions
              about this website or its content, please use our contact form.
            </p>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-muted-foreground italic">
              Last Updated: January 2024
            </p>
          </section>
        </div>
      </Section>
    </div>
  );
}
