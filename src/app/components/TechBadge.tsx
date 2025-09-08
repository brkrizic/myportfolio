import { SiApollographql, SiSqlite, SiReact, SiSpringboot, SiTypescript, SiExpress, SiJavascript, SiRedux } from "react-icons/si";
import Tooltip from "./Tooltip";

// Map tech names to icons
const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="text-cyan-400" />,
  Redux: <SiRedux className="text-purple-400" />,
  "React Router": <SiReact className="text-pink-400" />,
  "REST API": <SiApollographql className="text-orange-400" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  "Spring Boot": <SiSpringboot className="text-green-400" />,
  "SQLITE": <SiSqlite />
};


// Component for individual tech badges
export const TechBadge = ({ tech }: { tech: string }) => (
  <span className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-full text-sm text-white">
    <Tooltip text={tech}>{techIcons[tech] || null}</Tooltip>
  </span>
);
