import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    turbopack: {
    resolveAlias: {
      'e100/dist/components': 'e100/dist/components/index.js',  // Points to your package's components entry
      'e100': 'node_modules/e100',  // Catches all e100/* import
    },
  },
  // Or for webpack fallback (if not using Turbopack exclusively):
  webpack: (config) => {
    config.resolve.alias['e100/dist/components'] = 'e100/dist/components/index.js';
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,  // Skip TS errors during build
  },
  output: 'standalone',  // For better production builds
  images: { unoptimized: true },
};

export default nextConfig;
