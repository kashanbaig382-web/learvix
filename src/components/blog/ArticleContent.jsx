export default function ArticleContent({ content }) {
  return (
    <div className="article-content">
      {content.introduction && (
        <p className="article-introduction">{content.introduction}</p>
      )}

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

          {section.note && (
            <div className="article-note">
              <strong>LEARVIX Tip</strong>
              <p>{section.note}</p>
            </div>
          )}
        </section>
      ))}

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