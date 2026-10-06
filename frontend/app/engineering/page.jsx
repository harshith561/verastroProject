import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Engineering & Construction Services | VERASTRO INFRA',
  description:
    'From grading and drainage to infrastructure scaling, we provide robust engineering and construction services for residential and commercial projects.',
  alternates: { canonical: '/engineering' },
  openGraph: {
    title: 'Engineering & Construction Services | VERASTRO INFRA',
    description: 'Expert grading, drainage, and infrastructure development across FL, TX, DE, and AR.',
    url: '/engineering',
  },
  twitter: {
    title: 'Engineering & Construction Services | VERASTRO INFRA',
    description: 'Expert grading, drainage, and infrastructure development for residential and commercial projects.',
  }
};

const capabilities = [
  'Site grading',
  'Site preparation',
  'Drainage & erosion control',
  'Quantity takeoffs',
  'Paver / hardscape layouts',
  'Site-development coordination',
  'Turf / sod planning',
  'Layouts & technical documentation'
];

const tools = [
  'AutoCAD Civil 3D',
  'Drone surveys',
  'GIS'
];

const engineeringProcess = [
  {
    step: '01',
    title: 'Assess',
    description: 'Understand the property and requirements.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Develop practical project strategies.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Prepare layouts, documentation and technical support.',
  },
  {
    step: '04',
    title: 'Execute',
    description: 'Coordinate field implementation within approved scopes.',
  },
  {
    step: '05',
    title: 'Deliver',
    description: 'Complete the work with quality control and final coordination.',
  },
];

export default function EngineeringPage() {
  return (
    <PageLayout>
      {/* Split Hero */}
      <section className="relative flex flex-col md:flex-row min-h-[400px]">
        {/* Left Side: Dark Navy Text Area */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24"
          style={{ backgroundColor: 'var(--color-navy)' }}
        >
          <div data-aos="fade-right" className="max-w-xl w-full">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-teal)' }}>
              ENGINEERING
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Engineering &amp; Site Development
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Technical planning and field coordination for practical, well-documented site solutions.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop&q=75"
            alt="Engineering planning"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div data-aos="fade-right" className="lg:col-span-4">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
                TECHNICAL CAPABILITIES
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
                From site conditions to coordinated layouts.
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Site-development support brings together grading, drainage, outdoor layouts, and the documentation needed for field coordination.
              </p>
            </div>

            <div data-aos="fade-left" className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {capabilities.map((cap, index) => (
                  <div key={index} className="flex items-center gap-4 text-sm text-gray-700 py-4 border-b border-gray-100">
                    <div
                      className="w-1.5 h-6 rounded-sm flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-teal)' }}
                    />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Left */}
            <div data-aos="fade-right" className="relative w-full h-[400px]">
              <Image
                src="https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-25766/1781497075108_Team-discussing-cost-and-schedule-predictability-at-construction-site.jpeg"
                alt="Engineers working on site"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Content Right */}
            <div data-aos="fade-left">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
                TOOLS &amp; SITE INFORMATION
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: 'var(--color-navy)' }}>
                Technical insight, grounded in the property.
              </h2>

              <ul className="flex flex-col mb-6">
                {tools.map((tool, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-sm text-gray-700 py-4 border-b border-gray-200"
                  >
                    <div
                      className="w-1.5 h-6 rounded-sm flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-teal)' }}
                    />
                    {tool}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-600">
                Supporting site assessment, planning, documentation, and development coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div data-aos="fade-up" className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
              OUR PROCESS
            </p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-navy)' }}>
              A clear path from assessment to delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative">
            {engineeringProcess.map((step) => (
              <div data-aos="fade-up" data-aos-delay={100} key={step.step} className="flex flex-col border-t border-gray-200 pt-6">
                <span className="text-sm font-bold mb-4" style={{ color: 'var(--color-teal)' }}>
                  {step.step}
                </span>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-navy)' }}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Discuss the technical needs of your site."
        subtext="Share your requirements with the VERASTRO INFRA team."
        ctaLabel="Request a Consultation"
      />
    </PageLayout>
  );
}
