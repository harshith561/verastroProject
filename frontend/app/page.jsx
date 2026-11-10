import Link from 'next/link';
import {
  MapPin,
  Calendar,
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import HeroSlideshow from '@/components/HeroSlideshow';
import VisualSplit from '@/components/VisualSplit';
import HomeServiceCard from '@/components/HomeServiceCard';
import MainOfficeCard from '@/components/MainOfficeCard';
import CTASection from '@/components/CTASection';
import { homeServiceCards } from '@/data/services';
import { locations } from '@/data/locations';
import { visualImages } from '@/data/heroSlides';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verastroinfra.com';

export const metadata = {
  title: 'Florida Landscaping & Property Maintenance | Verastro Infra',
  description:
    'Verastro Infra provides routine lawn care, grounds maintenance, and property upkeep in Jacksonville, FL. Request a dependable quote for your Florida property.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Florida Landscaping & Property Maintenance | Verastro Infra',
    description:
      'Verastro Infra provides routine lawn care, grounds maintenance, and property upkeep in Jacksonville, FL. A division of Verastro Inc.',
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 500,
        height: 500,
        alt: 'Verastro Infra — Florida Landscaping & Property Maintenance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Landscaping & Property Maintenance | Verastro Infra',
    description:
      'Routine lawn care, grounds maintenance, and property upkeep in Jacksonville, FL.',
    images: ['/og-image.png'],
  },
};

// JSON-LD: LocalBusiness for the home page
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Verastro Infra',
  url: siteUrl,
  telephone: '+1-904-302-9170',
  email: 'inquries@verastro.com',
  description:
    'Florida property upkeep and project support — a division of Verastro Inc.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10151 Deerwood Park Blvd, Building 200, Suite 250',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    postalCode: '32256',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'State',
    name: 'Florida',
  },
  serviceType: [
    'Lawn & Grounds Maintenance',
    'Property Cleanup & Leaf Removal',
    'Garden & Shrub Care',
  ],
};

export default function HomePage() {
  const mainOffice = locations[0] || {
    state: 'Florida',
    label: 'Main Office',
    address: '10151 Deerwood Park Blvd, Building 200, Suite 250',
    city: 'Jacksonville, FL 32256',
    phone: '(904) 302-9170',
    email: 'inquries@verastro.com',
    image: '/images/HeroSlideshow/florida.avif',
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <div className="-mt-16">
        <HeroSlideshow />
      </div>

      {/* Introduction Section */}
      <section className="bg-white" aria-labelledby="intro-heading">
        <VisualSplit
          image={visualImages.introLandscape}
          alt={visualImages.introLandscapeAlt}
          eyebrow="Who We Are"
          title="Verastro Infra, a Division of Verastro Inc."
          text="Based in Jacksonville, Florida, Verastro Infra serves residential and commercial customers. Explore our services or contact our team to discuss your property or project requirements."
          ctaLabel="About Verastro Infra"
          ctaHref="/about"
        />
      </section>

      {/* Service Overview — Single consolidated section */}
      <section aria-labelledby="services-heading" className="bg-white py-16 md:py-24 border-t border-gray-100">
        <div className="container-main mb-12 text-center lg:text-left">
          <h2
            id="services-heading"
            className="text-2xl md:text-4xl font-bold leading-tight mb-3 text-[#101A3A]"
          >
            Our Services
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl">
            Find the service that fits your property or project. Select a category to see what is included.
          </p>
        </div>

        <div className="container-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServiceCards.map((service) => (
            <HomeServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-slate-50 border-t border-slate-100" aria-labelledby="locations-heading">
        <div className="container-main">
          <div className="max-w-2xl mb-12">
            <p className="section-label">Where We Serve</p>
            <h2 id="locations-heading" className="section-title">
              Serving Jacksonville and Nearby Communities
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
              Our grounds-care service area includes Jacksonville, Duval County, St. Johns, and surrounding Northeast Florida communities. Contact us to confirm availability at your address.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Featured Main Office Card (7 columns) */}
            <div className="lg:col-span-7 flex flex-col">
              <MainOfficeCard office={mainOffice} />
            </div>

            {/* Right: Coverage Columns (5 columns) */}
            <div data-aos="fade-up" className="lg:col-span-5 flex flex-col justify-center gap-4">
              {/* Coverage Card 1 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200/70 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-[#20B9AD] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#101A3A] mb-1">
                      Jacksonville Metro &amp; Duval County
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Lawn mowing, edging, garden bed upkeep, and routine maintenance for commercial properties, residential associations, and private estates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coverage Card 2 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200/70 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-[#20B9AD] flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#101A3A] mb-1">
                      St. Johns &amp; Surrounding Communities
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Scheduled recurring maintenance programs and seasonal property cleanups with dependable visit calendars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Closing CTA — Exactly one clear prompt */}
      <CTASection
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
        heading="Tell Us What You Need"
        subtext="Share your location and a brief description of the work. Our team will discuss availability and next steps."
        ctaLabel="Request a Quote"
        ctaHref="/consultation"
      />
    </PageLayout>
  );
}
