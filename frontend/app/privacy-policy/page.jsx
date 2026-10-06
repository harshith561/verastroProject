import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Privacy Policy | VERASTRO INFRA',
  description: 'Privacy Policy for VERASTRO INFRA, explaining how we collect, use, and protect your information.',
  alternates: { canonical: '/privacy-policy' },
};

const navigation = [
  { id: 'who-we-are', label: '1. Who We Are' },
  { id: 'information-we-collect', label: '2. Information We Collect' },
  { id: 'how-we-use-information', label: '3. How We Use Your Information' },
  { id: 'legal-basis', label: '4. Legal Basis for Processing' },
  { id: 'information-sharing', label: '5. Information Sharing and Disclosure' },
  { id: 'data-retention', label: '6. Data Retention' },
  { id: 'cookies', label: '7. Cookies and Tracking Technologies' },
  { id: 'your-rights', label: '8. Your Rights' },
  { id: 'data-security', label: '9. Data Security' },
  { id: 'international-access', label: '10. International Access' },
  { id: 'updates', label: '11. Updates to This Policy' },
  { id: 'contact-us', label: '12. Contact Us' },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--color-navy)' }}>
        <div className="container-main">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-teal)' }}>
            LEGAL
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Last Updated: October 29, 2025
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
              VERASTRO INFRA (“VERASTRO INFRA,” “we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you share with us.<br/>
              This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit <strong>verastroinfra.com</strong> or interact with our services.<br/>
              By accessing or using this website, you consent to the practices described in this Policy.
            </p>

            <h2 id="who-we-are" className="text-lg font-bold text-gray-900 mt-10 mb-4">1. Who We Are</h2>
            <p className="mb-4">
              VERASTRO INFRA is a division of Verastro Inc., headquartered in Middletown, Delaware, with operational offices in Jacksonville, Florida.
            </p>
            <p className="mb-8">
              We provide services in land development, grading, landscaping, sod installation, and real-estate investment facilitation across the United States, including informational guidance on EB-5-compliant opportunities.
            </p>

            <h2 id="information-we-collect" className="text-lg font-bold text-gray-900 mt-10 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information in several ways:</p>
            
            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-2">a. Information You Provide Voluntarily</h3>
            <p className="mb-2">When you fill out contact forms, request proposals, subscribe to newsletters, or inquire about investment or property services, you may provide:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Name, company, or organization</li>
              <li>Email address and phone number</li>
              <li>Project details or property interests</li>
              <li>Location or investment preferences</li>
              <li>Any attachments or supporting documents you choose to upload</li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-2">b. Information Collected Automatically</h3>
            <p className="mb-2">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>IP address, browser type, and device information</li>
              <li>Pages visited, time spent, and referring sites</li>
              <li>Cookies or similar technologies used for analytics and website performance</li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-2">c. Information from Third Parties</h3>
            <p className="mb-8">
              We may receive limited business information from trusted partners, referral sources, or affiliates (such as Verastro Overseas or Verastro Inc.) to facilitate communication or service continuity.
            </p>

            <h2 id="how-we-use-information" className="text-lg font-bold text-gray-900 mt-10 mb-4">3. How We Use Your Information</h2>
            <p className="mb-2">We use collected information for purposes such as:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Responding to your inquiries or service requests</li>
              <li>Preparing and sending proposals or investment details</li>
              <li>Communicating project updates or consultation availability</li>
              <li>Managing client relationships and billing coordination</li>
              <li>Sending newsletters, updates, or announcements (only if you subscribe)</li>
              <li>Complying with legal obligations and protecting our rights</li>
            </ul>
            <p className="mb-8">We do not sell, rent, or trade personal information for marketing purposes.</p>

            <h2 id="legal-basis" className="text-lg font-bold text-gray-900 mt-10 mb-4">4. Legal Basis for Processing</h2>
            <p className="mb-2">We process your data on one or more of the following legal bases:</p>
            <ul className="list-disc pl-5 mb-8 space-y-1">
              <li>Performance of a contract: when you request or engage our services</li>
              <li>Consent: when you voluntarily share data or subscribe to communications</li>
              <li>Legitimate interest: improving our services and website user experience</li>
              <li>Legal compliance: when required by U.S. or state law</li>
            </ul>

            <h2 id="information-sharing" className="text-lg font-bold text-gray-900 mt-10 mb-4">5. Information Sharing and Disclosure</h2>
            <p className="mb-2">We may share limited personal information only when necessary to:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Fulfill requested services or project coordination</li>
              <li>Communicate with trusted vendors, consultants, or affiliate divisions under Verastro Inc.</li>
              <li>Comply with applicable laws, regulations, or lawful court orders</li>
              <li>Protect the rights, property, or safety of VERASTRO INFRA, our clients, or the public</li>
            </ul>
            <p className="mb-8">All third-party partners handling personal information are required to adhere to confidentiality and data protection obligations.</p>

            <h2 id="data-retention" className="text-lg font-bold text-gray-900 mt-10 mb-4">6. Data Retention</h2>
            <p className="mb-4">We retain personal information only as long as necessary to fulfill the purposes described in this Policy or as required by applicable law.</p>
            <p className="mb-8">Information related to project proposals or financial records may be stored securely for audit and compliance requirements.</p>

            <h2 id="cookies" className="text-lg font-bold text-gray-900 mt-10 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="mb-4">Our website uses cookies and analytics tools to improve performance and understand visitor interactions.</p>
            <p className="mb-8">You can manage or disable cookies through your browser settings. Disabling cookies may limit some website functionality.</p>

            <h2 id="your-rights" className="text-lg font-bold text-gray-900 mt-10 mb-4">8. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Access, correct, or update your personal information</li>
              <li>Request deletion of your information (subject to record-keeping laws)</li>
              <li>Withdraw consent for communications at any time</li>
              <li>Opt-out of non-essential cookies or marketing emails</li>
            </ul>
            <p className="mb-8">To exercise these rights, contact us at inquiries@verastroinfra.com or via the details below.</p>

            <h2 id="data-security" className="text-lg font-bold text-gray-900 mt-10 mb-4">9. Data Security</h2>
            <p className="mb-4">We employ reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, misuse, or loss.</p>
            <p className="mb-8">While no system is entirely secure, we maintain industry-standard protections consistent with U.S. data-handling practices.</p>

            <h2 id="international-access" className="text-lg font-bold text-gray-900 mt-10 mb-4">10. International Access</h2>
            <p className="mb-8">This website is operated in the United States. If you access it from outside the U.S., you consent to the transfer and processing of your data under U.S. privacy laws, which may differ from those in your country.</p>

            <h2 id="updates" className="text-lg font-bold text-gray-900 mt-10 mb-4">11. Updates to This Policy</h2>
            <p className="mb-4">We may revise this Privacy Policy periodically. Updates will be posted on this page with a new "Last Updated" date.</p>
            <p className="mb-8">Your continued use of the website after changes signifies your acceptance of the updated Policy.</p>

            <h2 id="contact-us" className="text-lg font-bold text-gray-900 mt-10 mb-4">12. Contact Us</h2>
            <p className="mb-4">If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
            
            <div className="bg-gray-50 border border-gray-100 p-6 text-sm text-gray-700">
              <p className="font-bold text-gray-900 mb-2">VERASTRO INFRA</p>
              <p className="mb-2">A Division of Verastro Inc.</p>
              <div className="flex items-start gap-2 mb-2">
                <span className="text-red-500 mt-0.5">📍</span>
                <span>651 N Broad St, STE 201, Middletown, Delaware 19709</span>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <span className="text-red-500 mt-0.5">📍</span>
                <span>10151 Deerwood Park Blvd, Building 200, Suite 250, Jacksonville, FL 32256</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-500">📧</span>
                <a href="mailto:inquiries@verastroinfra.com" className="hover:underline">inquiries@verastroinfra.com</a>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-500">📞</span>
                <span>(904) 302-9170</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🌐</span>
                <a href="https://www.verastroinfra.com" className="hover:underline">www.verastroinfra.com</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
