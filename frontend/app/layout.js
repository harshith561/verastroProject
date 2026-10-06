import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://verastroinfra.com'),
  title: {
    default: 'VERASTRO INFRA | Engineering & Site Development',
    template: '%s | VERASTRO INFRA',
  },
  description:
    'VERASTRO INFRA is a division of Verastro Inc., delivering professional engineering, site development, grading, drainage, and outdoor infrastructure solutions across Florida, Texas, Delaware, and Arkansas.',
  keywords: [
    'site development',
    'civil engineering',
    'land development',
    'grading',
    'drainage',
    'landscaping',
    'infrastructure',
    'Verastro',
    'Florida',
    'Texas',
    'Arkansas',
    'Delaware',
  ],
  authors: [{ name: 'VERASTRO INFRA' }],
  creator: 'VERASTRO INFRA',
  publisher: 'Verastro Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'VERASTRO INFRA',
    title: 'VERASTRO INFRA | Engineering & Site Development',
    description: 'Professional engineering, site development, grading, and infrastructure solutions across FL, TX, DE, and AR.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERASTRO INFRA | Engineering & Site Development',
    description: 'Professional engineering, site development, grading, and infrastructure solutions across FL, TX, DE, and AR.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import AosInit from '@/components/AosInit';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={inter.className}>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
