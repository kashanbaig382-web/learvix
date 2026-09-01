import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <span>Start Learning Smarter</span>

          <h2>Use AI as a Better Study Partner.</h2>

          <p>
            Explore practical guides, AI tools, and study strategies designed
            to help you learn faster and work smarter.
          </p>

          <div className="cta-actions">
            <Link href="/blog" className="primary-btn">
              Explore Guides
            </Link>

            <Link href="/ai-tools" className="secondary-btn">
              Browse AI Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}