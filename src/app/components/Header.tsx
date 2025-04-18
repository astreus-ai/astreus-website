"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo: string;
  brandName: string;
  navItems: NavItem[];
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * Modern header with green accent
 */
export default function Header({ logo, brandName, navItems, cta }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Determine if a nav item is external (starts with http)
  const isExternalLink = (href: string) => href.startsWith('http');

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-4 sticky top-0 z-50 transition-all duration-300 border-b border-transparent ${
      scrolled ? 'bg-white/75 border-b border-gray-100 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo and brand */}
        <Link href="/" className="flex items-center gap-2 relative group">
          <div className={`absolute inset-0 -m-1 bg-emerald-100 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
          <Image 
            src={logo} 
            alt={`${brandName} Logo`} 
            width={28} 
            height={28}
            className="rounded-full relative transition-transform duration-300 group-hover:scale-105"
          />
          <span className={`font-bold text-lg relative ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>{brandName}</span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            isExternalLink(item.href) ? (
              <a 
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium flex items-center px-3 py-1.5 rounded-md transition-all duration-200 ${
                  scrolled 
                    ? 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80'
                }`}
              >
                {item.label === 'GitHub' && <FiGithub className="mr-1.5 h-4 w-4" />}
                {item.label === 'X' && <RiTwitterXFill className="mr-1.5 h-4 w-4" />}
                {item.label}
                <FiExternalLink className="ml-1 h-3 w-3 opacity-70" />
              </a>
            ) : (
              <Link 
                key={index} 
                href={item.href} 
                className={`text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${
                  scrolled 
                    ? 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
        
        {/* Action buttons */}
        <div className="flex items-center gap-4">
          {cta && (
            <a 
              href={cta.href} 
              className="hidden md:flex items-center bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-sm"
            >
              {cta.label}
              <FiArrowRight className="ml-1 h-3 w-3" />
            </a>
          )}
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? 
              <FiX className="h-5 w-5" /> : 
              <FiMenu className="h-5 w-5" />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden p-5 border-t border-gray-100 mt-3 bg-white shadow-lg rounded-b-xl absolute left-4 right-4 top-full">
          <nav className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              isExternalLink(item.href) ? (
                <a 
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg text-sm font-medium flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label === 'GitHub' && <FiGithub className="mr-1.5 h-4 w-4" />}
                  {item.label === 'X' && <RiTwitterXFill className="mr-1.5 h-4 w-4" />}
                  {item.label}
                  <FiExternalLink className="ml-1 h-3 w-3 opacity-70" />
                </a>
              ) : (
                <Link 
                  key={index} 
                  href={item.href} 
                  className="py-2 px-4 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            {cta && (
              <a
                href={cta.href}
                className="mt-3 py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {cta.label}
                <FiArrowRight className="ml-1 h-3 w-3" />
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
} 