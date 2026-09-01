const points = [
  {
    title: "Built for Students",
    description:
      "Every guide is focused on real study problems, not generic AI hype.",
  },
  {
    title: "Practical, Not Theoretical",
    description:
      "Step-by-step tutorials, clear workflows, and useful tools you can actually use.",
  },
  {
    title: "Responsible AI Use",
    description:
      "We focus on learning better with AI, not replacing your own thinking or academic work.",
  },
  {
    title: "Free Learning Resources",
    description:
      "Discover helpful guides, strategies, and tools without unnecessary complexity.",
  },
];

export default function WhyLearvix() {
  return (
    <section className="why-section">
      <div className="container why-grid">
        <div className="why-copy">
          <span className="section-label">Why LEARVIX</span>

          <h2>AI Should Help You Learn, Not Think for You.</h2>

          <p>
            LEARVIX helps students use AI more intelligently through practical
            study workflows, useful tools, and clear learning strategies.
          </p>
        </div>

        <div className="why-points">
          {points.map((point, index) => (
            <div className="why-point" key={point.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}