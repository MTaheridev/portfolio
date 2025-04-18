import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  /* config options here */
  eslint: {
    // This will ignore ESLint errors during the build process
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;