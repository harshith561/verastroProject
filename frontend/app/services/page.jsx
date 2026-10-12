import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import CTASection from '@/components/CTASection';
import { mainServices, deliveryProcess } from '@/data/services';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Landscaping & Grounds Care Services | Verastro Infra',
  description:
    'Explore Verastro Infra services: routine lawn mowing, edging, manual weeding, leaf removal, one-time cleanup, and recurring grounds maintenance in Florida.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Landscaping & Grounds Care Services | Verastro Infra',
    description:
      'Routine property maintenance, lawn care, one-time cleanup, and recurring grounds maintenance in Jacksonville, FL.',
    url: '/services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Verastro Infra Services' }],
  },
  twitter: {
    title: 'Landscaping & Grounds Care Services | Verastro Infra',
    description:
      'Routine property maintenance, lawn care, one-time cleanup, and recurring maintenance.',
    images: ['/og-image.jpg'],
  },
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.servicesHero}
        alt={visualImages.servicesHeroAlt}
        eyebrow="What We Do"
        title="Our Services"
        text="Landscaping, grounds care and routine property maintenance."
      />

      {/* Intro Context Banner */}
      {/* <section className="bg-white border-b border-gray-100 py-8">
        <div className="container-main flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-[#101A3A]">
              Florida Grounds Care &amp; Property Maintenance
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Serving residential, commercial, and HOA properties with clear service scopes and dependable schedules.
            </p>
          </div>
          <Link
            href="/consultation"
            className="btn-primary text-sm whitespace-nowrap self-start md:self-auto"
            id="services-quote-cta"
          >
            Request a Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section> */}

      {/* Approved Main Services Showcase */}
      <section aria-labelledby="main-services-heading" className="bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 section-padding pb-6">
          <p className="section-label">Approved Launch Scope</p>
          <h2 id="main-services-heading" className="section-title">
            Grounds care shaped around your property.
          </h2>
          <p className="text-sm text-gray-600 w-full mt-2">
            Every property has distinct maintenance needs. We offer both targeted one-time cleanups and dependable recurring maintenance programs with confirmed scopes of work.
          </p>
        </div>

        {mainServices.map((service, index) => (
          <VisualSplit
            key={service.id}
            reverse={index % 2 === 1}
            image={service.image}
            alt={service.imageAlt}
            eyebrow={`Service 0${index + 1}`}
            title={service.title}
            text={service.description}
            ctaLabel="Request a Quote"
            ctaHref="/consultation"
            headingAs="h3"
          >
            <div className="mt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                Included Activities:
              </h4>
              <ul className="flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-[#20B9AD] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </VisualSplit>
        ))}
      </section>

      {/* One-Time vs Recurring Maintenance Comparison */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
        aria-labelledby="comparison-heading"
      >
        <div className="container-main mb-12">
          <p className="section-label">Service Options</p>
          <h2 id="comparison-heading" className="section-title">
            One-Time Cleanup vs. Recurring Maintenance
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mt-2">
            Choose the maintenance structure that fits your property&apos;s immediate condition and long-term care goals.
          </p>
        </div>

        <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* One-Time Cleanup Card */}
          <div className="bg-white p-8 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded text-xs font-semibold mb-4 bg-teal-50 text-teal-800">
                Single Visit / Seasonal
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101A3A]">One-Time Property Cleanup</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Designed for property turnovers, overgrown lawns, seasonal leaf accumulation, or pre-event preparations. Restores order to your outdoor grounds with focused, thorough attention.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-gray-700 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#20B9AD] font-bold">&bull;</span>
                  <span>Seasonal leaf and storm debris collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#20B9AD] font-bold">&bull;</span>
                  <span>Manual weeding of overgrown landscape beds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#20B9AD] font-bold">&bull;</span>
                  <span>Walkway, driveway, and curb line clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#20B9AD] font-bold">&bull;</span>
                  <span>Confirmed flat quote prior to service execution</span>
                </li>
              </ul>
            </div>
            <Link href="/consultation" className="btn-outline justify-center">
              Request a Cleanup Quote <ArrowRight size={14} />
            </Link>
          </div>

          {/* Recurring Maintenance Card */}
          <div className="bg-white p-8 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded text-xs font-semibold mb-4 bg-blue-50 text-blue-800">
                Weekly &middot; Bi-Weekly &middot; Monthly
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101A3A]">Recurring Maintenance Program</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Scheduled ongoing grounds care that keeps residential lawns, commercial properties, and community spaces clean, trimmed, and presentable on a dependable calendar.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-gray-700 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#20B9AD] font-bold">&bull;</span>
                  <span>Regular lawn mowing and crisp mechanical edging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#20B9AD] font-bold">&bull;</span>
                  <span>Routine manual bed weeding and small hedge upkeep</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#20B9AD] font-bold">&bull;</span>
                  <span>Debris sweep and ordinary hydration monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#20B9AD] font-bold">&bull;</span>
                  <span>Consistent visit days with proactive schedule updates</span>
                </li>
              </ul>
            </div>
            <Link href="/consultation" className="btn-primary justify-center">
              Request a Maintenance Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* How Services Are Delivered */}
      <section className="section-padding bg-white" aria-labelledby="delivery-heading">
        <div className="container-main mb-12">
          <p className="section-label">Our Process</p>
          <h2 id="delivery-heading" className="section-title">
            How Services Are Delivered
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mt-2">
            A straightforward process from initial quote request to completed maintenance.
          </p>
        </div>

        <div className="container-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryProcess.map((step) => (
            <div key={step.step} className="p-6 bg-gray-50 border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-[#20B9AD] block mb-2">
                  STEP {step.step}
                </span>
                <h3 className="text-base font-bold text-[#101A3A] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Ready to schedule grounds maintenance?"
        subtext="Tell us about your property and our team will provide a clear, tailored quote."
        ctaLabel="Request a Quote"
        ctaHref="/consultation"
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
      />
    </PageLayout>
  );
}
