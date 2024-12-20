import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Launch Your MVP in Days or Weeks and Start Earning
        </h1>
        <p className="text-xl mb-8 mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Save hundreds of hours with <span className="text-blue-600 dark:text-blue-400 font-semibold">NextGen MVP</span>. We build complete MVPs with all essential features, 
          ready for your customers.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
          Get Started
        </Button>
      </div>
    </section>
  )
}
