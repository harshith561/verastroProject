import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import LocationCard from '@/components/LocationCard';
import { locations } from '@/data/locations';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Request a Consultation | VERASTRO INFRA',
  description: 'Request a consultation for engineering, site development, or investment consulting. Our team responds within 24 business hours.',
  alternates: { canonical: '/consultation' },
  openGraph: {
    title: 'Request a Consultation | VERASTRO INFRA',
    description: 'Share your site details and project requirements for engineering and site development solutions.',
    url: '/consultation',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Request a Consultation - VERASTRO INFRA' }],
  },
  twitter: {
    title: 'Request a Consultation | VERASTRO INFRA',
    description: 'Request a consultation for engineering and site development.',
    images: ['/og-image.jpg'],
  }
};

export default function ConsultationPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.consultation}
        alt={visualImages.consultationAlt}
        eyebrow="Consultation"
        title="Request a Consultation"
        text="Share your requirements and the service you're interested in."
      />

      <section className="section-padding bg-white">
        <div className="container-main grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div data-aos="fade-right" className="lg:col-span-5">
            <p className="section-label">Talk to Our Team</p>
            <h2 className="section-title">Start with a conversation.</h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Our team responds within 24 business hours. Tell us about the site, the scope, and the outcome you need.
            </p>
            <p className="text-base font-semibold mb-2" style={{ color: 'var(--color-navy)' }}>
              (904) 302-9170
            </p>
            <a href="mailto:inquiries@verastroinfra.com" className="text-sm font-medium hover:underline" style={{ color: 'var(--color-teal)' }}>
              inquiries@verastroinfra.com
            </a>
          </div>

          <div data-aos="fade-left" className="lg:col-span-7">
            <div className="bg-white border border-gray-100 p-6 md:p-8">
              <h2 className="text-lg font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
                Project inquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-main">
          <p className="section-label">Our Offices</p>
          <h2 className="section-title mb-10">Connect with our team.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
