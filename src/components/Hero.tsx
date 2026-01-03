import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import particles from "../assets/videos/particles.webm";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const tl = gsap.timeline({
        defaults: { duration: 1, opacity: 0, y: 20 },
      });

      tl.from(containerRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.4,
        ease: "power1.inOut",
      });

      gsap.to(".hero-content", {
        yPercent: -30, // Moves the text up slightly as you scroll
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },

    { dependencies: [containerRef] }
  );
  return (
    <section
      id="home"
      className="fixed min-h-screen inset-0 bg-black flex flex-col items-center justify-center overflow-hidden z-0"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={particles}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />
      <div
        ref={containerRef}
        className="z-10 h-full flex flex-col items-center justify-center gap-4 text-center font-roboto hero-content"
      >
        <p className="text-gray-50 font-light text-2xl md:text-3xl">
          Hi! I'm Chayma
        </p>
        <h1 className="text-white font-semibold text-6xl md:text-7xl">
          UI & UX Designer
        </h1>
        <p className="text-white font-medium text-4xl md:text-5xl">
          Crafting Interactive Experiences
        </p>
      </div>
    </section>
  );
};

export default Hero;
