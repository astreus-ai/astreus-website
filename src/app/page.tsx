"use client";

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import { FiCode, FiLayers, FiGithub, FiUsers, FiZap, FiCommand } from 'react-icons/fi';
import CommunitySection from './components/CommunitySection';
import OpenSourceSection from './components/OpenSourceSection';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  navItems, 
  headerCta, 
  footerColumns, 
  socialLinks, 
  brandInfo, 
  communityStats,
  features as featureData,
  openSourceBenefits as benefitsData
} from './constants';

export default function Home() {
  // Function to render the correct icon based on iconType
  const renderIcon = (iconType: string, className?: string) => {
    switch (iconType) {
      case 'FiCode':
        return <FiCode className={className} />;
      case 'FiLayers':
        return <FiLayers className={className} />;
      case 'FiCommand':
        return <FiCommand className={className} />;
      case 'FiGithub':
        return <FiGithub className={className} />;
      case 'FiUsers':
        return <FiUsers className={className} />;
      case 'FiZap':
        return <FiZap className={className} />;
      default:
        return null;
    }
  };

  // Map the feature data to include actual React icons
  const features = featureData.map(feature => ({
    ...feature,
    icon: renderIcon(feature.iconType)
  }));

  // Map the open source benefits to include actual React icons
  const openSourceBenefits = benefitsData.map(benefit => ({
    ...benefit,
    icon: renderIcon(benefit.iconType)
  }));

  // Preload animation effect
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1200);
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="flex flex-col min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Header 
          logo={brandInfo.logo}
          brandName={brandInfo.name}
          navItems={navItems}
          cta={headerCta}
        />

        <main>
          <HeroSection 
            title="Astreus"
            subtitle="An AI Agent framework for building, deploying, and managing intelligent AI agents with multiple provider support, task management, and built-in memory systems."
            primaryCTA={{ text: 'Get Started', link: '/docs/getting-started' }}
            secondaryCTA={{ text: 'View on GitHub', link: 'https://github.com/astreus-ai/astreus' }}
            logoSrc={brandInfo.logo}
          />
          
          <FeatureSection 
            title="Core Features"
            subtitle="Everything you need to build powerful AI agents in TypeScript"
            features={features}
          />

          <OpenSourceSection
            title="Open Source & Extensible"
            subtitle="Build upon a solid foundation with room to grow"
            benefits={openSourceBenefits}
            githubLink="https://github.com/astreus-ai/astreus"
          />

          <CommunitySection
            title="Join Our Community"
            subtitle="Connect with other developers building with Astreus"
            stats={communityStats}
            discordLink="https://discord.gg/astreus"
            githubLink="https://github.com/astreus-ai/astreus"
          />
        </main>

        <Footer 
          logo={brandInfo.logo}
          brandName={brandInfo.name}
          columns={footerColumns}
          socialLinks={socialLinks}
        />
      </motion.div>
    </AnimatePresence>
  );
}
