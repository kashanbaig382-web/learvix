import Link from "next/link";
import { articles } from "@/data/articles";
import { publishedArticles } from "@/data/articles";

export default function LatestArticles() {
    return (
        <section className="latest-section">
            <div className="container">
                <div className="latest-header">
                    <div className="section-heading latest-heading">
                        <span>Latest Guides</span>
                        <h2>Learn Something Useful Today</h2>
                        <p>
                            Practical AI tutorials and study strategies designed to solve
                            real student problems.
                        </p>
                    </div>

                    <Link href="/blog" className="view-all-link">
                        View All Articles →
                    </Link>
                </div>

                <div className="articles-grid">
                    {publishedArticles.slice(0, 3).map((article) => (
                        <article className="article-card" key={article.slug}>
                            <div className="article-card-top">
                                <span className="article-category">{article.category}</span>
                                <span className="article-read-time">{article.readTime}</span>
                            </div>

                            <h3>
                                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                            </h3>

                            <p>{article.description}</p>

                            <Link href={`/blog/${article.slug}`} className="read-article">
                                Read Guide →
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}