import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { publishedArticles } from "@/data/articles";
import BlogSearch from "@/components/blog/BlogSearch";

export const metadata = {
  title: "Blog",
  description:
    "Explore practical AI study guides, tutorials, exam preparation strategies, and productivity resources for students.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="blog-hero">
          <div className="container">
            <span className="section-label blog-label">
              LEARVIX Blog
            </span>

            <h1>Practical AI Guides for Smarter Studying</h1>

            <p>
              Learn how to use AI tools, study techniques, and smarter workflows
              to improve your notes, revision, research, and productivity.
            </p>
          </div>
        </section>

        <section className="blog-listing">
          <div className="container">
            <div className="blog-filter">
              <span>Latest Articles</span>

              <p>
                Step-by-step guides built around real student problems.
              </p>
            </div>

            <BlogSearch articles={[...publishedArticles].reverse()} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}