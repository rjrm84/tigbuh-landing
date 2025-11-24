const projects = [
  {
    title: "PostAuto",
    tag: "Automation · Content",
    desc: "AI workflow that auto-publishes daily tech & mindset threads while I live life offline.",
  },
  {
    title: "AIC-Meter",
    tag: "Health · Self-tracking",
    desc: "A conscious alcohol tracking PWA focused on awareness and behavioral insight.",
  },
  {
    title: "Diario del León",
    tag: "Story · Growth",
    desc: "A personal chronicle about identity, solitude and rebirth — part myth, part journal.",
  },
  {
    title: "Digital Intelligence Threads",
    tag: "AI · Virality",
    desc: "Viral-oriented threads about AI, Groq and what digital intelligence really means for daily life.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        A mix of active projects and live experiments. Built in public with a blend
        of engineering, curiosity and creativity.
      </p>

      <div className="projects-list">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <p className="project-tag">{p.tag}</p>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
