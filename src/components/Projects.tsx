import projectsData from "../data/projectsData";
import type { IProject } from "./Project";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="works" className="relative flex flex-col">
      {projectsData.map((project: IProject) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
