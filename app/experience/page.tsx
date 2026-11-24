const steps = [
  {
    year: "2024",
    title: "Started frontend development",
    desc: "HTML, CSS and JavaScript fundamentals. Built core problem-solving logic and a stubborn habit of finishing things.",
  },
  {
    year: "Mid 2024",
    title: "First portfolio projects",
    desc: "Shipped a first portfolio and a collection of interactive games. Translated design concepts into working, breathing code.",
  },
  {
    year: "Late 2024",
    title: "Advanced development",
    desc: "Architected more complex systems — an e-commerce platform and a custom blog engine — inside the React ecosystem.",
  },
  {
    year: "2025",
    title: "Modern stack mastery",
    desc: "Specialized in Next.js, TypeScript and Tailwind CSS. Building professional-grade, highly optimized applications for real clients.",
  },
];

export default function Experience() {
  return (
    <section className="section experience">
      <header className="section-head reveal">
        <span className="section-label">03 — Experience</span>
        <h2 className="section-title">The <em>journey</em> so far</h2>
      </header>

      <ol className="xp-list">
        {steps.map((s) => (
          <li className="xp-row reveal" key={s.year}>
            <span className="xp-year">{s.year}</span>
            <div className="xp-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
