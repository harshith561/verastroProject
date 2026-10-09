import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import FullBleedVisual from '@/components/FullBleedVisual';
import CTASection from '@/components/CTASection';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Property & Infrastructure Investments | VERASTRO INFRA',
  description: 'Property and infrastructure investment consulting. We provide site selection and development feasibility support across FL, TX, DE, and AR.',
  alternates: { canonical: '/investments' },
  openGraph: {
    title: 'Property & Infrastructure Investments | VERASTRO INFRA',
    description: 'Infrastructure and property investment consulting across FL, TX, DE, and AR.',
    url: '/investments',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'VERASTRO INFRA Investments' }],
  },
  twitter: {
    title: 'Property & Infrastructure Investments | VERASTRO INFRA',
    description: 'Infrastructure and property investment consulting and feasibility support.',
    images: ['/og-image.jpg'],
  }
};

const investmentTypes = [
  {
    title: 'Commercial Investments',
    description: 'Site selection, feasibility, and development-oriented support for commercial properties and infrastructure.',
    image: visualImages.investment,
    imageAlt: visualImages.investmentAlt,
  },
  {
    title: 'Residential Investments',
    description: 'Land planning, subdivision layouts, and outdoor infrastructure support for residential development.',
    image: visualImages.commercialProperty,
    imageAlt: visualImages.commercialPropertyAlt,
  },
  {
    title: 'Asset-Backed Projects',
    description: 'Project assessment and site-development coordination for investor-backed real estate and infrastructure.',
    image: visualImages.infrastructure,
    imageAlt: visualImages.infrastructureAlt,
  },
];

const guidanceList = [
  'Site selection & feasibility',
  'Land and infrastructure planning',
  'Development coordination & project support'
];

export default function InvestmentsPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.investment}
        alt={visualImages.investmentAlt}
        eyebrow="Investments"
        title="Property & Infrastructure Investment Support"
        text="Development-oriented consultation for commercial, residential, and asset-backed projects."
      />

      <VisualSplit
        image={visualImages.aboutMessage}
        alt={visualImages.aboutMessageAlt}
        eyebrow="Build, Develop, and Grow"
        title="Start with the property. Plan for the project."
        text="We blend engineering expertise, landscape craftsmanship, and smart development planning to turn spaces into long-term assets. Multi-state operations across Florida, Texas, and Arkansas, with headquarters in Delaware."
      />

      <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-main mb-10">
          <p className="section-label">Development Support</p>
          <h2 className="section-title">
            Development support across property types.
          </h2>
        </div>
        <div className="container-main grid grid-cols-1 md:grid-cols-3 gap-5">
          {investmentTypes.map((type) => (
            <article key={type.title} data-aos="fade-up" className="overflow-hidden bg-white">
              <div className="relative h-48 group overflow-hidden">
                <Image src={type.image} alt={type.imageAlt} fill sizes="33vw" unoptimized className="object-cover img-zoom-hover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-navy)' }}>
                  {type.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <VisualSplit
        reverse
        image={visualImages.engineering}
        alt={visualImages.engineeringAlt}
        eyebrow="Investor Consultation"
        title="Practical guidance for development decisions."
        text="We evaluate properties from an engineering and development standpoint so investors and developers can plan with clearer site information."
      >
        <ul className="flex flex-col mb-2">
          {guidanceList.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 text-sm text-gray-700 py-4 border-b border-gray-100 last:border-0"
            >
              <div
                className="w-1.5 h-6 rounded-sm flex-shrink-0"
                style={{ backgroundColor: 'var(--color-teal)' }}
              />
              {item}
            </li>
          ))}
        </ul>
      </VisualSplit>

      <FullBleedVisual
        image={visualImages.golfCourse}
        alt={visualImages.golfCourseAlt}
        eyebrow="EB-5 — Informational Guidance Only"
        title="Understand the information. Consult qualified advisors."
        text="VERASTRO INFRA provides informational guidance on real-estate investment and EB-5-compliant opportunities. Such information is educational only and does not constitute financial, legal, or immigration advice."
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          <div data-aos="zoom-in" className="border border-gray-200 p-6" style={{ backgroundColor: 'var(--color-warm-white)' }}>
            <h2 className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--color-navy)' }}>Important Information</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Users should consult qualified advisors before making investment or visa-related decisions. We make no representations regarding profitability, approval timelines, or outcomes. Nothing on this Site constitutes a binding offer, guarantee, or professional advice. Formal terms are defined only in executed written agreements between you and VERASTRO INFRA.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Discuss your property and development goals."
        subtext="Share your requirements with the VERASTRO INFRA team."
        ctaLabel="Talk to Our Team"
        backgroundImage={visualImages.investment}
        backgroundAlt=""
      />
    </PageLayout>
  );
}
