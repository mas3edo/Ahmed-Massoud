import About from "./about/page";
import Home from "./home/page";
import Skills from "./skilles/page";
import Portfolio from "./portfolio/page";
import Experience from "./experience/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

export default function Page() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
