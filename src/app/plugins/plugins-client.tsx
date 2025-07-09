"use client";

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PluginCard from '@/components/PluginCard';
import { motion, AnimatePresence } from 'framer-motion';
import { plugins } from '@/constants/plugins';
import { FiSearch } from 'react-icons/fi';

export default function PluginsClient() {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Component mounted
  }, []);
  
  const filteredPlugins = useMemo(() => {
    if (!searchTerm) return plugins;
    
    const lowercaseSearch = searchTerm.toLowerCase();
    return plugins.filter(plugin => 
      plugin.title.toLowerCase().includes(lowercaseSearch) ||
      plugin.description.toLowerCase().includes(lowercaseSearch) ||
      plugin.tags.some(tag => tag.toLowerCase().includes(lowercaseSearch))
    );
  }, [searchTerm]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Background image with animation */}
      <motion.div 
        className="fixed inset-0 z-[0]"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut"
        }}
      >
        <Image
          src="/background.webp"
          alt="Background"
          width={3072}
          height={1536}
          priority
          className="object-cover h-screen w-screen"
        />
      </motion.div>
      
      {/* Navbar */}
      <Navbar />

      {/* Background black */}
      <div className="absolute z-[1] top-0 left-0 w-full h-full bg-black/0"></div>
      
      {/* Background gradient - static */}
      <div className="absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-64px] sm:mt-[32px] w-[900px] h-[240px] rounded-full blur-[100px] bg-black/80"></div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col min-h-screen pt-32 sm:pt-52 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full flex-grow">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Plugins</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Extend your Astreus experience with these powerful plugins
            </p>
          </motion.div>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut"
            }}
            className="max-w-xl mx-auto mb-12 relative"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search plugins..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-4 pl-12 bg-white/10 text-white border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 text-xl" />
            </div>
          </motion.div>
          
          {/* Plugin Cards */}
          <motion.div 
            className="flex flex-wrap justify-center w-full gap-6 mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence>
              {filteredPlugins.map((plugin) => (
                <PluginCard key={plugin.id} plugin={plugin} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty state */}
          {filteredPlugins.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-400">No plugins found matching your search</p>
            </motion.div>
          )}
        </div>
        
        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full mt-auto"
        >
          <Footer />
        </motion.div>
      </main>
    </div>
  );
}