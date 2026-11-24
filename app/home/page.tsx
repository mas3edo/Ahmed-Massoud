export default function Home() {
  return (
    <section className="hero">
      <p className="hero-kicker reveal">
        <span className="status-dot" aria-hidden="true"></span>
        Available for freelance — Winter 2026
      </p>

      <h1 className="hero-title">
        <span className="line-mask"><span className="line">Ahmed</span></span>
        <span className="line-mask"><span className="line line--italic">Massoud</span></span>
      </h1>

      <div className="hero-meta">
        <p className="hero-role reveal">
          Frontend developer crafting fast, expressive interfaces
          with a designer&apos;s eye and an engineer&apos;s discipline.
        </p>
        <div className="hero-actions reveal">
          <a className="btn btn--solid" href="#portfolio">Selected work <span aria-hidden="true">↓</span></a>
          <a className="btn btn--ghost" href="mailto:ahmedmasshoud929@gmail.com">ahmedmasshoud929@gmail.com</a>
        </div>
      </div>

      <div className="hero-badge" aria-hidden="true">
        <svg viewBox="0 0 120 120" width="120" height="120">
          <defs>
            <path id="badge-circle" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"></path>
          </defs>
          <text className="badge-text">
            <textPath href="#badge-circle">Open to work · Frontend developer · Open to work ·</textPath>
          </text>
          <text x="60" y="66" textAnchor="middle" className="badge-star">✳</text>
        </svg>
      </div>

      <div className="hero-scrollhint" aria-hidden="true">
        <span>Scroll</span>
        <span className="scroll-line"></span>
      </div>
    </section>
  );
}
