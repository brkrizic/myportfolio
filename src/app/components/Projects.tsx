"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import Tooltip from "./Tooltip";
import { ProjectModal } from "./ProjectModal";
import { ProjectType } from "./constants/ProjectType";
import { StatusBadge } from "./StatusBadge";
import { PlatformBadge } from "./PlatformBadge";

// Animation variants
const cardVariants: Variants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.5, duration: 1.8 } },
};

// Projects data
const projects: ProjectType[] = [
  {
    title: "Web-Shop",
    tech: ["React", "JavaScript", "Redux", "React Router", "REST API", "Express.js"],
    description:
      "Full-stack e-commerce project with routing, global state, authentication, and REST API backend integration.",
    link: "https://github.com/brkrizic/e-commerce",
    status: "In Progress",
    platform: "Web"
  },
  {
    title: "Blog App",
    tech: ["React", "TypeScript", "Redux", "REST API", "Spring Boot"],
    description:
      "Advanced blog app using React portals and TypeScript with Spring Boot backend.",
    link: "https://github.com/brkrizic/blogApp",
    status: "In Progress",
    platform: "Web"
  },
  {
    title: "TradeTrackr",
    icon: "/logo/tradetrackricon.png",
    tech: ["React", "TypeScript", "SQLITE"],
    description: "TradeTrackr is a mobile trading journal app designed to help traders of all levels track and analyze their trades.",
    link: "https://github.com/brkrizic/TradeTrackr",
    privacyPolicyPath: "/tradeTrackr/privacy-policy",
    downloadLink: "/downloads/TradeTrackr.apk",
    status: "Early Access",
    redditLink: "https://www.reddit.com/r/TradeTrackr2025/",
    platform: "Android"
  },
];

// Component for project card
const ProjectCard = ({
  project,
  onClick,
  index,
}: {
  project: ProjectType;
  onClick: () => void;
  index: number;
}) => (
  <motion.article
    key={project.title + index}
    className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.5 }}
    variants={cardVariants}
    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
    whileHover={{ scale: 1.03 }}
    onClick={onClick}
  >
<div className="flex flex-col gap-2 mb-4 items-center">
  {/* Title row with icon */}
  <div className="flex items-center gap-2">
    {project.icon && (
      <Image
        src={project.icon}
        alt={`${project.title} icon`}
        width={32}   // slightly smaller to sit nicely next to title
        height={32}
        className="rounded"
      />
    )}
    <h2 className="text-xl font-bold text-white">{project.title}</h2>
  </div>

  {/* Badges row */}
  <div className="flex flex-wrap items-center gap-2">
    {project.status && <StatusBadge status={project.status} />}
    {project.platform && <PlatformBadge platform={project.platform} />}
  </div>
  <p className="text-gray-300">{project.description}</p>
</div>
  </motion.article>
);

// Main Projects component
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="my-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
