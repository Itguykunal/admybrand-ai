'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Check, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: { monthly: 29, yearly: 290 },
    description: 'Perfect for small businesses and startups',
    features: [
      'AI Content Generation (100 pieces/month)',
      'Basic Analytics Dashboard',
      'Email Campaign Tools',
      '5 Brand Presets',
      'Standard Support',
      'API Access',
    ],
  },
  {
    name: 'Professional',
    price: { monthly: 79, yearly: 790 },
    description: 'Ideal for growing businesses and agencies',
    popular: true,
    features: [
      'AI Content Generation (500 pieces/month)',
      'Advanced Analytics & Insights',
      'Multi-Channel Campaigns',
      'Unlimited Brand Presets',
      'A/B Testing Suite',
      'Priority Support',
      'White-label Options',
      'Team Collaboration (10 users)',
    ],
  },
  {
    name: 'Enterprise',
    price: { monthly: 199, yearly: 1990 },
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited AI Content Generation',
      'Custom Analytics & Reporting',
      'Advanced Automation Workflows',
      'Custom Brand Guidelines',
      'Dedicated Account Manager',
      '24/7 Premium Support',
      'Custom Integrations',
      'Unlimited Team Members',
      'SLA Guarantee',
    ],
  },
]

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing"  className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Simple, Transparent{' '}
            <span className="text-primary-600">Pricing</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your business. Upgrade or downgrade at any time.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-black rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                !isYearly
                  ? 'bg-primary-600 text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isYearly
                  ? 'bg-primary-600 text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Yearly
              <span className="ml-1 text-xs bg-green-500 text-white px-1.5 py-0.5 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card 
                variant={plan.popular ? 'elevated' : 'default'}
                className={`h-full ${plan.popular ? 'ring-2 ring-primary-600' : ''}`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-neutral-900">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-neutral-600">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600 mt-1">
                      Save ${(plan.price.monthly * 12) - plan.price.yearly} annually
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                  size="lg"
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}