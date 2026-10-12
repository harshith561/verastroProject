import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Navigation,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import HeroSlideshow from '@/components/HeroSlideshow';
import VisualSplit from '@/components/VisualSplit';
import FullBleedVisual from '@/components/FullBleedVisual';
import CTASection from '@/components/CTASection';
import { mainServices, landscapingVisuals, deliveryProcess } from '@/data/services';
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

      {/* Hero Slideshow */}
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
        >
          {/* Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-100 mt-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-[#20B9AD]">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-xs font-semibold text-[#101A3A]">Clear Scopes</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-[#20B9AD]">
                <Calendar size={16} />
              </div>
              <span className="text-xs font-semibold text-[#101A3A]">Reliable Visits</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-[#20B9AD]">
                <Clock size={16} />
              </div>
              <span className="text-xs font-semibold text-[#101A3A]">Direct Updates</span>
            </div>
          </div>
        </VisualSplit>
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
      <section aria-labelledby="services-heading" className="bg-white py-16 md:py-24">
        <div className="container-main mb-12 text-center lg:text-left">
          <h2
            id="services-heading"
            className="text-2xl md:text-4xl font-bold leading-tight mb-3 text-[#101A3A]"
          >
            Landscaping &amp; Maintenance Services
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl">
            Routine grounds care, one-time property cleanups, and recurring maintenance programs across Florida with confirmed scopes of work.
          </p>
        </div>

        <div className="container-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((service) => (
            <Link
              key={service.id}
              href="/services"
              data-aos="fade-up"
              className="group relative block aspect-[4/3] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              aria-label={`Explore ${service.title}`}
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
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4CCFC1] group-hover:translate-x-1 transition-transform duration-300">
                  Explore Service <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How Services Are Delivered (4-Step Process) */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100" aria-labelledby="delivery-heading">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">Service Process</p>
            <h2 id="delivery-heading" className="section-title">
              How Services Are Delivered
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              A straightforward, transparent workflow designed for clarity and dependable results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryProcess.map((item) => (
              <div
                key={item.step}
                data-aos="fade-up"
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#101A3A] text-[#20B9AD] font-bold text-sm flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-[#101A3A] mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routine Grounds Care Highlights */}
      <section className="section-padding bg-white" aria-labelledby="landscaping-heading">
        <div className="container-main mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="section-label">Routine Property &amp; Grounds Care</p>
            <h2 id="landscaping-heading" className="section-title">
              Well-kept lawns. Orderly outdoor spaces.
            </h2>
          </div>
          <Link href="/services" className="btn-outline shrink-0 self-start md:self-auto" id="home-services-link">
            View All Services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {landscapingVisuals.map((item) => (
            <article
              key={item.title}
              data-aos="fade-up"
              className="group overflow-hidden rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
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
                <h3 className="text-base font-bold mb-2 text-[#101A3A]">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Main Office & Florida Service Coverage Showcase */}
      <section className="section-padding bg-slate-50 border-t border-slate-100" aria-labelledby="locations-heading">
        <div className="container-main">

          <div className="max-w-2xl mb-12">
            <p className="section-label">Where We Serve</p>
            <h2 id="locations-heading" className="section-title">
              Based in Jacksonville, Florida.
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
              Serving residential and commercial properties across Jacksonville, Duval County, and surrounding Northeast Florida communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left: Featured Main Office Card (7 columns) */}
            <div data-aos="fade-up" className="lg:col-span-7 flex flex-col">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-[#101A3A] text-white flex-1 flex flex-col justify-between min-h-[360px]">
                {/* Background Image with Gradient Overlay */}
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

            {/* Right: Coverage & Service Commitments (5 columns) */}
            <div data-aos="fade-up" className="lg:col-span-5 flex flex-col justify-between gap-4">

              {/* Coverage Card 1 */}
              <div className="bg-white p-5 rounded-lg border border-gray-200/70 shadow-sm">
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
              <div className="bg-white p-5 rounded-lg border border-gray-200/70 shadow-sm">
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

              {/* Coverage Card 3 */}
              <div className="bg-white p-5 rounded-lg border border-gray-200/70 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-[#20B9AD] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#101A3A] mb-1">
                      Clear Scopes &amp; Responsive Support
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Every service begins with confirmed parameters, transparent expectations, and active coordination from our Jacksonville team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Callout Box with Action */}
              <div className="bg-gradient-to-br from-[#101A3A] to-[#1E2E5A] text-white p-5 rounded-lg shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-semibold text-[#4CCFC1] uppercase tracking-wider">
                    Service Inquiry
                  </div>
                  <div className="text-sm font-bold text-white">
                    Need grounds care in Florida?
                  </div>
                </div>
                <Link
                  href="/consultation"
                  className="btn-primary text-xs py-2 px-3.5 whitespace-nowrap"
                  id="home-coverage-quote-btn"
                >
                  Request a Quote
                </Link>
              </div>

            </div>

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