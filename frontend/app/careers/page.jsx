import { MapPin, Building, AlertCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import CareerForm from '@/components/CareerForm';
import { closedJobListings, noOpeningsMessage } from '@/data/jobs';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Careers | Verastro Infra',
  description:
    'Careers at Verastro Infra. No current openings. We are not hiring at this time. Please check back for future opportunities.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers | Verastro Infra',
    description:
      'Careers at Verastro Infra. No current openings at this time.',
    url: '/careers',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Careers at Verastro Infra' }],
  },
  twitter: {
    title: 'Careers | Verastro Infra',
    description:
      'Careers at Verastro Infra. No current openings at this time.',
    images: ['/og-image.jpg'],
  },
};

export default function CareersPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.careersHero}
        alt={visualImages.careersHeroAlt}
        eyebrow="Join Our Team"
        title="Careers"
        text="Learn about career opportunities and past openings at Verastro Infra."
      />

      <VisualSplit
        image={visualImages.serviceCoordinationHero}
        alt={visualImages.serviceCoordinationHeroAlt}
        eyebrow="Company Careers"
        title="Dependable teams delivering quality grounds care."
        text="Verastro Infra is a Florida landscaping and property-maintenance business based in Jacksonville, FL. When openings become available, we seek dedicated team members committed to customer communication and quality grounds care."
      />

      {/* Prominent No Current Openings Banner */}
      <section className="bg-amber-50 border-y border-amber-200 py-6" aria-label="Hiring Status">
        <div className="container-main flex items-center gap-3">
          <AlertCircle size={22} className="text-amber-800 flex-shrink-0" />
          <p className="text-sm md:text-base font-semibold text-amber-950">
            {noOpeningsMessage}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="positions-heading">
        <div className="container-main grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Closed Positions Archive */}
          <div className="lg:col-span-7">
            <h2 id="positions-heading" className="section-title mb-2">
              Archived Positions
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              The following positions are archived as closed. We are not accepting applications at this time.
            </p>

            <div className="flex flex-col gap-6">
              {closedJobListings.map((job) => (
                <div data-aos="fade-up" key={job.id} className="card bg-gray-50 border-gray-200">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-[#101A3A]">{job.title}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-200 text-gray-700 uppercase tracking-wider">
                      Status: {job.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} /> {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building size={14} /> On-Site
                    </div>
                  </div>

                  {job.revisionNote && (
                    <div className="mb-4 p-3 rounded bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed font-medium">
                      {job.revisionNote}
                    </div>
                  )}

                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Key Responsibilities
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {job.responsibilities.map((req) => (
                        <li key={req} className="text-sm text-gray-600 flex items-start gap-2">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: 'var(--color-teal)' }}
                          />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Qualifications
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {job.qualifications.map((qual) => (
                        <li key={qual} className="text-sm text-gray-600 flex items-start gap-2">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: 'var(--color-teal)' }}
                          />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / Hiring Notice */}
          <div data-aos="fade-left" className="lg:col-span-5">
            <div
              className="sticky top-24 card border-t-4"
              style={{ borderTopColor: 'var(--color-teal)' }}
            >
              <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-navy)' }}>
                Application Status
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Active applications are currently closed. Inquiries about future hiring may be directed to our team.
              </p>
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
