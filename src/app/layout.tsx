import type { Metadata, Viewport } from 'next'
import { Cinzel, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://masterpiecesign.com'),
  title: {
    default: 'Masterpiece Signs & Graphics | Building Masterpieces Since 1988',
    template: '%s | Masterpiece Signs & Graphics',
  },
  description:
    "Premium custom sign shop in Bluffton, Ohio. Family-owned since 1988. We design, build, and install monument signs, storefront signage, vehicle graphics, banners, and golf course signage. Serving OH, MI & IN. A+ BBB Rated.",
  keywords: [
    'custom signs',
    'signage',
    'graphics',
    'Bluffton Ohio',
    'monument signs',
    'vehicle wraps',
    'golf course signs',
    'storefront signs',
    'channel letters',
    'hand painted signs',
  ],
  authors: [{ name: 'Masterpiece Signs & Graphics, Inc.' }],
  openGraph: {
    type: 'website',
    siteName: 'Masterpiece Signs & Graphics',
    title: 'Masterpiece Signs & Graphics | Building Masterpieces Since 1988',
    description: "Don't just buy a sign — buy a Masterpiece. Family-owned, Bluffton OH.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masterpiece Signs & Graphics',
    description: "Don't just buy a sign — buy a Masterpiece.",
  },
  icons: {
    icon: [
      { url: '/logos/logo.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: { url: '/logos/logo.png', type: 'image/png' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
