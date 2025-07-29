"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiGithubLine } from 'react-icons/ri';
import { FiZap } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.2
      }
    }
  };

  return (
    <div className="w-full sm:absolute sm:top-1/2 sm:-translate-y-1/2 flex-1 flex flex-col items-center justify-center px-4 pt-32 sm:pt-0">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo */}
        <motion.div 
          className="mb-2"
          variants={logoVariants}
        >
          <Image 
            src="/astreus-logo.svg"
            alt="Astreus Logo"
            width={120}
            height={120}
            className="mx-auto w-[72px] h-[72px] sm:w-[120px] sm:h-[120px]"
          />
        </motion.div>
        
        {/* Title */}
        <motion.h1 
          className="text-2xl sm:text-4xl md:text-7xl font-bold mb-8 text-white mx-auto rounded-lg"
          variants={itemVariants}
        >
          <span>
            Build powerful AI agents
          </span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Open-source AI agent framework for building autonomous systems that solve real-world tasks effectively
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6" 
          variants={itemVariants}
        >
          <motion.div variants={buttonVariants}>
            <Link 
              href="/docs" 
              className="px-6 text-sm uppercase py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors text-lg inline-block"
            >
              <FiZap className="inline mr-2" size={18} />
              <span className='uppercase'>Get Started</span>
            </Link>
          </motion.div>
          
          <motion.div variants={buttonVariants}>
            <Link 
              href="https://github.com/astreus-ai/astreus" 
              target="_blank"
              className="px-6 text-sm uppercase py-4 bg-transparent backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-lg flex items-center gap-2"
            >
              <RiGithubLine size={18} />
              GitHub
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 