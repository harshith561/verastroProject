import { Phone, Mail, Clock } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import CTASection from '@/components/CTASection';
import { visualImages } from '@/data/heroSlides';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verastroinfra.com';

export const metadata = {
  title: 'Contact Verastro Infra | Jacksonville Main Office',
  description:
    'Contact Verastro Infra in Jacksonville, FL for grounds care and property maintenance. Call (904) 302-9170 or visit our Deerwood Park Blvd office.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Verastro Infra | Jacksonville Main Office',
    description:
      'Contact Verastro Infra for Florida landscaping and property maintenance. Main Office in Jacksonville, FL.',
    url: '/contact',
    images: [{ url: '/og-image.png', width: 500, height: 500, alt: 'Contact Verastro Infra' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Verastro Infra | Jacksonville Main Office',
    description:
      'Contact Verastro Infra for Florida landscaping and property maintenance solutions.',
    images: ['/og-image.png'],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Verastro Infra',
  url: `${siteUrl}/contact`,
  description:
    'Contact details for Verastro Infra, a division of Verastro Inc., based in Jacksonville, FL.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Verastro Infra',
    url: siteUrl,
    telephone: '+1-904-302-9170',
    email: 'inquries@verastro.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10151 Deerwood Park Blvd, Building 200, Suite 250',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      postalCode: '32256',
      addressCountry: 'US',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Contact Us',
      item: `${siteUrl}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        image={visualImages.contactHero}
        alt={visualImages.contactHeroAlt}
        eyebrow="Contact Us"
        title="Get in Touch"
        text="Based in Jacksonville, Florida. Contact us for landscaping and property maintenance, and our team will respond with the next steps."
      />



      <VisualSplit
        image={visualImages.introLandscape}
        alt={visualImages.introLandscapeAlt}
        eyebrow="Direct Contact"
        title="Talk with Verastro Infra."
        text={
          <>
            Based in Jacksonville, Florida. Contact us for landscaping and property maintenance, and our team will respond with the next steps.
          </>
        }
      >
        <div className="flex flex-col gap-6 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Phone size={16} style={{ color: 'var(--color-teal)' }} />
              <h3 className="text-sm font-semibold" style={{ color: 'var(--color-navy)' }}>
                Call Us
              </h3>
            </div>
            <a
              href="tel:+19043029170"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              (904) 302-9170
            </a>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Mail size={16} style={{ color: 'var(--color-teal)' }} />
              <h3 className="text-sm font-semibold" style={{ color: 'var(--color-navy)' }}>
                Email Us
              </h3>
            </div>
            <a
              href="mailto:inquries@verastro.com"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              inquries@verastro.com
            </a>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Clock size={16} style={{ color: 'var(--color-teal)' }} />
              <h3 className="text-sm font-semibold" style={{ color: 'var(--color-navy)' }}>
                Next Steps
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              Our team will contact you to discuss your request.
            </p>
          </div>
        </div>
      </VisualSplit>

      {/* Main Office Map Section */}
      <section className="bg-white border-t border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          <div className="px-6 py-12 md:px-12 lg:px-16 flex flex-col justify-center">
            <p className="section-label">Main Office</p>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: 'var(--color-navy)' }}
            >
              Jacksonville, Florida
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              10151 Deerwood Park Blvd, Building 200, Suite 250
              <br />
              Jacksonville, FL 32256
            </p>
            <p className="text-xs text-gray-500 mb-6">A division of Verastro Inc.</p>
            <div className="flex flex-col gap-1 text-sm text-gray-600">
              <p>
                <span className="font-semibold text-gray-800">Phone:</span> (904) 302-9170
              </p>
              <p>
                <span className="font-semibold text-gray-800">Email:</span>{' '}
                <a href="mailto:inquries@verastro.com" className="hover:underline text-teal-700">
                  inquries@verastro.com
                </a>
              </p>
            </div>
          </div>
          <div
            className="min-h-[320px] md:min-h-[420px] p-4 md:p-8"
            style={{ backgroundColor: 'var(--color-warm-white)' }}
          >
            <GoogleMapEmbed />
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to discuss your property maintenance?"
        subtext="Share your requirements with the Verastro Infra team."
        ctaLabel="Request a Quote"
        ctaHref="/consultation"
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
      />
    </PageLayout>
  );
}
