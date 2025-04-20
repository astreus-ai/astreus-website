"use client";

import Image from 'next/image';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  logoSrc?: string;
}

/**
 * Modern hero section with transparent background and framer-motion animations
 */
export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  logoSrc = '/logo.svg',
}: HeroSectionProps) {
  const [codeText, setCodeText] = useState("");
  const fullCode = `
function createAgent() {
  return new Agent({
    name: "Astreus",
    models: ["gpt-4", "claude-3"],
    tools: [search, generate],
    memory: new Memory()
  });
}

const agent = createAgent();
agent.run("Solve this complex task");
`;

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.7
      }
    }
  };

  return (
    <section className="relative pt-24 pb-28 overflow-hidden -mt-[72px] bg-transparent">
      {/* Code background pattern - fixed position */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <div className="absolute -right-[5rem] sm:-right-[10rem] top-20 transform rotate-12 text-5xl text-black font-mono">
          <div className="relative w-[600px] h-[1200px] sm:w-[1080px] sm:h-[1080px] overflow-hidden">
            <pre className="whitespace-pre-wrap font-mono text-5xl">{codeText}</pre>
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-10 pt-[72px]">
        <motion.div 
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="relative"
            variants={logoVariants}
          >
            <Image 
              src={logoSrc}
              alt="Logo" 
              width={80} 
              height={80}
              className="relative p-1"
            />
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a 
              href={primaryCTA.link} 
              className="relative group bg-black hover:bg-gray-800 text-white text-base py-3 px-6 rounded-full transition-all duration-200 font-medium flex items-center justify-center shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {primaryCTA.text}
              <FiArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            
            {secondaryCTA && (
              <motion.a
                href={secondaryCTA.link}
                className="relative group border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 text-base py-3 px-6 rounded-full transition-all duration-200 font-medium flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiGithub className="mr-2 h-4 w-4 transition-transform" />
                {secondaryCTA.text}
              </motion.a>
            )}
          </motion.div>
          
          <motion.div 
            className="mt-16 flex items-center justify-center"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.8, duration: 0.5 }
            }}
          >
            <div className="bg-white border border-gray-200 rounded-full p-4 pr-6 flex items-center shadow-sm">
              <div className="bg-gray-50 p-2 rounded-full mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 12L10.5 15L16.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-base font-medium text-gray-900">100% Open Source</div>
              <div className="mx-3 w-1 h-4 bg-gray-200 rounded-full"></div>
              <div className="text-base font-medium text-gray-900">MIT License</div>
              <div className="mx-3 w-1 h-4 bg-gray-200 rounded-full"></div>
              <div className="text-base font-medium text-gray-900">Free Forever</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 