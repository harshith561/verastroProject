import Link from 'next/link';
import { ArrowRight, Calendar, CheckCircle2, MessageSquare, FileCheck2, ClipboardList } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import CTASection from '@/components/CTASection';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Service Coordination & Support | Verastro Infra',
  description:
    'Service Coordination & Support for routine grounds maintenance: confirming scopes, coordinating schedules, and maintaining clear customer communications.',
  alternates: { canonical: '/service-coordination' },
  openGraph: {
    title: 'Service Coordination & Support | Verastro Infra',
    description:
      'Confirming maintenance requirements, scheduling services, communicating updates, and maintaining service records in Florida.',
    url: '/service-coordination',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Verastro Infra Service Coordination' }],
  },
  twitter: {
    title: 'Service Coordination & Support | Verastro Infra',
    description:
      'Confirming maintenance requirements, scheduling services, communicating updates, and maintaining service records.',
    images: ['/og-image.jpg'],
  },
};

const supportActivities = [
  {
    icon: ClipboardList,
    title: 'Confirming Maintenance Requirements',
    description:
      'We review your grounds layout, property size, and specific service preferences to confirm exact maintenance tasks before work begins.',
  },
  {
    icon: Calendar,
    title: 'Coordinating Schedules',
    description:
      'We establish reliable service windows for one-time cleanups and recurring maintenance visits, minimizing disruption to your daily routine.',
  },
  {
    icon: MessageSquare,
    title: 'Communicating Service Updates',
    description:
      'We provide timely notifications ahead of scheduled visits and prompt follow-up communications regarding completed tasks and property observations.',
  },
  {
    icon: FileCheck2,
    title: 'Clarifying Service Scope',
    description:
      'We maintain clear, written service expectations that outline included tasks so clients always know what to expect from our grounds care team.',
  },
  {
    icon: CheckCircle2,
    title: 'Maintaining Relevant Service Records',
    description:
      'We keep organized records of service visits, confirmed tasks, and customer preferences to ensure consistent quality visit after visit.',
  },
];

const coordinationProcess = [
  {
    step: '01',
    title: 'Share Requirements',
    description:
      'Contact our team with your property address, grounds details, and the maintenance services you need.',
  },
  {
    step: '02',
    title: 'Confirm Scope',
    description:
      'We review your requirements, clarify all included tasks, and agree upon service frequencies and transparent pricing.',
  },
  {
    step: '03',
    title: 'Schedule Service',
    description:
      'Our coordination team places your property on our maintenance calendar and assigns our grounds care professionals.',
  },
  {
    step: '04',
    title: 'Receive Updates',
    description:
      'Enjoy dependable grounds care with proactive visit notifications, ongoing communication, and responsive support.',
  },
];

export default function ServiceCoordinationPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.serviceCoordinationHero}
        alt={visualImages.serviceCoordinationHeroAlt}
        eyebrow="Customer Support"
        title="Service Coordination & Support"
        text="Reliable scheduling, clear maintenance scopes, and responsive communication for Florida properties."
      />

      {/* Intro Context */}
      <section className="bg-white" aria-labelledby="coordination-intro-heading">
        <VisualSplit
          image={visualImages.aboutMessage}
          alt={visualImages.aboutMessageAlt}
          eyebrow="Clear Scope & Open Communication"
          title="Organized grounds care from start to finish."
          text="At Verastro Infra, effective service coordination is central to our grounds maintenance. We believe property owners and managers deserve complete clarity regarding what work will be done, when our team will arrive, and how services are carried out. Our coordination team bridges customer requirements with reliable field execution."
          ctaLabel="Request a Quote"
          ctaHref="/consultation"
        />
      </section>

      {/* Approved Support Activities */}
      <section className="section-padding bg-white" aria-labelledby="activities-heading">
        <div className="container-main mb-12">
          <p className="section-label">Support Activities</p>
          <h2 id="activities-heading" className="section-title">
            How we coordinate your service.
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mt-2">
            Every step is designed to keep grounds maintenance transparent, organized, and dependable.
          </p>
        </div>

        <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportActivities.map((act) => {
            const IconComponent = act.icon;
            return (
              <div
                key={act.title}
                data-aos="fade-up"
                className="p-6 bg-white border border-gray-100 hover:border-gray-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-teal-50 flex items-center justify-center mb-4 text-[#20B9AD]">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#101A3A] mb-2">{act.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{act.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Four-Step Process */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
        aria-labelledby="process-heading"
      >
        <div className="container-main mb-12">
          <p className="section-label">Service Workflow</p>
          <h2 id="process-heading" className="section-title">
            A straightforward coordination process.
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mt-2">
            Simple, reliable, and organized — from your first inquiry to routine maintenance delivery.
          </p>
        </div>

        <div className="container-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coordinationProcess.map((step) => (
            <div
              key={step.step}
              data-aos="fade-up"
              className="p-6 bg-white border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-extrabold tracking-widest text-[#20B9AD] block mb-2">
                  STEP {step.step}
                </span>
                <h3 className="text-base font-bold text-[#101A3A] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Connect with our coordination team."
        subtext="Tell us about your Florida property and let's establish a clear maintenance plan."
        ctaLabel="Request a Quote"
        ctaHref="/consultation"
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
      />
    </PageLayout>
  );
}
