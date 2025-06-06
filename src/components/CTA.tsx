'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="w-full flex justify-center py-24 border-t border-black/5 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
      <div className="w-[95%] max-w-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-h3 mb-4">Ready to Skyrocket Your Online Presence?</h2>
          <p className="text-foreground/70 mb-8">
            Let&apos;s craft a stunning website that drives results.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-black/90 transition-colors"
          >
            Start Your Project
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 