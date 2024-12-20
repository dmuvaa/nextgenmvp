'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function BookConsultation() {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            typeof namespace === "string"
              ? (cal.ns[namespace] = api) && p(api, ar)
              : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    window.Cal('init', {origin:'https://app.cal.com'});

    // Important: Replace 'your-cal-username' with your actual Cal.com username
    window.Cal('ui', {"styles":{"branding":{"brandColor":"#3b82f6"}},"hideEventTypeDetails":false,"layout":"month_view"});
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Book a Free Consultation</h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Need help estimating costs? Schedule a meeting with us to discuss your idea, explore options, and finalize a quote.
        </p>
        <Button 
          size="lg" 
          onClick={() => window.Cal('openModal', { namespace: 'nextgenmvp' })}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
        >
          Schedule Now
        </Button>
      </div>
    </section>
  )
}

