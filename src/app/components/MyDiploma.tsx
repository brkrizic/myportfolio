"use client";

import { motion } from "framer-motion";

export default function MyDiploma() {
  return (
    <motion.section
    id="mydiploma"
      className="text-center py-24 pt-[120px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold mb-6">My Diploma</h1>

      {/* Show as image preview */}
      <img
        src="/diploma.png"
        alt="Diploma"
        className="mx-auto rounded-lg shadow-lg max-w-lg"
      />

      {/* Download button */}
      <a
        href="/diploma.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        View / Download PDF
      </a>
    </motion.section>
  );
}
