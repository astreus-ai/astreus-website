"use client";

import React from 'react';
import Image from 'next/image';
import Marquee from './Marquee';
import { motion } from 'framer-motion';

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
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
    <div className="w-full flex flex-col items-center justify-center relative mt-8 mb-64">
      <div className="w-full relative">
        <motion.h1 
          className="text-[#1e1e1e] text-center text-7xl sm:text-8xl md:text-[180px] lg:text-[220px] xl:text-[250px] leading-none tracking-tighter relative z-10 font-semibold"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          ASTREUS
        </motion.h1>
        <motion.div 
          className="absolute top-[7.5rem] left-[50%] md:left-[50%] transform -translate-x-1/2 z-[15]"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image 
            src="/astreus-gadget.png"
            alt="AI Character" 
            width={270} 
            height={270}
            className="object-contain animate-float" 
            priority
          />
        </motion.div>
      </div>
      <Marquee />
    </div>
  );
};

export default Hero; 