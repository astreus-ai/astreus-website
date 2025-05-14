'use client';

import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Button from '@/components/ui/Button';
import { RiArrowLeftLine, RiArrowUpLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isRootDocsPage = pathname === '/docs';
  
  // State for scroll top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Handle scroll event to show/hide scroll top button
  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setShowScrollTop(window.scrollY > 300);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Get parent path for back navigation
  const getParentPath = () => {
    // Split the path by '/' and remove empty strings
    const pathSegments = pathname.split('/').filter(segment => segment);
    
    // If we're already at a top-level path like /docs/something
    if (pathSegments.length <= 2) {
      return '/docs';
    }
    
    // Remove the last segment to get the parent path
    pathSegments.pop();
    return '/' + pathSegments.join('/');
  };
  
  const parentPath = getParentPath();
  
  // Get parent name for back button text
  const getParentName = () => {
    // Split the path by '/' and remove empty strings
    const pathSegments = pathname.split('/').filter(segment => segment);
    
    // If we're at a top-level path like /docs/something
    if (pathSegments.length <= 2) {
      return 'Docs';
    }
    
    // Get the second-to-last segment (parent directory name)
    const parentSegment = pathSegments[pathSegments.length - 2];
    
    // Capitalize first letter
    return parentSegment.charAt(0).toUpperCase() + parentSegment.slice(1);
  };
  
  const parentName = getParentName();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };
  
  const scrollTopVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="bg-[#d7e1e1] min-h-screen pb-24 flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        {/* Hero Section */}
        <div className="mb-12 mt-18">
          <Link href="/docs" target="_self">
            <motion.div 
              className="text-center flex flex-col items-center mx-auto"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <Image src="/docs-illustration.webp" alt="Astreus Logo" width={957} height={704} className="w-full max-w-[320px]" />
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mt-2 mb-4"
                variants={titleVariants}
              >
                Astreus Documentation
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
                variants={titleVariants}
              >
                Learn how to use Astreus to build, deploy, and manage your AI agents
              </motion.p>
            </motion.div>
          </Link>
        </div>
        
        {/* Content container */}
        <div className="max-w-4xl mx-auto">
          {/* Back Button (only shown on inner pages) */}
          {!isRootDocsPage && (
            <div className="flex justify-end mb-4">
              <Button 
                href={parentPath} 
                target="_self" 
                icon={<RiArrowLeftLine size={18} />}
              >
                Back to {parentName}
              </Button>
            </div>
          )}
          
          {/* Page Content */}
          <div className="overflow-x-hidden">
            {children}
          </div>
          
          {/* Scroll to Top Button (styled like Back button) */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.div
                className="flex justify-end gap-4 mt-4"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={scrollTopVariants}
              >
                {!isRootDocsPage && (
                  <Button 
                    href={parentPath} 
                    target="_self" 
                    icon={<RiArrowLeftLine size={18} />}
                  >
                    Back to {parentName}
                  </Button>
                )}
                <Button 
                  onClick={scrollToTop}
                  icon={<RiArrowUpLine size={18} />}
                >
                  Scroll to Top
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Footer at the bottom with no space below */}
      <div className="py-6 text-center bg-[#d7e1e1] mt-20">
        <p className="text-lg">
          Astreus is open source.
        </p>
        <p className="text-lg">
          Build your best AI agents and shoot for the stars!
        </p>
        <Button icon={<RiArrowLeftLine size={18} />} target="_self" className="mx-auto mt-8" href="/">
          Return to Home
        </Button>
      </div>
    </div>
  );
} 