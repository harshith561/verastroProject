import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Property & Infrastructure Investments | Verastro Infra',
  description:
    'Property and infrastructure investment consulting. We provide site selection and development feasibility support for investors and developers across FL, TX, DE, and AR.',
  alternates: { canonical: '/investments' },
  openGraph: {
    title: 'Property & Infrastructure Investments | Verastro Infra Projects',
    description: 'Infrastructure and property investment consulting across FL, TX, DE, and AR.',
    url: '/investments',
  },
  twitter: {
    title: 'Property & Infrastructure Investments | Verastro Infra',
    description: 'Infrastructure and property investment consulting and feasibility support.',
  }
};

const investmentTypes = [
  {
    title: 'Commercial Investments',
    description: 'Site selection, feasibility, and development-oriented support for commercial properties and infrastructure.',
  },
  {
    title: 'Residential Investments',
    description: 'Land planning, subdivision layouts, and outdoor infrastructure support for residential development.',
  },
  {
    title: 'Asset-Backed Projects',
    description: 'Project assessment and site-development coordination for investor-backed real estate and infrastructure.',
  },
];

const guidanceList = [
  'Site selection & feasibility',
  'Land and infrastructure planning',
  'Development coordination & project support'
];

export default function InvestmentsPage() {
  return (
    <PageLayout>
      {/* Split Hero */}
      <section className="relative flex flex-col md:flex-row min-h-[400px]">
        {/* Left Side: Dark Navy Text Area */}
        <div 
          className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24"
          style={{ backgroundColor: 'var(--color-navy)' }}
        >
          <div className="max-w-xl w-full">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-teal)' }}>
              INVESTMENTS
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Property &amp; Infrastructure Investment Support
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Development-oriented consultation for commercial, residential, and asset-backed projects.
            </p>
          </div>
        </div>
        
        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=75"
            alt="Infrastructure development project"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
                BUILD, DEVELOP, AND GROW
              </p>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-navy)' }}>
                Start with the property. Plan for the project.
              </h2>
            </div>
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                We blend engineering expertise, landscape craftsmanship, and smart development planning to turn spaces into long-term assets.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Multi-state operations across Florida, Texas, and Arkansas, with headquarters in Delaware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development support cards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-main">
          <h2 className="text-2xl font-bold mb-10" style={{ color: 'var(--color-navy)' }}>
            Development support across property types.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investmentTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <div className="w-8 h-1 mb-6" style={{ backgroundColor: 'var(--color-teal)' }} />
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
                  {type.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split information section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-12">
            
            {/* Left Col */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
                INVESTOR CONSULTATION
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: 'var(--color-navy)' }}>
                Practical guidance for development decisions.
              </h2>
              
              <ul className="flex flex-col">
                {guidanceList.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-4 text-sm text-gray-700 py-4 border-b border-gray-100 last:border-0"
                  >
                    <div
                      className="w-1.5 h-6 rounded-sm flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-teal)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Col */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
                EB-5 - INFORMATIONAL GUIDANCE ONLY
              </p>
              <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
                Understand the information. Consult qualified advisors.
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Verastro Infra Projects provides informational guidance on real-estate investment and EB-5-compliant opportunities. Such information is educational only and does not constitute financial, legal, or immigration advice.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Users should consult qualified advisors before making investment or visa-related decisions. We make no representations regarding profitability, approval timelines, or outcomes.
              </p>
            </div>
            
          </div>

          {/* Important Information Banner */}
          <div className="bg-gray-50 border border-gray-200 p-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-800 mb-2">IMPORTANT INFORMATION</h4>
            <p className="text-sm text-gray-600">
              Nothing on this Site constitutes a binding offer, guarantee, or professional advice. Formal terms are defined only in executed written agreements between you and Verastro Infra Projects.
            </p>
          </div>
        </div>
      </section>

      <CTASection 
        heading="Discuss your property and development goals."
        subtext="Share your requirements with the Verastro Infra Projects team."
        ctaLabel="Talk to Our Team"
      />
    </PageLayout>
  );
}
