import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'
import EarlyAccessBubble from '@/components/kovio/EarlyAccessBubble'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kovio · The monetization layer for autonomous robots',
  description:
    'Kovio is the economic interaction layer for autonomous robots. Every real-world robot moment becomes a measurable, revenue-generating interaction.',
  openGraph: {
    title: 'Kovio · The monetization layer for autonomous robots',
    description:
      'The economic infrastructure for physical AI. Activating the robot economy.',
    url: 'https://kovio.dev',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-paper text-ink antialiased">
        {children}
        <EarlyAccessBubble />
      </body>
    </html>
  )
}
