import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import HeroSlideshow from '@/components/HeroSlideshow';
import VisualSplit from '@/components/VisualSplit';
import FullBleedVisual from '@/components/FullBleedVisual';
import LocationCard from '@/components/LocationCard';
import CTASection from '@/components/CTASection';
import { mainServices, landscapingVisuals } from '@/data/services';
import { locations } from '@/data/locations';
import { visualImages } from '@/data/heroSlides';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verastroinfra.com';

export const metadata = {
  title: 'Florida Landscaping & Property Maintenance | Verastro Infra',
  description:
    'Verastro Infra provides routine grounds maintenance, lawn mowing, edging, garden upkeep, leaf removal, and property care across Florida. Main Office in Jacksonville, FL.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Florida Landscaping & Property Maintenance | Verastro Infra',
    description:
      'Routine grounds care, lawn maintenance, garden upkeep, and property cleaning in Jacksonville, Florida. A division of Verastro Inc.',
    url: '/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Verastro Infra — Florida Landscaping & Property Maintenance',
      },
    ],
  },
  twitter: {
    title: 'Florida Landscaping & Property Maintenance | Verastro Infra',
    description:
      'Routine grounds care, lawn maintenance, and property upkeep in Jacksonville, Florida.',
    images: ['/og-image.jpg'],
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
    'Florida landscaping, grounds care, and routine property maintenance company — a division of Verastro Inc.',
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
    'Lawn Mowing',
    'Lawn Edging',
    'Manual Weeding',
    'Leaf Removal',
    'Garden Upkeep',
    'Routine Grounds Cleanup',
    'One-Time Cleanup',
    'Recurring Maintenance',
    'Service Coordination',
  ],
};

export default function HomePage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="-mt-16">
        <HeroSlideshow />
      </div>

      {/* Introductory Section */}
      <section className="bg-white" aria-labelledby="intro-heading">
        <VisualSplit
          image={visualImages.introLandscape}
          alt={visualImages.introLandscapeAlt}
          eyebrow="Routine Grounds Care & Clear Communication"
          title="Your Florida Landscaping & Maintenance Partner"
          text="Verastro Infra is a Florida landscaping and property-maintenance company, operating as a division of Verastro Inc. We provide dependable grounds care, routine lawn maintenance, garden upkeep, and property cleaning tailored to residential and commercial properties in Jacksonville and surrounding areas. We emphasize clear service scopes, consistent service delivery, and prompt customer communication."
          ctaLabel="More About Our Company"
          ctaHref="/about"
        />
      </section>

      {/* Full-bleed visual break */}
      <FullBleedVisual
        image={visualImages.golfCourse}
        alt={visualImages.golfCourseAlt}
        eyebrow="Landscaping & Grounds Care"
        title="Outdoor spaces maintained for lasting appeal."
        text="Our grounds care focuses on dependable maintenance routines — regular mowing, crisp edging, manual weeding, and orderly property cleanups shaped around your schedule."
        ctaLabel="Explore Services"
        ctaHref="/services"
      />

      {/* Main Services Section */}
      <section aria-labelledby="services-heading" className="bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-8 md:pb-10 text-center lg:text-left">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#20B9AD]">
            Approved Scope
          </p>
          <h2
            id="services-heading"
            className="text-2xl md:text-3xl font-semibold leading-tight mb-3 text-[#101A3A]"
          >
            Landscaping & Maintenance Services
          </h2>
          <p className="text-sm text-gray-600 max-w-full mx-auto lg:mx-0">
            Routine grounds care, one-time property cleanups, and recurring maintenance programs across Florida.
          </p>
        </div>

        <div className="w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {mainServices.map((service) => (
            <Link
              key={service.id}
              href="/services"
              data-aos="fade-up"
              className="group relative block aspect-[4/3] overflow-hidden"
              aria-label={`Explore ${service.title}`}
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1226]/90 via-[#0B1226]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-center lg:text-left">
                <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed line-clamp-2 mb-3">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#4CCFC1]">
                  Explore Service <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Routine Grounds Care Highlights */}
      <section className="section-padding bg-white" aria-labelledby="landscaping-heading">
        <div className="container-main mb-10">
          <p className="section-label">Routine Property & Grounds Care</p>
          <h2 id="landscaping-heading" className="section-title">
            Well-kept lawns. Orderly outdoor spaces.
          </h2>
        </div>
        <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {landscapingVisuals.map((item) => (
            <article
              key={item.title}
              data-aos="fade-up"
              className="group overflow-hidden bg-white border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  unoptimized
                  className="object-cover img-zoom-hover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--color-navy)' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="container-main mt-8">
          <Link href="/services" className="btn-outline" id="home-services-link">
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Main Office / Where We Serve */}
      <section className="section-padding bg-white" aria-labelledby="locations-heading">
        <div className="container-main">
          <div className="mb-8">
            <p className="section-label">Where We Serve</p>
            <h2 id="locations-heading" className="section-title">
              Based in Jacksonville, Florida.
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mt-2">
              Serving residential and commercial properties in Jacksonville and surrounding Florida communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
        heading="Let's discuss your property maintenance needs."
        subtext="Share your requirements with the Verastro Infra team."
        ctaLabel="Request a Quote"
        ctaHref="/consultation"
      />
    </PageLayout>
  );
}