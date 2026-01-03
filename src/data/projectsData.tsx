import type { IProject } from "../components/Project";

import cyber1 from "../assets/images/cyber-1.webp";
import cyber2 from "../assets/images/cyber-2.webp";
import cyber3 from "../assets/images/cyber-3.webp";
import cyber from "../assets/videos/cyber.webm";

import betterme1 from "../assets/images/betterme-1.webp";
import betterme2 from "../assets/images/betterme-2.webp";
import betterme3 from "../assets/images/betterme-3.webp";
import betterme from "../assets/videos/betterme.webm";

import pixelerion1 from "../assets/images/pixelerion-1.webp";
import pixelerion2 from "../assets/images/pixelerion-2.webp";
import pixelerion3 from "../assets/images/pixelerion-3.webp";
import pixelerion4 from "../assets/images/pixelerion-4.webp";
import pixelerion from "../assets/videos/pixelerion.webm";

import octobelle1 from "../assets/images/octobelle-1.webp";
import octobelle2 from "../assets/images/octobelle-2.webp";
import octobelle3 from "../assets/images/octobelle-3.webp";
import octobelle from "../assets/videos/octobelle.webm";

import shellhouse1 from "../assets/images/shellhouse-1.webp";
import shellhouse2 from "../assets/images/shellhouse-2.webp";
import shellhouse3 from "../assets/images/shellhouse-3.webp";
import shellhouse4 from "../assets/images/shellhouse-4.webp";
import seashell from "../assets/images/seashell.webp";
import shellhouse from "../assets/videos/shellhouse.webm";

