import Header from '../components/Header';
import Footer from '../components/Footer';
import { navItems, headerCta, footerColumns, socialLinks, brandInfo } from '../constants';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        logo={brandInfo.logo}
        brandName={brandInfo.name}
        navItems={navItems}
        cta={headerCta}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer 
        logo={brandInfo.logo}
        brandName={brandInfo.name}
        columns={footerColumns}
        socialLinks={socialLinks}
      />
    </div>
  );
} 