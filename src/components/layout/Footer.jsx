import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            LEARVIX
          </Link>

          <p>
            Practical AI tools, study guides, and learning resources to help
            students study smarter.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <Link href="/ai-tools">AI Tools</Link>
          <Link href="/study-guides">Study Guides</Link>
          <Link href="/exam-prep">Exam Prep</Link>
          <Link href="/notes-pdfs">Notes & PDFs</Link>
        </div>

        <div className="footer-column">
          <h4>LEARVIX</h4>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 LEARVIX. All rights reserved.</p>
        <p>Study Smarter With AI.</p>
      </div>
    </footer>
  );
}