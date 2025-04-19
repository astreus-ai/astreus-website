import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DynamicFavicon from "./components/DynamicFavicon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astreus - AI Agent Framework",
  description: "An AI agent framework for building autonomous systems that solve real-world tasks effectively.",
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
