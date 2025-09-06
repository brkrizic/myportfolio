import { motion, Variants } from "framer-motion";


const containerVariants: Variants = {
  hidden: {},
  visible: (customDelay) => ({
    transition: {
      delayChildren: customDelay,
      staggerChildren: 0.05,
    },
  }),
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      ease: "easeOut",
      duration: 0.4
    },
  },
};

export function AnimatedHeading({ text, delay = 0 }: { text: string, delay?: number }) {
  return (
    <motion.h2
      className="text-3xl font-bold mb-6 inline-block text-white"
      variants={containerVariants}
      initial="offscreen"
      animate="visible"
      whileInView="onscreen"
      custom={delay}
      transition={{
          duration: 0.6,
          ease: "easeOut"
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block"
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
}