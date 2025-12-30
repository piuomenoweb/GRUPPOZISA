import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gruppo Zisa - Natura Blu, Energia Verde',
  description: 'Mirtilli e lamponi bio residuo zero, pannelli solari. Azienda familiare innovativa nella provincia di Ragusa.',
  keywords: 'mirtilli bio, lamponi bio, pannelli solari Ragusa, agricoltura biologica Sicilia, residuo zero',
  openGraph: {
    title: 'Gruppo Zisa - Natura Blu, Energia Verde',
    description: 'Mirtilli e lamponi bio residuo zero, pannelli solari. Azienda familiare innovativa nella provincia di Ragusa.',
    type: 'website',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gruppo Zisa - Natura Blu, Energia Verde',
    description: 'Mirtilli e lamponi bio residuo zero, pannelli solari. Azienda familiare innovativa nella provincia di Ragusa.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/logo-z.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-z.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}

