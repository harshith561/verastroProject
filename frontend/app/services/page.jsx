import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Our Services | Site Development & Engineering',
  description:
    'Explore VERASTRO INFRA services: land development, site grading, drainage, subdivision layout, infrastructure development, and property investment consulting across FL, TX, DE, and AR.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services | Site Development & Engineering',
    description: 'Land development, site grading, drainage, landscaping, pavers, and infrastructure coordination.',
    url: '/services',
  },
  twitter: {
    title: 'Our Services | Site Development & Engineering',
    description: 'Explore land development, grading, drainage, and infrastructure services.',
  }
};

const servicesList = [
  {
    title: 'Land Development',
    description: 'Planning communities that balance functionality, aesthetics, and compliance.',
    features: 'Site assessment · Development planning · Community layouts'
  },
  {
    title: 'Subdivision & Plot Layout Design',
    description: 'Efficient lot layout, roadway hierarchy, and open-space planning.',
    features: 'Lot layouts · Roadway hierarchy · Open-space planning'
  },
  {
    title: 'Infrastructure Development',
    description: 'Roads, drainage, water, sewer, power and related infrastructure coordination.',
    features: 'Roads · Drainage · Water & sewer · Power coordination'
  },
  {
    title: 'Property Investment Consulting',
    description: 'Site selection, feasibility and development-oriented investment support.',
    features: 'Site selection · Feasibility · Development-oriented support'
  },
  {
    title: 'Site Development & Utilities',
    description: 'Clearing, grading, underground utilities, curb & gutter and paving coordination.',
    features: 'Site preparation · Grading · Utilities · Curb & gutter · Paving'
  },
  {
    title: 'Project Management & Support',
    description: 'Permitting, scheduling, vendor coordination, cost control and project support.',
    features: 'Permitting · Scheduling · Vendor coordination · Cost control'
  }
];

const siteWorkItems = [
  'Landscape maintenance & grounds care',
  'Site grading, leveling & preparation',
  'Drainage & erosion control',
  'Sod installation & turf renovation',
  'Paver & hardscape installation',
  'Utilities & development coordination',
  'Quantity takeoffs & technical support'
];

export default function ServicesPage() {
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
              What We Do
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Engineering, land development, sitework, and outdoor infrastructure support.
            </p>
          </div>
        </div>
        
        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=75"
            alt="Site development in progress"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding bg-white" aria-labelledby="main-services-heading">
        <div className="container-main">
          <div data-aos="fade-up" className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
              FROM PLANNING TO PROJECT SUPPORT
            </p>
            <h2 id="main-services-heading" className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-navy)' }}>
              Services shaped around your site.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {servicesList.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 80} className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-1 mb-6" style={{ backgroundColor: 'var(--color-teal)' }} />
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-navy)' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <p className="text-xs font-medium" style={{ color: 'var(--color-teal)' }}>
                  {service.features}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Work Services (Image Left, List Right) */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
        aria-labelledby="sitework-services-heading"
      >
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Left */}
            <div data-aos="fade-right" className="relative w-full h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=75"
                alt="Landscaped walkway"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            
            {/* List Right */}
            <div data-aos="fade-left">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
                LANDSCAPING &amp; FIELD COORDINATION
              </p>
              <h2 id="sitework-services-heading" className="text-2xl md:text-3xl font-bold mb-8" style={{ color: 'var(--color-navy)' }}>
                Practical work, above and below ground.
              </h2>
              
              <ul className="flex flex-col">
                {siteWorkItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-4 text-sm text-gray-700 py-4 border-b border-gray-200 last:border-0"
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
          </div>
        </div>
      </section>

      <CTASection 
        heading="Tell us what your project needs."
        subtext="Share your requirements with the VERASTRO INFRA team."
        ctaLabel="Request a Consultation"
      />
    </PageLayout>
  );
}
