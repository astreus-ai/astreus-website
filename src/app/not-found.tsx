import NotFoundClient from '@/components/NotFoundClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Astreus',
  description: 'The page you are looking for could not be found.',
  icons: {
    icon: '/astreus-logo.svg',
    apple: '/astreus-logo.svg',
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}