"use client";

import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { brandInfo, comingSoonCodeSnippet, comingSoonInfo } from '../constants';

export default function ComingSoonPage() {
  const [codeText, setCodeText] = useState("");
  const fullCode = comingSoonCodeSnippet;

  useEffect(() => {
    let i = 0;
    const typewriterInterval = setInterval(() => {
      if (i <= fullCode.length) {
        setCodeText(fullCode.slice(0, i));
        i++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 10);
    
    return () => clearInterval(typewriterInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Code background pattern - fixed position to prevent layout shifts */}
      <div className="fixed top-0 right-0 w-full h-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <div className="absolute -right-[5rem] sm:-right-[10rem] top-20 transform rotate-12 text-5xl text-black font-mono">
          <div className="relative w-[600px] h-[1200px] sm:w-[1080px] sm:h-[1080px] overflow-hidden">
            <pre className="whitespace-pre-wrap font-mono text-5xl">{codeText}</pre>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.8 }}
        className="absolute -right-24 -top-24 w-96 h-96 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -left-24 bottom-0 w-72 h-72 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl"
      ></motion.div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-4"
        >
          <Image 
            src={brandInfo.logo} 
            alt={`${brandInfo.name} Logo`} 
            width={80} 
            height={80}
            className="mx-auto"
            priority
          />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          {comingSoonInfo.title}
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mt-6 mb-12"
        >
          {comingSoonInfo.description}
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex justify-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={comingSoonInfo.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 text-base bg-black hover:bg-gray-800 text-white rounded-full flex items-center transition-colors shadow-sm"
            >
              <FiGithub className="mr-2 text-lg" />
              View on GitHub
            </motion.a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-500 mt-4"
          >
            Expected launch: {comingSoonInfo.expectedLaunch}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 