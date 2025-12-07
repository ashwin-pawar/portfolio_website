import Header from "./portfolio/Header";
import Hero from "./portfolio/Hero";
import About from "./portfolio/About";
import Skills from "./portfolio/Skills";
import Projects from "./portfolio/Projects";
import Contact from "./portfolio/Contact";
import Footer from "./portfolio/Footer";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white static">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
