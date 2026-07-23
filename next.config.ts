import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    turbopack: {
    resolveAlias: {
      'ethyl-ui/dist/components': 'ethyl-ui/dist/components/index.js',  // Points to your package's components entry
      'ethyl-ui': '@eui/ethyl-ui',  // Catches all ethyl-ui/* imports
    },
  },
  // Or for webpack fallback (if not using Turbopack exclusively):
  webpack: (config) => {
    config.resolve.alias['ethyl-ui/dist/components'] = 'ethyl-ui/dist/components/index.js';
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,  // Skip TS errors during build
  },
  output: 'export',  // For better production builds
  images: { unoptimized: true },
};

export default nextConfig;
