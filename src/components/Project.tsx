import type { ReactNode } from "react";
import Carousel from "./Carousel";

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
  return (
    <div
      className={`min-h-screen overflow-hidden ${project.bgColor} flex flex-wrap items-center justify-between md:px-12 py-24 gap-24`}
    >
      <Carousel media={project.media} isMobile={project.isMobile} />
      <div className="flex flex-col items-start justify-start flex-1 px-6 md:px-12 ">
        {project.title}
        {project.subtitle}
        {project.description}
        {project.tags}
      </div>
    </div>
  );
};

export default Project;
