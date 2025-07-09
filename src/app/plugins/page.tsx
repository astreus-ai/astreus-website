import { generateSEO, pageSEO } from '@/utils/seo';
import PluginsClient from './plugins-client';

export const metadata = generateSEO({
  title: pageSEO.plugins.title,
  description: pageSEO.plugins.description,
  keywords: pageSEO.plugins.keywords,
  slug: 'plugins'
});

export default function Plugins() {
  return <PluginsClient />;
}