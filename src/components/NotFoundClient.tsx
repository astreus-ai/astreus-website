"use client";

import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiBook } from 'react-icons/fi';

export default function NotFoundClient() {
  return (
    <div className="min-h-screen sm:h-screen bg-black text-white relative overflow-hidden">
      {/* Background image with animation */}
      <motion.div 
        className="absolute inset-0 z-[0]"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
        }}
        transition={{
          opacity: { duration: 1.5 },
          scale: { duration: 2 },
        }}
      >
        <Image
          src="/background.webp"
          alt="Background"
          width={3072}
          height={1536}
          priority
          className="object-cover h-full w-full"
        />
      </motion.div>
      
      {/* Navbar */}
      <Navbar />

      {/* Background black */}
      <div className="absolute z-[1] top-0 left-0 w-full h-full bg-black/0"></div>
      
      {/* Background gradient - static */}
      <div className="absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-64px] sm:mt-[32px] w-[900px] h-[240px] rounded-full blur-[100px] bg-black/80"></div>

      {/* 404 Content */}
      <main className="relative z-10 h-full flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center px-4">
          <motion.div 
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl sm:text-8xl md:text-9xl font-bold text-white mb-2 sm:mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              404
            </motion.h1>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Page Not Found
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-base sm:text-lg mb-12 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                href="/"
                className="px-6 text-sm uppercase py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors text-lg inline-flex items-center gap-2"
              >
                <IoHome className="w-5 h-5" />
                Return to Home Page
              </Link>
              
              <Link
                href="/docs"
                className="px-6 text-sm uppercase py-4 bg-transparent backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-lg inline-flex items-center gap-2"
              >
                <FiBook className="w-5 h-5" />
                Docs
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}