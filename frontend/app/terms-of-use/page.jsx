import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Terms of Use | VERASTRO INFRA',
  description: 'Terms of Use and Conditions for accessing the VERASTRO INFRA website and services.',
  alternates: { canonical: '/terms-of-use' },
};

export default function TermsOfUsePage() {
  return (
    <PageLayout>
      <section className="py-12 md:py-16 bg-white">
        <div className="container-main max-w-3xl prose prose-sm sm:prose-base prose-blue">
          <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-navy)' }}>Terms of Use</h1>
          <p className="text-gray-500 mb-8"><strong>Last Updated:</strong> October 29, 2025</p>

          <p>
            Welcome to the VERASTRO INFRA website (verastroinfra.com). By accessing or using our website, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            These Terms of Use govern your access to and use of the VERASTRO INFRA website. VERASTRO INFRA is a division of Verastro Inc. We reserve the right to modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Informational Purpose Only</h2>
          <p className="mb-6">
            The content provided on this website is for general informational purposes only. It does not constitute professional engineering, financial, legal, or investment advice. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, or services contained on the website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Engineering Services and Licensing</h2>
          <p className="mb-6">
            VERASTRO INFRA provides engineering support, coordination, and documentation within defined operating scopes. Licensed Professional Engineering (PE) services are coordinated through our licensed team members or qualified partners, as appropriate for each project and jurisdiction. Mention of engineering capabilities on this website does not imply that VERASTRO INFRA offers licensed engineering services in jurisdictions where it is not authorized to do so.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-6">
            All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Verastro Inc. or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, transmit, display, publish, or broadcast any of the materials on this website without our prior written permission.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall VERASTRO INFRA, Verastro Inc., or its affiliates, directors, officers, employees, or agents be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the website or any information contained therein.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Third-Party Links</h2>
          <p className="mb-6">
            Our website may contain links to third-party websites that are not owned or controlled by VERASTRO INFRA. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that VERASTRO INFRA shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Governing Law</h2>
          <p className="mb-6">
            These Terms of Use shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Information</h2>
          <p className="mb-6">
            If you have any questions about these Terms of Use, please contact us at:<br /><br />
            <strong>VERASTRO INFRA</strong><br />
            651 N Broad St, STE 201<br />
            Middletown, DE 19709<br />
            Email: <a href="mailto:inquiries@verastroinfra.com" className="text-blue-600 hover:underline">inquiries@verastroinfra.com</a><br />
            Phone: (904) 302-9170
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
