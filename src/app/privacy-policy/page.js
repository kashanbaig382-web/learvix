import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the LEARVIX Privacy Policy and learn how information may be collected, used, and protected on our website.",
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
              This Privacy Policy explains how LEARVIX may collect, use, and
              protect information when you visit or interact with our website.
            </p>

            <div className="legal-content">
              <section>
                <h2>1. Information We May Collect</h2>
                <p>
                  We may collect information you voluntarily provide, such as
                  your name, email address, or message when you contact us.
                </p>
                <p>
                  We may also receive limited technical information such as
                  browser type, device type, pages visited, and general usage
                  data through analytics or similar website technologies.
                </p>
              </section>

              <section>
                <h2>2. How We Use Information</h2>
                <p>
                  Information may be used to respond to inquiries, improve our
                  content and website experience, understand how visitors use
                  LEARVIX, and maintain the security and operation of the site.
                </p>
              </section>

              <section>
                <h2>3. Cookies</h2>
                <p>
                  LEARVIX may use cookies or similar technologies to remember
                  preferences, understand website usage, and support analytics
                  or advertising features.
                </p>
              </section>

              <section>
                <h2>4. Advertising</h2>
                <p>
                  We may use third-party advertising services, including Google
                  AdSense, in the future. Advertising providers may use cookies
                  or similar technologies to serve and measure advertisements
                  according to their own policies.
                </p>
              </section>

              <section>
                <h2>5. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites or AI
                  tools. We are not responsible for the privacy practices,
                  content, or policies of external websites.
                </p>
              </section>

              <section>
                <h2>6. Data Security</h2>
                <p>
                  We take reasonable steps to protect information, but no
                  internet transmission or storage method can be guaranteed to
                  be completely secure.
                </p>
              </section>

              <section>
                <h2>7. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy when our website, services,
                  or legal requirements change. The latest version will be
                  published on this page.
                </p>
              </section>

              <section>
                <h2>8. Contact</h2>
                <p>
                  If you have questions about this Privacy Policy, please use
                  the contact page on LEARVIX.
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