"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const marqueeVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: "-5deg" },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: "-10deg",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.6
      }
    }
  };

  // Create the repeating text content using actual spaces rather than &nbsp;
  const textContent = "·   UNIFIED AGENT API   ·   MULTI-PROVIDER SUPPORT   ·   MEMORY MANAGEMENT   ·   TASK ORCHESTRATION   ·   PLUGIN SYSTEM   ·   PERSISTENCE LAYER   ·   EMBEDDINGS SUPPORT   ·   TYPE SAFETY   ·   ASTREUS AI AGENT FRAMEWORK   ";
  
  // Repeat the text multiple times to ensure continuous appearance
  const repeatedTextContent = Array(6).fill(textContent).join('');

  return (
    <motion.div 
      className="z-20 absolute w-[300vw] left-[-100vw] bg-white border-t-2 border-b-2 border-black py-2 flex top-[240px] sm:top-[300px] md:top-[360px] lg:top-[350px] xl:top-[380px] overflow-visible transform -rotate-[10deg] shadow-lg"
      initial="hidden"
      animate="visible"
      variants={marqueeVariants}
    >
      <div className="w-full flex-none flex justify-start gap-0 scroll marquee-content">
        <div className="text-black uppercase text-base sm:text-xl leading-[26px] whitespace-nowrap">
          {repeatedTextContent}
        </div>
      </div>
    </motion.div>
  );
};

export default Marquee; 