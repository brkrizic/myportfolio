"use client";

import { motion } from "framer-motion";
import { AnimatedHeading } from "./AnimatedHeading";

export default function About({ text }: { text: string }) {
  return (
    <section
      id="about"
      className="my-24 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8"
    >
      {/* Photo */}
      <motion.div
        className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg flex-shrink-0 bg-gray-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="/bruno.jpg"
          alt="Bruno Krizic"
          className="object-cover"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="text-center md:text-left text-gray-300"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AnimatedHeading text="About Me" delay={0.3} />
        <p className="leading-relaxed mt-4">{text}</p>
      </motion.div>
    </section>
  );
}
