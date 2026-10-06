import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';
import { locations } from '@/data/locations';

export const metadata = {
  title: 'Request a Consultation | Verastro Infra Projects',
  description: 'Request a consultation for engineering, site development, or investment consulting. Our team responds within 24 business hours.',
  alternates: { canonical: '/consultation' },
  openGraph: {
    title: 'Request a Consultation | Verastro Infra Projects',
    description: 'Share your site details and project requirements for engineering and site development solutions.',
    url: '/consultation',
  },
  twitter: {
    title: 'Request a Consultation | Verastro Infra Projects',
    description: 'Request a consultation for engineering and site development.',
  }
};

export default function ConsultationPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--color-navy)' }}
        aria-label="Consultation page header"
      >
        <div className="container-main">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--color-teal)' }}>
            CONSULTATION
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Request a Consultation</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
            Share your requirements and the service you&rsquo;re interested in.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-white">
        <div className="container-main grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
              TALK TO OUR TEAM
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
              Start with a conversation.
            </h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Our team responds within 24 business hours.
            </p>
            
            <p className="text-base font-semibold mb-4" style={{ color: 'var(--color-navy)' }}>
              (904) 302-9170
            </p>
            <a href="mailto:inquiries@verastroinfra.com" className="text-sm font-medium hover:underline" style={{ color: 'var(--color-teal)' }}>
              inquiries@verastroinfra.com
            </a>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="text-lg font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
                Project inquiry
              </h2>
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* Offices Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-main">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
            OUR OFFICES
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12" style={{ color: 'var(--color-navy)' }}>
            Connect with our team.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((loc) => (
              <div key={loc.id} className="border-t border-gray-200 pt-4">
                <h3 className="text-base font-bold mb-1" style={{ color: 'var(--color-navy)' }}>
                  {loc.state}
                </h3>
                <p className="text-xs font-medium mb-3" style={{ color: 'var(--color-teal)' }}>
                  {loc.city} {loc.label && `· ${loc.label}`}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {loc.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
