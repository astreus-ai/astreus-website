"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.p 
          className="text-sm sm:text-base text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            animate={{ 
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block text-white"
          >
            Astreus is open source. Build your best AI agents and shoot for the stars!
          </motion.span>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 