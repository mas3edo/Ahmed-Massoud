type Project = {
  name: string;
  url: string;
  code: string;
  tags: string;
  year: string;
  wip?: boolean;
};

const projects: Project[] = [
  { name: "Wasl Agency", url: "https://wasl-nine.vercel.app", code: "https://github.com/mas3edo/Wasl", tags: "Next.js · Marketing · SEO", year: "2025" },
  { name: "E-Commerce Platform", url: "https://mas3edo.github.io/E-Commerce/", code: "https://github.com/mas3edo/E-Commerce", tags: "React · Cart · Checkout", year: "2025" },
  { name: "Beige E-Commerce", url: "https://ecommerce-app-pi-flax.vercel.app/", code: "https://github.com/mas3edo/ecommerce-app", tags: "Next.js · ", year: "2025", wip: true },
  { name: "Fashion Store", url: "https://task2-chi-rust.vercel.app", code: "https://github.com/mas3edo/task2", tags: "Next.js · Tailwind", year: "2025" },
  { name: "Sofra Restaurant", url: "https://my-task-flax-five.vercel.app", code: "https://github.com/mas3edo/my-task", tags: "React · Tailwind", year: "2025" },
  { name: "Games Collection", url: "https://mas3edo.github.io/games/", code: "https://github.com/mas3edo/games", tags: "Vanilla JS · DOM", year: "2024" },
  { name: "First Portfolio", url: "https://mas3edo.github.io/portfolio/", code: "https://github.com/mas3edo/portfolio", tags: "HTML · CSS · JS", year: "2024" },
];

export default function Portfolio() {
  return (
    <section className="section work">
      <header className="section-head reveal">
        <span className="section-label">01 — Selected work</span>
        <h2 className="section-title">Things I&apos;ve <em>built</em></h2>
        <p className="section-note">(07) projects, 2024 → present. Every one designed, coded and shipped by hand.</p>
      </header>

      <ul className="work-list">
        {projects.map((p, i) => (
          <li className="work-row reveal" key={p.name}>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="work-link">
              <span className="work-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="work-name">{p.name}</span>
              <span className="work-tags">
                {p.tags}
                {p.wip && <span className="work-wip">In progress</span>}
              </span>
              <span className="work-year">{p.year}</span>
              <span className="work-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="work-code" href={p.code} target="_blank" rel="noopener noreferrer">Code</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
