import '@/app/globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { RootProvider } from 'fumadocs-ui/provider';

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
      </head>
      <body className={`${spaceGrotesk.className} antialiased flex flex-col h-screen`}>
        <RootProvider theme={{ defaultTheme: 'dark', forcedTheme: 'dark' }}>{children}</RootProvider>
      </body>
    </html>
  )
}
