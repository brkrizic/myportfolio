"use client";

import { motion, Variants } from "framer-motion";
import { AnimatedHeading } from "./AnimatedHeading";


export default function About() {
  return (
    <section id="about" className="my-24 max-w-3xl mx-auto px-6 text-center">
      <AnimatedHeading text="About Me" delay={1.9}/>
      <motion.p
        className="text-gray-400 leading-relaxed"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 2.3 }}
      >
        I'm a developer with a strong interest in clean UI and smooth UX.
        I use technologies like React, TypeScript, Redux, and Tailwind CSS.
        I’ve worked on full-stack projects using Express.js and Spring Boot,
        and I’m always learning more advanced concepts in the React ecosystem.
      </motion.p>
    </section>
  );
}
