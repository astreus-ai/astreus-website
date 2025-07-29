import { DocsLayoutProps } from 'fumadocs-ui/layouts/notebook';
import Image from 'next/image';

export const baseOptions: Partial<DocsLayoutProps> = {
  nav: {
    transparentMode: 'top',
    title: (
      <div className="flex items-center gap-2 ml-2">
        <Image src="/astreus-logo.svg" alt="Astreus" width={24} height={24} />
        <span>Astreus</span>
      </div>
    ),
    mode: 'top'
  },
  themeSwitch: {
    enabled: false,
  },
  tabMode: 'sidebar',
  githubUrl: 'https://github.com/astreus-ai/astreus',
}; 