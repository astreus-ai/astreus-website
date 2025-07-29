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

// Simple function to generate basic keywords
function generatePageSpecificKeywords(pageTitle: string, slug: string[] = []): string[] {
  const slugPath = slug.join('/');
  
  const baseKeywords = ['astreus', 'astreus documentation', pageTitle];
  
  // Add one relevant keyword based on the page topic
  if (slugPath.includes('agent')) baseKeywords.push('ai agents');
  else if (slugPath.includes('plugin')) baseKeywords.push('plugins');
  else if (slugPath.includes('install')) baseKeywords.push('installation');
  else if (slugPath.includes('api')) baseKeywords.push('api');
  
  return baseKeywords;
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
      tags: pageKeywords
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