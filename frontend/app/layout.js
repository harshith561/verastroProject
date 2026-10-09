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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verastroinfra.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'VERASTRO INFRA',
    title: 'VERASTRO INFRA | Engineering & Site Development',
    description: 'Professional engineering, site development, grading, and infrastructure solutions across FL, TX, DE, and AR.',
    url: '/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VERASTRO INFRA — Engineering & Site Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERASTRO INFRA | Engineering & Site Development',
    description: 'Professional engineering, site development, grading, and infrastructure solutions across FL, TX, DE, and AR.',
    images: ['/og-image.jpg'],
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

// JSON-LD structured data — Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VERASTRO INFRA',
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description:
    'VERASTRO INFRA is a division of Verastro Inc., delivering professional engineering, site development, grading, drainage, and outdoor infrastructure solutions.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Verastro Inc.',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-904-302-9170',
    contactType: 'customer service',
    email: 'inquiries@verastroinfra.com',
    areaServed: ['FL', 'TX', 'DE', 'AR'],
    availableLanguage: 'English',
  },
  areaServed: [
    { '@type': 'State', name: 'Florida' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'State', name: 'Delaware' },
    { '@type': 'State', name: 'Arkansas' },
  ],
};

// JSON-LD structured data — WebSite
const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VERASTRO INFRA',
  url: siteUrl,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={inter.className}>
        <AosInit />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </body>
    </html>
  );
}
