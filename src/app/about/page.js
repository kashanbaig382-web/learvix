import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About",
  description:
    "Learn more about LEARVIX and our mission to help students study smarter with practical AI tools, guides, and learning resources.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="about-hero">
          <div className="container about-container">
            <span className="section-label about-label">About LEARVIX</span>

            <h1>Helping Students Study Smarter With AI.</h1>

            <p>
              LEARVIX is an educational platform focused on practical AI tools,
              study strategies, and learning resources designed to help students
              learn more effectively.
            </p>
          </div>
        </section>

        <section className="about-content">
          <div className="container about-content-grid">
            <div>
              <span className="about-number">01</span>
              <h2>Our Mission</h2>
              <p>
                Our mission is to make AI easier and more useful for students.
                Instead of focusing on hype, we create practical guides that
                show how technology can support better learning, revision,
                research, and productivity.
              </p>
            </div>

            <div>
              <span className="about-number">02</span>
              <h2>What We Publish</h2>
              <p>
                LEARVIX publishes tutorials, AI tool guides, study workflows,
                exam preparation strategies, note-taking methods, and
                productivity resources built around real student problems.
              </p>
            </div>

            <div>
              <span className="about-number">03</span>
              <h2>Responsible AI</h2>
              <p>
                We believe AI should support learning rather than replace
                thinking. Students should always verify important information
                and follow the academic rules of their school, college, or
                university.
              </p>
            </div>
          </div>
        </section>
        <div className="about-item">
          <span>04</span>

          <div>
            <h2>Who Creates LEARVIX?</h2>

            <p>
              LEARVIX is created and maintained by Mirza Kashan, with a focus on
              practical ways students can use AI for studying, research, exam
              preparation, note-taking, and productivity.
            </p>

            <p>
              LEARVIX guides are designed around a simple principle: AI should help
              students understand, organize, and practice their learning—not replace
              their own thinking. Important information, tool features, and AI-generated
              outputs should always be verified when accuracy matters.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}