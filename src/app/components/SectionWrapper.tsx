"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SectionWrapper = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className="h-screen flex justify-center items-center snap-start"
      animate={{ scale: isInView ? 1.15 : 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      {children}
    </motion.section>
  );
};
