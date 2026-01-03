import { useRef, type ReactNode } from "react";
import Carousel from "./Carousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export interface IProject {
  id: number;
  bgColor: string;
  title: ReactNode;
  subtitle: ReactNode;
  description: ReactNode;
  tags: ReactNode;
  media: {
    src: string;
    type: "image" | "video";
  }[];
  isMobile?: boolean;
}

const Project = ({ project }: { project: IProject }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.from(containerRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    },
    { dependencies: [], scope: containerRef }
  );
  return (
    <div
      className={`min-h-screen overflow-hidden ${project.bgColor} flex flex-wrap items-center justify-between md:px-12 pb-24 md:py-24 gap-24`}
    >
      <Carousel media={project.media} isMobile={project.isMobile} />
      <div
        ref={containerRef}
        className="flex flex-col items-start justify-start flex-1 px-6 md:px-12 "
      >
        {project.title}
        {project.subtitle}
        {project.description}
        {project.tags}
      </div>
    </div>
  );
};

export default Project;
