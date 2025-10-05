"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react"; // nice clean icon

export default function MyDiploma() {
  return (
    <motion.section
      id="mydiploma"
      className="text-center py-24 pt-[120px] text-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-4 text-white">Diploma & Certification</h2>
      <p className="max-w-2xl mx-auto text-gray-400 mb-10">
        I’ve successfully completed my academic degree — a milestone that reflects my dedication to technology,
        continuous learning, and professional growth as a developer.
      </p>

      <a
        href="/diploma.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 hover:scale-[1.03]"
      >
        <FileDown size={20} />
        View / Download Diploma
      </a>
    </motion.section>
  );
}
