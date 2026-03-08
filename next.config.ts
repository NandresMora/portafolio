import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Descomenta y ajusta si tu repositorio no se llama igual que tu usuario
  // basePath: '/Portafolio_Andres',
  // assetPrefix: '/Portafolio_Andres',

  images: {
    unoptimized: true,
  },

  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
