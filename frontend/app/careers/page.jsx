import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import CareerForm from '@/components/CareerForm';
import { jobListings } from '@/data/jobs';
import { MapPin, Briefcase, Building } from 'lucide-react';

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
      <section
        className="py-16 md:py-20 relative"
        style={{ backgroundColor: 'var(--color-navy)' }}
        aria-label="Careers page header"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop&q=75"
            alt="Engineering team collaboration"
            fill
            className="object-cover"
            style={{ opacity: 0.2 }}
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        <div data-aos="fade-up" className="relative container-main">
          <p className="section-label">Join Our Team</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">Careers</h1>
          <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
            We are looking for dedicated professionals in civil engineering, project management, and site development to join our growing team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="open-positions-heading">
        <div className="container-main grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Job Listings Column */}
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
                      {job.responsibilities.map((req, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-teal)' }} />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Qualifications</h4>
                    <ul className="flex flex-col gap-1.5">
                      {job.qualifications.map((qual, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
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

          {/* Application Form Column */}
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
