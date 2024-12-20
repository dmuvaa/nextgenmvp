import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import BookConsultation from '../components/BookConsultation'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Pricing />
      <BookConsultation />
      <FAQ />
    </div>
  )
}