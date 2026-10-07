import { MapPin, Building } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import CareerForm from '@/components/CareerForm';
import { jobListings } from '@/data/jobs';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Careers | Join VERASTRO INFRA',
  description:
    'Join VERASTRO INFRA. We are hiring civil engineers, heavy equipment operators, surveyors, and project managers in FL, TX, DE, and AR.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers | VERASTRO INFRA',
    description: 'Build your career in civil engineering, site development, and infrastructure.',
    url: '/careers',
  },
  twitter: {
    title: 'Careers | Join VERASTRO INFRA',
    description: 'We are hiring civil engineers, heavy equipment operators, surveyors, and project managers.',
  }
};

export default function CareersPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.careersHero}
        alt={visualImages.careersHeroAlt}
        eyebrow="Join Our Team"
        title="Careers"
        text="We are looking for dedicated professionals in civil engineering, project management, and site development to join our growing team."
      />

      <VisualSplit
        image={visualImages.fieldCoordination}
        alt={visualImages.fieldCoordinationAlt}
        eyebrow="Work With Us"
        title="Build outdoor environments that last."
        text="Join a team that coordinates engineering, field execution, and outdoor infrastructure across Florida, Texas, Delaware, and Arkansas."
      />

      <section className="section-padding bg-white" aria-labelledby="open-positions-heading">
        <div className="container-main grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 id="open-positions-heading" className="section-title mb-8">Open Positions</h2>
            <div className="flex flex-col gap-6">
              {jobListings.map((job) => (
                <div data-aos="fade-up" key={job.id} className="card">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--color-navy)' }}>
                      {job.title}
                    </h3>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded"
                      style={{ backgroundColor: 'rgba(32,185,173,0.1)', color: 'var(--color-teal)' }}
                    >
                      {job.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} /> {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building size={14} /> {job.onSite && !job.remote ? 'On-Site' : job.remote && !job.onSite ? 'Remote' : 'Hybrid / Remote Options'}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Responsibilities</h4>
                    <ul className="flex flex-col gap-1.5">
                      {job.responsibilities.map((req) => (
                        <li key={req} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-teal)' }} />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Qualifications</h4>
                    <ul className="flex flex-col gap-1.5">
                      {job.qualifications.map((qual) => (
                        <li key={qual} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-teal)' }} />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" className="lg:col-span-5">
            <div className="sticky top-24 card border-t-4" style={{ borderTopColor: 'var(--color-teal)' }}>
              <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-navy)' }}>Apply Now</h2>
              <p className="text-sm text-gray-600 mb-6">
                Submit your resume and cover message below. Our hiring team will review your application and contact you if there is a fit.
              </p>
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
