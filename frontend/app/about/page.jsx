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
  title: 'About Us | VERASTRO INFRA',
  description:
    'Learn about VERASTRO INFRA, a division of Verastro Inc. We deliver professional engineering, landscaping, site development, grading, and outdoor infrastructure across FL, TX, DE, and AR.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About VERASTRO INFRA',
    description:
      'A division of Verastro Inc. — professional engineering, site development, and outdoor infrastructure across FL, TX, DE, and AR.',
    url: '/about',
  },
  twitter: {
    title: 'About Us | VERASTRO INFRA',
    description: 'A division of Verastro Inc. delivering professional engineering and site development.',
  },
};

const whyChooseUs = [
  {
    title: 'Licensed-Compliant Expertise',
    description:
      'Defined operating scopes guide our project planning, technical support, and field coordination. We work within approved boundaries and clearly communicate what is included in each scope.',
  },
  {
    title: 'Transparent & Hassle-Free Process',
    description:
      'Clear communication and documented project coordination keeps requirements and next steps understandable. We provide regular updates and maintain organized records throughout.',
  },
  {
    title: 'Professional Standards & Safety',
    description:
      'Safety and compliance are part of planning and coordinating work within approved scopes. We prioritize site safety, maintain proper documentation, and coordinate within established professional standards.',
  },
  {
    title: 'Sustainable, Future-Ready Results',
    description:
      'Efficient grading, water management, and responsible landscaping support functional outdoor spaces that perform well over time and minimize ongoing maintenance requirements.',
  },
  {
    title: 'Quality Workmanship & Accountability',
    description:
      'Quality control and professional execution guide fieldwork and final project coordination. We hold our work to consistent standards and maintain accountability throughout every project.',
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.aboutHero}
        alt={visualImages.aboutHeroAlt}
        eyebrow="About Us"
        title="About VERASTRO INFRA"
        text="A Division of Verastro Inc. — Building Outdoor Excellence Across Florida, Texas & Arkansas"
      />

      <section className="bg-white" aria-labelledby="about-intro-heading">
        <VisualSplit
          image={visualImages.aboutMessage}
          alt={visualImages.aboutMessageAlt}
          eyebrow="Engineering Precision & Outdoor Purpose"
          title="Practical solutions for land and outdoor infrastructure."
          text="VERASTRO INFRA brings together professional engineering, creative landscaping, and site development. Our work includes grading, drainage, sod, turf, pavers, hardscape, and outdoor infrastructure. As a locally operated division of Verastro Inc., our engineering and field teams evaluate site conditions and project requirements. Engineering precision, compliance, safety, quality, and transparency guide that work."
        />
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }} aria-labelledby="core-services-heading">
        <div className="container-main mb-10">
          <p className="section-label">Our Core Services</p>
          <h2 id="core-services-heading" className="section-title">
            From ground preparation to finishing.
          </h2>
        </div>
        <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {landscapingVisuals.map((item) => (
            <article key={item.title} data-aos="fade-up" className="overflow-hidden bg-white">
              <div className="relative h-48 group overflow-hidden">
                <Image src={item.image} alt={item.imageAlt} fill sizes="33vw" unoptimized className="object-cover img-zoom-hover" />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold" style={{ color: 'var(--color-navy)' }}>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <VisualSplit
        reverse
        image={visualImages.aboutApproach}
        alt={visualImages.aboutApproachAlt}
        eyebrow="Our Approach"
        title="A clear, accountable approach."
        text="Practical principles for how we plan, coordinate, and deliver site solutions."
      >
        <div className="flex flex-col gap-5 mb-2">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="flex gap-3">
              <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-teal)' }} />
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

      <CTASection
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
      />

      <section className="section-padding bg-white" aria-labelledby="faq-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <p className="section-label">Frequently Asked Questions</p>
              <h2 id="faq-heading" className="section-title">
                A few things to know.
              </h2>
            </div>
            <div data-aos="fade-left"><FAQ items={faqItems} /></div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
