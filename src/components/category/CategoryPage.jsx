import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { publishedArticles } from "@/data/articles";

export default function CategoryPage({
  label,
  title,
  description,
  articleCategory,
}) {

  const relatedArticles = publishedArticles.filter(
  (article) => article.category === articleCategory
);

  return (
    <>
      <Navbar />

      <main>
        <section className="category-hero">
          <div className="container category-page-container">
            <span className="category-page-label">{label}</span>

            <h1>{title}</h1>

            <p>{description}</p>
          </div>
        </section>

        <section className="category-articles">
          <div className="container">
            <div className="category-articles-header">
              <div>
                <span>Explore Guides</span>
                <h2>{label}</h2>
              </div>

              <Link href="/blog">View All Articles →</Link>
            </div>

            {relatedArticles.length > 0 ? (
              <div className="blog-grid">
                {relatedArticles.map((article) => (
                  <article className="blog-card" key={article.slug}>
                    <div className="blog-card-meta">
                      <span>{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2>
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p>{article.description}</p>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="read-article"
                    >
                      Read Guide →
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-category">
                <span>New guides are coming soon.</span>

                <h3>We're preparing useful resources for students.</h3>

                <p>
                  In the meantime, explore our latest study guides and practical
                  AI tutorials.
                </p>

                <Link href="/blog" className="primary-btn">
                  Explore Blog
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}