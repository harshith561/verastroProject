import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle, ArrowLeft, Building, MapPin, XCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { closedJobListings, noOpeningsMessage } from '@/data/jobs';
import { visualImages } from '@/data/heroSlides';

// Generate static params for the 4 archived roles
export function generateStaticParams() {
  return closedJobListings.map((job) => ({
    slug: job.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = closedJobListings.find((j) => j.id === slug);

  if (!job) {
    return {
      title: 'Job Not Found | Verastro Infra',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${job.title} (Closed) | Verastro Infra Careers`,
    description: `Archived job record: ${job.title} at Verastro Infra (Jacksonville, FL). Status: Closed. We are not hiring at this time.`,
    robots: {
      index: false,
      follow: false,
    },
    alternates: { canonical: `/careers/${job.id}` },
  };
}

export default async function ArchivedJobPage({ params }) {
  const { slug } = await params;
  const job = closedJobListings.find((j) => j.id === slug);

  if (!job) {
    notFound();
  }

  return (
    <PageLayout>
      <PageHero
        image={visualImages.careersHero}
        alt={visualImages.careersHeroAlt}
        eyebrow="Archived Position"
        title={job.title}
        text={`Status: ${job.status} — ${noOpeningsMessage}`}
      />

      {/* Prominent CLOSED Notice Banner */}
      <section className="bg-red-50 border-y border-red-200 py-6" aria-label="Closed Job Notice">
        <div className="container-main flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <XCircle size={24} className="text-red-700 flex-shrink-0" />
            <div>
              <p className="text-sm md:text-base font-bold text-red-950">
                Position Status: CLOSED
              </p>
              <p className="text-xs md:text-sm text-red-800">
                This position is closed and applications are not accepted. {noOpeningsMessage}
              </p>
            </div>
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-900 hover:text-red-950 underline shrink-0"
          >
            <ArrowLeft size={14} />
            Back to Careers
          </Link>
        </div>
      </section>

      {/* Job Details Record */}
      <section className="section-padding bg-white" aria-labelledby="job-record-heading">
        <div className="container-main max-w-4xl mx-auto">
          <div className="card bg-gray-50 border-gray-200 p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h2 id="job-record-heading" className="text-2xl font-bold text-[#101A3A]">
                {job.title}
              </h2>
              <span className="text-xs font-bold px-3 py-1.5 rounded bg-red-100 text-red-800 uppercase tracking-wider">
                Status: {job.status}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-6">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-teal-600" /> {job.location}
              </div>
              <div className="flex items-center gap-1.5">
                <Building size={14} className="text-teal-600" /> On-Site
              </div>
            </div>

            {/* Flag Note for Civil Engineer – PE */}
            {job.revisionNote && (
              <div className="mb-6 p-4 rounded bg-amber-50 border border-amber-200 flex items-start gap-3">
                <AlertCircle size={18} className="text-amber-800 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-amber-900 leading-relaxed font-medium">
                  {job.revisionNote}
                </p>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Archived Role Description
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Key Responsibilities (Archived)
              </h3>
              <ul className="flex flex-col gap-2">
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

            <div className="mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Qualifications (Archived)
              </h3>
              <ul className="flex flex-col gap-2">
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

            <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-center sm:text-left">
              <p className="text-xs text-gray-600">
                <strong>Notice:</strong> Applications are disabled and closed for this position. Do not submit résumés or applications. For general commercial service inquiries, please visit our{' '}
                <Link href="/contact" className="text-teal-700 font-semibold hover:underline">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
