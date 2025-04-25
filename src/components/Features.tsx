"use client";

import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <div id="what" className="w-full max-w-[623px] flex flex-col justify-start items-center border-b-2 border-[#1e1e1e] pb-[60px] text-[#1e1e1e] text-center text-3xl md:text-5xl leading-[139%] relative">
      <p className="text-[#1e1e1e] text-center text-2xl leading-tight font-inter mt-5 mb-5">Framework Capabilities:</p>
      <span>Unified Agent API</span>
      <span>Multi-Provider Support</span>
      <span>Memory Management</span>
      <span>Task Orchestration</span>
      <span>Plugin System</span>
      <span>Persistence Layer</span>
      <span>Embeddings Support</span>
      <span>Type Safety</span>
      <div className="absolute top-[20%] left-[-28%] z-0 hidden md:flex">
        <Image 
          src="/astreus-gadget-closed.png" 
          alt="AI Agent Development" 
          width={270} 
          height={270}
          className="object-cover animate-float" 
        />
      </div>
    </div>
  );
};

export default Features; 