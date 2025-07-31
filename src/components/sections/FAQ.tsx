'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does ADmyBRAND AI Suite work?',
    answer: 'Our AI Suite uses advanced machine learning algorithms to analyze your brand, audience, and market trends. It then generates personalized marketing content, provides actionable insights, and automates campaign optimization to maximize your ROI.',
  },
  {
    question: 'Can I integrate ADmyBRAND with my existing tools?',
    answer: 'Yes! ADmyBRAND AI Suite integrates seamlessly with over 50+ popular marketing tools including HubSpot, Salesforce, Mailchimp, Google Analytics, Facebook Ads, and many more through our robust API and native integrations.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore all capabilities and see the value before making any commitment.',
  },
  {
    question: 'How secure is my data with ADmyBRAND?',
    answer: 'Data security is our top priority. We use enterprise-grade encryption, are SOC2 compliant, and follow strict GDPR guidelines. Your data is stored in secure, geographically distributed data centers with 99.9% uptime guarantee.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer comprehensive support including 24/7 chat support, detailed documentation, video tutorials, webinar training sessions, and dedicated account managers for enterprise clients. Our average response time is under 2 hours.',
  },
  {
    question: 'Can I customize the AI to match my brand voice?',
    answer: 'Yes! Our AI learns and adapts to your specific brand voice, tone, and style preferences. You can train it with your existing content, set brand guidelines, and continuously refine the output to perfectly match your brand identity.',
  },
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Frequently Asked{' '}
            <span className="text-primary-600">Questions</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-500 transition-transform flex-shrink-0 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <p className="text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}