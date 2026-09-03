import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the LEARVIX Privacy Policy and learn how information is collected, used, and protected on our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="legal-page">
          <div className="container legal-container">
            <span className="section-label legal-label">Legal</span>

            <h1>Privacy Policy</h1>

            <p className="legal-intro">
              This Privacy Policy explains how LEARVIX collects, uses, and
              protects information when you visit or interact with our website.
            </p>

            <div className="legal-content">
              <section>
                <h2>1. Information We Collect</h2>

                <p>
                  When you use our contact form, you may voluntarily provide
                  information such as your name, email address, and message.
                </p>

                <p>
                  Our website and hosting providers may also process limited
                  technical information required to operate and secure the
                  website, such as browser, device, request, or network-related
                  information.
                </p>
              </section>

              <section>
                <h2>2. How We Use Your Information</h2>

                <p>
                  Information submitted through LEARVIX may be used to respond
                  to inquiries, provide support, improve our website and
                  content, prevent abuse, and maintain the security and
                  operation of the website.
                </p>

                <p>
                  We do not sell personal information submitted through our
                  contact form.
                </p>
              </section>

              <section>
                <h2>3. Contact Form and Web3Forms</h2>

                <p>
                  LEARVIX uses Web3Forms, a third-party form processing service,
                  to receive messages submitted through our contact page.
                </p>

                <p>
                  When you submit the contact form, information including your
                  name, email address, and message is sent through Web3Forms so
                  that the message can be delivered to us.
                </p>

                <p>
                  Web3Forms processes this information according to its own
                  privacy practices and policies. You should avoid submitting
                  sensitive personal, financial, medical, or confidential
                  information through the contact form.
                </p>
              </section>

              <section>
                <h2>4. Cookies and Analytics</h2>

                <p>
                  LEARVIX may use cookies or similar technologies in the future
                  to understand website usage, remember preferences, measure
                  performance, or support analytics and advertising features.
                </p>

                <p>
                  If analytics or advertising services that use cookies are
                  introduced, this Privacy Policy may be updated to reflect
                  those services and their data practices.
                </p>
              </section>

              <section>
                <h2>5. Advertising</h2>

                <p>
                  LEARVIX may use third-party advertising services, including
                  Google AdSense, in the future. Advertising providers may use
                  cookies or similar technologies to serve, personalize, or
                  measure advertisements according to their own policies and
                  applicable requirements.
                </p>

                <p>
                  If advertising is enabled, we may update this Privacy Policy
                  and provide additional consent or disclosure mechanisms where
                  required.
                </p>
              </section>

              <section>
                <h2>6. Third-Party Links and Tools</h2>

                <p>
                  LEARVIX may contain links to third-party websites, AI tools,
                  applications, or services. We are not responsible for the
                  privacy practices, security, availability, or content of
                  external services.
                </p>

                <p>
                  We encourage users to review the privacy policies of
                  third-party services before providing personal information to
                  them.
                </p>
              </section>

              <section>
                <h2>7. Data Security</h2>

                <p>
                  We take reasonable measures to protect information handled
                  through LEARVIX. However, no method of transmission over the
                  internet or electronic storage can be guaranteed to be
                  completely secure.
                </p>
              </section>

              <section>
                <h2>8. Data Retention</h2>

                <p>
                  We retain contact information only for as long as reasonably
                  necessary to respond to inquiries, maintain relevant
                  communication records, or meet legitimate operational or
                  legal requirements.
                </p>

                <p>
                  Third-party services used by LEARVIX may maintain their own
                  retention periods according to their respective policies.
                </p>
              </section>

              <section>
                <h2>9. Children's Privacy</h2>

                <p>
                  LEARVIX provides educational content for students, but the
                  website is not intended to knowingly collect sensitive
                  personal information from children through the contact form.
                </p>

                <p>
                  Users should not submit unnecessary personal or sensitive
                  information when contacting us.
                </p>
              </section>

              <section>
                <h2>10. Changes to This Privacy Policy</h2>

                <p>
                  We may update this Privacy Policy when our website, services,
                  technology providers, advertising practices, or legal
                  requirements change. The latest version will be published on
                  this page.
                </p>
              </section>

              <section>
                <h2>11. Contact</h2>

                <p>
                  If you have questions about this Privacy Policy or how LEARVIX
                  handles information, please contact us through the LEARVIX
                  contact page.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}