import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">
        At NextGen MVP, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We collect information you provide directly to us, such as when you contact us, sign up for our services, or participate in any interactive features of our services.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect NextGen MVP and our users.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Information Sharing and Disclosure</h2>
      <p className="mb-4">
        We do not share or sell your personal information to third parties for marketing purposes. We may share your information in the following situations:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>With your consent</li>
        <li>For legal reasons</li>
        <li>To protect the rights and safety of NextGen MVP and our users</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at:{' '}
        <Link href="mailto:dmuvaa70@gmail.com" className="text-blue-600 hover:underline">
          dmuvaa70@gmail.com
        </Link>
      </p>
    </div>
  )
}

