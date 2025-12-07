import avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-kicker">DIGITAL INTELLIGENCE • CONTENT • GROWTH</p>

      <h1 className="hero-title">
        RUL <span className="hero-highlight">@tigbuh</span>
      </h1>

      <p className="hero-subtitle">
        AI THINKER • DIGITAL ENGINEER • AUTOMATION &amp; GROWTH
      </p>

      <p className="hero-text">
        I build and share ideas about <span className="hero-highlight">AI</span>,{" "}
        <span className="hero-highlight">automation</span> and conscious digital life.
        Threads, tools and reflections for people who want to think deeper and live smarter.
      </p>

      <div className="hero-buttons">
        <a
          href="https://x.com/tigbuh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Follow my daily AI threads
        </a>
        <a href="#projects" className="btn-ghost">
          Explore my projects
        </a>
      </div>

      <div className="hero-avatar-wrapper">
        <img
          src={avatar}
          alt="Rul avatar"
          className="hero-avatar-img"
          loading="lazy"
        />
      </div>

      <p className="hero-legend">
        THE WOLF WITHIN · “THE SILENCE AFTER THE ANSWER”
      </p>
    </section>
  );
}