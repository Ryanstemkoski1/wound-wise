import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/common/section";

export const metadata: Metadata = {
  title: "Terms of Service | WoundWise",
  description:
    "Terms of service and conditions for using the WoundWise educational website.",
};

export default function TermsPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <Section variant="narrow" className="py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">Terms of Service</span>
        </nav>
      </Section>

      <Section variant="narrow">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Terms of Service
        </h1>

        <Card className="bg-accent/10 border-accent/30 mb-8">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <FileText className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-accent-foreground mb-2">
                  Agreement to Terms
                </p>
                <p className="text-sm text-muted-foreground">
                  By accessing and using WoundWise, you agree to be bound by
                  these Terms of Service. Please read them carefully before
                  using our website.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the WoundWise website (the &quot;Website&quot;),
              operated by Dr. Alvin May (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;). By accessing or using the Website, you agree to
              be bound by these Terms and our{" "}
              <Link
                href="/legal/privacy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you do not agree to these Terms, please do not use the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              2. Educational Purpose Only
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              WoundWise is an educational resource designed to provide general
              information about wound care and healing. The content on this
              Website is for informational and educational purposes only and is
              not intended to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Replace professional medical advice, diagnosis, or treatment
              </li>
              <li>Create a doctor-patient relationship</li>
              <li>
                Provide specific medical recommendations for your individual
                situation
              </li>
              <li>
                Serve as a substitute for consultation with qualified healthcare
                professionals
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Always seek the advice of your physician or other qualified health
              provider with any questions you may have regarding a medical
              condition. Never disregard professional medical advice or delay
              seeking it because of something you have read on this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Use of the Website</h2>

            <h3 className="text-xl font-semibold mb-3">Permitted Use</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may use the Website for personal, non-commercial, educational
              purposes. You may read, download, and print content from the
              Website for your own reference, subject to the restrictions below.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Prohibited Conduct
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When using the Website, you agree NOT to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use the Website for any illegal or unauthorized purpose</li>
              <li>
                Reproduce, distribute, modify, or create derivative works from
                our content without permission
              </li>
              <li>
                Remove copyright notices or other proprietary markings from
                content
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                Website
              </li>
              <li>
                Interfere with or disrupt the Website or servers/networks
                connected to it
              </li>
              <li>
                Use automated systems (bots, scrapers) to access the Website
                without permission
              </li>
              <li>
                Impersonate any person or entity or misrepresent your
                affiliation with any person or entity
              </li>
              <li>
                Collect or store personal data about other users without their
                consent
              </li>
              <li>
                Use the Website to distribute viruses, malware, or other harmful
                computer code
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              4. Intellectual Property Rights
            </h2>

            <h3 className="text-xl font-semibold mb-3">Ownership</h3>
            <p className="text-muted-foreground leading-relaxed">
              All content on this Website, including but not limited to text,
              graphics, images, logos, articles, educational materials, and
              software, is the property of WoundWise or its content suppliers
              and is protected by United States and international copyright,
              trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Content from Published Works
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Much of the educational content on this Website is derived from
              Dr. Alvin May&apos;s published books, including &quot;Heal Your
              Wound&quot; and the &quot;Wound Healing Journal.&quot; These works
              are protected by copyright. The Website makes portions of this
              content available for free as an educational service, but this
              does not grant you rights to reproduce or distribute the full
              works.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Limited License</h3>
            <p className="text-muted-foreground leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable license to
              access and use the Website for personal, educational purposes.
              This license does not include any right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Resell or make commercial use of the Website or its content
              </li>
              <li>
                Modify or make derivative works of the Website or its content
              </li>
              <li>
                Download (other than page caching) or copy any content for
                commercial purposes
              </li>
              <li>Use data mining, robots, or similar data gathering tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              5. Affiliate Links and Third-Party Products
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              WoundWise participates in the Amazon Associates Program and may
              contain affiliate links to products on Amazon.com and other
              retailers. If you click on these links and make a purchase, we may
              earn a small commission at no additional cost to you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Product recommendations are based on our knowledge and experience
              in wound care. However:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>We do not manufacture, sell, or ship any products</li>
              <li>
                We are not responsible for the quality, safety, or effectiveness
                of third-party products
              </li>
              <li>
                Product availability, pricing, and specifications are subject to
                change
              </li>
              <li>
                Always consult your healthcare provider before using any wound
                care product
              </li>
              <li>
                We do not warrant that products will be suitable for your
                specific needs
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. External Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Website may contain links to third-party websites or
              resources. These links are provided for your convenience only. We
              do not endorse and are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                The content, accuracy, or opinions expressed on external
                websites
              </li>
              <li>The privacy practices of external websites</li>
              <li>
                Any damages or losses caused by your use of external websites
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Your use of third-party websites is at your own risk and subject
              to their terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              THE WEBSITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND
              &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              NON-INFRINGEMENT, OR THAT USE OF THE WEBSITE WILL BE UNINTERRUPTED
              OR ERROR-FREE.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                The information on the Website is accurate, complete, or current
              </li>
              <li>
                The Website will be available at any particular time or location
              </li>
              <li>Defects or errors will be corrected</li>
              <li>
                The Website is free of viruses or other harmful components
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, WOUNDWISE, DR. ALVIN MAY,
              AND OUR AFFILIATES, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR
              OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your use or inability to use the Website</li>
              <li>
                Any information, advice, or recommendations obtained from the
                Website
              </li>
              <li>
                Health outcomes or medical decisions based on information from
                the Website
              </li>
              <li>
                Use of any products or services obtained through affiliate links
              </li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any other matter relating to the Website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless WoundWise, Dr.
              Alvin May, and our affiliates, employees, and agents from any
              claims, liabilities, damages, losses, and expenses, including
              reasonable attorneys&apos; fees, arising out of or in any way
              connected with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your use of the Website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              10. Modifications to the Website and Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the
              Website (or any part thereof) at any time without notice. We may
              also modify these Terms at any time by posting updated Terms on
              the Website.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your continued use of the Website after any changes constitutes
              acceptance of the new Terms. It is your responsibility to review
              these Terms periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the United States and the State of [Your State],
              without regard to its conflict of law provisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any legal action or proceeding relating to your access to, or use
              of, the Website shall be instituted in a state or federal court in
              [Your County and State]. You agree to submit to the jurisdiction
              of such courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall continue in full
              force and effect. The invalid or unenforceable provision shall be
              deemed modified to the extent necessary to make it valid and
              enforceable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, together with our Privacy Policy and Medical
              Disclaimer, constitute the entire agreement between you and
              WoundWise regarding your use of the Website and supersede all
              prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms of Service, please contact
              us at:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="text-sm">
                <strong>WoundWise</strong>
                <br />
                Email: legal@woundwise.com
                <br />
                Website:{" "}
                <Link href="/" className="text-primary hover:underline">
                  www.woundwise.com
                </Link>
              </p>
            </div>
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
