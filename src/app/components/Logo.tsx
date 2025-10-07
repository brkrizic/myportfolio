"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Logo() {
  const baseText = "BKHub";
  const [text, setText] = useState(baseText);
  const [particles, setParticles] = useState<
    { id: number; char: string; x: number; y: number; size: number; opacity: number; speed: number }[]
  >([]);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  const controls = useAnimation();

  const animateLogo = () => {
    // Text scramble effect
    let iteration = 0;
    const scramble = setInterval(() => {
      setText(
        baseText
          .split("")
          .map((c, i) => (i < iteration ? baseText[i] : chars[Math.floor(Math.random() * chars.length)]))
          .join("")
      );
      iteration += 1 / 2;
      if (iteration >= baseText.length) clearInterval(scramble);
    }, 40);

    // Scale effect
    controls.start({
      scale: [1, 1.15, 1],
      transition: { duration: 0.3, ease: "easeInOut" },
    });

    // Generate “Matrix rain” particles
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: Date.now() + i,
      char: chars[Math.floor(Math.random() * chars.length)],
      x: (Math.random() - 0.5) * 120,
      y: 0,
      size: Math.random() * 18 + 12,
      opacity: Math.random() * 0.6 + 0.4,
      speed: Math.random() * 60 + 40,
    }));
    setParticles((prev) => [...prev, ...newParticles]);

    // Remove particles after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 1000);
  };

  useEffect(() => {
    animateLogo();
  }, []);

  useEffect(() => {
    const handleClick = () => animateLogo();
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative inline-block">
      <motion.div
        className="font-bold text-4xl tracking-wide select-none text-white relative z-10"
        animate={controls}
      >
        {text}
      </motion.div>

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute font-mono text-white"
          style={{ fontSize: p.size, top: "0%", left: "50%" }}
          initial={{ x: p.x, y: p.y, opacity: p.opacity }}
          animate={{ y: p.speed, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {p.char}
        </motion.div>
      ))}
    </div>
  );
}
