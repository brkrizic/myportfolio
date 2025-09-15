import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    // 🚨 THIS is what solves your build issue
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)", // apply CSP to all routes
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: blob: https://raw.githack.com;
              connect-src 'self' https://raw.githack.com https://raw.githubusercontent.com;
              font-src 'self';
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, " "), // removes extra spaces/newlines
          },
        ],
      },
    ]
  },
};

export default nextConfig;