const projectsData: IProject[] = [
  {
    id: 1,
    bgColor: "bg-[#198F00]",
    title: <h2 className="project-title text-white">Cyber Security</h2>,
    subtitle: <p className="project-subtitle text-white">UI/UX Hero section</p>,
    description: (
      <div className="project-description text-white">
        <p className="project-description-text">
          A UI/UX hero section concept designed fora cybersecurity platform,
          focused on creating a strong first impression and clear visual
          hierarchy.
        </p>
        <p className="project-description-text">
          The project includes three different hero variations, each featuring a
          video background to enhance engagement and convey a sense of security
          and technology.
        </p>
        <p className="project-description-text">
          Fully functional button prototypes were created to demonstrate
          interactions and user flow.
        </p>
        <p className="project-description-text">
          The design emphasizes clarity, contrast, and usability while
          maintaining a modern and professional cybersecurity aesthetic
        </p>
      </div>
    ),
    tags: (
      <ul className="project-tags text-white">
        <li className="project-tag-item bg-[#25D900]">UI/UX Design</li>
        <li className="project-tag-item bg-[#25D900]">Prototyping</li>
        <li className="project-tag-item bg-[#25D900]">Interaction Design</li>
      </ul>
    ),
    media: [
      {
        src: cyber1,
        type: "image",
      },
      {
        src: cyber2,
        type: "image",
      },
      {
        src: cyber3,
        type: "image",
      },
      {
        src: cyber,
        type: "video",
      },
    ],
  },

  {
    id: 2,
    bgColor: "bg-[#DBDAEC]",
    title: <h2 className="project-title ">Better Me</h2>,
    subtitle: <p className="project-subtitle">Habit Tracking App</p>,
    description: (
      <div className="project-description">
        <p className="project-description-text">
          An interactive portfolio website designed for Pixelerion, focused on
          creating a dynamic and immersive user experience. The hero section
          features a computer screen concept that transitions into the main
          interface as users scroll, creating a smooth zoom-in effect into the
          first page.
        </p>
        <p className="project-description-text">
          This project focuses on creating a simple and intuitive user
          experience, starting from the sign in and log in screens to task
          creation and management.
        </p>
        <p className="project-description-text">
          Clear user flows and fully functional prototypes were built to
          demonstrate navigation, button interactions, and core app
          functionality
        </p>
        <p className="project-description-text">
          As my first UI/UX project, BetterMe reflects my understanding of
          design fundamentals, user flow, and interactive prototyping.
        </p>
      </div>
    ),
    tags: (
      <ul className="project-tags">
        <li className="project-tag-item bg-[#9C85D4]">UI/UX Design</li>
        <li className="project-tag-item bg-[#9C85D4]">Prototyping</li>
        <li className="project-tag-item bg-[#9C85D4]">Mobile App</li>
      </ul>
    ),
    media: [
      {
        src: betterme1,
        type: "image",
      },
      {
        src: betterme2,
        type: "image",
      },
      {
        src: betterme3,
        type: "image",
      },
      {
        src: betterme,
        type: "video",
      },
    ],
    isMobile: true,
  },

  {
    id: 3,
    bgColor: "bg-[#FFD700]",
    title: <h2 className="project-title ">Pixelerion</h2>,
    subtitle: <p className="project-subtitle">Interactive Portfolio Website</p>,
    description: (
      <div className="project-description">
        <p className="project-description-text">
          An interactive portfolio website designed for Pixelerion, focused on
          creating a dynamic and immersive user experience.
        </p>
        <p className="project-description-text">
          The hero section features a computer screen concept that transitions
          into the main interface as users scroll, creating a smooth zoom-in
          effect into the first page.
        </p>
        <p className="project-description-text">
          An interactive light toggle allows users to switch to a night mode,
          enhancing engagement and visual experience.
        </p>
        <p className="project-description-text">
          The website includes key sections such as About, Services, Projects,
          Testimonials, and Contact.
        </p>
        <p className="project-description-text">
          Fully functional prototypes were created to showcase interactions,
          transitions, and seamless navigation across the entire experience
        </p>
      </div>
    ),
    tags: (
      <ul className="project-tags">
        <li className="project-tag-item bg-[#FFED8D]">UI/UX Design</li>
        <li className="project-tag-item bg-[#FFED8D]">Prototyping</li>
        <li className="project-tag-item bg-[#FFED8D]">Interactive Design</li>
      </ul>
    ),
    media: [
      {
        src: pixelerion1,
        type: "image",
      },
      {
        src: pixelerion2,
        type: "image",
      },
      {
        src: pixelerion3,
        type: "image",
      },
      {
        src: pixelerion4,
        type: "image",
      },
      {
        src: pixelerion,
        type: "video",
      },
    ],
  },

  {
    id: 4,
    bgColor: "bg-[#85192E]",
    title: <h2 className="project-title  text-white">Octobelle</h2>,
    subtitle: (
      <p className="project-subtitle text-white">Custom Chocolate Website</p>
    ),
    description: (
      <div className="project-description text-white">
        <p className="project-description-text">
          Octobelle is a boutique e-commerce website designed to showcase
          handmade chocolate products through an elegant and user-centered
          experience.
        </p>
        <p className="project-description-text">
          The project emphasizes customization, allowing users to personalize
          their chocolate selections through an interactive and intuitive flow.
        </p>
        <p className="project-description-text">
          Fully functional prototypes were created to demonstrate product
          selection, navigation, and user interactions.
        </p>
      </div>
    ),
    tags: (
      <ul className="project-tags">
        <li className="project-tag-item bg-[#FEEFE8]">UI/UX Design</li>
        <li className="project-tag-item bg-[#FEEFE8]">Prototyping</li>
        <li className="project-tag-item bg-[#FEEFE8]">Mobile App</li>
      </ul>
    ),
    media: [
      {
        src: octobelle1,
        type: "image",
      },
      {
        src: octobelle2,
        type: "image",
      },
      {
        src: octobelle3,
        type: "image",
      },
      {
        src: octobelle,
        type: "video",
      },
    ],
    isMobile: true,
  },

  {
    id: 5,
    bgColor: "bg-[#D1BFA7]",
    title: (
      <h2 className="project-title  text-white flex items-center">
        SHELH
        <span>
          <img src={seashell} alt="seashell" />
        </span>
        USE
      </h2>
    ),
    subtitle: (
      <p className="project-subtitle text-white">Interactive Restaurant Menu</p>
    ),
    description: (
      <div className="project-description text-white">
        <p className="project-description-text">
          A beige-themed interactive menu designed for ShelfHouse, inspired by a
          seafood dining concept.
        </p>
        <p className="project-description-text">
          The project focuses on creating a clean, elegant, and user-friendly
          experience through clear layout, calm colors, and smooth navigation.
          The design includes essential restaurant sections such as About, Menu,
          Reservations, Events, and Private Dining, with a strong emphasis on
          usability and interaction.
        </p>
        <p className="project-description-text">
          Fully functional prototypes were created to enhance the overall
          digital dining experience.
        </p>
      </div>
    ),
    tags: (
      <ul className="project-tags text-white">
        <li className="project-tag-item bg-[#DBC9B0] border">UI/UX Design</li>
        <li className="project-tag-item bg-[#DBC9B0] border">Prototyping</li>
        <li className="project-tag-item bg-[#DBC9B0] border">
          Interactive Design
        </li>
      </ul>
    ),
    media: [
      {
        src: shellhouse1,
        type: "image",
      },
      {
        src: shellhouse2,
        type: "image",
      },
      {
        src: shellhouse3,
        type: "image",
      },
      {
        src: shellhouse4,
        type: "image",
      },
      {
        src: shellhouse,
        type: "video",
      },
    ],
  },
];

export default projectsData;
