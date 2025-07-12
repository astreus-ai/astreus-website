import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { FaHome } from 'react-icons/fa';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Astreus - Docs',
  },
  themeSwitch: {
    enabled: false,
  },
  links: [
    {
      type: 'main',
      text: 'Return to Home Page',
      url: '/',
      icon: <FaHome className="w-4 h-4" />
    },
  ],
  githubUrl: 'https://github.com/astreus-ai',
}; 