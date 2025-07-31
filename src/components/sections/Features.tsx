'use client'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { 
  Brain, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Palette,
  MessageSquare,
  TrendingUp 
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Create compelling marketing copy, social media posts, and email campaigns with advanced AI that understands your brand voice.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get deep insights into customer behavior, campaign performance, and market trends with our comprehensive analytics dashboard.',
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Reach the right audience at the right time with AI-powered customer segmentation and behavioral targeting.',
  },
  {
    icon: Zap,
    title: 'Automation Engine',
    description: 'Streamline your marketing workflows with intelligent automation that learns and adapts to your business needs.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption, SOC2 compliance, and comprehensive data protection.',
  },
  {
    icon: Palette,
    title: 'Brand Consistency',
    description: 'Maintain perfect brand alignment across all channels with AI-powered brand guidelines and asset management.',
  },
  {
    icon: MessageSquare,
    title: 'Customer Insights',
    description: 'Understand your customers better with sentiment analysis, feedback processing, and predictive modeling.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Optimization',
    description: 'Continuously improve your marketing ROI with AI-driven recommendations and performance optimization.',
  },
]

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Powerful Features for{' '}
            <span className="text-primary-600">Modern Marketing</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need to build, manage, and scale your marketing efforts with the power of AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="elevated" className="h-full hover:shadow-2xl group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}