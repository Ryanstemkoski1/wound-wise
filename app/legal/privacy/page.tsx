import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/common/section";

export const metadata: Metadata = {
  title: "Privacy Policy | WoundWise",
  description:
    "WoundWise privacy policy detailing how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <Section variant="narrow" className="py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">Privacy Policy</span>
        </nav>
      </Section>

      <Section variant="narrow">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Privacy Policy
        </h1>

        <Card className="bg-primary/5 border-primary/20 mb-8">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-primary mb-2">
                  Your Privacy Matters
                </p>
                <p className="text-sm text-muted-foreground">
                  WoundWise is committed to protecting your privacy. This policy
                  explains how we collect, use, and safeguard your information
                  when you visit our website.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3">
              Automatically Collected Information
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When you visit WoundWise, we may automatically collect certain
              information about your device and browsing activity, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent on each page</li>
              <li>Date and time of your visit</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This information is collected through standard web technologies
              such as cookies and web server logs. It helps us understand how
              visitors use our website and improve the user experience.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Information You Provide
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently, WoundWise is a purely educational website. We do not
              collect personal information such as names, email addresses, or
              medical information unless you voluntarily provide it through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Contact forms (if implemented in the future)</li>
              <li>Newsletter subscriptions (if implemented in the future)</li>
              <li>
                Comments or feedback submissions (if implemented in the future)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide, maintain, and improve our website</li>
              <li>Understand how visitors use our content</li>
              <li>
                Analyze trends and user behavior to enhance the user experience
              </li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              WoundWise uses cookies and similar tracking technologies to
              enhance your browsing experience. Cookies are small text files
              stored on your device that help us recognize your browser and
              remember your preferences.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">
              Types of Cookies We Use:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly. These cannot be disabled.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our website by collecting and reporting
                information anonymously.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Enable enhanced
                functionality and personalization, such as remembering your
                preferences.
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mt-4">
              You can control and manage cookies through your browser settings.
              Please note that disabling cookies may affect the functionality of
              this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>

            <h3 className="text-xl font-semibold mb-3">Amazon Associates</h3>
            <p className="text-muted-foreground leading-relaxed">
              WoundWise is a participant in the Amazon Associates Program, an
              affiliate advertising program designed to provide a means for
              sites to earn advertising fees by advertising and linking to
              Amazon.com. When you click on Amazon affiliate links and make a
              purchase, we may earn a small commission at no additional cost to
              you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Amazon may use cookies to track affiliate referrals. Please review
              Amazon&apos;s Privacy Policy for information about their data
              collection and use practices.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Analytics Services
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party analytics services (such as Google
              Analytics) to help us understand how visitors use our website.
              These services may collect information about your use of this and
              other websites, including your IP address, browser type, pages
              visited, and time spent on pages.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These third-party services have their own privacy policies
              addressing how they use such information. We encourage you to
              review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">External Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website contains links to external websites, including
              Amazon.com and other resources. We are not responsible for the
              privacy practices or content of these external sites. We encourage
              you to read the privacy policies of any website you visit through
              links on WoundWise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              WoundWise is not directed to children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us so we can
              delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable security measures to protect the
              information we collect. However, no method of transmission over
              the Internet or electronic storage is 100% secure. While we strive
              to protect your information, we cannot guarantee absolute
              security.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Given that WoundWise is primarily an educational resource and does
              not collect sensitive personal or medical information, the
              security risk is minimal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have certain rights regarding your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Access and Update:</strong> You can request access to
                any personal information we hold about you.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt out of receiving
                communications from us (if you have subscribed to any).
              </li>
              <li>
                <strong>Cookie Management:</strong> You can control cookies
                through your browser settings.
              </li>
              <li>
                <strong>Do Not Track:</strong> Some browsers have &quot;Do Not
                Track&quot; features. Currently, there is no industry standard
                for responding to such signals, and we do not respond to them at
                this time.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              California Privacy Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are a California resident, you may have additional rights
              under the California Consumer Privacy Act (CCPA), including the
              right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Know what personal information is collected about you</li>
              <li>
                Know whether your personal information is sold or disclosed and
                to whom
              </li>
              <li>Say no to the sale of personal information</li>
              <li>Access your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>
                Equal service and price, even if you exercise your privacy
                rights
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us using the information
              provided below. We do not sell personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will post the updated policy on this page
              and update the &quot;Last Updated&quot; date below.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we are protecting your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or concerns about this Privacy Policy or our
              privacy practices, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="text-sm">
                <strong>WoundWise</strong>
                <br />
                Email: privacy@woundwise.com
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
