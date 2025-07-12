import { generateSEO, pageSEO } from '@/utils/seo';
import HomeClient from './home-client';

export const metadata = generateSEO({
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,
  slug: ''
});

export default function Home() {
  return <HomeClient />;
}