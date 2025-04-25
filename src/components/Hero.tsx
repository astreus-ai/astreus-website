"use client";

import React from 'react';
import Image from 'next/image';
import Marquee from './Marquee';

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative mt-8 mb-64">
      <div className="w-full relative">
        <h1 className="text-[#1e1e1e] text-center text-7xl sm:text-8xl md:text-[180px] lg:text-[220px] xl:text-[250px] leading-none tracking-tighter relative z-10 font-semibold">ASTREUS</h1>
        <div className="absolute top-[7.5rem] left-[50%] md:left-[50%] transform -translate-x-1/2 z-[15]">
          <Image 
            src="/astreus-gadget.png"
            alt="AI Character" 
            width={270} 
            height={270}
            className="object-contain animate-float" 
            priority
          />
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default Hero; 