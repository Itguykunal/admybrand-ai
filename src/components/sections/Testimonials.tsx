'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const testimonials = [
  {
    name: 'John Doe',
    title: 'Founder, Acme Inc.',
    content: 'This service has completely transformed our workflow!',
    avatar: '/api/placeholder/64/64',
  },
  {
    name: 'Jane Smith',
    title: 'CTO, Beta Corp.',
    content: 'Incredible results. Our team is more productive than ever.',
    avatar: '/api/placeholder/64/64',
  },
  {
    name: 'Alice Johnson',
    title: 'Head of Design, Creatives Ltd.',
    content: 'Beautiful UI, fantastic support, and lightning-fast performance.',
    avatar: '/api/placeholder/64/64',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-neutral-100 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Testimonials
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            See what our happy customers are saying.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 mb-8 leading-relaxed">
            &ldquo;{testimonials[currentIndex].content}&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <Image
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full"
            />
            <div className="text-left">
              <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {testimonials[currentIndex].title}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button className="bg-black text-white hover:bg-neutral-800 transition-colors">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}
