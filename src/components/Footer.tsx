"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiBook2Line, RiGithubLine } from 'react-icons/ri';

interface FooterProps {
  onVisibilityChange?: (isVisible: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        if (onVisibilityChange) {
          onVisibilityChange(visible);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, [onVisibilityChange]);

  return (
    <footer 
      id="footer" 
      className="w-full py-6"
    >
      <div className="w-full max-w-[623px] mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="text-[#1e1e1e] text-center text-xl md:text-2xl leading-tight mb-6">
            Ready to supercharge your AI agents? Dive into Astreus and start building powerful conversational experiences.
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link 
              href="/docs" 
              target="_blank"
              className="px-6 py-3 flex items-center gap-2 bg-white border-2 border-[#1e1e1e] hover:bg-gray-50 transition-colors"
            >
              <RiBook2Line size={20} />
              <span className="font-medium">Documentation</span>
            </Link>
            <Link 
              href="https://github.com/astreus-ai/astreus" 
              target="_blank"
              className="px-6 py-3 flex items-center gap-2 bg-white border-2 border-[#1e1e1e] hover:bg-gray-50 transition-colors"
            >
              <RiGithubLine size={20} />
              <span className="font-medium">View on GitHub</span>
            </Link>
          </div>
          
          <div className="text-center text-lg text-[#1e1e1e] mt-8">
            <p>Astreus is open source.</p>
            <p>Build your best AI agents and shoot for the stars!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
