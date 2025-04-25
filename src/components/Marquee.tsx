"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { i } from 'framer-motion/client';

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

  return (
    <motion.div 
      className="z-20 w-[120%] ml-[-10%] bg-white border-t-2 border-b-2 border-black py-2 flex absolute top-[280px] md:top-[300px] overflow-hidden transform -rotate-[10deg] shadow-lg"
      initial="hidden"
      animate="visible"
      variants={marqueeVariants}
    >
      <div className="min-w-full flex-none flex justify-around gap-4 scroll marquee-content">
        <div className="text-black uppercase text-base md:text-xl leading-[26px] whitespace-nowrap">
          ·&nbsp;&nbsp;&nbsp;UNIFIED AGENT API&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;MULTI-PROVIDER SUPPORT&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;MEMORY MANAGEMENT&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;TASK ORCHESTRATION&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;PLUGIN SYSTEM&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;PERSISTENCE LAYER&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;EMBEDDINGS SUPPORT&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;TYPE SAFETY&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;ASTREUS AI AGENT FRAMEWORK&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <div className="min-w-full flex-none flex justify-around gap-4 scroll marquee-content">
        <div className="text-black uppercase text-base md:text-xl leading-[26px] whitespace-nowrap">
          ·&nbsp;&nbsp;&nbsp;UNIFIED AGENT API&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;MULTI-PROVIDER SUPPORT&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;MEMORY MANAGEMENT&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;TASK ORCHESTRATION&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;PLUGIN SYSTEM&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;PERSISTENCE LAYER&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;EMBEDDINGS SUPPORT&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;TYPE SAFETY&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;ASTREUS AI AGENT FRAMEWORK&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </motion.div>
  );
};

export default Marquee; 