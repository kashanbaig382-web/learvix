import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { publishedArticles } from "@/data/articles";

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
                        <span className="section-label blog-label">LEARVIX Blog</span>

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
                            <p>Step-by-step guides built around real student problems.</p>
                        </div>

                        <div className="blog-grid">
                            {publishedArticles.map((post) => (
                                <article className="blog-card" key={post.title}>
                                    <div className="blog-card-meta">
                                        <span>{post.category}</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h2>
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>

                                    <p>{post.description}</p>

                                    <Link href={`/blog/${post.slug}`} className="read-article">
                                        Read Guide →
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}