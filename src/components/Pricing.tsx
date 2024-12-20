'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type Platform = 'web' | 'mobile' | 'both'

const BASE_FEATURES = {
  web: [
    "Responsive Design",
    "User Authentication",
    "Database Integration",
    "API Development",
    "Payment Integration",
    "Admin Dashboard",
    "SEO Optimization",
    "Contact Forms",
    "Core Functionality"
  ],
  mobile: [
    "Native UI Components",
    "Push Notifications",
    "Offline Mode",
    "App Store Optimization",
    "In-App Purchases",
    "User Authentication",
    "API Integration",
    "Analytics Integration",
    "Core Functionality"
  ],
  both: [
    "Cross-platform Compatibility",
    "Shared Backend Infrastructure",
    "Synchronized User Accounts",
    "Consistent API Integration",
    "Unified Analytics",
    "Responsive Web Design",
    "Native Mobile UI",
    "Push Notifications (Mobile)",
    "Core Functionality"
  ]
}

const PLATFORM_PRICES = {
  web: 2700,
  mobile: 2700,
  both: 4500
}

export default function Pricing() {
  const [platform, setPlatform] = useState<Platform>('web')
  const [complexity, setComplexity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(PLATFORM_PRICES.web)

  useEffect(() => {
    const basePrice = PLATFORM_PRICES[platform]
    const complexityMultiplier = 1 + ((complexity - 1) * 0.5) // 50% increase per complexity level
    setTotalPrice(Math.round(basePrice * complexityMultiplier))
  }, [platform, complexity])

  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">Pricing</h2>
        <p className="text-center mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our MVPs come with essential features tailored for web, mobile, or both. 
          Choose your platform and customize based on your needs.
        </p>

        <Card className="w-full max-w-3xl mx-auto dark:bg-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">MVP Cost Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Choose Platform</h3>
              <RadioGroup
                defaultValue="web"
                onValueChange={(value) => setPlatform(value as Platform)}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="web" id="web" />
                  <Label htmlFor="web" className="text-green-600 dark:text-green-400">Web Application</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mobile" id="mobile" />
                  <Label htmlFor="mobile" className="text-orange-600 dark:text-orange-400">Mobile Application</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="both" />
                  <Label htmlFor="both" className="text-purple-600 dark:text-purple-400">Web + Mobile Applications</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="complexity" className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Project Complexity
                </Label>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Level: {complexity}
                </span>
              </div>
              <Slider
                id="complexity"
                min={1}
                max={3}
                step={1}
                value={[complexity]}
                onValueChange={([value]) => setComplexity(value)}
              />
              <div className="flex justify-between text-sm">
                <span className="text-green-600 dark:text-green-400">Basic</span>
                <span className="text-orange-600 dark:text-orange-400">Intermediate</span>
                <span className="text-red-600 dark:text-red-400">Advanced</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Included Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {BASE_FEATURES[platform].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full" />
                    <span className="text-sm text-gray-700 dark:text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">Estimated Price:</span>
                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">${totalPrice.toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                This estimate includes all base features for the selected platform. Final price may vary based on specific requirements and customizations.
              </p>
              <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                Get Detailed Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

