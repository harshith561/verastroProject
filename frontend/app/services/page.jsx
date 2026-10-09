import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import CTASection from '@/components/CTASection';
import { mainServices, landscapingVisuals } from '@/data/services';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Our Services | Site Development & Engineering',
  description:
    'Explore VERASTRO INFRA services: land development, site grading, drainage, subdivision layout, infrastructure development, and property investment consulting across FL, TX, DE, and AR.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services | Site Development & Engineering',
    description: 'Land development, site grading, drainage, landscaping, pavers, and infrastructure coordination.',
    url: '/services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'VERASTRO INFRA Services' }],
  },
  twitter: {
    title: 'Our Services | Site Development & Engineering',
    description: 'Explore land development, grading, drainage, and infrastructure services.',
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
        text="Engineering, land development, sitework, and outdoor infrastructure support."
      />

      <section aria-labelledby="main-services-heading">
        <div className="container-main section-padding pb-6">
          <p className="section-label">From Planning to Project Support</p>
          <h2 id="main-services-heading" className="section-title">
            Services shaped around your site.
          </h2>
        </div>
        {mainServices.map((service, index) => (
          <VisualSplit
            key={service.id}
            reverse={index % 2 === 1}
            image={service.image}
            alt={service.imageAlt}
            title={service.title}
            text={`${service.shortDescription} ${service.features.join(' · ')}.`}
            ctaLabel="Request a Consultation"
            ctaHref="/consultation"
            headingAs="h3"
          />
        ))}
      </section>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
        aria-labelledby="sitework-services-heading"
      >
        <div className="container-main mb-10">
          <p className="section-label">Landscaping & Field Coordination</p>
          <h2 id="sitework-services-heading" className="section-title">
            Practical work, above and below ground.
          </h2>
        </div>
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-6">
          {landscapingVisuals.map((item) => (
            <article key={item.title} data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden bg-white">
              <div className="relative min-h-[200px] group overflow-hidden">
                <Image src={item.image} alt={item.imageAlt} fill sizes="50vw" unoptimized className="object-cover img-zoom-hover" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--color-navy)' }}>{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        heading="Tell us what your project needs."
        subtext="Share your requirements with the VERASTRO INFRA team."
        ctaLabel="Request a Consultation"
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
      />
    </PageLayout>
  );
}
