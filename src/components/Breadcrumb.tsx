'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoChevronForward, IoHome } from 'react-icons/io5';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (pathname === '/') return [];
    
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = '';
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      
      // Format segment names
      let label = segment.replace(/-/g, ' ');
      label = label.charAt(0).toUpperCase() + label.slice(1);
      
      // Special cases for better naming
      if (segment === 'docs') label = 'Documentation';
      if (segment === 'concepts') label = 'Concepts';
      if (segment === 'guides') label = 'Guides';
      if (segment === 'plugins') label = 'Plugins';
      
      breadcrumbs.push({
        label,
        href: currentPath,
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  if (breadcrumbs.length === 0) return null;

  // Generate structured data for breadcrumbs
  const structuredDataItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://astreus.org/"
    },
    ...breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: crumb.label,
      item: `https://astreus.org${crumb.href}`
    }))
  ];

  return (
    <>
      <StructuredData 
        type="breadcrumb" 
        data={{ items: structuredDataItems }} 
      />
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <Link 
        href="/" 
        className="flex items-center hover:text-foreground transition-colors"
        aria-label="Home"
      >
        <IoHome className="h-4 w-4" />
      </Link>
      
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center space-x-2">
          <IoChevronForward className="h-4 w-4" />
          {index === breadcrumbs.length - 1 ? (
            <span className="text-foreground font-medium" aria-current="page">
              {crumb.label}
            </span>
          ) : (
            <Link 
              href={crumb.href} 
              className="hover:text-foreground transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
    </>
  );
}