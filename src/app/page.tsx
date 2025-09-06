"use client";

import { motion, useInView, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import React, { useLayoutEffect } from "react";
import { AnimatedHeading } from "./components/AnimatedHeading";

//import Projects from "./components/Projects";

const Projects = dynamic(() => import("./components/Projects"), {
  ssr: false,
});

export default function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <motion.section 
        className="text-center py-24 pt-[120px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimatedHeading text={"Hi, I'm a Web, Desktop and Mobile app Developer"} delay={0.1}></AnimatedHeading>
        {/* <h2 className="text-4xl font-bold mb-4">Hi, I'm a React Developer 👋</h2> */}
        <motion.p 
          className="text-lg text-gray-400"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
        >
          I build clean, interactive, modern apps.
        </motion.p>

        <div className="space-y-90">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>

      </motion.section>
  );
}
