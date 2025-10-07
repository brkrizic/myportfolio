"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Logo() {
  const baseText = "BKHub";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const [text, setText] = useState(baseText);
  const controls = useAnimation();

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText((prev) =>
        prev
          .split("")
          .map((_, i) =>
            i < iteration ? baseText[i] : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );
      iteration += 1 / 2;
      if (iteration >= baseText.length) clearInterval(interval);
    }, 50);

    controls.start({ scale: [1, 1.3, 1], transition: { duration: 0.3 } });
  };

  // scramble on mount
  useEffect(() => {
    scramble();
  }, []);

  // listen for clicks anywhere on the page
  useEffect(() => {
    const handleClick = () => scramble();
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <motion.div
      className="text-white font-bold text-3xl tracking-wide select-none"
      animate={controls}
    >
      {text}
    </motion.div>
  );
}
