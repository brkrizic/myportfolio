"use client";

import dynamic from "next/dynamic";

// Dynamically import the 3D model client-side only
const My3DModel = dynamic(() => import("./My3DSpace"), {
  ssr: false,
});

export default function Client3DWrapper() {
  return <My3DModel />;
}
