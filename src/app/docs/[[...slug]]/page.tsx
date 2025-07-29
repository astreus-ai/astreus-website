import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { Rate } from '@/components/Rate';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
        <Rate />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

// Function that generates dynamic keywords based on page content
function generatePageSpecificKeywords(pageTitle: string, slug: string[] = []): string[] {
  const slugPath = slug.join('/');
  const title = pageTitle.toLowerCase();
  
  // Base Astreus keywords
  const baseKeywords = [
    'astreus', 'Astreus', 'astreus ai', 'Astreus AI', 'astreus framework', 'Astreus Framework',
    'astreus documentation', 'Astreus documentation', 'astreus docs', 'Astreus docs',
    'astreus.org', 'Astreus.org', pageTitle, 'AI Agent Framework', 'Documentation'
  ];
  
  // Page-specific keywords
  const specificKeywords: string[] = [];
  
  // Installation/Getting Started
  if (title.includes('install') || title.includes('getting started') || title.includes('setup') || title.includes('quick start')) {
    specificKeywords.push(
      'astreus installation', 'Astreus installation', 'astreus setup', 'Astreus setup',
      'install astreus', 'install Astreus', 'getting started astreus', 'getting started Astreus',
      'astreus quick start', 'Astreus quick start', 'how to install astreus', 'astreus tutorial'
    );
  }
  
  // Configuration
  if (title.includes('config') || title.includes('configuration') || slugPath.includes('config')) {
    specificKeywords.push(
      'astreus configuration', 'Astreus configuration', 'astreus config', 'Astreus config',
      'configure astreus', 'configure Astreus', 'astreus settings', 'Astreus settings',
      'astreus environment', 'Astreus environment'
    );
  }
  
  // API/Development
  if (title.includes('api') || title.includes('development') || title.includes('dev')) {
    specificKeywords.push(
      'astreus api', 'Astreus API', 'astreus development', 'Astreus development',
      'astreus sdk', 'Astreus SDK', 'astreus api documentation', 'Astreus API documentation',
      'develop with astreus', 'develop with Astreus', 'astreus integration', 'Astreus integration'
    );
  }
  
  // Agents - Core concept
  if (title.includes('agent') || slugPath.includes('agent')) {
    specificKeywords.push(
      'astreus agents', 'Astreus agents', 'create astreus agent', 'create Astreus agent',
      'astreus ai agent', 'Astreus AI agent', 'build agent astreus', 'build agent Astreus',
      'astreus agent development', 'Astreus agent development', 'ai agent with astreus',
      'intelligent agents', 'autonomous agents', 'conversational agents'
    );
  }
  
  // Plugins - Updated for new structure
  if (title.includes('plugin') || slugPath.includes('plugin')) {
    specificKeywords.push(
      'astreus plugins', 'Astreus plugins', 'astreus plugin development', 'Astreus plugin development',
      'create astreus plugin', 'create Astreus plugin', 'astreus extensions', 'Astreus extensions',
      'astreus plugin api', 'Astreus plugin API', 'custom plugins', 'plugin registry'
    );
  }
  
  // Chat/Conversation
  if (title.includes('chat') || title.includes('conversation') || slugPath.includes('chat')) {
    specificKeywords.push(
      'astreus chat', 'Astreus chat', 'astreus conversation', 'Astreus conversation',
      'astreus chatbot', 'Astreus chatbot', 'chat with astreus', 'chat with Astreus',
      'astreus messaging', 'Astreus messaging', 'conversational ai', 'chat interface'
    );
  }
  
  // Database/Storage
  if (title.includes('database') || title.includes('storage') || title.includes('data')) {
    specificKeywords.push(
      'astreus database', 'Astreus database', 'astreus storage', 'Astreus storage',
      'astreus data', 'Astreus data', 'astreus db', 'Astreus DB',
      'database integration astreus', 'database integration Astreus'
    );
  }
  
  // Memory - New core concept
  if (title.includes('memory') || slugPath.includes('memory')) {
    specificKeywords.push(
      'astreus memory', 'Astreus memory', 'ai memory management', 'conversation memory',
      'context memory', 'memory persistence', 'memory storage', 'memory retrieval'
    );
  }
  
  // Tasks - New core concept  
  if (title.includes('task') || slugPath.includes('task')) {
    specificKeywords.push(
      'astreus tasks', 'Astreus tasks', 'task execution', 'task management',
      'automated tasks', 'task scheduling', 'task runner', 'ai tasks'
    );
  }
  
  // RAG - Updated for features section
  if (title.includes('rag') || slugPath.includes('rag')) {
    specificKeywords.push(
      'astreus rag', 'Astreus RAG', 'retrieval augmented generation', 'rag setup',
      'rag implementation', 'document retrieval', 'knowledge base', 'vector search'
    );
  }
  
  // Intent Recognition - New feature
  if (title.includes('intent') || slugPath.includes('intent')) {
    specificKeywords.push(
      'intent recognition', 'Intent Recognition', 'natural language understanding',
      'intent classification', 'user intent', 'nlu', 'NLU'
    );
  }
  
  // Media Analysis - New feature
  if (title.includes('media') || slugPath.includes('media')) {
    specificKeywords.push(
      'media analysis', 'Media Analysis', 'image analysis', 'video analysis',
      'multimodal ai', 'visual ai', 'content analysis'
    );
  }
  
  // Context Processing - New feature
  if (title.includes('context') || slugPath.includes('context')) {
    specificKeywords.push(
      'context processing', 'Context Processing', 'context awareness',
      'contextual ai', 'context management', 'situational awareness'
    );
  }
  
  // Providers - Updated for integrations
  if (title.includes('provider') || slugPath.includes('provider')) {
    specificKeywords.push(
      'astreus providers', 'Astreus providers', 'llm providers', 'ai providers',
      'provider integration', 'external providers', 'service providers'
    );
  }
  
  // Infrastructure - New section
  if (slugPath.includes('infrastructure') || title.includes('infrastructure')) {
    specificKeywords.push(
      'astreus infrastructure', 'Astreus infrastructure', 'deployment', 'scaling',
      'production deployment', 'infrastructure setup', 'system architecture'
    );
  }
  
  // Logging - Infrastructure component
  if (title.includes('logging') || slugPath.includes('logging')) {
    specificKeywords.push(
      'astreus logging', 'Astreus logging', 'log management', 'application logs',
      'debug logs', 'system monitoring', 'observability'
    );
  }
  
  // Guides/Tutorials
  if (title.includes('guide') || title.includes('tutorial') || title.includes('how to') || slugPath.includes('guides')) {
    specificKeywords.push(
      'astreus guide', 'Astreus guide', 'astreus tutorial', 'Astreus tutorial',
      'astreus how to', 'Astreus how to', 'learn astreus', 'learn Astreus',
      'astreus examples', 'Astreus examples', 'step by step guide'
    );
  }
  
  // General docs keywords
  const generalKeywords = [
    'ai agent tutorial', 'framework guide', 'api documentation', 'developer guide',
    'technical documentation', 'getting started', 'implementation guide', 'user manual',
    'documentation', 'docs', 'reference', 'manual', 'ai framework documentation',
    'intelligent agent guide', 'conversational ai docs', 'llm framework guide'
  ];
  
  return [...baseKeywords, ...specificKeywords, ...generalKeywords];
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const url = `https://astreus.org/docs/${params.slug?.join('/') || ''}`;
  const title = `${page.data.title} | Astreus Documentation`;
  
  // Generate dynamic keywords based on page content
  const pageKeywords = generatePageSpecificKeywords(page.data.title, params.slug);
  
  return {
    title,
    description: page.data.description,
    keywords: pageKeywords,
    authors: [{ name: 'Astreus Team' }],
    creator: 'Astreus Team',
    publisher: 'Astreus',
    robots: 'index, follow',
    openGraph: {
      title,
      description: page.data.description,
      url,
      type: 'article',
      siteName: 'Astreus',
      locale: 'en_US',
      images: [
        {
          url: 'https://astreus.org/astreus-logo.svg',
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/svg+xml',
        },
      ],
      authors: ['Astreus Team'],
      section: 'Documentation',
      tags: pageKeywords.slice(0, 10), // Include top 10 keywords as tags
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.data.description,
      images: ['https://astreus.org/astreus-logo.svg'],
      creator: '@astreus_ai',
      site: '@astreus_ai',
    },
    alternates: {
      canonical: url,
    },
  };
} 