import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrés Mora | Ingeniero de Sistemas & Desarrollador Web",
  description: "Portafolio de Andrés Mora Mateus — Ingeniero de Sistemas Junior con 4+ años en soporte TI y desarrollo web. JavaScript, Python, Azure, APIs REST.",
  keywords: ["Andrés Mora", "Ingeniero de Sistemas", "Desarrollador Web", "JavaScript", "Python", "Azure", "Portafolio", "Colombia"],
  authors: [{ name: "Andrés Mora Mateus" }],
  openGraph: {
    title: "Andrés Mora | Ingeniero de Sistemas & Desarrollador Web",
    description: "Portafolio profesional — De IT Support a Desarrollador Web",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Mora | Desarrollador Web",
    description: "Ingeniero de Sistemas Junior con experiencia real en TI y desarrollo web",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
