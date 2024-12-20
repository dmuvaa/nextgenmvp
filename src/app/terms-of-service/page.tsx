import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">
        Welcome to NextGen MVP. By using our services, you agree to these terms. Please read them carefully.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Use of Services</h2>
      <p className="mb-4">
        You must follow any policies made available to you within the Services. You may use our Services only as permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Intellectual Property Rights</h2>
      <p className="mb-4">
        The Services and their entire contents, features, and functionality are owned by NextGen MVP and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Confidentiality</h2>
      <p className="mb-4">
        We respect the confidentiality of our clients. We do not disclose client information, services, architecture, or any other confidential details without explicit permission. Your project details and business information are safe with us.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Limitation of Liability</h2>
      <p className="mb-4">
        In no event will NextGen MVP, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or loss or corruption of data.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Governing Law</h2>
      <p className="mb-4">
        These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to These Terms</h2>
      <p className="mb-4">
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes to these Terms.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at:{' '}
        <Link href="mailto:dmuvaa70@gmail.com" className="text-blue-600 hover:underline">
          dmuvaa70@gmail.com
        </Link>
      </p>
    </div>
  )
}

