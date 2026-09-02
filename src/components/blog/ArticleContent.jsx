import Link from "next/link";

export default function ArticleContent({ content }) {
  const introduction = Array.isArray(content.introduction)
    ? content.introduction
    : content.introduction
      ? [content.introduction]
      : [];

  return (
    <div className="article-content">
      {introduction.map((paragraph, index) => (
        <p className="article-introduction" key={index}>
          {paragraph}
        </p>
      ))}

      {content.sections.map((section, sectionIndex) => (
        <section
          className="article-section"
          key={`${section.heading}-${sectionIndex}`}
        >
          <h2>{section.heading}</h2>

          {section.paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {section.list && (
            <ul className="article-list">
              {section.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {section.prompt && (
            <div className="article-prompt">
              <span>AI Prompt</span>
              <p>{section.prompt}</p>
            </div>
          )}

          {section.example && (
            <div className="article-example">
              <span>Example</span>
              <p>{section.example}</p>
            </div>
          )}

          {section.paragraphsAfter?.map((paragraph, index) => (
            <p key={`after-${index}`}>{paragraph}</p>
          ))}

          {section.exampleAfter && (
            <div className="article-example">
              <span>Example</span>
              <p>{section.exampleAfter}</p>
            </div>
          )}

          {section.note && (
            <div className="article-note">
              <strong>LEARVIX Tip</strong>
              <p>{section.note}</p>
            </div>
          )}
        </section>
      ))}

      {content.relatedGuides?.length > 0 && (
        <section className="article-related">
          <span className="article-related-label">Continue Learning</span>

          <h2>Related LEARVIX Guides</h2>

          <p className="article-related-intro">
            Continue building your AI-powered study workflow with these related
            guides.
          </p>

          <div className="article-related-grid">
            {content.relatedGuides.map((guide) => (
              <Link
                href={`/blog/${guide.slug}`}
                className="article-related-card"
                key={guide.slug}
              >
                <span>{guide.category}</span>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <strong>Read Guide →</strong>
              </Link>
            ))}
          </div>
        </section>
      )}

      {content.faqs?.length > 0 && (
        <section className="article-faq">
          <h2>Frequently Asked Questions</h2>

          {content.faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}