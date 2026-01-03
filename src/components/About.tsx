import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );
  return (
    <section
      id="about"
      ref={containerRef}
      className="mt-[100vh] relative z-10 bg-white min-h-screen flex flex-col items-center justify-center text-center font-roboto gap-24"
    >
      <p className="max-w-150 text-black text-2xl md:text-4xl font-medium">
        I’m Chayma ~ a passionate UI/UX designer with multiple years of
        experience creating interactive and visually engaging digital
        experiences.
      </p>
      <div className="flex flex-col gap-12">
        <p className="max-w-200 text-black text-2xl md:text-4xl font-normal">
          Every project you see in this portfolio is fully designed and
          prototyped in Figma, and many are developed into websites to showcase
          realistic, usable final designs.
        </p>
        <p className="max-w-200 text-black text-2xl md:text-4xl font-normal">
          I focus on designing from concept to completion, ensuring users can
          enjoy seamless interactions and clients can see their projects come to
          life. I combine creativity with usability to craft memorable
          experiences that delight users.
        </p>
      </div>
    </section>
  );
};

export default About;
