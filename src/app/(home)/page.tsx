"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    // Component mounted
  }, []);

  return (
    <div className="min-h-screen sm:h-screen bg-black text-white relative overflow-hidden">
      {/* Background image with animation */}
      <motion.div 
        className="absolute inset-0 z-[0]"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
        }}
        transition={{
          opacity: { duration: 1.5 },
          scale: { duration: 2 },
        }}
      >
        <Image
          src="/background.webp"
          alt="Background"
          width={3072}
          height={1536}
          priority
          className="object-cover h-full w-full"
        />
      </motion.div>
      
      {/* Navbar */}
      <Navbar />

      {/* Background black */}
      <div className="absolute z-[1] top-0 left-0 w-full h-full bg-black/0"></div>
      
      {/* Background gradient - static */}
      <div className="absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-64px] sm:mt-[32px] w-[900px] h-[240px] rounded-full blur-[100px] bg-black/80"></div>

      {/* Hero section */}
      <main className="relative z-10 h-full flex flex-col min-h-screen">
        <Hero />
        
        {/* Additional content can be added here */}
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}