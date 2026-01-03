import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const links = ["home", "about", "works", "contact_me"];

  const formatLinkName = (link: string): string => {
    return link
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const scrollToElement = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  // Animate Burger to X and Overlay Slide
  useGSAP(
    () => {
      if (!isOpen) {
        gsap.to(".line-1-b", {
          backgroundColor: "transparent",
        });
        gsap.to(".line-3-b", {
          backgroundColor: "transparent",
        });
      }
      if (isOpen) {
        // Top line moves down and rotates
        gsap.to(".line-1", {
          y: 8,
          rotate: 45,
          duration: 0.3,
        });
        gsap.to(".line-1-b", {
          backgroundColor: "#FFF",
        });

        // Middle line disappears
        gsap.to(".line-2", {
          opacity: 0,
          x: -10,
          duration: 0.2,
        });

        // Bottom line moves up and rotates
        gsap.to(".line-3", {
          y: -8,
          rotate: -45,
          duration: 0.3,
        });
        gsap.to(".line-3-b", {
          backgroundColor: "#FFF",
        });

        // Slide overlay in
        gsap.to(".menu-overlay", {
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        // Reset lines
        gsap.to(".line-1", { y: 0, rotate: 0, duration: 0.3 });
        gsap.to(".line-2", { opacity: 1, x: 0, duration: 0.2 });
        gsap.to(".line-3", { y: 0, rotate: 0, duration: 0.3 });

        // Slide overlay out
        gsap.to(".menu-overlay", {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
        });
      }
    },
    { dependencies: [isOpen], scope: container }
  );

  return (
    <header
      ref={container}
      className="fixed top-0 left-0 w-full z-100 px-8 py-6 pointer-events-none"
    >
      <div className="flex items-center justify-between md:justify-end w-full">
        {/* Burger Button - Visible on Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden pointer-events-auto flex flex-col ml-auto gap-1 z-110 mix-blend-difference p-2"
        >
          <span className="line-1 flex w-6 h-0.5">
            <span className="w-3 h-full bg-white"></span>
            <span className="line-1-b w-3 h-full bg-transparent"></span>
          </span>
          <span className="line-2 w-6 h-0.5 bg-white block"></span>
          <span className="line-3 flex w-6 h-0.5">
            <span className="line-3-b w-3 h-full bg-transparent"></span>
            <span className="w-3 h-full bg-white"></span>
          </span>
        </button>

        {/* Desktop Nav - Hidden on Mobile */}
        <nav className="hidden md:flex items-center gap-8 pointer-events-auto mix-blend-difference">
          {links.map((link) => (
            <p
              key={link}
              onClick={() => scrollToElement(link)}
              className="text-white text-xl font-light cursor-pointer hover:opacity-70"
            >
              {formatLinkName(link)}
            </p>
          ))}
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div className="menu-overlay fixed inset-0 bg-black translate-x-full md:hidden pointer-events-auto flex flex-col items-center justify-center gap-8">
        {links.map((link) => (
          <p
            key={link}
            onClick={() => scrollToElement(link)}
            className="menu-link text-white text-4xl font-roboto font-medium cursor-pointer"
          >
            {formatLinkName(link)}
          </p>
        ))}
      </div>
    </header>
  );
};

export default Nav;
