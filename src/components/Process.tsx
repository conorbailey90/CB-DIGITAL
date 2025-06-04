'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience through in-depth consultations and research.',
    details: ['Business Analysis', 'User Research', 'Project Planning']
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description: 'Creating the blueprint for your digital success through strategic planning and thoughtful design solutions.',
    details: ['UX Strategy', 'Visual Design', 'Content Planning']
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building your project using modern technologies and best practices to ensure performance and reliability.',
    details: ['Frontend Development', 'Backend Integration', 'Performance Optimization']
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Carefully deploying your project and providing ongoing support to ensure continued success.',
    details: ['Testing & QA', 'Deployment', '24/7 Support']
  }
]

function Process() {
  return (
    <section className="w-full flex justify-center py-16 border-t border-black/5 bg-white">
      <div className="w-[95%] max-w-container">
        <h4 className="tracking-normal logo uppercase text-6xl mb-8">Our Process</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-6xl font-founders text-black/10 absolute -top-6 -left-3">
                {step.number}
              </span>
              <div className="relative">
                <h3 className="text-h5 mb-4">{step.title}</h3>
                <p className="text-foreground/70 mb-6">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li 
                      key={detail}
                      className="text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-black rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process