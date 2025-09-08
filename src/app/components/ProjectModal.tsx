"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TechBadge } from "./TechBadge";
import Image from "next/image";
import { ProjectType } from "./constants/ProjectType";
import { StatusBadge } from "./StatusBadge";
import { FaRedditAlien } from "react-icons/fa";
import { PlatformBadge } from "./PlatformBadge";

type ProjectModalProps = {
  project: ProjectType;
  isOpen: boolean;
  onClose: () => void;
};

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [hideLink, setHideLink] = useState(false);

  useEffect(() => {
    setMounted(true)

    if(project.status === "Early Access" || project.status === "Completed"){
        setHideLink(false);
    } else {
        setHideLink(true);
    }
  }, [project]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose} // close on overlay click
    >
      <div
        className="relative bg-white dark:bg-gray-900 p-6 rounded-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
      >
        {/* X button in top-left */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-bold text-lg"
          aria-label="Close"
        >
          ×
        </button>

        {/* Modal content */}
        <div className="flex items-center gap-3 mb-2">
              {project.icon && (
                <Image
                  src={project.icon}
                  alt={`${project.title} icon`}
                  width={48}
                  height={48}
                  className="rounded"
                />
              )}
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {project.status && <StatusBadge status={project.status} />}
              {project.platform && <PlatformBadge platform={project.platform} />}
        </div>
        <p className="mb-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          Tech Stack: {project.tech.map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.downloadLink && (
            <a
              href={project.downloadLink}
              download
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Download APK
            </a>
          )}
        {hideLink && (
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-blue-500 rounded hover:underline"
            >
                View project
            </a>
        )}
        {project.privacyPolicyPath && (
            <a
                href={project.privacyPolicyPath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-blue-500 rounded hover:underline"
            >
                Privacy Policy
            </a>
        )}
        {project.redditLink && (
        <a
            href={project.redditLink} // use the project-specific link
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-orange-500 text-white rounded flex items-center gap-2 hover:bg-orange-600"
        >
            <FaRedditAlien className="text-lg" />
            <span>Reddit Community</span>
        </a>
        )}

        </div>
      </div>
    </div>,
    document.body
  );
};
