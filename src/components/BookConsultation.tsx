'use client'

import { useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'

interface CalWindow extends Window {
  Cal?: {
    q: unknown[]
    loaded: boolean
    ns: Record<string, unknown>
    init: (args: { origin: string }) => void
    ui: (args: unknown) => void
    openModal: (args: { namespace: string }) => void
  }
}

declare const window: CalWindow

const CAL_SCRIPT_URL = "https://app.cal.com/embed/embed.js"

export default function BookConsultation() {
  const initializeCal = useCallback(() => {
    const script = document.createElement('script')
    script.src = CAL_SCRIPT_URL
    script.onload = () => {
      if (window.Cal) {
        window.Cal.init({ origin: 'https://app.cal.com' })
        window.Cal.ui({
          styles: { branding: { brandColor: "#3b82f6" } },
          hideEventTypeDetails: false,
          layout: "month_view"
        })
      }
    }
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    if (!window.Cal) {
      initializeCal()
    }
  }, [initializeCal])

  const handleScheduleClick = () => {
    if (window.Cal) {
      window.Cal.openModal({ namespace: 'nextgenmvp' })
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Book a Free Consultation</h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Need help estimating costs? Schedule a meeting with us to discuss your idea, explore options, and finalize a quote.
        </p>
        <Button 
          size="lg" 
          onClick={handleScheduleClick}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
        >
          Schedule Now
        </Button>
      </div>
    </section>
  )
}

