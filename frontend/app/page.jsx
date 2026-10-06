import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import LocationCard from '@/components/LocationCard';
import CTASection from '@/components/CTASection';
import { mainServices, siteWorkServices } from '@/data/services';
import { locations } from '@/data/locations';

export const metadata = {
  title: 'Engineering & Site Development Solutions | VERASTRO INFRA',
  description:
    'VERASTRO INFRA delivers professional engineering, land development, site grading, drainage, and outdoor infrastructure solutions across Florida, Texas, Delaware, and Arkansas. A division of Verastro Inc.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Engineering & Site Development Solutions | VERASTRO INFRA',
    description:
      'Professional engineering, site development, grading, and infrastructure solutions. A division of Verastro Inc., operating across FL, TX, DE, and AR.',
    url: '/',
  },
  twitter: {
    title: 'Engineering & Site Development Solutions | VERASTRO INFRA',
    description: 'Professional engineering, site development, grading, and infrastructure solutions across FL, TX, DE, and AR.',
  }
};

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="relative min-h-[520px] md:min-h-[600px] flex items-center"
        style={{ backgroundColor: 'var(--color-navy)' }}
        aria-label="Hero"
      >
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=75"
            alt="Land development and site grading work — excavation equipment on a construction site"
            fill
            className="object-cover"
            style={{ opacity: 0.25 }}
            priority
            sizes="100vw"
            unoptimized
          />
        </div>

        <div className="relative container-main py-16 md:py-20">
          <div data-aos="fade-up" className="max-w-2xl">
            <p className="section-label mb-4">
              VERASTRO INFRA — A Division of Verastro Inc.
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Engineering Better Infrastructure.{' '}
              <span className="block">Building Stronger Communities.</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              Engineering, site development, landscaping, grading, drainage, and outdoor
              infrastructure — built around your property and project requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/consultation" className="btn-primary" id="hero-consultation-cta">
                Request a Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-secondary" id="hero-services-link">
                Explore Our Services
              </Link>
            </div>
            <p className="mt-5 text-xs text-gray-500">
              Land Development &nbsp;·&nbsp; Site Grading &nbsp;·&nbsp; Drainage &nbsp;·&nbsp; Infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white" aria-labelledby="intro-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-right">
              <p className="section-label">Practical Expertise &amp; Clear Communication</p>
              <h2 id="intro-heading" className="section-title">
                Your Local Partner for Smart, Scalable Site Solutions
              </h2>
            </div>
            <div data-aos="fade-left" className="space-y-4 text-gray-600">
              <p className="text-sm leading-relaxed">
                VERASTRO INFRA is a locally operated division of Verastro Inc. Our engineering
                and field teams evaluate site conditions and project requirements to provide
                data-driven recommendations, clear communication, and transparent pricing.
              </p>
              <p className="text-sm leading-relaxed">
                From initial site assessments to project completion, we coordinate every phase with
                professional precision — keeping clients informed and projects on track.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: 'var(--color-teal)' }}
                id="intro-about-link"
              >
                More About Our Company <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
        aria-labelledby="services-heading"
      >
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="section-label">Our Services</p>
              <h2 id="services-heading" className="section-title mb-0">
                Site solutions, from planning to delivery.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium whitespace-nowrap transition-colors"
              style={{ color: 'var(--color-teal)' }}
              id="services-view-all-link"
            >
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mainServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="section-padding bg-white" aria-labelledby="engineering-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=75"
                alt="Civil engineers reviewing site plans on a land development project"
                width={600}
                height={400}
                className="w-full h-72 object-cover rounded-lg"
                unoptimized
              />
            </div>
            <div>
              <p className="section-label">Engineering &amp; Site Development</p>
              <h2 id="engineering-heading" className="section-title">
                Technical planning for practical fieldwork.
              </h2>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Site grading, drainage, erosion control, and development coordination —
                supported by quantity takeoffs, technical documentation, and site-plan coordination.
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {['AutoCAD Civil 3D', 'Drone surveys', 'GIS'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} style={{ color: 'var(--color-teal)' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/engineering" className="btn-outline" id="home-engineering-link">
                Explore Engineering <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Landscaping / Outdoor Work */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
        aria-labelledby="sitework-heading"
      >
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Landscaping &amp; Outdoor Work</p>
              <h2 id="sitework-heading" className="section-title">
                Well-planned grounds. Functional outdoor spaces.
              </h2>
              <ul className="flex flex-col gap-2.5 mb-6">
                {siteWorkServices.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-gray-700">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-teal)' }}
                    />
                    {service}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn-outline" id="home-sitework-link">
                View Services
              </Link>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=75"
                alt="Professionally landscaped community walkway with pavers and sod"
                width={600}
                height={400}
                className="w-full h-72 object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-navy-secondary)' }}
        aria-labelledby="investments-heading"
      >
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Property &amp; Infrastructure</p>
              <h2 id="investments-heading" className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Build, Develop, and Grow — With VERASTRO INFRA
              </h2>
              <Link href="/investments" className="btn-primary" id="home-investments-link">
                Explore Investments <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                We blend engineering expertise, landscape craftsmanship, and smart development
                planning to turn spaces into long-term assets.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                The portfolio may include sod installation, drainage, paver systems for community
                projects, commercial developments, and investor-backed infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Serve */}
      <section className="section-padding bg-white" aria-labelledby="locations-heading">
        <div className="container-main">
          <div className="mb-8">
            <p className="section-label">Where We Serve</p>
            <h2 id="locations-heading" className="section-title">
              Local coordination. Multi-state operations.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </PageLayout>
  );
}
