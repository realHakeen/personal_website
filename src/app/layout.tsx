import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hakeen Yang | Builder',
  description: 'A builder has endless innovation and creativity—and the discipline to execute.',
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

