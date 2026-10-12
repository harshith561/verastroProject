import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import { landscapingVisuals } from '@/data/services';
import { faqItems } from '@/data/faq';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'About Us | Verastro Infra',
  description:
    'Verastro Infra is a Florida landscaping and property-maintenance company. A division of Verastro Inc., based in Jacksonville, FL.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Verastro Infra',
    description:
      'A division of Verastro Inc. — Florida landscaping, grounds care, and routine property maintenance.',
    url: '/about',
    images: [{ url: '/og-image.png', width: 500, height: 500, alt: 'About Verastro Infra' }],
  },
  twitter: {
    title: 'About Us | Verastro Infra',
    description:
      'A division of Verastro Inc. providing Florida landscaping and routine property maintenance.',
    images: ['/og-image.png'],
  },
};

const whyChooseUs = [
  {
    title: 'Clear Service Scope',
    description:
      'Defined operating scopes guide our routine property and grounds maintenance. We work within confirmed boundaries and clearly communicate what tasks are included in each visit.',
  },
  {
    title: 'Consistent Service Delivery',
    description:
      'Reliable scheduling and conscientious grounds care ensure your Florida property receives regular, dependable upkeep without unnecessary delays.',
  },
  {
    title: 'Customer Communication',
    description:
      'Clear and proactive communication keeps you updated on upcoming visits, completed tasks, and any property observations that need your attention.',
  },
  {
    title: 'Clear Service Expectations',
    description:
      'We provide straightforward service descriptions, transparent quotes, and agreed-upon maintenance checklists so you always know what to expect.',
  },
  {
    title: 'Responsible Grounds Care',
    description:
      'Thoughtful turf mowing, careful manual weeding, and tidy cleanup practices protect your lawns and garden beds over time.',
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.aboutHero}
        alt={visualImages.aboutHeroAlt}
        eyebrow="About Us"
        title="About Verastro Infra"
        text="A Division of Verastro Inc. — Florida Landscaping, Grounds Care & Property Maintenance"
      />

      {/* About Intro */}
      <section className="bg-white" aria-labelledby="about-intro-heading">
        <VisualSplit
          image={visualImages.aboutMessage}
          alt={visualImages.aboutMessageAlt}
          eyebrow="Dedicated Grounds Care"
          title="Practical maintenance for Florida properties."
          text="Verastro Infra is a Florida landscaping and property-maintenance company operating as a division of Verastro Inc., based in Jacksonville. We focus on routine grounds care, lawn maintenance, garden upkeep, leaf removal, and scheduled property cleaning for residential and commercial properties. We believe that dependable service begins with clear expectations, consistent delivery, and prompt, respectful customer communication."
        />
      </section>

      {/* Routine Services Visuals */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
        aria-labelledby="core-services-heading"
      >
        <div className="container-main mb-10">
          <p className="section-label">Our Service Focus</p>
          <h2 id="core-services-heading" className="section-title">
            Essential care for lawns and grounds.
          </h2>
        </div>
        <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {landscapingVisuals.map((item) => (
            <article key={item.title} data-aos="fade-up" className="overflow-hidden bg-white">
              <div className="relative h-48 group overflow-hidden">
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
                <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-navy)' }}>
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <VisualSplit
        reverse
        image={visualImages.aboutApproach}
        alt={visualImages.aboutApproachAlt}
        eyebrow="Our Approach"
        title="A clear, accountable approach."
        text="Practical principles for how we plan, coordinate, and deliver grounds maintenance."
      >
        <div className="flex flex-col gap-5 mb-2">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="flex gap-3">
              <CheckCircle
                size={18}
                className="flex-shrink-0 mt-0.5"
                style={{ color: 'var(--color-teal)' }}
              />
              <div>
                <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-navy)' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </VisualSplit>

      {/* CTA Section */}
      <CTASection
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
        heading="Let's discuss your property maintenance needs."
        subtext="Share your requirements with the Verastro Infra team."
        ctaLabel="Request a Quote"
        ctaHref="/consultation"
      />

      {/* FAQ */}
      <section className="section-padding bg-white" aria-labelledby="faq-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <p className="section-label">Frequently Asked Questions</p>
              <h2 id="faq-heading" className="section-title">
                Common questions about our services.
              </h2>
            </div>
            <div data-aos="fade-left">
              <FAQ items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
