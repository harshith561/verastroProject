import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection({
  heading = "Let's discuss your site and project needs.",
  subtext = 'Share your requirements with the VERASTRO INFRA team.',
  ctaLabel = 'Request a Consultation',
  ctaHref = '/consultation',
  id = 'cta-section',
}) {
  return (
    <section
      style={{ backgroundColor: 'var(--color-navy)' }}
      className="section-padding"
      aria-labelledby={id}
    >
      <div className="container-main">
        <div data-aos="zoom-in" className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2
              id={id}
              className="text-xl md:text-2xl font-semibold text-white"
            >
              {heading}
            </h2>
            <p className="text-gray-400 text-sm mt-1">{subtext}</p>
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
