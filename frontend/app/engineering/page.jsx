import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import CTASection from '@/components/CTASection';
import { visualImages } from '@/data/heroSlides';

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
  },
};

const capabilities = [
  'Site grading',
  'Site preparation',
  'Drainage & erosion control',
  'Quantity takeoffs',
  'Paver / hardscape layouts',
  'Site-development coordination',
  'Turf / sod planning',
  'Layouts & technical documentation',
];

const tools = [
  'AutoCAD Civil 3D',
  'Drone surveys',
  'GIS',
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
      <PageHero
        image={visualImages.engineeringHero}
        alt={visualImages.engineeringHeroAlt}
        eyebrow="Engineering"
        title="Engineering & Site Development"
        text="Technical planning and field coordination for practical, well-documented site solutions."
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div data-aos="fade-right" className="lg:col-span-4">
              <p className="section-label">Technical Capabilities</p>
              <h2 className="section-title">From site conditions to coordinated layouts.</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Site-development support brings together grading, drainage, outdoor layouts, and the documentation needed for field coordination.
              </p>
            </div>
            <div data-aos="fade-left" className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-4 text-sm text-gray-700 py-4 border-b border-gray-100">
                    <div className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ backgroundColor: 'var(--color-teal)' }} />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisualSplit
        image={visualImages.engineering}
        alt={visualImages.engineeringAlt}
        eyebrow="Tools & Site Information"
        title="Technical insight, grounded in the property."
        text="Supporting site assessment, planning, documentation, and development coordination."
      >
        <ul className="flex flex-col mb-6">
          {tools.map((tool) => (
            <li key={tool} className="flex items-center gap-4 text-sm text-gray-700 py-4 border-b border-gray-200">
              <div className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ backgroundColor: 'var(--color-teal)' }} />
              {tool}
            </li>
          ))}
        </ul>
      </VisualSplit>

      <VisualSplit
        reverse
        image={visualImages.fieldCoordination}
        alt={visualImages.fieldCoordinationAlt}
        eyebrow="Field Coordination"
        title="Grading, drainage, and development — documented for the field."
        text="Site grading, drainage, erosion control, and development coordination supported by quantity takeoffs, technical documentation, and site-plan coordination."
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          <div data-aos="fade-up" className="mb-12">
            <p className="section-label">Our Process</p>
            <h2 className="section-title">A clear path from assessment to delivery.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {engineeringProcess.map((step) => (
              <div data-aos="fade-up" key={step.step} className="flex flex-col border-t border-gray-200 pt-6">
                <span className="text-sm font-bold mb-4" style={{ color: 'var(--color-teal)' }}>{step.step}</span>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-navy)' }}>{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Discuss the technical needs of your site."
        subtext="Share your requirements with the VERASTRO INFRA team."
        ctaLabel="Request a Consultation"
        backgroundImage={visualImages.infrastructure}
        backgroundAlt=""
      />
    </PageLayout>
  );
}
