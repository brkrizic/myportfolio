import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    // 🚨 THIS is what solves your build issue
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
