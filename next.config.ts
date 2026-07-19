import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.31.201"],

  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;