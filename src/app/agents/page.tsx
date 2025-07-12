import { generateSEO, pageSEO } from '@/utils/seo';
import AgentsClient from './agents-client';

export const metadata = generateSEO({
  title: pageSEO.agents.title,
  description: pageSEO.agents.description,
  keywords: pageSEO.agents.keywords,
  slug: 'agents'
});

export default function Agents() {
  return <AgentsClient />;
}