const caps = [
  {
    num: "(a)",
    title: "Frontend architecture",
    desc: "Component systems in React and Next.js that stay legible at fifty routes. TypeScript throughout, no any where it counts.",
  },
  {
    num: "(b)",
    title: "Interface design",
    desc: "Layouts, type scales and colour systems designed in Figma and translated to the browser pixel-faithfully — then improved on.",
  },
  {
    num: "(c)",
    title: "Motion & interaction",
    desc: "CSS-first animation, scroll choreography and micro-interactions that respect prefers-reduced-motion and the frame budget.",
  },
  {
    num: "(d)",
    title: "Performance & accessibility",
    desc: "Core Web Vitals in the green, semantic markup, keyboard paths that work. Fast is a feature; so is usable by everyone.",
  },
];

export default function Capabilities() {
  return (
    <section className="section caps">
      <header className="section-head reveal">
        <span className="section-label">What I do</span>
      </header>

      <ul className="caps-list">
        {caps.map((c) => (
          <li className="cap-row reveal" key={c.num}>
            <span className="cap-num">{c.num}</span>
            <h3 className="cap-title">{c.title}</h3>
            <p className="cap-desc">{c.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
