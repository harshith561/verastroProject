import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CTASection({
  heading = "Let's discuss your site and project needs.",
  subtext = 'Share your requirements with the VERASTRO INFRA team.',
  ctaLabel = 'Request a Consultation',
  ctaHref = '/consultation',
  id = 'cta-section',
  backgroundImage,
  backgroundAlt = '',
}) {
  return (
    <section
      style={{ backgroundColor: 'var(--color-navy)' }}
      className="section-padding relative isolate overflow-hidden"
      aria-labelledby={id}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            sizes="100vw"
            unoptimized
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[rgba(16,26,58,0.62)]" />
        </>
      )}
      <div className="container-main relative z-10">
        <div data-aos="zoom-in" className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2
              id={id}
              className="text-xl md:text-2xl font-semibold text-white"
            >
              {heading}
            </h2>
            <p className="text-gray-300 text-sm mt-1">{subtext}</p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href={ctaHref}
              className="btn-primary whitespace-nowrap"
              id={`${id}-link`}
            >
              {ctaLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
