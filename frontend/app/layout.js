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
    default: 'Verastro Infra Projects | Engineering & Site Development',
    template: '%s | Verastro Infra Projects',
  },
  description:
    'Verastro Infra Projects is a division of Verastro Inc., delivering professional engineering, site development, grading, drainage, and outdoor infrastructure solutions across Florida, Texas, Delaware, and Arkansas.',
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
  authors: [{ name: 'Verastro Infra Projects' }],
  creator: 'Verastro Infra Projects',
  publisher: 'Verastro Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Verastro Infra Projects',
    title: 'Verastro Infra Projects | Engineering & Site Development',
    description: 'Professional engineering, site development, grading, and infrastructure solutions across FL, TX, DE, and AR.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verastro Infra Projects | Engineering & Site Development',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
