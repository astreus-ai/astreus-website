import '@/app/globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { RootProvider } from 'fumadocs-ui/provider';
import StructuredData from '@/components/StructuredData';

// Define fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Astreus - AI Agent Framework',
  description: 'Astreus is an AI Agent Framework designed to help you easily build, deploy, and manage intelligent conversational agents powered by large language models (LLMs).',
  keywords: ['AI', 'Agent Framework', 'LLM', 'Conversational AI', 'Machine Learning', 'Artificial Intelligence', 'Plugins', 'RAG', 'Intent Recognition'],
  authors: [{ name: 'Astreus Team' }],
  creator: 'Astreus',
  publisher: 'Astreus',
  robots: 'index, follow',
  metadataBase: new URL('https://astreus.org'),
  alternates: {
    canonical: 'https://astreus.org',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://astreus.org',
    title: 'Astreus - AI Agent Framework',
    description: 'Build, deploy, and manage intelligent conversational agents powered by large language models (LLMs).',
    siteName: 'Astreus',
    images: [
      {
        url: '/astreus-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Astreus AI Agent Framework',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astreus - AI Agent Framework',
    description: 'Build, deploy, and manage intelligent conversational agents powered by large language models (LLMs).',
    images: ['/astreus-logo.svg'],
  },
  icons: {
    icon: '/astreus-logo.svg',
    apple: '/astreus-logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <StructuredData 
          type="organization" 
          data={{}} 
        />
        <StructuredData 
          type="website" 
          data={{}} 
        />
        <StructuredData 
          type="software" 
          data={{}} 
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased flex flex-col h-screen`}>
        <RootProvider theme={{ defaultTheme: 'dark', forcedTheme: 'dark' }}>{children}</RootProvider>
      </body>
    </html>
  )
}
