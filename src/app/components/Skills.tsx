"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiFramer,
  SiPostman,
} from "react-icons/si";
import Tooltip from "./Tooltip";

const skills = [
  { name: "React", icon: <SiReact className="text-sky-400" />, level: 90, label: "Advanced" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 85, label: "Advanced" },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 75, label: "Intermediate" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" />, level: 80, label: "Advanced" },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" />, level: 65, label: "Intermediate" },
  { name: "Express.js", icon: <SiExpress className="text-white" />, level: 70, label: "Intermediate" },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" />, level: 60, label: "Intermediate" },
  { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: 75, label: "Intermediate" },
];


export default function Skills() {
  return (
    <section id="skills" className="my-24 max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map(({name, icon, level, label}, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 text-gray-100 px-4 py-2 rounded shadow hover:bg-gray-700 transition"
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: i * 0.1, // stagger effect
            }}
          >
            <div className="text-4xl mb-2">{icon}</div>
            <p className="text-sm font-medium">{name}</p>

              {/* Progress bar container */}
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.2, delay: i * 0.1 }}
              />
            </div>

            <p className="text-xs text-gray-400 mt-1">{level}%</p>

            <Tooltip
  text={
    label === "Advanced"
      ? "Used in production, confident in complex use"
      : label === "Intermediate"
      ? "Solid experience, still improving"
      : "Learning the fundamentals"
  }
>
  <span
    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
      label === "Advanced"
        ? "bg-green-700 text-green-100"
        : label === "Intermediate"
        ? "bg-blue-700 text-blue-100"
        : "bg-gray-600 text-gray-100"
    } cursor-pointer`}
  >
    {label}
  </span>
</Tooltip>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
