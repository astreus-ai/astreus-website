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
  metadataBase: new URL('https://astreus.org'),
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
            downloadUrl: "https://github.com/astreus-ai/astreus/astreus",
            codeRepository: "https://github.com/astreus-ai/astreus/astreus",
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
              "Enterprise Ready",
              "RAG Implementation",
              "Intent Recognition",
              "Media Analysis",
              "Context Processing",
              "Memory Management",
              "Task Execution",
              "Provider Integration",
              "Infrastructure Support"
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
