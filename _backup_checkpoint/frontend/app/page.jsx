import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Navigation,
  Calendar,
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import HeroSlideshow from '@/components/HeroSlideshow';
import VisualSplit from '@/components/VisualSplit';
import CTASection from '@/components/CTASection';
import { homeServiceCards } from '@/data/services';
import { locations } from '@/data/locations';
import { visualImages } from '@/data/heroSlides';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verastroinfra.com';

export const metadata = {
  title: 'Care for Your Property. Support for Your Projects. | Verastro Infra',
  description:
    'Explore Verastro Infra’s services for property upkeep and project needs. Serving Jacksonville, Duval County, St. Johns, and surrounding Northeast Florida communities.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Care for Your Property. Support for Your Projects. | Verastro Infra',
    description:
      'Explore Verastro Infra’s services for property upkeep and project needs. A division of Verastro Inc., based in Jacksonville, FL.',
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
    title: 'Care for Your Property. Support for Your Projects. | Verastro Infra',
    description:
      'Explore Verastro Infra’s services for property upkeep and project needs.',
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
            <Link
              key={service.id}
              href={service.href}
              data-aos="fade-up"
              className="group relative block aspect-[4/3] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              aria-label={`View Service: ${service.title}`}
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1226]/95 via-[#0B1226]/40 to-transparent transition-opacity group-hover:opacity-90" />

              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left">
                <h3 className="text-lg font-bold text-white mb-1.5 transition-colors group-hover:text-[#4CCFC1]">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-200 leading-relaxed line-clamp-2 mb-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4CCFC1] group-hover:translate-x-1 transition-transform duration-300">
                  View Service <ArrowRight size={14} />
                </span>
              </div>
            </Link>
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
            <div data-aos="fade-up" className="lg:col-span-7 flex flex-col">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-[#101A3A] text-white flex-1 flex flex-col justify-between min-h-[360px]">
                <Image
                  src={mainOffice.image}
                  alt={mainOffice.imageAlt || 'Jacksonville Main Office'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1226] via-[#0B1226]/80 to-transparent" />

                {/* Top Badge */}
                <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#20B9AD]/20 border border-[#20B9AD]/40 text-xs font-bold text-[#4CCFC1] tracking-wider uppercase">
                    <MapPin size={13} />
                    {mainOffice.label || 'Main Office'}
                  </div>
                  <span className="text-xs text-gray-300 font-medium hidden sm:inline">
                    Duval County, FL
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Jacksonville Main Office
                  </h3>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed max-w-lg">
                    {mainOffice.address}
                    <br />
                    <span className="text-white font-medium">{mainOffice.city}</span>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-6 border-t border-white/10 text-xs sm:text-sm">
                    <a
                      href="tel:+19043029170"
                      className="flex items-center gap-2.5 text-gray-200 hover:text-white transition-colors p-2 rounded bg-white/5 hover:bg-white/10"
                    >
                      <Phone size={15} className="text-[#20B9AD] shrink-0" />
                      <span>(904) 302-9170</span>
                    </a>
                    <a
                      href="mailto:inquries@verastro.com"
                      className="flex items-center gap-2.5 text-gray-200 hover:text-white transition-colors p-2 rounded bg-white/5 hover:bg-white/10"
                    >
                      <Mail size={15} className="text-[#20B9AD] shrink-0" />
                      <span className="truncate">inquries@verastro.com</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://maps.google.com/?q=10151+Deerwood+Park+Blvd,+Building+200,+Suite+250,+Jacksonville,+FL+32256"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs sm:text-sm py-2.5 px-4"
                      id="home-office-directions-btn"
                    >
                      <Navigation size={14} /> Get Directions
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white px-4 py-2.5 rounded border border-white/20 hover:bg-white/10 transition-colors"
                      id="home-office-contact-btn"
                    >
                      Contact Office
                    </Link>
                  </div>
                </div>
              </div>
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
