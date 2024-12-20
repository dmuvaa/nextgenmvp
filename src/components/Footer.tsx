import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">NextGen MVP</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">Launching MVPs faster than ever.</p>
      </div>
      <div>
        <h4 className="text-md font-semibold mb-4 text-blue-600 dark:text-blue-400">Quick Links</h4>
        <ul className="space-y-2">
          <li><Link href="/privacy-policy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
          <li><Link href="/terms-of-service" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
          <li><Link href="/blog" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Blog</Link></li>
          <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-md font-semibold mb-4 text-blue-600 dark:text-blue-400">Connect</h4>
        <ul className="space-y-2">
          <li><a href="https://twitter.com/nextgenmvp" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Twitter</a></li>
          <li><a href="https://linkedin.com/company/nextgenmvp" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
      © {new Date().getFullYear()} NextGen MVP. All rights reserved.
    </div>
  </footer>
)
}
