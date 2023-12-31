import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "tw-elements/dist/css/tw-elements.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App NN',
  description: 'Creating app NN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
