import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import { FiCode, FiBriefcase, FiLayers, FiGithub, FiUsers, FiZap } from 'react-icons/fi';
import CommunitySection from './components/CommunitySection';
import OpenSourceSection from './components/OpenSourceSection';

export default function Home() {
  // Header navigation items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Docs', href: '/docs' },
    { label: 'GitHub', href: 'https://github.com/astreus-ai/astreus' },
  ];

  // Feature cards for the feature section
  const features = [
    {
      title: 'Intelligent Agents',
      description: 'Create AI agents that can reason, learn, and take complex actions with our powerful open-source framework.',
      icon: <FiCode />,
      iconColor: 'text-emerald-500',
      actionText: 'Learn More',
      actionLink: '/docs/agents',
    },
    {
      title: 'Multi-Model Architecture',
      description: 'Leverage various AI models together in one cohesive system for maximum intelligence and capability.',
      icon: <FiLayers />,
      iconColor: 'text-emerald-500',
      actionText: 'See Documentation',
      actionLink: '/docs/architecture',
    },
    {
      title: 'Enterprise Ready',
      description: 'Built for scale with secure, reliable infrastructure that meets the needs of companies of all sizes.',
      icon: <FiBriefcase />,
      iconColor: 'text-emerald-500',
      actionText: 'View Examples',
      actionLink: '/examples',
    },
  ];

  // Open Source benefits
  const openSourceBenefits = [
    {
      title: 'Free & Open Source',
      description: 'Astreus is completely free to use and open source under the MIT license. Contribute, modify, and build upon our work.',
      icon: <FiGithub />,
    },
    {
      title: 'Community Driven',
      description: 'Join a growing community of developers building the future of AI agents together. Share ideas and get support.',
      icon: <FiUsers />,
    },
    {
      title: 'Lightning Fast',
      description: 'Optimized for performance with a lightweight core and efficient architecture that scales with your needs.',
      icon: <FiZap />,
    },
  ];

  // Community stats
  const communityStats = [
    { label: 'GitHub Stars', value: '1.2k+' },
    { label: 'Contributors', value: '35+' },
    { label: 'Discord Members', value: '500+' },
  ];

  // Footer columns
  const footerColumns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Roadmap', href: '/roadmap' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Examples', href: '/examples' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'GitHub', href: 'https://github.com/astreus-ai/astreus' },
        { label: 'Discord', href: 'https://discord.gg/astreus' },
        { label: 'X', href: 'https://x.com/astreusai' },
        { label: 'Blog', href: '/blog' },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        logo="/astreus-logo-black.svg"
        brandName="Astreus"
        navItems={navItems}
        cta={{ label: 'Get Started', href: '/docs/getting-started' }}
      />

      <main>
        <HeroSection 
          title="Open-Source AI Agent Framework"
          subtitle="Create powerful, intelligent AI agents that can reason, learn, and take complex actions to solve real problems."
          primaryCTA={{ text: 'Get Started', link: '/docs/getting-started' }}
          secondaryCTA={{ text: 'View on GitHub', link: 'https://github.com/astreus-ai/astreus' }}
          logoSrc="/astreus-logo-black.svg"
        />
        
        <FeatureSection 
          title="Why Choose Astreus"
          subtitle="A powerful open-source AI framework designed for developers"
          features={features}
        />

        <OpenSourceSection
          title="100% Open Source"
          subtitle="Astreus is built in the open with the community"
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
        logo="/astreus-logo-black.svg"
        brandName="Astreus"
        columns={footerColumns}
        socialLinks={{
          twitter: 'https://x.com/astreusai',
          github: 'https://github.com/astreus-ai/astreus',
          discord: 'https://discord.gg/astreus',
        }}
      />
    </div>
  );
}
