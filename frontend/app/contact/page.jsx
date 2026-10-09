import { Phone, Mail, Clock } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import LocationCard from '@/components/LocationCard';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import CTASection from '@/components/CTASection';
import { locations } from '@/data/locations';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Contact Us | VERASTRO INFRA',
  description: 'Get in touch with VERASTRO INFRA for engineering and site development. View our headquarters in Delaware and offices in FL, TX, and AR.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | VERASTRO INFRA',
    description: 'Reach out for engineering and site development solutions across FL, TX, DE, and AR.',
    url: '/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact VERASTRO INFRA' }],
  },
  twitter: {
    title: 'Contact Us | VERASTRO INFRA',
    description: 'Get in touch with our team for engineering and site development solutions.',
    images: ['/og-image.jpg'],
  }
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.contactHero}
        alt={visualImages.contactHeroAlt}
        eyebrow="Contact Us"
        title="Get in Touch"
        text="Need help with a site or project? Our team is ready to listen. Whether you are planning land development, site grading, drainage, or outdoor infrastructure, share your requirements with us and we will respond with clear next steps and honest guidance."
      />

      <VisualSplit
        image={visualImages.introLandscape}
        alt={visualImages.introLandscapeAlt}
        eyebrow="Direct Contact"
        title="Talk with VERASTRO INFRA."
        text={<>
          Based in Delaware, serving Florida, Texas, and Arkansas.
          <br />
          Tell us about your project and we'll reply with clear next steps.
        </>}
      >
        <div className="flex flex-col gap-6 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Phone size={16} style={{ color: 'var(--color-teal)' }} />
              <h3 className="text-sm font-semibold" style={{ color: 'var(--color-navy)' }}>Call Us</h3>
            </div>
            <a href="tel:+19043029170" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              (904) 302-9170
            </a>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Mail size={16} style={{ color: 'var(--color-teal)' }} />
              <h3 className="text-sm font-semibold" style={{ color: 'var(--color-navy)' }}>Email Us</h3>
            </div>
            <a href="mailto:inquiries@verastroinfra.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              inquiries@verastroinfra.com
            </a>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Clock size={16} style={{ color: 'var(--color-teal)' }} />
              <h3 className="text-sm font-semibold" style={{ color: 'var(--color-navy)' }}>Response Time</h3>
            </div>
            <p className="text-sm text-gray-600">Our team responds within 24 business hours.</p>
          </div>
        </div>
      </VisualSplit>

      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          <div className="px-6 py-12 md:px-12 lg:px-16 flex flex-col justify-center">
            <p className="section-label">Headquarters</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'var(--color-navy)' }}>
              Middletown, Delaware
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              651 N Broad St, STE 201<br />
              Middletown, DE 19709
            </p>
            <p className="text-xs text-gray-500">A division of Verastro Inc.</p>
          </div>
          <div className="min-h-[320px] md:min-h-[420px] p-4 md:p-8" style={{ backgroundColor: 'var(--color-warm-white)' }}>
            <GoogleMapEmbed />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="offices-heading">
        <div className="container-main">
          <div className="mb-8">
            <p className="section-label">Our Offices</p>
            <h2 id="offices-heading" className="section-title">
              Connect with our team.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to start a project conversation?"
        subtext="Share your requirements with the VERASTRO INFRA team."
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
      />
    </PageLayout>
  );
}
