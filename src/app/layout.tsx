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
  keywords: [
    // Core Astreus keywords
    'astreus', 'Astreus', 'astreus ai', 'Astreus AI', 'astreus framework', 'Astreus Framework',
    'astreus agent', 'Astreus Agent', 'astreus.org', 'Astreus.org',
    
    // Popular AI Agent terms
    'AI Agent Framework', 'ai agent framework', 'ai agents', 'AI agents', 'autonomous agents',
    'intelligent agents', 'multi agent system', 'agent based ai',
    
    // Conversational AI
    'Conversational AI', 'conversational ai', 'AI chatbot', 'ai chatbot', 'chatbot framework',
    'chatbot development', 'conversational bot', 'voice bot', 'text bot',
    
    // LLM and popular AI
    'LLM framework', 'llm framework', 'Large Language Models', 'large language models',
    'llm integration', 'gpt integration', 'openai integration', 'claude integration',
    'chat gpt', 'ChatGPT', 'generative ai', 'Generative AI',
    
    // AI Development
    'AI development', 'ai development', 'ai programming', 'ai software', 'ai tools',
    'ai framework', 'AI platform', 'ai platform', 'ai sdk', 'AI SDK',
    
    // Machine Learning
    'Machine Learning', 'machine learning', 'deep learning', 'neural networks',
    
    // NLP
    'NLP', 'nlp', 'Natural Language Processing', 'natural language processing',
    'text processing', 'language model', 'text analysis',
    
    // AI Assistant
    'AI assistant', 'ai assistant', 'virtual assistant', 'digital assistant',
    'smart assistant', 'ai helper',
    
    // Chat AI
    'chat ai', 'Chat AI', 'ai chat', 'conversational interface',
    
    // Bot Framework
    'bot framework', 'Bot Framework', 'bot development', 'bot builder',
    'chatbot builder', 'Chatbot Builder',
    
    // Artificial Intelligence
    'Artificial Intelligence', 'artificial intelligence', 'AI', 'ai',
    'machine intelligence', 'cognitive computing',
    
    // Automation
    'automation', 'Automation', 'ai automation', 'AI Automation',
    'workflow automation', 'process automation', 'rpa', 'RPA',
    
    // Enterprise
    'enterprise ai', 'Enterprise AI', 'business ai', 'ai solution',
    'ai services', 'custom ai', 'ai consulting',
    
    // Other important terms
    'Plugins', 'plugins', 'RAG', 'Intent Recognition', 'intent recognition',
    'voice ai', 'Voice AI'
  ],
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
          data={{
            version: "1.0.0",
            datePublished: "2024-01-01",
            dateModified: new Date().toISOString(),
            license: "MIT",
            downloadUrl: "https://github.com/astreus-ai/astreus",
            codeRepository: "https://github.com/astreus-ai/astreus",
            programmingLanguage: ["JavaScript", "TypeScript", "Python"],
            runtimePlatform: ["Node.js", "Browser", "Server"],
            applicationCategory: ["DeveloperApplication", "BusinessApplication"],
            applicationSubCategory: "AI Development Framework",
            featureList: [
              "AI Agent Development",
              "Conversational AI",
              "LLM Integration",
              "Plugin System",
              "Multi-modal Support",
              "Real-time Communication",
              "Enterprise Ready"
            ],
            requirements: "Node.js 18+",
            memoryRequirement: "512MB",
            processorRequirement: "Any modern processor",
            storageRequirement: "100MB"
          }} 
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased flex flex-col h-screen`}>
        <RootProvider theme={{ defaultTheme: 'dark', forcedTheme: 'dark' }}>{children}</RootProvider>
      </body>
    </html>
  )
}
