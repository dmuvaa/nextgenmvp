import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is an MVP (Minimum Viable Product)?",
    answer: "An MVP is a simplified version of your product with core features that demonstrate its value. It allows you to test your idea in the market, gather feedback, and iterate before building the full product."
  },
  {
    question: "How long does it take to build an MVP?",
    answer: "Timelines vary depending on complexity, but most MVPs are completed within 2–4 weeks."
  },
  {
    question: "What does the $2,500 starting price include?",
    answer: "Our base package covers: Core feature development, a basic yet polished design, and deployment to your preferred platform (web or mobile)."
  },
  {
    question: "Can I scale the MVP later?",
    answer: "Yes! All our MVPs are built with scalability in mind. You can easily add features or improve functionality as your startup grows."
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer: "Not at all! We simplify the process and guide you through every step. Our team takes care of all the technical details so you can focus on your vision."
  },
  {
    question: "What if I don't have a fully fleshed-out idea yet?",
    answer: "No problem! We'll work with you during our discovery phase to define your goals and prioritize key features for your MVP."
  },
  {
    question: "What platforms do you develop for?",
    answer: "We build MVPs for: Web (Progressive web apps, SaaS platforms), Mobile (iOS and Android apps), and Hybrid solutions (Using technologies like Flutter or React Native)."
  },
  {
    question: "Do you offer ongoing support post-launch?",
    answer: "Yes, we provide optional post-launch support, including updates, bug fixes, and feature enhancements."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit/debit cards, bank transfers, and online payment services like Wise."
  },
  {
    question: "How do I get started?",
    answer: "It's simple! Use our booking tool to schedule a free consultation. We'll discuss your vision, requirements, and next steps."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          Frequently Asked Questions (FAQs)
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-700 dark:text-gray-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}