import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michael Mandle',
  description: 'The portfolio belonging to Michael Mandle. A current UGA, University of Georgia Student' &
                'And a website developer or web developer. As well as a Software Developer or Software Dev' &
                'And additionally a Graphic Designer and Creative.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}