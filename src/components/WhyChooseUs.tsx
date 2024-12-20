export default function WhyChooseUs() {
    const reasons = [
      {
        title: "Speed to Market",
        description: "We prioritize rapid development without compromising quality, ensuring you're ready to launch in record time.",
        color: "text-purple-600 dark:text-purple-400"
      },
      {
        title: "Tailored Solutions",
        description: "From mobile apps to web platforms, our expert team tailors every MVP to your unique goals and target audience.",
        color: "text-green-600 dark:text-green-400"
      },
      {
        title: "Future-Ready Foundations",
        description: "Your MVP will be scalable and flexible, ready to evolve as your business grows.",
        color: "text-orange-600 dark:text-orange-400"
      },
      {
        title: "Cost-Effective Excellence",
        description: "Startups often operate with tight budgets. We focus on the features that matter most to create a cost-efficient MVP that delivers maximum value.",
        color: "text-red-600 dark:text-red-400"
      },
      {
        title: "Full Support Post-Launch",
        description: "From feedback-based iterations to scaling your product, we're here to support you beyond the MVP phase.",
        color: "text-teal-600 dark:text-teal-400"
      },
      {
        title: "User-Centric Design",
        description: "We prioritize usability and user experience, ensuring your MVP is intuitive, engaging, and market-ready.",
        color: "text-blue-600 dark:text-blue-400"
      }
    ];
  
    return (
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Why Choose Us?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-full flex flex-col">
                  <h3 className={`text-2xl font-bold mb-4 ${reason.color}`}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  