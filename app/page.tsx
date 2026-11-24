import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <main>
<section className="hero"><p className="term"><b>$</b> <em>whoami</em> <span className="caret"></span></p><span className="pill"><i />Available for freelance, Winter 2026</span>
<h1>Frontend dev<br />who ships <span>fast.</span></h1>
<p className="lead">I&apos;m Ahmed Massoud. I build quick, polished interfaces in React and Next.js, from agency sites to checkout flows.</p>
<div className="cta"><a className="btn p" href="#work">See my work</a><a className="btn g" href="mailto:ahmedmasshoud929@gmail.com">Say hello</a></div>
<div className="bento" id="about"><div className="c photo">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/formal.jpg" alt="Portrait of Ahmed Massoud" /></div>
<div className="c about"><h2>I bridge <em>aesthetic design systems</em> and <em>optimal performance</em>.</h2><p>A year and a half from HTML and CSS basics to production apps in the React ecosystem. I care about the last 5%: easing curves, focus states, the 40 ms of jank.</p>
<div className="stats"><div><b>1.5+</b><small>Years coding</small></div><div><b>15+</b><small>Projects shipped</small></div><div><b>Next.js</b><small>Core stack</small></div><div><b>Cairo</b><small>Based in</small></div></div></div></div>
<div className="skills"><span>React</span><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>Framer Motion</span><span>Node.js</span><span>Figma</span><span>PostgreSQL</span><span>Git</span><span>UI/UX</span></div></section>
<h3 className="sec" id="work">Selected work</h3>
<div className="projects">
<div className="c p"><span className="n">01 / 2025</span><div><h4>Wasl Agency</h4><div className="t">Next.js · Marketing · SEO</div></div><div className="r"><a href="https://wasl-nine.vercel.app" target="_blank" rel="noopener noreferrer">Live ↗</a><a href="https://github.com/mas3edo/Wasl" target="_blank" rel="noopener noreferrer">Code</a></div></div>
<div className="c p"><span className="n">02 / 2025</span><div><h4>E-Commerce Platform</h4><div className="t">React · Cart · Checkout</div></div><div className="r"><a href="https://mas3edo.github.io/E-Commerce/" target="_blank" rel="noopener noreferrer">Live ↗</a><a href="https://github.com/mas3edo/E-Commerce" target="_blank" rel="noopener noreferrer">Code</a></div></div>
<div className="c p"><span className="n">03 / 2025</span><div><h4>Beige E-Commerce<span className="wip">in progress</span></h4><div className="t">Next.js</div></div><div className="r"><a href="https://ecommerce-app-pi-flax.vercel.app/" target="_blank" rel="noopener noreferrer">Live ↗</a><a href="https://github.com/mas3edo/ecommerce-app" target="_blank" rel="noopener noreferrer">Code</a></div></div>
<div className="c p"><span className="n">04 / 2025</span><div><h4>Fashion Store</h4><div className="t">Next.js · Tailwind</div></div><div className="r"><a href="https://task2-chi-rust.vercel.app" target="_blank" rel="noopener noreferrer">Live ↗</a><a href="https://github.com/mas3edo/task2" target="_blank" rel="noopener noreferrer">Code</a></div></div>
<div className="c p"><span className="n">05 / 2025</span><div><h4>Sofra Restaurant</h4><div className="t">React · Tailwind</div></div><div className="r"><a href="https://my-task-flax-five.vercel.app" target="_blank" rel="noopener noreferrer">Live ↗</a><a href="https://github.com/mas3edo/my-task" target="_blank" rel="noopener noreferrer">Code</a></div></div>
<div className="c p"><span className="n">06 / 2024</span><div><h4>Games Collection</h4><div className="t">Vanilla JS · DOM</div></div><div className="r"><a href="https://mas3edo.github.io/games/" target="_blank" rel="noopener noreferrer">Live ↗</a><a href="https://github.com/mas3edo/games" target="_blank" rel="noopener noreferrer">Code</a></div></div>
<div className="c p"><span className="n">07 / 2024</span><div><h4>First Portfolio</h4><div className="t">HTML · CSS · JS</div></div><div className="r"><a href="https://mas3edo.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Live ↗</a><a href="https://github.com/mas3edo/portfolio" target="_blank" rel="noopener noreferrer">Code</a></div></div>
</div>
<h3 className="sec" id="path">Journey</h3>
<div className="tl"><div className="c"><b>2024</b><h4>Started frontend</h4><p>HTML, CSS and JavaScript fundamentals.</p></div><div className="c"><b>Mid 2024</b><h4>First projects</h4><p>A portfolio and a collection of interactive games.</p></div><div className="c"><b>Late 2024</b><h4>Advanced dev</h4><p>E-commerce and a custom blog engine in React.</p></div><div className="c"><b>2025</b><h4>Modern stack</h4><p>Next.js, TypeScript and Tailwind for real clients.</p></div></div>
<section className="c contact" id="contact"><h2>Let&apos;s build<br />something.</h2><ContactForm />
<div className="cta"><a className="btn p" href="mailto:ahmedmasshoud929@gmail.com">Email me</a><a className="btn g" href="https://wa.me/201063308758">WhatsApp</a><a className="btn g" href="https://github.com/mas3edo">GitHub</a><a className="btn g" href="https://www.linkedin.com/in/ahmed-masshoud-b495b730b">LinkedIn</a></div></section>
</main>
  );
}
