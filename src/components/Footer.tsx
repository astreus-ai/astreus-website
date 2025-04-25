"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiBook2Line, RiGithubLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

interface FooterProps {
  onVisibilityChange?: (isVisible: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        if (onVisibilityChange) {
          onVisibilityChange(visible);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, [onVisibilityChange]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <footer 
      id="footer" 
      className="w-full py-6"
    >
      <motion.div 
        className="w-full max-w-[623px] mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center gap-8">
          <motion.div 
            className="text-[#1e1e1e] text-center text-xl md:text-2xl leading-tight mb-6"
            variants={itemVariants}
          >
            Ready to supercharge your AI agents? Dive into Astreus and start building powerful conversational experiences.
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                href="/docs" 
                target="_blank"
                className="px-6 py-3 flex items-center gap-2 bg-white border-2 border-[#1e1e1e] hover:bg-gray-50 transition-colors"
              >
                <RiBook2Line size={20} />
                <span className="font-medium">Documentation</span>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                href="https://github.com/astreus-ai/astreus" 
                target="_blank"
                className="px-6 py-3 flex items-center gap-2 bg-white border-2 border-[#1e1e1e] hover:bg-gray-50 transition-colors"
              >
                <RiGithubLine size={20} />
                <span className="font-medium">View on GitHub</span>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center text-lg text-[#1e1e1e] mt-8"
            variants={itemVariants}
          >
            <p>Astreus is open source.</p>
            <p>Build your best AI agents and shoot for the stars!</p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
