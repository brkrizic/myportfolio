"use client";

import { motion } from "framer-motion";

export default function MotionLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (href.startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(href) as HTMLElement;
            if (target) {
                // Smooth scroll
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
        
    return (
        <motion.a
            href={href}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sky-400 font-medium"
            whileHover="hover"
            initial="rest"
            animate="rest"
        >
        <motion.span
            variants={{
            rest: { color: "#38bdf8" },
            hover: { color: "#fff" },
            }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.span>

        <motion.span
            className="absolute left-0 bottom-0 h-[2px] bg-sky-400"
            variants={{
            rest: { width: 0 },
            hover: { width: "100%" },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        />
        </motion.a>
    );
    }
