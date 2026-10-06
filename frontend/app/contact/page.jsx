import PageLayout from '@/components/PageLayout';
import { locations } from '@/data/locations';
import { Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | VERASTRO INFRA',
  description: 'Get in touch with VERASTRO INFRA for engineering and site development. View our headquarters in Delaware and offices in FL, TX, and AR.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | VERASTRO INFRA',
    description: 'Reach out for engineering and site development solutions across FL, TX, DE, and AR.',
    url: '/contact',
  },
  twitter: {
    title: 'Contact Us | VERASTRO INFRA',
    description: 'Get in touch with our team for engineering and site development solutions.',
  }
};

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--color-navy)' }}
        aria-label="Contact page header"
      >
        <div data-aos="fade-up" className="container-main text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--color-teal)' }}>
            CONTACT US
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Need immediate assistance? Reach out to our team directly.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-navy)' }}>
                Direct Contact
              </h2>
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(32,185,173,0.1)' }}>
                    <Phone size={18} style={{ color: 'var(--color-teal)' }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-navy)' }}>Call Us</h3>
                    <a href="tel:+19043029170" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      (904) 302-9170
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(32,185,173,0.1)' }}>
                    <Mail size={18} style={{ color: 'var(--color-teal)' }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-navy)' }}>Email Us</h3>
                    <a href="mailto:inquiries@verastroinfra.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      inquiries@verastroinfra.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(32,185,173,0.1)' }}>
                    <Clock size={18} style={{ color: 'var(--color-teal)' }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-navy)' }}>Response Time</h3>
                    <p className="text-sm text-gray-600">Our team responds within 24 business hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-navy)' }}>
                Headquarters
              </h2>
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-sm">
                <h3 className="text-base font-bold mb-3" style={{ color: 'var(--color-navy)' }}>
                  VERASTRO INFRA
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  651 N Broad St, STE 201<br />
                  Middletown, DE 19709
                </p>
                <p className="text-xs text-gray-500">
                  A division of Verastro Inc.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Offices Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-main">
          <p data-aos="fade-up" className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
            OUR OFFICES
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12" style={{ color: 'var(--color-navy)' }}>
            Connect with our team.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((loc) => (
              <div key={loc.id} data-aos="fade-up" data-aos-delay={100} className="border-t border-gray-200 pt-4">
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
