const steps = [
    {
        title: "Ideation & Scoping",
        description: [
            "Define your goals, target audience, and must-have features.",
            "Collaborate on a roadmap tailored to your vision.",
        ],
        color: "text-blue-600 dark:text-blue-400"
    },
    {
        title: "Wireframes & Prototyping",
        description: [
            "Create user-friendly designs and prototypes to visualize your product.",
            "Get valuable feedback before development begins.",
        ],
        color: "text-purple-600 dark:text-purple-400"
    },
    {
        title: "Development & Testing",
        description: [
            "Build your MVP with modern tools and technologies.",
            "Rigorously test for functionality, scalability, and performance.",
        ],
        color: "text-green-600 dark:text-green-400"
    },
    {
        title: "Launch & Iterate",
        description: [
            "Deploy your MVP to the market.",
            "Gather user feedback and plan the next steps for growth.",
        ],
        color: "text-orange-600 dark:text-orange-400"
    },
]

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">How It Works</h2>
                <p className="text-center mb-12 text-gray-700 dark:text-gray-300">We make launching your MVP simple and efficient:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className={`text-xl font-semibold flex items-center ${step.color}`}>
                                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    {index + 1}
                                </span>
                                {step.title}
                            </h3>
                            <ul className="list-disc pl-12 space-y-2 text-gray-700 dark:text-gray-300">
                                {step.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-12 text-gray-700 dark:text-gray-300">
                    We work with you every step of the way to ensure your MVP is built on time, within budget, and ready to shine.
                </p>
            </div>
        </section>
    )
}
