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

// General AI-related keywords - popular search terms
export const aiKeywords = [
  // AI Agent basic terms
  'AI Agent Framework',
  'ai agent framework',
  'ai agents',
  'AI agents',
  'autonomous agents',
  'Autonomous Agents',
  'intelligent agents',
  'Intelligent Agents',
  'multi agent system',
  'Multi Agent System',
  'agent based ai',
  'Agent Based AI',
  
  // Conversational AI
  'Conversational AI',
  'conversational ai',
  'AI chatbot',
  'ai chatbot',
  'chatbot framework',
  'Chatbot Framework',
  'chatbot development',
  'Chatbot Development',
  'conversational bot',
  'Conversational Bot',
  'voice bot',
  'Voice Bot',
  'text bot',
  'Text Bot',
  
  // LLM terms
  'LLM framework',
  'llm framework',
  'Large Language Models',
  'large language models',
  'llm integration',
  'LLM integration',
  'gpt integration',
  'GPT integration',
  'openai integration',
  'OpenAI integration',
  'claude integration',
  'Claude integration',
  'llm api',
  'LLM API',
  
  // AI Development
  'AI development',
  'ai development',
  'ai programming',
  'AI programming',
  'ai software',
  'AI software',
  'ai tools',
  'AI tools',
  'ai framework',
  'AI framework',
  'ai platform',
  'AI platform',
  'ai sdk',
  'AI SDK',
  'ai library',
  'AI library',
  
  // Machine Learning
  'Machine Learning',
  'machine learning',
  'ml framework',
  'ML framework',
  'deep learning',
  'Deep Learning',
  'neural networks',
  'Neural Networks',
  
  // Natural Language Processing
  'NLP',
  'nlp',
  'Natural Language Processing',
  'natural language processing',
  'text processing',
  'Text Processing',
  'language model',
  'Language Model',
  'text analysis',
  'Text Analysis',
  
  // AI Assistant terms
  'AI assistant',
  'ai assistant',
  'virtual assistant',
  'Virtual Assistant',
  'digital assistant',
  'Digital Assistant',
  'smart assistant',
  'Smart Assistant',
  'ai helper',
  'AI helper',
  
  // Chat AI
  'chat ai',
  'Chat AI',
  'chat gpt',
  'ChatGPT',
  'ai chat',
  'AI chat',
  'conversational interface',
  'Conversational Interface',
  
  // Bot Framework
  'bot framework',
  'Bot Framework',
  'bot development',
  'Bot Development',
  'bot builder',
  'Bot Builder',
  'chatbot builder',
  'Chatbot Builder',
  
  // General Artificial Intelligence
  'Artificial Intelligence',
  'artificial intelligence',
  'AI',
  'ai',
  'machine intelligence',
  'Machine Intelligence',
  'cognitive computing',
  'Cognitive Computing',
  
  // Trending AI terms
  'generative ai',
  'Generative AI',
  'automation',
  'Automation',
  'ai automation',
  'AI Automation',
  'workflow automation',
  'Workflow Automation',
  'process automation',
  'Process Automation',
  'robotic process automation',
  'Robotic Process Automation',
  'rpa',
  'RPA',
  
  // Enterprise AI
  'enterprise ai',
  'Enterprise AI',
  'business ai',
  'Business AI',
  'ai solution',
  'AI Solution',
  'ai services',
  'AI Services',
  'custom ai',
  'Custom AI',
  'ai consulting',
  'AI Consulting'
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
    description: 'Build, deploy, and manage intelligent conversational agents with Astreus AI. The most advanced AI agent framework for developers. Create chatbots, voice assistants, and AI agents with ease.',
    keywords: [
      'build ai agents',
      'deploy chatbots',
      'create ai assistant',
      'ai bot builder',
      'conversational ai platform',
      'llm integration',
      'chatgpt alternative',
      'ai development tools',
      'intelligent chatbot',
      'voice ai',
      'text ai',
      'multi-modal ai',
      'ai automation',
      'enterprise ai',
      'open source ai',
      'ai sdk',
      'developer tools',
      'ai solution',
      'custom ai agents'
    ]
  },
  plugins: {
    title: 'Plugins - Extend Your Astreus AI Agent',
    description: 'Discover powerful plugins to extend your Astreus AI agents. From integrations to advanced features, find everything you need to enhance your conversational AI experience.',
    keywords: [
      'astreus plugins',
      'Astreus plugins',
      'ai agent plugins',
      'ai extensions',
      'bot plugins',
      'ai integrations',
      'agent extensions',
      'conversational ai plugins',
      'ai marketplace',
      'third-party integrations',
      'ai add-ons',
      'agent modules',
      'api integrations',
      'workflow automation',
      'plugin marketplace',
      'ai tools',
      'extend ai agents',
      'custom plugins',
      'integration platform'
    ]
  },
  docs: {
    title: 'Documentation - Astreus AI Agent Framework',
    description: 'Complete documentation for Astreus AI Agent Framework. Learn how to build, deploy, and manage your intelligent conversational agents with step-by-step guides.',
    keywords: [
      'astreus documentation',
      'Astreus documentation',
      'ai agent tutorial',
      'framework guide',
      'api documentation',
      'bot development guide',
      'ai agent setup',
      'installation guide',
      'configuration manual',
      'developer guide',
      'technical documentation',
      'getting started',
      'best practices',
      'how to build ai agents',
      'ai development guide',
      'framework tutorial',
      'implementation guide',
      'quick start',
      'user manual'
    ]
  },
  // New section-specific SEO
  core: {
    title: 'Core Concepts - Astreus AI Agent Framework',
    description: 'Essential concepts for understanding Astreus AI agents. Learn about agents, chat systems, memory management, and task handling.',
    keywords: [
      'ai agent concepts',
      'agent architecture',
      'conversational ai basics',
      'ai memory systems',
      'task management ai',
      'agent fundamentals',
      'ai chat systems',
      'intelligent agent design',
      'ai agent core features',
      'agent development basics'
    ]
  },
  features: {
    title: 'Features - Advanced AI Agent Capabilities',
    description: 'Explore advanced features of Astreus AI including RAG, intent recognition, media analysis, and context processing.',
    keywords: [
      'RAG ai',
      'retrieval augmented generation',
      'intent recognition ai',
      'media analysis ai',
      'context processing',
      'ai features',
      'advanced ai capabilities',
      'multimodal ai',
      'intelligent content analysis',
      'ai context management'
    ]
  },
  integrations: {
    title: 'Integrations - Connect Your AI Agents',
    description: 'Integrate Astreus AI with external services, providers, and plugins. Build connected AI experiences.',
    keywords: [
      'ai integrations',
      'llm providers',
      'ai agent plugins',
      'api integrations',
      'third party ai',
      'ai connectivity',
      'external ai services',
      'ai ecosystem',
      'agent extensions',
      'ai platform integrations'
    ]
  },
  infrastructure: {
    title: 'Infrastructure - AI Agent System Management',
    description: 'System configuration, database management, and logging for Astreus AI agents. Enterprise-ready infrastructure.',
    keywords: [
      'ai infrastructure',
      'agent configuration',
      'ai database',
      'ai logging',
      'system management',
      'enterprise ai',
      'ai deployment',
      'agent monitoring',
      'ai operations',
      'infrastructure management'
    ]
  },
  agents: {
    title: 'Agents - Pre-built AI Agents',
    description: 'Explore powerful pre-built AI agents powered by Astreus framework. Ready-to-use intelligent agents for trading, research, customer support, and more.',
    keywords: [
      'pre-built ai agents',
      'ready made ai agents',
      'ai agent examples',
      'trading ai agent',
      'research ai agent',
      'customer support ai',
      'social media ai agent',
      'ai agent templates',
      'agent marketplace',
      'ai solutions',
      'intelligent agents',
      'autonomous ai agents',
      'specialized ai agents',
      'industry ai agents',
      'business ai agents',
      'ai agent library',
      'agent showcase',
      'production ready agents'
    ]
  }
};