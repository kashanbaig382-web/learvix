import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-badge">AI-Powered Learning for Students</span>

          <h1>
            Study Smarter.
            <br />
            Learn Faster With <span>AI.</span>
          </h1>

          <p>
            Practical AI tools, study guides, exam strategies, and productivity
            resources designed to help students learn more effectively.
          </p>

          <div className="hero-actions">
            <Link href="/blog" className="primary-btn">
              Explore Study Guides
            </Link>

            <Link href="/ai-tools" className="secondary-btn">
              Discover AI Tools
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-badge">LEARVIX</div>

          <h3>Your AI Study Companion</h3>

          <div className="hero-feature">
            <span>01</span>
            <p>Turn notes into smarter study material</p>
          </div>

          <div className="hero-feature">
            <span>02</span>
            <p>Discover useful AI tools for students</p>
          </div>

          <div className="hero-feature">
            <span>03</span>
            <p>Prepare better for exams and assignments</p>
          </div>
        </div>
      </div>
    </section>
  );
}