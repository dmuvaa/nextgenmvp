import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">About NextGen MVP</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        NextGen MVP is a cutting-edge software development company specializing in building Minimum Viable Products (MVPs) for startups and innovative businesses. We believe in turning ideas into reality, fast and efficiently.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">Our Mission</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Our mission is to empower entrepreneurs and businesses by rapidly transforming their ideas into functional, market-ready products. We strive to deliver high-quality MVPs that help our clients validate their concepts, attract investors, and kickstart their journey to success.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">Our Leadership</h2>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image src="/placeholder.svg?height=200&width=200" alt="Dennis Muvaa" width={200} height={200} className="h-48 w-full object-cover md:w-48" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Founder & CEO</div>
            <h3 className="mt-1 text-2xl leading-tight font-medium text-gray-900 dark:text-gray-100">Dennis Muvaa</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Dennis Muvaa is the visionary founder and CEO of NextGen MVP. With his extensive experience in software development and entrepreneurship, Dennis leads our team in delivering innovative solutions that help startups succeed.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">Our Approach</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        We believe in agile methodologies, rapid prototyping, and continuous iteration. Our approach ensures that we deliver MVPs that are not just functional, but also scalable and ready for future growth.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">Why Choose Us?</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
        <li>Rapid development and deployment</li>
        <li>Experienced team of developers and designers</li>
        <li>Focus on scalability and future growth</li>
        <li>Commitment to quality and user experience</li>
        <li>Transparent communication and collaboration</li>
      </ul>
    </div>
  )
}

