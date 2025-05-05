"use client";

import React, { useState } from 'react';
import Marquee from '@/components/Marquee';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { RiPuzzle2Line } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleFooterVisibilityChange = (visible: boolean) => {
    setIsFooterVisible(visible);
  };

  const pluginsButtonVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: 0.7
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3
      }
    },
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

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div className="bg-[#d7e1e1] min-h-screen">
      <AnimatePresence>
        {!isFooterVisible && (
          <motion.div 
            className="fixed top-5 right-5 z-50"
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
            variants={pluginsButtonVariants}
          >
            <Link 
              href="/plugins"
              target="_self"
              className="flex flex-row items-center gap-2 px-5 py-3 border-2 border-[#1e1e1e] bg-white hover:bg-gray-50 transition-colors shadow-md"
            >
              <RiPuzzle2Line />
              <span className="font-medium text-base">Explore Plugins</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <Marquee />
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16 relative overflow-hidden">
        <Hero />
        <motion.div 
          className="flex flex-col justify-center items-center gap-6"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <motion.div variants={itemVariants}>
            <About />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Features />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Footer onVisibilityChange={handleFooterVisibilityChange} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 