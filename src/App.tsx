import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
