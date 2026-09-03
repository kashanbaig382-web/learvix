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
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
    },
  };
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
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

  const wasUpdated = article.updatedAt !== article.publishedAt;

  const articleUrl = `https://learvix-ai.vercel.app/blog/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "LEARVIX",
      url: "https://learvix-ai.vercel.app",
    },
  };

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

              <div className="article-author-meta">
                <span>
                  By <strong>{article.author}</strong>
                </span>

                <span>
                  Published {formatDate(article.publishedAt)}
                </span>

                {wasUpdated && (
                  <span>
                    Updated {formatDate(article.updatedAt)}
                  </span>
                )}
              </div>
            </header>

            <ArticleContent content={content} />
          </div>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
          }}
        />
      </main>

      <Footer />
    </>
  );
}