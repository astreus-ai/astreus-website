"use client";

import React from 'react';
import Image from 'next/image';
import Marquee from './Marquee';
import { motion } from 'framer-motion';

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, transform: 'translateY(20px) translateX(-50%)' },
    visible: {
      opacity: 1,
      scale: 1,
      transform: 'translateY(0) translateX(-50%)',
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.5
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative mt-12 sm:mt-8 mb-64 sm:mb-80 lg:mb-64">
      <div className="w-full relative">
        <motion.h1 
          className="text-[#1e1e1e] text-center text-6xl sm:text-[140px] md:text-[160px] lg:text-[220px] xl:text-[250px] leading-none tracking-tighter relative z-10 font-semibold"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          ASTREUS
        </motion.h1>
        <motion.div 
          className="absolute w-[200px] xs:w-[220px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] top-[2.5rem] sm:top-[5rem] md:top-[7.5rem] left-[50%] md:left-[52.5%] lg:left-[55%] transform -translate-x-1/2 z-[15]"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image 
            src="/astreus-gadget.webp"
            alt="AI Character" 
            width={270} 
            height={270}
            className="object-contain animate-float" 
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 