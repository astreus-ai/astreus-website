import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMessageCircle, FiArrowRight, FiStar } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';

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
 * Modern footer with green accent
 */
export default function Footer({ logo, brandName, columns, socialLinks }: FooterProps) {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Check if a link is external
  const isExternalLink = (href: string) => href.startsWith('http');
  
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 pointer-events-none"></div>
      
      {/* Newsletter section */}
      <div className="container-custom">
        <div className="mb-20 bg-emerald-50 rounded-2xl p-8 lg:p-12 border border-emerald-100/40 shadow-lg relative overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 pointer-events-none"></div>
          
          <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold mb-4">Stay in the loop</h2>
              <p className="text-gray-600 text-sm mb-0">
                Get notified about updates, new features, and community news.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-full sm:w-64"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-3 rounded-lg transition-all duration-200 flex items-center justify-center whitespace-nowrap shadow-sm">
                Subscribe
                <FiArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-100 rounded-full blur-md opacity-40"></div>
                <Image 
                  src={logo} 
                  alt={`${brandName} Logo`} 
                  width={38} 
                  height={38} 
                  className="rounded-full relative"
                />
              </div>
              <span className="font-bold text-xl text-gray-900">{brandName}</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              An intelligent open-source AI agent framework for building powerful applications with minimal code.
            </p>
            
            <div className="flex items-center mb-6 bg-white p-3 pr-4 rounded-lg shadow-sm border border-gray-100">
              <Link 
                href="https://github.com/astreus-ai/astreus" 
                className="flex items-center text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bg-gray-100 p-2 rounded-md mr-3 text-gray-700">
                  <FiStar className="h-4 w-4 text-amber-500" />
                </span>
                <span className="font-medium text-gray-600">Star us on GitHub</span>
              </Link>
            </div>
            
            {socialLinks && (
              <div>
                <div className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">Connect With Us</div>
                <div className="flex gap-3">
                  {socialLinks.twitter && (
                    <Link 
                      href={socialLinks.twitter} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
                    >
                      <RiTwitterXFill className="h-4 w-4" />
                    </Link>
                  )}
                  {socialLinks.github && (
                    <Link 
                      href={socialLinks.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
                    >
                      <FiGithub className="h-4 w-4" />
                    </Link>
                  )}
                  {socialLinks.linkedin && (
                    <Link 
                      href={socialLinks.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
                    >
                      <FiLinkedin className="h-4 w-4" />
                    </Link>
                  )}
                  {socialLinks.discord && (
                    <Link 
                      href={socialLinks.discord} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
                    >
                      <FiMessageCircle className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Link columns */}
          {columns.map((column, colIndex) => (
            <div key={colIndex}>
              <h3 className="font-bold text-gray-900 mb-5 text-base">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {isExternalLink(link.href) ? (
                      <a 
                        href={link.href}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-emerald-600 transition-colors text-sm flex items-center"
                      >
                        {link.label}
                        <FiArrowRight className="ml-1 h-3 w-3 opacity-70" />
                      </a>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-emerald-600 transition-colors text-sm group"
                      >
                        <span className="inline-flex items-center">
                          {link.label}
                          <span className="inline-block w-0 h-px bg-emerald-500 ml-0 -mt-px group-hover:w-3 group-hover:ml-1 transition-all opacity-0 group-hover:opacity-100"></span>
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <div className="order-2 md:order-1 mt-4 md:mt-0">
            © {currentYear} {brandName}. All rights reserved. <span className="text-emerald-600">MIT License</span>
          </div>
          <div className="order-1 md:order-2 flex gap-8">
            <Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 