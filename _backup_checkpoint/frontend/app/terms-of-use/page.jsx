import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Terms of Use | Verastro Infra',
  description:
    'Terms of Use and Conditions for accessing the Verastro Infra website and property maintenance services.',
  alternates: { canonical: '/terms-of-use' },
};

export default function TermsOfUsePage() {
  return (
    <PageLayout>
      <section className="py-12 md:py-16 bg-white">
        <div className="container-main max-w-3xl prose prose-sm sm:prose-base prose-blue">
          <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-navy)' }}>
            Terms of Use
          </h1>
          <p className="text-gray-500 mb-8">
            <strong>Last Updated:</strong> October 12, 2026
          </p>

          <p>
            Welcome to the Verastro Infra website (verastroinfra.com). By accessing or using our website, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            These Terms of Use govern your access to and use of the Verastro Infra website. Verastro Infra is a division of Verastro Inc. We reserve the right to modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Service Scope and Informational Nature</h2>
          <p className="mb-6">
            The content provided on this website is for general informational purposes relating to Florida landscaping, routine grounds care, and property maintenance services. Website content does not constitute binding contractual guarantees or professional architectural/engineering advice. Formal maintenance commitments, service frequencies, and pricing are defined solely in executed written service agreements between you and Verastro Infra.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Maintenance Services &amp; Delivery</h2>
          <p className="mb-6">
            Verastro Infra provides routine outdoor property upkeep, including lawn mowing, edging, manual weeding, leaf removal, garden upkeep, one-time cleanups, and recurring maintenance programs within confirmed operating parameters. We confirm service scopes with clients prior to initiating grounds care.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-6">
            All content on this website, including but not limited to text, graphics, logos, images, digital downloads, and software, is the property of Verastro Inc. or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, transmit, display, or publish any materials on this website without our prior written permission.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall Verastro Infra, Verastro Inc., or its affiliates, directors, officers, employees, or agents be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the website or reliance on any information contained herein.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Third-Party Links</h2>
          <p className="mb-6">
            Our website may contain links to external or affiliate resources not owned or controlled by Verastro Infra. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of third-party websites.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Governing Law</h2>
          <p className="mb-6">
            These Terms of Use shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Information</h2>
          <p className="mb-6">
            If you have any questions regarding these Terms of Use, please contact us at:
            <br /><br />
            <strong>Verastro Infra</strong><br />
            A division of Verastro Inc.<br />
            Main Office: 10151 Deerwood Park Blvd, Building 200, Suite 250<br />
            Jacksonville, FL 32256<br />
            Email: <a href="mailto:inquries@verastro.com" className="text-blue-600 hover:underline">inquries@verastro.com</a><br />
            Phone: (904) 302-9170
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
