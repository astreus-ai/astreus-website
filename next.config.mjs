import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
};

// Config'i MDX ile sarmalamalıyız
export default withMDX(nextConfig); 