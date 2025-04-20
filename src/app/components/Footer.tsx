"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo: string;
  brandName: string;
  columns: FooterColumn[];
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    discord?: string;
  };
}

/**
 * Modern footer with transparent background and framer-motion animations
 */
export default function Footer({ logo, brandName, columns }: FooterProps) {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Check if a link is external
  const isExternalLink = (href: string) => href.startsWith('http');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        stiffness: 100,
        damping: 15,
        duration: 0.4
      }
    }
  };

  const newsletterVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
      {/* Newsletter section */}
      <div className="container-custom">
        <motion.div 
          className="mb-20 bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={newsletterVariants}
        >
          <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold mb-4">Stay in the loop</h2>
              <p className="text-gray-600 text-base mb-0">
                Get notified about updates, new features, and community news.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <motion.input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500/50 w-full sm:w-64 text-base"
                whileFocus={{ boxShadow: "0 0 0 3px rgba(107, 114, 128, 0.15)" }}
              />
              <motion.button 
                className="bg-black hover:bg-gray-800 text-white font-medium px-5 py-3 rounded-full transition-all duration-200 flex items-center justify-center whitespace-nowrap shadow-sm text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <FiArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Brand column */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gray-100 rounded-full blur-md opacity-40"></div>
                <Image 
                  src={logo} 
                  alt={`${brandName} Logo`} 
                  width={38} 
                  height={38} 
                  className="rounded-full relative"
                />
              </div>
              <span className="font-bold text-xl text-gray-900">{brandName}</span>
            </motion.div>
            <motion.p 
              className="text-gray-600 mb-6 text-base leading-relaxed"
              variants={itemVariants}
            >
              An intelligent open-source AI agent framework for building powerful applications with minimal code.
            </motion.p>
          </motion.div>
          
          {/* Link columns */}
          {columns.map((column, colIndex) => (
            <motion.div 
              key={colIndex}
              variants={itemVariants}
              custom={colIndex}
            >
              <h3 className="font-bold text-gray-900 mb-5 text-base">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (linkIndex * 0.05) + (colIndex * 0.1) 
                    }}
                    viewport={{ once: true }}
                  >
                    {isExternalLink(link.href) ? (
                      <motion.a 
                        href={link.href}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-gray-800 transition-colors text-base flex items-center"
                        whileHover={{ x: 2 }}
                      >
                        {link.label}
                        <FiArrowRight className="ml-1 h-3 w-3 opacity-70" />
                      </motion.a>
                    ) : (
                      <motion.div whileHover={{ x: 2 }}>
                        <Link 
                          href={link.href} 
                          className="text-gray-600 hover:text-gray-800 transition-colors text-base group"
                        >
                          <span className="inline-flex items-center">
                            {link.label}
                            <span className="inline-block w-0 h-px bg-gray-500 ml-0 -mt-px group-hover:w-3 group-hover:ml-1 transition-all opacity-0 group-hover:opacity-100"></span>
                          </span>
                        </Link>
                      </motion.div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="order-2 md:order-1 mt-4 md:mt-0">
            © {currentYear} {brandName}. All rights reserved. <span className="text-gray-600">MIT License</span>
          </div>
          <div className="order-1 md:order-2 flex gap-8">
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/privacy-policy" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/terms-of-service" className="hover:text-gray-800 transition-colors">Terms of Service</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 