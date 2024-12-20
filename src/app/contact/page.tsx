import Link from 'next/link'
import { PhoneIcon as WhatsApp, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Us</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        We&#39;re here to help you bring your MVP to life. Whether you have a question about our services, need a quote, or want to discuss your project, don&#39;t hesitate to reach out.
      </p>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Get in Touch</h2>
        <div className="space-y-4">
          <p className="flex items-center text-gray-700 dark:text-gray-300">
            <Mail className="mr-2 h-5 w-5" />
            Email: <Link href="mailto:dmuvaa70@gmail.com" className="ml-2 text-blue-600 dark:text-blue-400 hover:underline">dmuvaa70@gmail.com</Link>
          </p>
          <p className="flex items-center text-gray-700 dark:text-gray-300">
            <WhatsApp className="mr-2 h-5 w-5" />
            WhatsApp: <Link href="https://wa.me/254728921448" className="ml-2 text-blue-600 dark:text-blue-400 hover:underline">+254728921448</Link>
          </p>
          <p className="flex items-center text-gray-700 dark:text-gray-300">
            <MapPin className="mr-2 h-5 w-5" />
            Address: Nairobi, Kenya
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Send Us a Message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

