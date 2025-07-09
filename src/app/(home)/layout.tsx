import type { ReactNode } from 'react';
import { generateSEO, pageSEO } from '@/utils/seo';

export const metadata = generateSEO({
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,
  slug: ''
});

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  );
}
