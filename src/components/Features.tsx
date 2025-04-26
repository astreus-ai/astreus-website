"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Features = () => {
  const featuresList = [
    "Unified Agent API",
    "Multi-Provider Support",
    "Memory Management",
    "Task Orchestration",
    "Plugin System",
    "Persistence Layer",
    "Embeddings Support",
    "Type Safety"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4
      }
    }
  };

  return (
    <motion.div 
      id="what" 
      className="w-full max-w-[623px] flex sm:flex-row flex-col justify-start items-center border-b-2 border-[#1e1e1e] sm:pb-[60px] pb-[32px] text-[#1e1e1e] text-center text-3xl md:text-5xl leading-[139%] relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.p 
          className="text-[#1e1e1e] text-center text-2xl leading-tight font-inter mt-5 mb-5"
          variants={itemVariants}
        >
          Framework Capabilities:
        </motion.p>
        {featuresList.map((feature, index) => (
          <motion.span 
            key={index}
            variants={itemVariants}
            className="font-pixel mt-1 opacity-0 animate-fade-in text-base md:text-xl" 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {feature}
          </motion.span>
        ))}
      </div>
      <motion.div 
        className="sm:absolute flex sm:top-[20%] left-0 sm:left-[-55%] z-0"
        variants={imageVariants}
      >
        <Image 
          src="/astreus-gadget-closed.webp" 
          alt="AI Agent Development" 
          width={270} 
          height={270}
          className="object-cover animate-float w-[180px] h-[180px] xs:w-[270px] xs:h-[270px]" 
        />
      </motion.div>
    </motion.div>
  );
};

export default Features; 