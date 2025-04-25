"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div 
      id="who" 
      className="w-full max-w-[623px] flex flex-col justify-start items-center border-b-2 border-[#1e1e1e] pb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      <motion.div 
        className="text-[#1e1e1e] text-center text-xl md:text-2xl leading-tight mb-4"
        variants={textVariants}
      >
        A TypeScript AI Agent Framework designed to help you easily build, deploy, and manage intelligent conversational agents powered by large language models (LLMs)
      </motion.div>
    </motion.div>
  );
};

export default About; 