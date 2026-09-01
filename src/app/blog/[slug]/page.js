import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/articles";
import { articleContent } from "@/data/articleContent";
import ArticleContent from "@/components/blog/ArticleContent";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
  title: article.title,
  description: article.description,

  alternates: {
    canonical: `/blog/${article.slug}`,
  },

  openGraph: {
    title: article.title,
    description: article.description,
    type: "article",
    url: `/blog/${article.slug}`,
  },
};
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const content = articleContent[slug];

  if (!content) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        <article className="single-article">
          <div className="container article-container">
            <Link href="/blog" className="back-to-blog">
              ← Back to Blog
            </Link>

            <header className="article-header">
              <div className="article-meta">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>

              <h1>{article.title}</h1>

              <p>{article.description}</p>
            </header>
            <ArticleContent content={content} />
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}