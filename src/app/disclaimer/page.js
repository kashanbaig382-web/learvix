import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the LEARVIX disclaimer regarding educational content, AI tools, external services, and academic use.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="legal-page">
          <div className="container legal-container">
            <span className="section-label legal-label">Legal</span>

            <h1>Disclaimer</h1>

            <p className="legal-intro">
              LEARVIX provides educational information and resources designed
              to help students understand and use AI more effectively.
            </p>

            <div className="legal-content">
              <section>
                <h2>Educational Information</h2>
                <p>
                  The information on LEARVIX is provided for general educational
                  and informational purposes only. We do not guarantee specific
                  academic results from using our guides, tools, or strategies.
                </p>
              </section>

              <section>
                <h2>AI-Generated Information</h2>
                <p>
                  Artificial intelligence tools can produce inaccurate,
                  incomplete, or misleading information. Students should verify
                  important facts using reliable sources before relying on AI
                  output.
                </p>
              </section>

              <section>
                <h2>Academic Integrity</h2>
                <p>
                  LEARVIX encourages responsible use of AI. Users are
                  responsible for understanding and following the academic
                  integrity rules and AI policies of their school, college,
                  university, or course.
                </p>
              </section>

              <section>
                <h2>Third-Party Tools and Websites</h2>
                <p>
                  We may discuss or link to third-party AI tools, websites, and
                  services. LEARVIX does not control these services and cannot
                  guarantee their accuracy, availability, security, pricing, or
                  future functionality.
                </p>
              </section>

              <section>
                <h2>Affiliate Disclosure</h2>
                <p>
                  LEARVIX may use affiliate links in the future. If you purchase
                  or sign up through an affiliate link, we may receive a
                  commission at no additional cost to you. Affiliate
                  relationships will not change our goal of providing useful
                  information to readers.
                </p>
              </section>

              <section>
                <h2>Changes</h2>
                <p>
                  This disclaimer may be updated as LEARVIX grows, introduces
                  new features, or begins working with additional third-party
                  services.
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