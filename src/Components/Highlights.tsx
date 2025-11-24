const highlights = [
  "AI & tech threads that are actually practical.",
  "Automation workflows and tools I use myself.",
  "Digital lifestyle experiments, dashboards and habits.",
  "Reflections on identity, purpose and the Wolf Within.",
];

export default function Highlights() {
  return (
    <section className="section">
      <h2 className="section-title">What you&apos;ll find here</h2>
      <p className="section-subtitle">
        If you follow my work, this is the type of content you&apos;ll see over and over again.
      </p>

      <ul className="highlights-list">
        {highlights.map((item) => (
          <li key={item} className="highlight-item">
            <span className="highlight-dot" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
