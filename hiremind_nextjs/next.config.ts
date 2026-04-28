import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from external sources (Unsplash used on landing page)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
