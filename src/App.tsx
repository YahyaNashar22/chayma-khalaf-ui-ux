import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default App;
