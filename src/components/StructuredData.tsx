interface StructuredDataProps {
  type: 'organization' | 'software' | 'article' | 'website';
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
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          description: 'Build, deploy, and manage intelligent conversational agents powered by large language models',
          url: 'https://astreus.org',
          author: {
            '@type': 'Organization',
            name: 'Astreus'
          },
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