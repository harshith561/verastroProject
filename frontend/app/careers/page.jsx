import Link from 'next/link';
import { AlertCircle, Clock, MapPin, ShieldCheck, Mail } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { noOpeningsMessage } from '@/data/jobs';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Careers | Verastro Infra',
  description:
    'Careers at Verastro Infra. Commercial grounds care and property maintenance in Jacksonville, FL. No current openings. We are not hiring at this time. Please check back for future opportunities.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers | Verastro Infra',
    description:
      'Careers at Verastro Infra. Commercial grounds care and property maintenance in Jacksonville, FL. No current openings at this time.',
    url: '/careers',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Careers at Verastro Infra' }],
  },
  twitter: {
    title: 'Careers | Verastro Infra',
    description:
      'Careers at Verastro Infra. Commercial grounds care and property maintenance in Jacksonville, FL. No current openings at this time.',
    images: ['/og-image.jpg'],
  },
};

export default function CareersPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.careersHero}
        alt={visualImages.careersHeroAlt}
        eyebrow="Verastro Infra"
        title="Careers"
        text={noOpeningsMessage}
      />

      {/* Prominent No Current Openings Notice */}
      <section className="bg-amber-50 border-y border-amber-200 py-6" aria-label="Hiring Status Banner">
        <div className="container-main flex items-center gap-3">
          <AlertCircle size={24} className="text-amber-800 flex-shrink-0" />
          <p className="text-sm md:text-base font-semibold text-amber-950">
            {noOpeningsMessage}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-white" aria-labelledby="careers-status-heading">
        <div className="container-main max-w-4xl mx-auto">
          <div data-aos="fade-up" className="card border border-gray-200 shadow-sm p-8 md:p-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 uppercase tracking-wider">
                <Clock size={13} className="text-gray-500" />
                Hiring Status: Closed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 uppercase tracking-wider">
                <MapPin size={13} className="text-teal-600" />
                Jacksonville, FL
              </span>
            </div>

            <h2 id="careers-status-heading" className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
              Careers at Verastro Infra
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Thank you for your interest in Verastro Infra. We are a Florida commercial landscaping and property maintenance provider operating from Jacksonville, FL. We are currently not hiring, and there are no open positions available at this time.
            </p>

            <div className="rounded-lg bg-gray-50 border border-gray-200 p-6 mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Hiring &amp; Application Policy
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All previous roles have been closed, and we do not maintain an active open application queue or general résumé collection while no positions are open. Any future recruitment opportunities will be published directly on this page when hiring reopens.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  General Company Inquiries
                </h4>
                <p className="text-xs text-gray-500">
                  For grounds care quotes, service coordination, or commercial property maintenance inquiries, please contact our main office.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-outline text-sm shrink-0 whitespace-nowrap"
                id="careers-contact-link"
              >
                Contact Main Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

