export default function About() {
  return (
    <section className="section about">
      <header className="section-head reveal">
        <span className="section-label">02 — About</span>
      </header>

      <div className="about-grid">
        <figure className="about-figure reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/about.jpg" alt="Portrait of Ahmed Massoud" width="1198" height="1600" loading="lazy" decoding="async" />
          <figcaption>Ahmed Massoud — Cairo, 2025</figcaption>
        </figure>

        <div className="about-body">
          <h2 className="about-headline reveal">
            I bridge the gap between <em>aesthetic design systems</em> and <em>optimal performance</em>.
          </h2>
          <p className="reveal">
            I&apos;m Ahmed Massoud, a frontend developer specializing in high-fidelity
            digital interfaces. Over the past year I&apos;ve gone from HTML and CSS
            fundamentals to architecting production applications in the React
            ecosystem — and I care about the last 5% that most people skip:
            the easing curve, the focus state, the 40&nbsp;ms of jank.
          </p>
          <p className="reveal">
            An exceptional interface needs an uncompromising foundation of
            clean, scalable logic. That&apos;s the standard I hold every build to,
            whether it&apos;s a marketing site for an agency in Kuwait or a
            checkout flow that can&apos;t afford to drop a sale.
          </p>

          <dl className="about-stats reveal">
            <div><dt>Years writing code</dt><dd>1.5+</dd></div>
            <div><dt>Projects shipped</dt><dd>15+</dd></div>
            <div><dt>Core stack</dt><dd>Next.js</dd></div>
            <div><dt>Based in</dt><dd>Cairo</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
