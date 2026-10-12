import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import AosInit from '@/components/AosInit';

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

const isPreview =
  process.env.VERCEL_ENV === 'preview' ||
  siteUrl.includes('vercel.app');

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Verastro Infra | Florida Landscaping & Property Maintenance',
    template: '%s',
  },
  description:
    'Verastro Infra is a Florida landscaping, grounds-care, and property-maintenance company. A division of Verastro Inc., based in Jacksonville, FL.',
  keywords: [
    'landscaping',
    'grounds care',
    'property maintenance',
    'lawn mowing',
    'lawn edging',
    'garden upkeep',
    'leaf removal',
    'Florida landscaping',
    'Jacksonville grounds maintenance',
    'Verastro Infra',
    'Verastro Inc.',
  ],
  authors: [{ name: 'Verastro Infra' }],
  creator: 'Verastro Infra',
  publisher: 'Verastro Inc.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Verastro Infra',
    title: 'Verastro Infra | Florida Landscaping & Property Maintenance',
    description:
      'Professional landscaping, grounds care, and routine property maintenance in Jacksonville, Florida. A division of Verastro Inc.',
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Verastro Infra — Florida Landscaping & Property Maintenance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verastro Infra | Florida Landscaping & Property Maintenance',
    description:
      'Professional landscaping, grounds care, and routine property maintenance in Jacksonville, Florida. A division of Verastro Inc.',
    images: ['/og-image.png'],
  },
  robots: isPreview
    ? {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    }
    : {
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

// JSON-LD structured data — Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Verastro Infra',
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description:
    'Verastro Infra is a Florida landscaping, grounds-care, and property-maintenance company. A division of Verastro Inc.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Verastro Inc.',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10151 Deerwood Park Blvd, Building 200, Suite 250',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    postalCode: '32256',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-904-302-9170',
    contactType: 'customer service',
    email: 'inquries@verastro.com',
    areaServed: 'Florida',
    availableLanguage: 'English',
  },
};

// JSON-LD structured data — WebSite
const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Verastro Infra',
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
