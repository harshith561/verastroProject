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
  },
};

export default function HomePage() {
  return (
    <PageLayout>
      <div className="-mt-16">
        <HeroSlideshow />
      </div>

      <section className="bg-white" aria-labelledby="intro-heading">
        <VisualSplit
          image={visualImages.introLandscape}
          alt={visualImages.introLandscapeAlt}
          eyebrow="Practical Expertise & Clear Communication"
          title="Your Local Partner for Smart, Scalable Site Solutions"
          text="VERASTRO INFRA is a locally operated division of Verastro Inc. Our engineering and field teams evaluate site conditions and project requirements to provide data-driven recommendations, clear communication, and transparent pricing. From initial site assessments to project completion, we coordinate every phase with professional precision — keeping clients informed and projects on track."
          ctaLabel="More About Our Company"
          ctaHref="/about"
        />
      </section>

      <FullBleedVisual
        image={visualImages.golfCourse}
        alt={visualImages.golfCourseAlt}
        eyebrow="Landscaping & Outdoor Environments"
        title="Outdoor spaces designed for performance."
        text="Golf-course imagery reflects the standard of turf, grading, and grounds care we bring to outdoor work — landscaping, sod, drainage, and finished environments shaped around how a property is used."
        ctaLabel="Explore Landscaping"
        ctaHref="/services"
      />

      {/* Services gallery */}
      <section aria-labelledby="services-heading" className="bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-8 md:pb-10 text-center lg:text-left">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#20B9AD]">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="text-2xl md:text-3xl font-semibold leading-tight mb-3 text-[#101A3A]"
          >
            Site solutions, from planning to delivery.
          </h2>
          <p className="text-sm text-gray-600 max-w-full mx-auto lg:mx-0">
            Engineering, land development, and outdoor infrastructure support — presented as a visual walk through the work.
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

      <section className="section-padding bg-white" aria-labelledby="landscaping-heading">
        <div className="container-main mb-10">
          <p className="section-label">Landscaping & Outdoor Work</p>
          <h2 id="landscaping-heading" className="section-title">
            Well-planned grounds. Functional outdoor spaces.
          </h2>
        </div>
        <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {landscapingVisuals.map((item) => (
            <article key={item.title} data-aos="fade-up" className="group overflow-hidden bg-white border border-gray-100">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
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
          <Link href="/services" className="btn-outline" id="home-sitework-link">
            View Services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <VisualSplit
        reverse
        image={visualImages.engineering}
        alt={visualImages.engineeringAlt}
        eyebrow="Engineering & Site Development"
        title="Technical planning for practical fieldwork."
        text="Site grading, drainage, erosion control, and development coordination — supported by quantity takeoffs, technical documentation, and site-plan coordination. Tools include AutoCAD Civil 3D, drone surveys, and GIS."
        ctaLabel="Explore Engineering"
        ctaHref="/engineering"
      />

      <VisualSplit
        image={visualImages.infrastructure}
        alt={visualImages.infrastructureAlt}
        eyebrow="Infrastructure & Development"
        title="From land planning to coordinated delivery."
        text="Roads, drainage, utilities, and site preparation brought together through practical development coordination — from planning through field execution within approved scopes."
        ctaLabel="Explore Services"
        ctaHref="/services"
      />

      <FullBleedVisual
        image={visualImages.investment}
        alt={visualImages.investmentAlt}
        eyebrow="Property & Infrastructure"
        title="Build, Develop, and Grow — With VERASTRO INFRA"
        text="We blend engineering expertise, landscape craftsmanship, and smart development planning to turn spaces into long-term assets. The portfolio may include sod installation, drainage, paver systems for community projects, commercial developments, and investor-backed infrastructure."
        ctaLabel="Explore Investments"
        ctaHref="/investments"
      />

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

      <CTASection
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
        heading="Let's discuss your site and project needs."
        subtext="Share your requirements with the VERASTRO INFRA team."
      />
    </PageLayout>
  );
}