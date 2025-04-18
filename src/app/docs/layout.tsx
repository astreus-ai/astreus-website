import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Header navigation items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Docs', href: '/docs' },
    { label: 'GitHub', href: 'https://github.com/astreus-ai/astreus' },
  ];

  // Footer columns
  const footerColumns = [
    {
      title: 'Product',
      links: [
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Roadmap', href: '/roadmap' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/docs/api-reference' },
        { label: 'Tutorials', href: '/docs/tutorials' },
        { label: 'Examples', href: '/docs/examples' },
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
      <main className="flex-grow">
        {children}
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