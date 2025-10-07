"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
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
    setMounted(true);
    if (project.status === "Early Access" || project.status === "Completed") {
      setHideLink(false);
    } else {
      setHideLink(true);
    }
  }, [project]);

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "";
    }

    // Cleanup on unmount (in case user navigates away)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl max-w-lg w-full shadow-xl"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-200 text-2xl"
            >
              ×
            </button>

            <div className="flex items-center gap-3 mb-4">
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

            <p className="mb-3 text-gray-300">{project.description}</p>

            <div className="relative w-64 h-[500px] mx-auto rounded-3xl border-4 border-gray-700 overflow-hidden shadow-lg bg-black mb-3">
              {/* Screen */}
              <video
                src="/demo/tradetrackr.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-2xl"
              />
              {/* Optional notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-600 rounded"></div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              Tech Stack:{" "}
              {project.tech.map((t) => (
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

              {(hideLink || project.link) && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-blue-400 hover:underline"
                >
                  View project
                </a>
              )}

              {project.privacyPolicyPath && (
                <a
                  href={project.privacyPolicyPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-blue-400 hover:underline"
                >
                  Privacy Policy
                </a>
              )}

              {project.redditLink && (
                <a
                  href={project.redditLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-orange-500 text-white rounded flex items-center gap-2 hover:bg-orange-600"
                >
                  <FaRedditAlien className="text-lg" />
                  <span>Reddit Community</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
