import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Use",
  description:
    "Read the terms and conditions for using the LEARVIX website, content, guides, and resources.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="legal-page">
          <div className="container legal-container">
            <span className="section-label legal-label">Legal</span>

            <h1>Terms of Use</h1>

            <p className="legal-intro">
              These Terms of Use explain the rules and conditions that apply
              when you access or use the LEARVIX website and its content.
            </p>

            <div className="legal-content">
              <section>
                <h2>1. Use of LEARVIX</h2>
                <p>
                  LEARVIX provides educational information, study guides,
                  tutorials, and resources related to AI-powered learning and
                  student productivity.
                </p>
                <p>
                  You agree to use the website lawfully and in a way that does
                  not interfere with the website or other users.
                </p>
              </section>

              <section>
                <h2>2. Educational Purpose</h2>
                <p>
                  Content published on LEARVIX is provided for general
                  educational and informational purposes. It should not be
                  treated as a substitute for instructions from your school,
                  college, university, teacher, or other qualified professional.
                </p>
              </section>

              <section>
                <h2>3. Responsible Use of AI</h2>
                <p>
                  Students are responsible for following the academic integrity
                  policies and AI usage rules of their educational institution.
                  AI-generated information should be reviewed and verified
                  before being used for study or academic work.
                </p>
              </section>

              <section>
                <h2>4. Intellectual Property</h2>
                <p>
                  Unless otherwise stated, original LEARVIX website content,
                  branding, written guides, and design elements are protected
                  by applicable intellectual property laws.
                </p>
              </section>

              <section>
                <h2>5. Third-Party Services</h2>
                <p>
                  LEARVIX may reference or link to third-party AI tools,
                  websites, applications, and services. We do not control these
                  services and are not responsible for their availability,
                  content, policies, pricing, or actions.
                </p>
              </section>

              <section>
                <h2>6. Accuracy of Information</h2>
                <p>
                  We aim to provide useful and accurate information, but
                  technologies and AI tools can change quickly. We do not
                  guarantee that every piece of information will always be
                  complete, current, or error-free.
                </p>
              </section>

              <section>
                <h2>7. Changes to These Terms</h2>
                <p>
                  These terms may be updated as LEARVIX develops. Continued use
                  of the website after changes are published means the latest
                  terms will apply.
                </p>
              </section>

              <section>
                <h2>8. Contact</h2>
                <p>
                  Questions regarding these Terms of Use can be submitted
                  through our contact page.
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