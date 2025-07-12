"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    const handleScreenChange = (e: MediaQueryListEvent) => {
      if (e.matches && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    // Check on initial load
    if (mediaQuery.matches && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    // Add listener for screen size changes
    mediaQuery.addEventListener('change', handleScreenChange);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleScreenChange);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header 
        className="fixed w-full z-50 flex justify-center pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: mobileMenuOpen ? -100 : 0, 
          opacity: mobileMenuOpen ? 0 : 1
        }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          delay: mobileMenuOpen ? 0 : 0.2 
        }}
      >
        <nav className="backdrop-blur-sm bg-black/5 border border-t-2 border-t-white/20 border-l-white/15 border-r-white/15 border-b-white/10 rounded-full w-[90%] max-w-5xl">
          <div className="px-2 py-2 md:py-3 pl-5 flex items-center justify-between relative">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/" className="flex items-center">
                <Image 
                  src="/astreus-logo.svg"
                  alt="Astreus Logo"
                  width={32}
                  height={32}
                />
                <span className="text-xl font-medium ml-2">Astreus</span>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {["Documentation", "Plugins", "Github"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                >
                  <Link 
                    href={item === "Github" ? "https://github.com/astreus-ai/astreus" : item === "Documentation" ? "/docs" : `/${item.toLowerCase()}`}
                    target={item === "Github" ? "_blank" : undefined}
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Get Started Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="hidden md:block"
            >
              <Link 
                href="/docs/guides/quick-start" 
                className="px-5 py-3 text-sm bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                GET STARTED
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              onClick={toggleMobileMenu}
              className="md:hidden cursor-pointer px-3 py-3 bg-white text-black rounded-full focus:outline-none flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              <FiMenu size={22} />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Fullscreen - Outside of header so it doesn't disappear */}
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden flex flex-col"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          scale: mobileMenuOpen ? 1 : 0.9
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
      >
        {/* Close button - matching hamburger button position and style */}
        <div className="absolute top-6 right-[5%]">
          <motion.button 
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-3 bg-white text-black cursor-pointer rounded-full hover:bg-white/90 transition-colors focus:outline-none flex items-center justify-center"
            aria-label="Close menu"
          >
            <FiX size={22} />
          </motion.button>
        </div>

        <div className="flex flex-col h-full p-10">
          {/* Logo at top */}
          <div className="pt-14 flex items-center justify-center">
            <Link href="/" className="flex flex-col items-center" onClick={() => setMobileMenuOpen(false)}>
              <Image 
                src="/astreus-logo.svg"
                alt="Astreus Logo"
                width={72}
                height={72}
              />
              <span className="text-3xl font-medium mt-2">Astreus</span>
            </Link>
          </div>
          
          {/* Links in middle as buttons */}
          <div className="flex-grow flex flex-col items-center justify-center gap-6">
            {["Documentation", "Plugins", "Github"].map((item) => (
              <Link 
                key={item}
                href={item === "Github" ? "https://github.com/astreus-ai/astreus" : item === "Documentation" ? "/docs" : `/${item.toLowerCase()}`}
                target={item === "Github" ? "_blank" : undefined}
                className="px-8 py-3 text-base font-medium text-white border border-white/20 rounded-full bg-black/20 hover:bg-white/10 transition-all text-center min-w-[200px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            
            {/* Get Started button moved right below links */}
            <Link 
              href="/docs/guides/quick-start" 
              className="px-8 py-3 text-base bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors min-w-[200px] text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              GET STARTED
            </Link>
          </div>
          
          {/* Empty div to maintain vertical spacing */}
          <div className="pb-14"></div>
        </div>
      </motion.div>
    </>
  );
} 