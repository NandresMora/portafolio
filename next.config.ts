import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Solo activa el export estático en producción (para GitHub Pages)
  ...(isProd && { output: "export" }),

  // basePath y assetPrefix solo en producción
  basePath: isProd ? '/portafolio' : '',
  assetPrefix: isProd ? '/portafolio' : '',

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;