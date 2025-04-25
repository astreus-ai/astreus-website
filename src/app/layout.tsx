import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Press_Start_2P } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start-2p',
})

export const metadata: Metadata = {
  title: 'Astreus - AI Agent Framework',
  description: 'Astreus is an AI Agent Framework designed to help you easily build, deploy, and manage intelligent conversational agents powered by large language models (LLMs).',
  icons: {
    icon: '/astreus-logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${pressStart2P.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 