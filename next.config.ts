import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Como tu repositorio se llama "portafolio", necesitamos esta configuración
  // para que Next.js encuentre los estilos (CSS) y scripts (JS) correctamente.
  basePath: '/portafolio',
  assetPrefix: '/portafolio',

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
