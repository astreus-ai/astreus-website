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
import Breadcrumb from '@/components/Breadcrumb';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <Breadcrumb />
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
  if (title.includes('install') || title.includes('getting started') || title.includes('setup')) {
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
  
  // Agents
  if (title.includes('agent') || slugPath.includes('agent')) {
    specificKeywords.push(
      'astreus agents', 'Astreus agents', 'create astreus agent', 'create Astreus agent',
      'astreus ai agent', 'Astreus AI agent', 'build agent astreus', 'build agent Astreus',
      'astreus agent development', 'Astreus agent development', 'ai agent with astreus'
    );
  }
  
  // Plugins
  if (title.includes('plugin') || slugPath.includes('plugin')) {
    specificKeywords.push(
      'astreus plugins', 'Astreus plugins', 'astreus plugin development', 'Astreus plugin development',
      'create astreus plugin', 'create Astreus plugin', 'astreus extensions', 'Astreus extensions',
      'astreus plugin api', 'Astreus plugin API'
    );
  }
  
  // Chat/Conversation
  if (title.includes('chat') || title.includes('conversation') || slugPath.includes('chat')) {
    specificKeywords.push(
      'astreus chat', 'Astreus chat', 'astreus conversation', 'Astreus conversation',
      'astreus chatbot', 'Astreus chatbot', 'chat with astreus', 'chat with Astreus',
      'astreus messaging', 'Astreus messaging'
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
  
  // Concepts/Theory
  if (slugPath.includes('concept') || title.includes('concept') || title.includes('theory')) {
    specificKeywords.push(
      'astreus concepts', 'Astreus concepts', 'astreus theory', 'Astreus theory',
      'understand astreus', 'understand Astreus', 'astreus architecture', 'Astreus architecture',
      'how astreus works', 'how Astreus works'
    );
  }
  
  // Guides/Tutorials
  if (title.includes('guide') || title.includes('tutorial') || title.includes('how to')) {
    specificKeywords.push(
      'astreus guide', 'Astreus guide', 'astreus tutorial', 'Astreus tutorial',
      'astreus how to', 'Astreus how to', 'learn astreus', 'learn Astreus',
      'astreus examples', 'Astreus examples'
    );
  }
  
  // General docs keywords
  const generalKeywords = [
    'ai agent tutorial', 'framework guide', 'api documentation', 'developer guide',
    'technical documentation', 'getting started', 'implementation guide', 'user manual',
    'documentation', 'docs', 'reference', 'manual'
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
      images: [
        {
          url: '/astreus-logo.svg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.data.description,
      images: ['/astreus-logo.svg'],
    },
    alternates: {
      canonical: url,
    },
  };
} 