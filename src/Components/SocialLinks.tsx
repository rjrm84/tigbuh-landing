const links = [
  { label: "Twitter (X)", href: "https://x.com/tigbuh", primary: true, variant: "twitter" },
  { label: "Instagram", href: "#", primary: false, variant: "instagram" },
  { label: "TikTok", href: "#", primary: false, variant: "tiktok" },
  { label: "YouTube · Coming soon", href: "#", primary: false, variant: "youtube" },
  { label: "LinkedIn", href: "#", primary: false, variant: "linkedin" },
];


export default function SocialLinks() {
  return (
    <section className="section">
      <h2 className="section-title">Follow &amp; connect</h2>
      <p className="section-subtitle">
        Best starting point is <span className="hero-highlight">@tigbuh</span> on X.  
        From there, everything else connects.
      </p>

      <div className="social-links">
  {links.map((link) => (
    <a
      key={link.label}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "social-pill " +
        (link.primary ? "primary " : "") +
        (link.variant ? `social-${link.variant}` : "")
      }
    >
      {link.label}
    </a>
  ))}
</div>
    </section>
  );
}
