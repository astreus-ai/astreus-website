import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DynamicFavicon from "./components/DynamicFavicon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astreus AI - Advanced AI Agent Framework",
  description: "Astreus is an open-source platform for building, deploying, and managing AI agents that can reason, learn, and solve complex problems.",
  icons: {
    icon: '/astreus-logo.svg',
    apple: '/astreus-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/astreus-logo.svg" id="favicon" />
        <link rel="apple-touch-icon" href="/astreus-logo.svg" id="apple-touch-icon" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <DynamicFavicon />
        {children}
      </body>
    </html>
  );
}
