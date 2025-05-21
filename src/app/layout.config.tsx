import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { FaGithub, FaHome } from 'react-icons/fa';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Astreus - Documentation',
  },
  themeSwitch: {
    enabled: false,
  },
  links: [
    {
      type: 'main',
      text: 'Star on Github',
      url: 'https://github.com/astreus-ai/astreus',
      icon: <FaGithub className="w-4 h-4" />
    },
    {
      type: 'main',
      text: 'Return to home page',
      url: '/',
      icon: <FaHome className="w-4 h-4" />
    },
  ]
}; 