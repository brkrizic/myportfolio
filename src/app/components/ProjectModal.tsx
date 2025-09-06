"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ProjectType = {
  title: string;
  tech: string[];
  description: string;
  link: string;
};

type ProjectModalProps = {
  project: ProjectType;
  isOpen: boolean;
  onClose: () => void;
};

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose} // close on overlay click
    >
      <div
        className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
      >
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="mb-2">{project.description}</p>
        <p className="text-sm text-gray-500 mb-2">
          Tech: {project.tech.join(", ")}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Visit Project
        </a>
      </div>
    </div>,
    document.body
  );
};
