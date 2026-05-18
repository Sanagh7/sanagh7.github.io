import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
    webpackMemoryOptimizations: true,
  },
  onDemandEntries: {
    maxInactiveAge: 10_000,
    pagesBufferLength: 1,
  },
  webpack(config) {
    const iconShim = path.resolve("src/lib/icons.jsx");

    config.resolve.alias = {
      ...config.resolve.alias,
      "react-icons/bi": iconShim,
      "react-icons/di": iconShim,
      "react-icons/fa": iconShim,
      "react-icons/md": iconShim,
      "react-icons/ri": iconShim,
      "react-icons/si": iconShim,
      "react-icons/tb": iconShim,
    };

    return config;
  },
};

export default nextConfig;
