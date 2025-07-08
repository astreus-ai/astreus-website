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

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const url = `https://astreus.org/docs/${params.slug?.join('/') || ''}`;
  const title = `${page.data.title} | Astreus Documentation`;
  
  return {
    title,
    description: page.data.description,
    keywords: ['Astreus', page.data.title, 'AI Agent Framework', 'Documentation'],
    openGraph: {
      title,
      description: page.data.description,
      url,
      type: 'article',
      siteName: 'Astreus',
    },
    twitter: {
      card: 'summary',
      title,
      description: page.data.description,
    },
    alternates: {
      canonical: url,
    },
  };
} 