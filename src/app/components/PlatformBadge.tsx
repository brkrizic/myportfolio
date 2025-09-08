"use client";

import { JSX } from "react/jsx-runtime";
import { FaMobileAlt, FaDesktop, FaGlobe, FaServer, FaGamepad } from "react-icons/fa";

type PlatformBadgeProps = {
  platform: string;
};

const platformIcons: Record<string, JSX.Element> = {
  Web: <FaGlobe className="text-gray-400" />,
  Desktop: <FaDesktop className="text-gray-400" />,
  "Cross-platform Desktop": <FaDesktop className="text-gray-400" />,
  Mobile: <FaMobileAlt className="text-gray-400" />,
  "Cross-platform Mobile": <FaMobileAlt className="text-gray-400" />,
  iOS: <FaMobileAlt className="text-gray-400" />,
  Android: <FaMobileAlt className="text-gray-400" />,
  API: <FaServer className="text-gray-400" />,
  Server: <FaServer className="text-gray-400" />,
  Game: <FaGamepad className="text-gray-400" />,
  "Embedded / IoT": <FaDesktop className="text-gray-400" />,
};

export const PlatformBadge = ({ platform }: PlatformBadgeProps) => (
  <span className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded text-sm text-white">
    {platformIcons[platform]} {platform}
  </span>
);
