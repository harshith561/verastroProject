import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import LocationCard from '@/components/LocationCard';
import { locations } from '@/data/locations';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Request a Quote | Verastro Infra',
  description:
    'Request a quote for Florida landscaping, routine grounds care, one-time cleanup, or recurring property maintenance. Our team will contact you to discuss your request.',
  alternates: { canonical: '/consultation' },
  openGraph: {
    title: 'Request a Quote | Verastro Infra',
    description:
      'Share your Florida property details and maintenance requirements. Our team will contact you to discuss your request.',
    url: '/consultation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Request a Quote — Verastro Infra',
      },
    ],
  },
  twitter: {
    title: 'Request a Quote | Verastro Infra',
    description:
      'Request a quote for Florida landscaping and property maintenance.',
    images: ['/og-image.jpg'],
  },
};

export default function ConsultationPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.consultation}
        alt={visualImages.consultationAlt}
        eyebrow="Maintenance Inquiry"
        title="Request a Quote"
        text="Tell us about your Florida property and service requirements. Our team will contact you to discuss your request."
      />

      <section className="section-padding bg-white">
        <div className="container-main grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div data-aos="fade-right" className="lg:col-span-5">
            <p className="section-label">Talk to Our Team</p>
            <h2 className="section-title">Start with a conversation.</h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Tell us about your property grounds, the maintenance scope you need, and your preferred schedule. Our team will contact you to discuss your request.
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
                  Main Office Phone
                </p>
                <a
                  href="tel:+19043029170"
                  className="text-base font-semibold hover:underline"
                  style={{ color: 'var(--color-navy)' }}
                >
                  (904) 302-9170
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
                  Inquiries Mailbox
                </p>
                <a
                  href="mailto:inquries@verastro.com"
                  className="text-sm font-medium hover:underline"
                  style={{ color: 'var(--color-teal)' }}
                >
                  inquries@verastro.com
                </a>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="lg:col-span-7">
            <div className="bg-white border border-gray-100 p-6 md:p-8">
              <h2 className="text-lg font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
                Request a Quote
              </h2>
              <ContactForm submitLabel="Request a Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Office Details */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-main">
          <p className="section-label">Our Office</p>
          <h2 className="section-title mb-10">Florida Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
