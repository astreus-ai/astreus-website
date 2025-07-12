"use client";

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PluginCard from '@/components/PluginCard';
import { motion, AnimatePresence } from 'framer-motion';
import { agents } from '@/constants/agents';
import { FiSearch } from 'react-icons/fi';

export default function AgentsClient() {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Component mounted
  }, []);
  
  const filteredAgents = useMemo(() => {
    if (!searchTerm) return agents;
    
    const lowercaseSearch = searchTerm.toLowerCase();
    return agents.filter(agent => 
      agent.title.toLowerCase().includes(lowercaseSearch) ||
      agent.description.toLowerCase().includes(lowercaseSearch) ||
      agent.tags.some(tag => tag.toLowerCase().includes(lowercaseSearch))
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Agents</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore pre-built AI agents powered by Astreus 
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
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-4 pl-12 bg-white/10 text-white border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 text-xl" />
            </div>
          </motion.div>
          
          {/* Agent Cards */}
          <motion.div 
            className="flex flex-wrap justify-center w-full gap-6 mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence>
              {filteredAgents.map((agent) => (
                <PluginCard key={agent.id} plugin={agent} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty state */}
          {filteredAgents.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-400">No agents found</p>
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