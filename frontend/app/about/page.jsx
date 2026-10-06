import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import { siteWorkServices } from '@/data/services';
import { faqItems } from '@/data/faq';

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
  }
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
      {/* Page Hero */}
      <section
        className="relative py-16 md:py-20"
        style={{ backgroundColor: 'var(--color-navy)' }}
        aria-label="About page header"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop&q=75"
            alt="Engineering team reviewing site plans"
            fill
            className="object-cover"
            style={{ opacity: 0.2 }}
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="relative container-main grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <p className="section-label">About Us</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              About VERASTRO INFRA
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              A Division of Verastro Inc. — Building Outdoor Excellence Across Florida, Texas &amp; Arkansas
            </p>
          </div>
          <div data-aos="fade-left" className="hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=75"
              alt="Engineers on a site development project"
              width={520}
              height={300}
              className="rounded-lg object-cover w-full h-56"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="section-padding bg-white" aria-labelledby="about-intro-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-right">
              <p className="section-label">Engineering Precision &amp; Outdoor Purpose</p>
              <h2 id="about-intro-heading" className="section-title">
                Practical solutions for land and outdoor infrastructure.
              </h2>
            </div>
            <div data-aos="fade-left" className="space-y-4 text-sm text-gray-600">
              <p className="leading-relaxed">
                VERASTRO INFRA brings together professional engineering, creative landscaping,
                and site development. Our work includes grading, drainage, sod, turf, pavers,
                hardscape, and outdoor infrastructure.
              </p>
              <p className="leading-relaxed">
                As a locally operated division of Verastro Inc., our engineering and field teams
                evaluate site conditions and project requirements. Engineering precision, compliance,
                safety, quality, and transparency guide that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
        aria-labelledby="core-services-heading"
      >
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=75"
                alt="Professionally landscaped community pathway with pavers"
                width={600}
                height={400}
                className="w-full h-72 object-cover rounded-lg"
                unoptimized
              />
            </div>
            <div data-aos="fade-left">
              <p className="section-label">Our Core Services</p>
              <h2 id="core-services-heading" className="section-title">
                From ground preparation to finishing.
              </h2>
              <ul className="flex flex-col gap-3">
                {siteWorkServices.map((service) => (
                  <li key={service} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <div
                      className="w-1 h-5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-teal)' }}
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white" aria-labelledby="why-choose-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-right">
              <p className="section-label">Why Choose Us</p>
              <h2 id="why-choose-heading" className="section-title">
                A clear, accountable approach.
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Practical principles for how we plan, coordinate, and deliver site solutions.
              </p>
            </div>
            <div data-aos="fade-left" className="flex flex-col gap-6">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex gap-4">
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
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {/* NOTE: This section can be easily removed by commenting out the block below */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
        aria-label="Testimonial"
      >
        <div className="container-main max-w-2xl mx-auto text-center">
          <blockquote data-aos="zoom-in">
            <p className="text-base text-gray-700 leading-relaxed italic mb-5">
              &ldquo;VERASTRO INFRA transformed our community grounds beautifully — the grading,
              sod, and paver work were completed on schedule and with great attention to detail. The team
              was responsive, organized, and professional throughout.&rdquo;
            </p>
            <footer className="text-sm text-gray-500">
              — <cite className="not-italic font-medium text-gray-700">Michael D., HOA Board Member</cite>
            </footer>
          </blockquote>
        </div>
      </section>
      {/* END Testimonial */}

      <CTASection />

      {/* FAQ */}
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
