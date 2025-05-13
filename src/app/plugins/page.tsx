"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import PluginSearch from '@/components/plugins/PluginSearch';
import PluginCard from '@/components/plugins/PluginCard';
import { RiApps2Line, RiLoader4Line, RiArrowLeftLine, RiArrowRightLine, RiDatabase2Line, RiWifiOffLine, RiGithubLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import router from 'next/router';
import Image from 'next/image';

interface Plugin {
  id: string;
  name: string;
  description: string;
  author: string;
  githubUrl: string;
  docsUrl?: string | null;
  imageData?: string | null;
}

interface Pagination {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

export default function PluginsPage() {
  const [allPlugins, setAllPlugins] = useState<Plugin[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [errorType, setErrorType] = useState<'database' | 'network' | 'general'>('general');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  // Debounce search term
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timer);
  }, [search]);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  // Function to retry loading
  const handleRetry = () => {
    setLoading(true);
    setError('');
    setErrorType('general');
    fetchPlugins();
  };

  // Filter plugins locally based on search
  const filteredPlugins = useMemo(() => {
    if (!debouncedSearch.trim()) return allPlugins;
    
    const searchLower = debouncedSearch.toLowerCase();
    return allPlugins.filter(plugin => 
      plugin.name.toLowerCase().includes(searchLower) || 
      plugin.description.toLowerCase().includes(searchLower) ||
      plugin.author.toLowerCase().includes(searchLower)
    );
  }, [allPlugins, debouncedSearch]);

  // Calculate pagination
  const pagination = useMemo(() => {
    const totalCount = filteredPlugins.length;
    const totalPages = Math.max(1, Math.ceil(totalCount / ITEMS_PER_PAGE));
    
    return {
      page: currentPage,
      limit: ITEMS_PER_PAGE,
      totalCount,
      totalPages
    };
  }, [filteredPlugins, currentPage]);

  // Get current page plugins
  const paginatedPlugins = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPlugins.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPlugins, currentPage]);

  // Fetch all plugins only once
  const fetchPlugins = async () => {
    setLoading(true);
    setError('');
    setErrorType('general');
    
    try {
      const response = await fetch(`/api/plugins?limit=1000`);
      
      if (!response.ok) {
        // Handle different error types
        if (response.status === 503) {
          setErrorType('database');
          throw new Error('Database connection error. Please try again later.');
        }
        
        // Try to get more details from the error response
        try {
          const errorData = await response.json();
          throw new Error(errorData.message || `Error: ${response.status}`);
        } catch (parseError) {
          // If we can't parse the JSON, use the status code
          throw new Error(`Error: ${response.status}`);
        }
      }
      
      const data = await response.json();
      
      if (data.plugins) {
        setAllPlugins(data.plugins);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching plugins:', error);
      
      // Set appropriate error message and type
      if (error instanceof Error) {
        if (error.message.includes('fetch') || error.message.includes('network')) {
          setErrorType('network');
          setError('Network connection error. Please check your internet connection and try again.');
        } else if (error.message.includes('database') || errorType === 'database') {
          setErrorType('database');
          setError('Database service unavailable. Please try again later.');
        } else {
          setError(error.message || 'Failed to load plugins. Please try again later.');
        }
      } else {
        setError('Failed to load plugins. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch plugins only once at the start
  useEffect(() => {
    fetchPlugins();
  }, []);

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

  // Handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination && currentPage < pagination.totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // Render error icon based on error type
  const renderErrorIcon = () => {
    switch (errorType) {
      case 'database':
        return <RiDatabase2Line size={40} className="text-orange-400" />;
      case 'network':
        return <RiWifiOffLine size={40} className="text-orange-400" />;
      default:
        return <RiApps2Line size={40} className="text-red-400" />;
    }
  };

  // Get error background color based on error type
  const getErrorBgColor = () => {
    return errorType === 'general' ? 'bg-red-100' : 'bg-orange-100';
  };

  return (
    <div className="bg-[#d7e1e1] min-h-screen flex flex-col">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex-grow">
        <motion.div 
          className="mb-12 mt-32 text-center flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Image src="/astreus-logo-black.svg" alt="Astreus Logo" width={100} height={100} />
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mt-2 mb-4"
            variants={titleVariants}
          >
            Astreus Plugin Library
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
            variants={titleVariants}
          >
            Extend your AI agents with powerful tools and integrations from the Astreus ecosystem
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <PluginSearch search={search} setSearch={setSearch} />
        </div>
        
        <div className="min-h-[240px]"> {/* Container with min-height to prevent jitter */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <RiLoader4Line className="animate-spin text-gray-500" size={40} />
            </div>
          ) : error ? (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className={`inline-flex justify-center items-center ${getErrorBgColor()} p-6 mb-6`}>
                {renderErrorIcon()}
              </div>
              <h3 className="text-2xl font-medium mb-2">Error</h3>
              <p className="text-gray-600 mb-6">{error}</p>
              <Button onClick={handleRetry}>
                Try Again
              </Button>
            </motion.div>
          ) : paginatedPlugins.length > 0 ? (
            <>
              <motion.div 
                className="flex flex-wrap gap-6 mx-auto max-w-7xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {paginatedPlugins.map((plugin) => (
                  <PluginCard key={plugin.id} plugin={plugin} />
                ))}
              </motion.div>
              
              {pagination && pagination.totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 gap-4">
                  <Button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    icon={<RiArrowLeftLine size={18} />}
                  >
                    Previous
                  </Button>
                  
                  <div className="mx-4 text-gray-700">
                    Page {currentPage} of {pagination.totalPages}
                  </div>
                  
                  <Button
                    onClick={handleNextPage}
                    disabled={currentPage === pagination.totalPages}
                    icon={<RiArrowRightLine size={18} />}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-medium mb-2">No plugins found</h3>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Simple Footer - No white space below */}
      <div className="my-20 py-6 text-center bg-[#d7e1e1]">
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