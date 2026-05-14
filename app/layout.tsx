import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const merriweather = Merriweather({ 
  subsets: ["latin"], 
  weight: ['400', '700'],
  variable: '--font-merriweather'
});

export const metadata: Metadata = {
  title: 'MindLogs | Privacy Policy',
  description: 'Your thoughts, emotions, and journal entries stay protected and secure. Learn how MindLogs protects your privacy.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/mindlogs-logo.png', type: 'image/png' }],
    apple: '/mindlogs-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-b from-white via-purple-50 to-purple-100 min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
