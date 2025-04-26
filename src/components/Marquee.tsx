"use client";

import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

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

  const textContent = "·   UNIFIED AGENT API   ·   MULTI-PROVIDER SUPPORT   ·   MEMORY MANAGEMENT   ·   TASK ORCHESTRATION   ·   PLUGIN SYSTEM   ·   PERSISTENCE LAYER   ·   EMBEDDINGS SUPPORT   ·   TYPE SAFETY   ·   ASTREUS AI AGENT FRAMEWORK   ";
  
  return (
    <motion.div 
      className="z-20 absolute -translate-x-[10%] w-[120vw] left-0 bg-white border-t-2 border-b-2 border-black py-2 top-[240px] sm:top-[300px] md:top-[360px] lg:top-[350px] xl:top-[380px] overflow-hidden transform -rotate-[10deg] shadow-lg"
      initial="hidden"
      animate="visible"
      variants={marqueeVariants}
    >
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap py-1"
          animate={{
            x: [0, -1150],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }
          }}
        >
          <span className="text-black uppercase text-base sm:text-xl leading-[26px] mr-2 flex-shrink-0">
            {textContent}
          </span>
          <span className="text-black uppercase text-base sm:text-xl leading-[26px] mr-2 flex-shrink-0">
            {textContent}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Marquee; 