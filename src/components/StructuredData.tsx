interface StructuredDataProps {
  type: 'organization' | 'software' | 'article' | 'website' | 'breadcrumb' | 'faq';
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getSchemaType = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Astreus',
          url: 'https://astreus.org',
          logo: 'https://astreus.org/astreus-logo.svg',
          description: 'AI Agent Framework for building intelligent conversational agents',
          foundingDate: '2024',
          sameAs: [],
          ...data
        };
      case 'software':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Astreus AI Agent Framework',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Any',
          programmingLanguage: ['JavaScript', 'TypeScript', 'Python'],
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          description: 'Build, deploy, and manage intelligent conversational agents powered by large language models',
          url: 'https://astreus.org',
          downloadUrl: 'https://github.com/astreus-ai/astreus',
          author: {
            '@type': 'Organization',
            name: 'Astreus',
            url: 'https://astreus.org'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '250'
          },
          keywords: [
            'AI Agent Framework',
            'Conversational AI',
            'LLM',
            'Chatbot Development',
            'AI Development Tools',
            'Intelligent Agents',
            'Machine Learning',
            'Natural Language Processing',
            'Autonomous Agents',
            'AI Automation',
            'Plugin System',
            'RAG Implementation',
            'Intent Recognition',
            'Media Analysis',
            'Context Processing'
          ],
          ...data
        };
      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          publisher: {
            '@type': 'Organization',
            name: 'Astreus',
            logo: {
              '@type': 'ImageObject',
              url: 'https://astreus.org/astreus-logo.svg'
            }
          },
          author: {
            '@type': 'Organization',
            name: 'Astreus'
          },
          ...data
        };
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Astreus',
          url: 'https://astreus.org',
          description: 'AI Agent Framework for building intelligent conversational agents',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://astreus.org/docs?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          },
          ...data
        };
      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.items || []
        };
      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.questions || []
        };
      default:
        return data;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchemaType())
      }}
    />
  );
}