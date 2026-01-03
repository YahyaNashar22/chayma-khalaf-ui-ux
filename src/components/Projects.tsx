import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import projectsData from "../data/projectsData";
import type { IProject } from "./Project";
import Project from "./Project";

const Projects = () => {
  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".project-panel");

    panels.forEach((panel, i) => {
      const isLast = i === panels.length - 1;
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: isLast ? true : false,
        scrub: true,
      });
    });
  }, []);
  return (
    <section id="works" className="relative flex flex-col">
      {projectsData.map((project: IProject) => (
        <div key={project.id} className="project-panel">
          <Project project={project} />
        </div>
      ))}
    </section>
  );
};

export default Projects;
