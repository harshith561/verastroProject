import Link from 'next/link';
import { ArrowRight, CheckCircle2, MessageSquare, Phone, Mail } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import {
  servicesList,
  serviceScheduleComparison,
  deliveryProcess,
  serviceSupportContent,
} from '@/data/services';
import { serviceFaqItems } from '@/data/faq';
import { visualImages } from '@/data/heroSlides';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verastroinfra.com';

export const metadata = {
  title: 'Landscaping & Property Services | Verastro Infra',
  description:
    'Explore commercial grounds care, routine lawn mowing, property cleanup, and garden bed upkeep in Jacksonville, FL. Clear service scopes and visit schedules.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Landscaping & Property Services | Verastro Infra',
    description:
      'Explore our service offerings and discuss the scope that fits your requirements. A division of Verastro Inc., based in Jacksonville, FL.',
    url: '/services',
    images: [{ url: '/og-image.png', width: 500, height: 500, alt: 'Verastro Infra Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landscaping & Property Services | Verastro Infra',
    description:
      'Commercial grounds care, routine lawn mowing, property cleanup, and garden bed upkeep in Jacksonville, FL.',
    images: ['/og-image.png'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Verastro Infra Property Maintenance Services',
  itemListElement: servicesList.map((service, index) => ({
    '@type': 'Service',
    position: index + 1,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Verastro Infra',
      url: siteUrl,
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
  })),
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
      name: 'Services',
      item: `${siteUrl}/services`,
    },
  ],
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero Section */}
      <PageHero
        image={visualImages.servicesHero}
        alt={visualImages.servicesHeroAlt}
        eyebrow="What We Offer"
        title="Our Services"
        text="Explore our service offerings and discuss the scope that fits your requirements."
      />



      {/* 2 & 3. Introduction & Landscaping Category Header */}
      <section className="bg-white border-b border-gray-100" aria-labelledby="category-heading">
        <div className="container-main py-12 md:py-16 text-center max-w-3xl ">
          <p className="section-label">Service Overview</p>
          <h2 id="category-heading" className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-[#101A3A]">
            Landscaping &amp; Outdoor Maintenance
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Choose individual services or combine them into an agreed maintenance plan. One-time and recurring visits are available based on your property’s needs and service availability.
          </p>
        </div>
      </section>

      {/* 4, 5, 6. Individual Services (Lawn & Grounds Maintenance, Property Cleanup & Leaf Removal, Garden & Shrub Care) */}
      <section aria-label="Individual Services" className="bg-white">
        {servicesList.map((service, index) => (
          <div key={service.id} id={service.id} className="scroll-mt-20">
            <VisualSplit
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
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Included Activities:
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-[#20B9AD] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </VisualSplit>
          </div>
        ))}
      </section>

      {/* 8. Service Schedule Comparison (One-Time vs Recurring) */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
        aria-labelledby="schedule-comparison-heading"
      >
        <div className="container-main mb-12 text-center max-w-2xl mx-auto">
          <p className="section-label">Service Schedules</p>
          <h2 id="schedule-comparison-heading" className="section-title">
            {serviceScheduleComparison.heading}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
            {serviceScheduleComparison.introduction}
          </p>
        </div>

        <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl">
          {/* Left Card: One-Time Service */}
          <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded text-xs font-bold mb-4 bg-teal-50 text-teal-800 tracking-wide uppercase">
                Single Visit / Seasonal
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101A3A]">
                {serviceScheduleComparison.oneTime.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {serviceScheduleComparison.oneTime.description}
              </p>
              <ul className="flex flex-col gap-3 text-sm text-gray-700 mb-8 pt-4 border-t border-gray-100">
                {serviceScheduleComparison.oneTime.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <span className="text-[#20B9AD] font-bold text-base leading-none">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={serviceScheduleComparison.oneTime.buttonHref}
              className="btn-outline justify-center w-full"
            >
              {serviceScheduleComparison.oneTime.buttonLabel} <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Card: Recurring Maintenance */}
          <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded text-xs font-bold mb-4 bg-blue-50 text-blue-800 tracking-wide uppercase">
                Regular Upkeep
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101A3A]">
                {serviceScheduleComparison.recurring.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {serviceScheduleComparison.recurring.description}
              </p>
              <ul className="flex flex-col gap-3 text-sm text-gray-700 mb-8 pt-4 border-t border-gray-100">
                {serviceScheduleComparison.recurring.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <span className="text-[#20B9AD] font-bold text-base leading-none">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={serviceScheduleComparison.recurring.buttonHref}
              className="btn-primary justify-center w-full"
            >
              {serviceScheduleComparison.recurring.buttonLabel} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Service Delivery Process (From Inquiry to Completion) */}
      <section className="section-padding bg-white border-t border-gray-100" aria-labelledby="delivery-process-heading">
        <div className="container-main mb-12 text-center max-w-2xl mx-auto">
          <p className="section-label">Workflow</p>
          <h2 id="delivery-process-heading" className="section-title">
            From Inquiry to Completion
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
            Here is how we confirm your requirements and coordinate the work.
          </p>
        </div>

        <div className="container-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryProcess.map((step) => (
            <div
              key={step.step}
              data-aos="fade-up"
              className="p-6 bg-slate-50 rounded-lg border border-slate-200/70 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-xs font-extrabold tracking-widest text-[#20B9AD] block mb-3">
                  STEP {step.step}
                </span>
                <h3 className="text-base font-bold text-[#101A3A] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Service Support Section */}
      <section className="bg-slate-50 py-12 border-y border-slate-200/80" aria-labelledby="support-heading">
        <div className="container-main max-w-4xl">
          <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#20B9AD] uppercase tracking-wider mb-2">
                <MessageSquare size={16} />
                <span>Customer Support</span>
              </div>
              <h3 id="support-heading" className="text-xl md:text-2xl font-bold text-[#101A3A] mb-2">
                {serviceSupportContent.heading}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {serviceSupportContent.paragraph}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-medium text-gray-500">
                <a href="tel:+19043029170" className="inline-flex items-center gap-1.5 hover:text-[#101A3A]">
                  <Phone size={13} className="text-[#20B9AD]" /> (904) 302-9170
                </a>
                <a href="mailto:inquries@verastro.com" className="inline-flex items-center gap-1.5 hover:text-[#101A3A]">
                  <Mail size={13} className="text-[#20B9AD]" /> inquries@verastro.com
                </a>
              </div>
            </div>
            <div className="shrink-0">
              <Link href={serviceSupportContent.buttonHref} className="btn-primary whitespace-nowrap">
                {serviceSupportContent.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Service FAQs */}
      <section className="section-padding bg-white" aria-labelledby="services-faq-heading">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-10">
            <p className="section-label">Frequently Asked Questions</p>
            <h2 id="services-faq-heading" className="section-title">
              Common questions about our services.
            </h2>
          </div>
          <div className="bg-slate-50/60 p-6 sm:p-8 rounded-xl border border-gray-200/70">
            <FAQ items={serviceFaqItems} />
          </div>
        </div>
      </section>

      {/* 12. Closing CTA */}
      <CTASection
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
        heading="Request a Quote for Your Requirements"
        subtext="Send us the location, requested work, and preferred timing so we can discuss the next steps."
        ctaLabel="Request a Quote"
        ctaHref="/consultation"
      />
    </PageLayout>
  );
}
