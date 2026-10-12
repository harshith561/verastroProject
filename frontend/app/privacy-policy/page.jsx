import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Privacy Policy | Verastro Infra',
  description:
    'Privacy Policy for Verastro Infra, explaining how we collect, use, and protect your information for landscaping and property maintenance inquiries.',
  alternates: { canonical: '/privacy-policy' },
};

const navigation = [
  { id: 'who-we-are', label: '1. Who We Are' },
  { id: 'information-we-collect', label: '2. Information We Collect' },
  { id: 'how-we-use-information', label: '3. How We Use Your Information' },
  { id: 'legal-basis', label: '4. Legal Basis for Processing' },
  { id: 'information-sharing', label: '5. Information Sharing and Disclosure' },
  { id: 'data-retention', label: '6. Data Retention' },
  { id: 'cookies', label: '7. Cookies and Technical Information' },
  { id: 'your-rights', label: '8. Your Rights' },
  { id: 'data-security', label: '9. Data Security' },
  { id: 'updates', label: '10. Updates to This Policy' },
  { id: 'contact-us', label: '11. Contact Us' },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="-mt-16 pt-28 pb-12 md:pb-16" style={{ backgroundColor: 'var(--color-navy)' }}>
        <div className="container-main">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
            LEGAL
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Last Updated: October 12, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-main grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--color-teal)' }}>
                ON THIS PAGE
              </p>
              <ul className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Policy Text */}
          <div className="lg:col-span-9 prose prose-sm sm:prose-base max-w-none text-gray-700">
            <p className="mb-8 leading-relaxed">
              Verastro Infra (“Verastro Infra,” “we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you share with us.
              This Privacy Policy explains how we collect, use, disclose, and protect information when you visit <strong>verastroinfra.com</strong>, request a maintenance quote, or communicate with our team.
              By accessing or using this website, you acknowledge the practices described in this Policy.
            </p>

            <h2 id="who-we-are" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              1. Who We Are
            </h2>
            <p className="mb-4">
              Verastro Infra is a Florida landscaping and property-maintenance company operating as a division of Verastro Inc.
              Our Main Office is located at 10151 Deerwood Park Blvd, Building 200, Suite 250, Jacksonville, FL 32256.
            </p>
            <p className="mb-8">
              We specialize in routine grounds care, lawn maintenance, garden upkeep, one-time property cleanups, and recurring property maintenance services in Florida.
            </p>

            <h2 id="information-we-collect" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">We collect information through the following channels:</p>

            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-2">
              a. Information You Provide Directly
            </h3>
            <p className="mb-2">When you submit a quote request, contact form, or direct communication, you may provide:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Contact details: Name, email address, and phone number</li>
              <li>Florida property details: Service address, city, ZIP code, property type, and approximate grounds size</li>
              <li>Service requirements: Description of maintenance needs, one-time or recurring frequency preference</li>
              <li>Attachments: Property photos or site overview documents you choose to upload</li>
              <li>Recruitment information: Résumés and professional qualifications submitted in connection with hiring inquiries</li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-2">
              b. Technical and Server Log Information
            </h3>
            <p className="mb-8">
              When you browse our website, hosting servers may automatically record standard technical log data such as IP address, browser type, operating system, referring URL, and page timestamps for site security and operational integrity.
            </p>

            <h2 id="how-we-use-information" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">We use collected information to:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Process and respond to maintenance quote requests and service inquiries</li>
              <li>Coordinate service visits, confirm maintenance scopes, and communicate scheduling updates</li>
              <li>Retain recruitment inquiries for future hiring consideration</li>
              <li>Maintain customer communication records and service history</li>
              <li>Protect website security and fulfill ordinary legal obligations</li>
            </ul>
            <p className="mb-8">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

            <h2 id="legal-basis" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              4. Legal Basis for Processing
            </h2>
            <p className="mb-2">We process personal data based on:</p>
            <ul className="list-disc pl-5 mb-8 space-y-1">
              <li>Performance of requested services: communicating quotes and coordinating maintenance</li>
              <li>Consent: when you submit a quote form or voluntarily upload photos or documents</li>
              <li>Legitimate business interests: operating our grounds maintenance operations and ensuring website security</li>
              <li>Legal compliance: fulfilling applicable statutory or tax obligations</li>
            </ul>

            <h2 id="information-sharing" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              5. Information Sharing and Disclosure
            </h2>
            <p className="mb-2">We may share information only as strictly needed with:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Our operational field staff and service coordination team</li>
              <li>Hosting and technical infrastructure providers (such as Vercel and secure email transport services) solely to process transmissions</li>
              <li>Our parent entity, Verastro Inc., for corporate administration</li>
              <li>Law enforcement or regulatory bodies if required by valid legal process</li>
            </ul>

            <h2 id="data-retention" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              6. Data Retention
            </h2>
            <p className="mb-4">
              We retain customer inquiries and maintenance records only as long as necessary to serve client accounts, maintain business continuity, or satisfy tax and legal record-keeping requirements.
            </p>
            <p className="mb-8">
              Recruitment submissions may be securely retained for review when future hiring opportunities arise, or deleted upon applicant request.
            </p>

            <h2 id="cookies" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              7. Cookies and Technical Information
            </h2>
            <p className="mb-4">
              This website does not deploy third-party advertising tracking cookies. It relies on standard web hosting technical protocols to deliver web pages securely.
            </p>
            <p className="mb-8">
              You can configure your browser to reject cookies or notify you when cookies are sent without disrupting core website browsing.
            </p>

            <h2 id="your-rights" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              8. Your Rights
            </h2>
            <p className="mb-2">You may at any time:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Request a copy of personal information we have recorded for your property</li>
              <li>Request corrections or updates to your contact details</li>
              <li>Request deletion of your inquiry details, subject to applicable record-keeping laws</li>
            </ul>
            <p className="mb-8">
              To exercise these rights, contact us at <strong>inquries@verastro.com</strong>.
            </p>

            <h2 id="data-security" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              9. Data Security
            </h2>
            <p className="mb-8">
              We implement reasonable administrative, technical, and physical safeguards to protect submitted customer details and file attachments against unauthorized access, loss, or misuse.
            </p>

            <h2 id="updates" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              10. Updates to This Policy
            </h2>
            <p className="mb-8">
              We may update this Privacy Policy to reflect operational or regulatory changes. The “Last Updated” date at the top of this page indicates the date of the latest revisions.
            </p>

            <h2 id="contact-us" className="text-lg font-bold text-gray-900 mt-10 mb-4">
              11. Contact Us
            </h2>
            <div className="bg-gray-50 border border-gray-200 p-6 text-sm text-gray-700 not-prose">
              <p className="font-bold text-gray-900 mb-1">Verastro Infra</p>
              <p className="text-xs text-gray-500 mb-3">A division of Verastro Inc.</p>
              <p className="mb-2">
                <strong>Main Office:</strong> 10151 Deerwood Park Blvd, Building 200, Suite 250, Jacksonville, FL 32256
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:inquries@verastro.com" className="text-teal-700 hover:underline">
                  inquries@verastro.com
                </a>
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> (904) 302-9170
              </p>
              <p>
                <strong>Website:</strong>{' '}
                <a href="https://verastroinfra.com" className="text-teal-700 hover:underline">
                  verastroinfra.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
