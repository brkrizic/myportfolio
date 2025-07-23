"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023",
    title: "Frontend Developer @ XYZ",
    description: "Built responsive UI using React and Tailwind CSS.",
  },
  {
    year: "2022",
    title: "Internship @ ABC",
    description: "Assisted in developing internal tools using Next.js.",
  },
  {
    year: "2021",
    title: "Started Learning Web Dev",
    description: "Began with HTML, CSS, JavaScript and Git.",
  },
];

export default function Timeline() {
  return (
    <div className="relative border-l border-gray-700 pl-6 ml-4 mt-12 space-y-10">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className=" mb-50 absolute -left-3 top-1 w-3 h-3 bg-blue-500 rounded-full border border-white" />
          <p className="text-sm text-gray-500">{item.year}</p>
          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
          <p className="text-gray-400">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
