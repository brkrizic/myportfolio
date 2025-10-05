"use client";

import { motion } from "framer-motion";
import { AnimatedHeading } from "./AnimatedHeading";


export default function About({ text }: { text: string }) {
  return (
    <section id="about" className="my-24 max-w-3xl mx-auto px-6 text-center">
      <AnimatedHeading text="About Me" delay={0.3}/>
      <motion.p
        className="text-gray-400 leading-relaxed"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        {text}
      </motion.p>
    </section>
  );
}
