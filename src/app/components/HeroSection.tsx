import Image from 'next/image';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  logoSrc?: string;
}

/**
 * Modern hero section with green accent
 */
export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  logoSrc = '/logo.svg',
}: HeroSectionProps) {
  return (
    <section className="relative pt-24 pb-28 overflow-hidden -mt-[72px]">
      {/* Background elements */}
      <div className="absolute inset-0 top-0 bg-gradient-to-b from-emerald-50/80 to-white pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-72 w-72 bg-emerald-100 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 bg-emerald-100 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl opacity-50"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 pointer-events-none"></div>
      
      <div className="container-custom relative z-10 pt-[72px]">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-8 relative">
            <div className="absolute inset-0 -m-6 bg-emerald-100/50 rounded-full blur-xl"></div>
            <Image 
              src={logoSrc}
              alt="Logo" 
              width={80} 
              height={80}
              className="relative rounded-full shadow-lg p-1 bg-white"
            />
          </div>
          
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full">
            Astreus AI Agent Framework
          </span>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={primaryCTA.link} 
              className="relative group bg-emerald-500 hover:bg-emerald-600 text-white text-sm py-3 px-6 rounded-lg transition-all duration-200 font-medium flex items-center justify-center shadow-sm"
            >
              {primaryCTA.text}
              <FiArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-0.5 transition-transform" />
            </a>
            
            {secondaryCTA && (
              <a
                href={secondaryCTA.link}
                className="relative group border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 text-sm py-3 px-6 rounded-lg transition-all duration-200 font-medium flex items-center justify-center shadow-sm"
              >
                <FiGithub className="mr-2 h-4 w-4 transition-transform" />
                {secondaryCTA.text}
              </a>
            )}
          </div>
          
          <div className="mt-16 flex items-center justify-center">
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center shadow-lg">
              <div className="bg-emerald-50 p-2 rounded-lg mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-600">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 12L10.5 15L16.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-xs font-medium text-gray-900">100% Open Source</div>
              <div className="mx-3 w-1 h-4 bg-gray-200 rounded-full"></div>
              <div className="text-xs font-medium text-gray-900">MIT License</div>
              <div className="mx-3 w-1 h-4 bg-gray-200 rounded-full"></div>
              <div className="text-xs font-medium text-gray-900">Free Forever</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 