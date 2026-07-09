import type { Metadata } from 'next'
import { Archivo_Black, Space_Grotesk } from 'next/font/google'
import './globals.css'

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const grotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kovio.dev'),
  title: 'Kovio — We put ads on robots',
  description:
    "It's a billboard that walks up to you. Says hi. Shows your ad. Hands out a discount code. And proves every single interaction actually happened. Live in San Francisco.",
  openGraph: {
    title: 'Kovio — We put ads on robots',
    description:
      'Unmissable, fully measured advertising on humanoid robots. Live on the streets of San Francisco.',
    url: 'https://www.kovio.dev',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${grotesk.variable}`}>
      <body className="bg-[#F4F1EA] text-[#141414] antialiased">{children}</body>
    </html>
  )
}
