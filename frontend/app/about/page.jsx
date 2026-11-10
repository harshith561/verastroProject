import { CheckCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import CTASection from '@/components/CTASection';
import { visualImages } from '@/data/heroSlides';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verastroinfra.com';

export const metadata = {
  title: 'About Verastro Infra | Jacksonville FL Grounds Care',
  description:
    'Learn about Verastro Infra, a division of Verastro Inc. based in Jacksonville, FL. We provide reliable grounds care and property upkeep for Florida clients.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Verastro Infra | Jacksonville FL Grounds Care',
    description:
      'A division of Verastro Inc., based in Jacksonville, Florida. Learn about who we are and how we work with customers.',
    url: '/about',
    images: [{ url: '/og-image.png', width: 500, height: 500, alt: 'About Verastro Infra' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Verastro Infra | Jacksonville FL Grounds Care',
    description:
      'A division of Verastro Inc., based in Jacksonville, Florida.',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About Us',
      item: `${siteUrl}/about`,
    },
  ],
};

const customerApproach = [
  {
    title: 'Agreed Responsibilities',
    description:
      'Before work begins, we explain what is included, what is excluded, and what information or access we need from you.',
  },
  {
    title: 'Follow-Through',
    description:
      'We work to the agreed schedule and notify you when a change affects your service.',
  },
  {
    title: 'A Point of Contact',
    description:
      'Our team handles questions, shares updates, and helps resolve service concerns.',
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <PageHero
        image={visualImages.aboutHero}
        alt={visualImages.aboutHeroAlt}
        eyebrow="About Us"
        title="About Verastro Infra"
        text="A division of Verastro Inc., based in Jacksonville, Florida."
      />



      {/* Who We Are (Introduction Section) */}
      <section className="bg-white" aria-labelledby="about-intro-heading">
        <VisualSplit
          image={visualImages.aboutMessage}
          alt={visualImages.aboutMessageAlt}
          eyebrow="Company Overview"
          title="Who We Are"
          text="Verastro Infra is the division of Verastro Inc. through which customers discuss their property and project requirements. Based in Jacksonville, Florida, we focus on understanding the requested work, defining responsibilities, and keeping customers informed throughout the engagement."
        />
      </section>

      {/* How We Work With Customers (Approach Section) */}
      <section className="bg-slate-50 border-t border-gray-100" aria-labelledby="approach-heading">
        <VisualSplit
          reverse
          image={visualImages.aboutApproach}
          alt={visualImages.aboutApproachAlt}
          eyebrow="Our Approach"
          title="How We Work With Customers"
          text="We set expectations at the start and communicate when something changes."
        >
          <div className="flex flex-col gap-5 mt-4">
            {customerApproach.map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-teal)' }}
                />
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-navy)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </VisualSplit>
      </section>

      {/* Closing CTA */}
      <CTASection
        backgroundImage={visualImages.golfCourse}
        backgroundAlt=""
        heading="Discuss Your Property Requirements"
        subtext="Tell us what you need, and our team will respond to discuss scope, scheduling, and next steps."
        ctaLabel="Request a Quote"
        ctaHref="/consultation"
      />
    </PageLayout>
  );
}
