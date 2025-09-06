"use client";

import { motion, Variants } from "framer-motion";
import {
  SiReact,
  SiRedux,
  SiExpress,
  SiTypescript,
  SiSpringboot,
  SiJavascript,
  SiApollographql,
} from "react-icons/si";
import { JSX } from "react/jsx-runtime";
import Tooltip from "./Tooltip";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1.8,
    },
  },
};

const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="text-cyan-400" />,
  Redux: <SiRedux className="text-purple-400" />,
  "React Router": <SiReact className="text-pink-400" />,
  "REST API": <SiApollographql className="text-orange-400" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  "Spring Boot": <SiSpringboot className="text-green-400" />,
};


export default function Projects() {
  const projects = [
    {
      title: "Web-Shop",
      tech: ["React", "JavaScript", "Redux", "React Router", "REST API", "Express.js"],
      description:
        "Full-stack e-commerce project with routing, global state, authentication, and REST API backend integration.",
      link: "https://github.com/brkrizic/e-commerce",
    },
    {
      title: "Blog App",
      tech: ["React", "TypeScript", "Redux", "REST API", "Spring Boot"],
      description:
        "Advanced blog app using React portals and TypeScript with Spring Boot backend.",
      link: "https://github.com/brkrizic/blogApp",
    },
    {
      title: "TradeTrackr",
      tech: ["React", "TypeScript", "SQLITE"],
      description:
        "Trading journal app using React Native and SQLITE",
      link: "https://github.com/brkrizic/TradeTrackr",
      privacyPolicyPath: "/tradeTrackr/privacy-policy"
    },
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="my-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title + i}
            className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            //animate="onscreen"
            variants={cardVariants}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.2 // stagger effect
            }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-full text-sm text-white"
              >
                <Tooltip text={t}>
                  {techIcons[t] || null}
                </Tooltip>
                {/* {t} */}
              </span>
            ))}
          </div>

            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View project
            </a>
            <a
              href={project.privacyPolicyPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-4"
            >
              Privacy Policy
            </a>
          </motion.article>
        ))}
      </div>
            {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
