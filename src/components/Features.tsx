"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Features = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
      className="w-full max-w-[623px] flex flex-col justify-start items-center border-b-2 border-[#1e1e1e] pb-[60px] text-[#1e1e1e] text-center text-3xl md:text-5xl leading-[139%] relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.p 
        className="text-[#1e1e1e] text-center text-2xl leading-tight font-inter mt-5 mb-5"
        variants={itemVariants}
      >
        Framework Capabilities:
      </motion.p>
      <motion.span variants={itemVariants}>Unified Agent API</motion.span>
      <motion.span variants={itemVariants}>Multi-Provider Support</motion.span>
      <motion.span variants={itemVariants}>Memory Management</motion.span>
      <motion.span variants={itemVariants}>Task Orchestration</motion.span>
      <motion.span variants={itemVariants}>Plugin System</motion.span>
      <motion.span variants={itemVariants}>Persistence Layer</motion.span>
      <motion.span variants={itemVariants}>Embeddings Support</motion.span>
      <motion.span variants={itemVariants}>Type Safety</motion.span>
      <motion.div 
        className="absolute top-[20%] left-[-44%] z-0 hidden md:flex"
        variants={imageVariants}
      >
        <Image 
          src="/astreus-gadget-closed.png" 
          alt="AI Agent Development" 
          width={270} 
          height={270}
          className="object-cover animate-float" 
        />
      </motion.div>
    </motion.div>
  );
};

export default Features; 