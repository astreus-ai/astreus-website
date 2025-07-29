import { Metadata } from 'next';

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  slug?: string;
  image?: string;
  type?: 'website' | 'article';
}

export const siteConfig = {
  name: 'Astreus',
  description: 'AI Agent Framework designed to help you easily build, deploy, and manage intelligent conversational agents powered by large language models (LLMs).',
  url: 'https://astreus.org',
  ogImage: '/astreus-logo.svg',
  creator: 'Astreus Team',
};

// Core Astreus-related keywords that should be on every page
export const coreKeywords = [
  'astreus',
  'Astreus',
  'astreus ai',
  'Astreus AI',
  'astreus framework',
  'Astreus Framework',
  'astreus agent',
  'Astreus Agent',
  'astreus.org',
  'Astreus.org'
];

// Essential AI keywords only
export const aiKeywords = [
  'AI Agent Framework',
  'ai agents',
  'autonomous agents',
  'conversational ai',
  'chatbot framework',
  'llm integration',
  'ai development',
  'machine learning',
  'natural language processing',
  'ai assistant',
  'bot framework',
  'artificial intelligence'
];

export function generateSEO({
  title,
  description,
  keywords,
  slug = '',
  image = siteConfig.ogImage,
  type = 'website'
}: PageSEO): Metadata {
  const url = `${siteConfig.url}${slug ? `/${slug}` : ''}`;
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  
  // Every page gets core keywords + ai keywords + page-specific keywords
  const allKeywords = [
    ...coreKeywords,
    ...aiKeywords,
    ...keywords
  ];
  
  // Remove duplicates
  const uniqueKeywords = [...new Set(allKeywords)];
  
  return {
    title: fullTitle,
    description,
    keywords: uniqueKeywords,
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    robots: 'index, follow',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    icons: {
      icon: '/astreus-logo.svg',
      apple: '/astreus-logo.svg',
    },
  };
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Astreus - AI Agent Framework',
    description: 'Build, deploy, and manage intelligent conversational agents with Astreus AI. The most advanced AI agent framework for developers.',
    keywords: [
      'build ai agents',
      'deploy chatbots',
      'ai development tools',
      'developer tools'
    ]
  },
  plugins: {
    title: 'Plugins - Extend Your Astreus AI Agent',
    description: 'Discover powerful plugins to extend your Astreus AI agents.',
    keywords: [
      'astreus plugins',
      'ai agent plugins',
      'ai extensions',
      'integrations'
    ]
  },
  docs: {
    title: 'Documentation - Astreus AI Agent Framework',
    description: 'Complete documentation for Astreus AI Agent Framework.',
    keywords: [
      'astreus documentation',
      'ai agent tutorial',
      'api documentation',
      'getting started'
    ]
  },
  // New section-specific SEO
  core: {
    title: 'Core Concepts - Astreus AI Agent Framework',
    description: 'Essential concepts for understanding Astreus AI agents.',
    keywords: [
      'ai agent concepts',
      'agent architecture',
      'agent fundamentals'
    ]
  },
  features: {
    title: 'Features - Advanced AI Agent Capabilities',
    description: 'Explore advanced features of Astreus AI.',
    keywords: [
      'RAG ai',
      'intent recognition',
      'media analysis',
      'ai features'
    ]
  },
  integrations: {
    title: 'Integrations - Connect Your AI Agents',
    description: 'Integrate Astreus AI with external services and providers.',
    keywords: [
      'ai integrations',
      'llm providers',
      'api integrations'
    ]
  },
  infrastructure: {
    title: 'Infrastructure - AI Agent System Management',
    description: 'System configuration and management for Astreus AI agents.',
    keywords: [
      'ai infrastructure',
      'agent configuration',
      'system management'
    ]
  },
  agents: {
    title: 'Agents - Pre-built AI Agents',
    description: 'Explore powerful pre-built AI agents powered by Astreus framework.',
    keywords: [
      'pre-built ai agents',
      'ai agent examples',
      'ai agent templates'
    ]
  }
};