"use client";

import React, { useState } from 'react';
import Marquee from '@/components/Marquee';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { RiStarLine } from 'react-icons/ri';

export default function Home() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleFooterVisibilityChange = (visible: boolean) => {
    setIsFooterVisible(visible);
  };

  return (
    <div className="bg-[#d7e1e1] min-h-screen">
      {!isFooterVisible && (
        <div className="fixed top-5 right-5 z-50">
          <a 
            href="https://github.com/astreus-ai/astreus" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border-2 border-[#1e1e1e] bg-white hover:bg-gray-50 transition-colors inline-block"
          >
            <RiStarLine className="inline-block" />
            <span className="font-medium text-base">Star on GitHub</span>
          </a>
        </div>
      )}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16 relative overflow-hidden">
        <Hero />
        <div className="flex flex-col justify-center items-center gap-6">
          <About />
          <Features />
          <Footer onVisibilityChange={handleFooterVisibilityChange} />
        </div>
      </div>
    </div>
  );
} 