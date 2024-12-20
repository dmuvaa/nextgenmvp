import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '../../lib/theme'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})
const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'NextGen MVP - Launch Your MVP in Days or Weeks',
  description:
    'NextGen MVP helps startups build and launch their Minimum Viable Product quickly and efficiently. Get to market faster and start earning sooner.',
  keywords: 'MVP, startup, rapid development, product launch, software development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextgenmvp.com',
    title: 'NextGen MVP - Launch Your MVP in Days or Weeks',
    description:
      'NextGen MVP helps startups build and launch their Minimum Viable Product quickly and efficiently. Get to market faster and start earning sooner.',
    siteName: 'NextGen MVP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextGen MVP - Launch Your MVP in Days or Weeks',
    description:
      'NextGen MVP helps startups build and launch their Minimum Viable Product quickly and efficiently. Get to market faster and start earning sooner.',
    creator: '@nextgenmvp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
