import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="not-found-page">
        <div className="container not-found-container">
          <span className="not-found-code">404</span>

          <h1>Page Not Found</h1>

          <p>
            The page you're looking for may have been moved, removed, or the
            link may be incorrect.
          </p>

          <div className="not-found-actions">
            <Link href="/" className="primary-btn">
              Back to Home
            </Link>

            <Link href="/blog" className="secondary-btn">
              Explore Guides
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}