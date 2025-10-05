"use client";

import dynamic from "next/dynamic";

// Dynamically import the 3D model client-side only
const About = dynamic(() => import("../About"), {
  ssr: false,
});

export default function AboutWrapper({ text }: { text: string }) {

  return <About text={text} />;
};