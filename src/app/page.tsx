import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import { FiCode, FiLayers, FiGithub, FiUsers, FiZap, FiCommand } from 'react-icons/fi';
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
      title: 'Intelligent Agent System',
      description: 'Create, manage, and control AI agents with a flexible and extensible TypeScript framework designed for real-world applications.',
      icon: <FiCode />,
      iconColor: 'text-emerald-500',
      actionText: 'Learn More',
      actionLink: '/docs/core-concepts',
    },
    {
      title: 'Multiple Provider Support',
      description: 'Work with OpenAI, Ollama, and more through a unified provider interface that makes switching between LLM providers simple.',
      icon: <FiLayers />,
      iconColor: 'text-emerald-500',
      actionText: 'See Documentation',
      actionLink: '/docs/api-reference',
    },
    {
      title: 'Task Management',
      description: 'Handle both synchronous and asynchronous AI operations with a sophisticated task system that keeps your code clean and maintainable.',
      icon: <FiCommand />,
      iconColor: 'text-emerald-500',
      actionText: 'View Examples',
      actionLink: '/docs/examples',
    }
  ];

  // Open Source benefits
  const openSourceBenefits = [
    {
      title: 'MIT Licensed',
      description: 'Astreus is completely free to use and open source under the MIT license, allowing for both personal and commercial use without restrictions.',
      icon: <FiGithub />,
    },
    {
      title: 'Plugin System',
      description: 'Extend functionality with a powerful plugin system that lets you customize and enhance your agents with additional capabilities.',
      icon: <FiUsers />,
    },
    {
      title: 'Memory Management',
      description: 'Built-in memory management system allows agents to remember past interactions and maintain context across conversations.',
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
        { label: 'API Reference', href: '/docs/api-reference' },
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
          title="Astreus AI Agent Framework"
          subtitle="An AI Agent framework for building, deploying, and managing intelligent AI agents with multiple provider support, task management, and built-in memory systems."
          primaryCTA={{ text: 'Get Started', link: '/docs/getting-started' }}
          secondaryCTA={{ text: 'View on GitHub', link: 'https://github.com/astreus-ai/astreus' }}
          logoSrc="/astreus-logo-black.svg"
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
