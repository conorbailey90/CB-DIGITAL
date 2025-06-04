'use client'

import { Code, Palette, Server, LayoutGrid, CheckCircle, ArrowRight, Users, Zap, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

function ServicesOverview() {
  const services = [
    {
      title: 'Web Design',
      description: 'Strategic design solutions that elevate your brand and engage your audience through thoughtful user experiences and UI/UX design.',
      icon: <Palette className="w-6 h-6" />,
      features: [
        'Brand Identity & Visual Design',
        'User Experience (UX) Design', 
        'User Interface (UI) Design',
        'Responsive Design Systems',
        'Wireframing & Prototyping'
      ],
      process: 'We start with understanding your brand and audience, then create wireframes and prototypes before delivering pixel-perfect designs that convert.',
      timeline: '2-4 weeks'
    },
    {
      title: 'Development',
      description: 'Custom web applications and websites built with modern technologies and best practices for optimal performance.',
      icon: <Code className="w-6 h-6" />,
      features: [
        'Custom Web Applications',
        'Modern Frontend Development',
        'Backend API Development',
        'Database Design & Integration',
        'Performance Optimization'
      ],
      process: 'From planning to deployment, we build scalable solutions using cutting-edge technologies like React, Next.js, and modern backend frameworks.',
      timeline: '4-12 weeks'
    },
    {
      title: 'Hosting',
      description: 'Reliable, secure web hosting solutions with fast performance, regular backups, and 24/7 monitoring for your peace of mind.',
      icon: <Server className="w-6 h-6" />,
      features: [
        'High-Performance Servers',
        'SSL Certificates & Security',
        'Automated Daily Backups',
        '24/7 Monitoring & Support',
        'CDN & Speed Optimization'
      ],
      process: 'We handle all technical aspects of hosting, from server setup to ongoing maintenance, so you can focus on your business.',
      timeline: 'Ongoing support'
    },
    {
      title: 'Digital Strategy',
      description: 'Data-driven approach to digital presence with SEO best practices, ensuring your platform aligns with business goals and drives organic growth.',
      icon: <LayoutGrid className="w-6 h-6" />,
      features: [
        'SEO Strategy & Implementation',
        'Analytics & Performance Tracking',
        'Content Strategy Planning',
        'Conversion Rate Optimization',
        'Digital Marketing Integration'
      ],
      process: 'We analyze your market, optimize for search engines, and create strategies that drive measurable results and sustainable growth.',
      timeline: '2-3 weeks setup, ongoing optimization'
    },
  ]

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Approach',
      description: 'We work closely with you throughout every project, ensuring your vision becomes reality.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Efficient processes and modern tools allow us to deliver high-quality results quickly.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliable Support',
      description: 'Ongoing maintenance and support to keep your digital presence running smoothly.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth Focused',
      description: 'Every solution is designed to scale with your business and drive measurable results.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-20 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
        <div className="w-[95%] max-w-container text-center">
          <h1 className="mb-6 tracking-normal logo uppercase text-7xl md:text-8xl">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your brand, engage your audience, and drive sustainable growth through thoughtful design and strategic implementation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full flex justify-center py-16 border-t border-black/5">
        <div className="w-[95%] max-w-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group relative p-8 shadow-[0_0_0_1px_#c0c0c0] bg-white transition-all duration-300"
              >
                <div className="mb-6 flex items-center">
                  <div className="p-3 bg-gray-100 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <span className="text-sm text-gray-500">0{index + 1}</span>
                </div>
                
                <h2 className="text-4xl mb-4 tracking-normal logo uppercase">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-900">Our Process:</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.process}</p>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Timeline: </span>
                    <span className="text-sm text-gray-600">{service.timeline}</span>
                  </div>
                </div>


              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full flex justify-center py-16 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] border-t border-black/5">
        <div className="w-[95%] max-w-container">
          <div className="text-center mb-12">
            <h2 className="mb-4 tracking-normal logo uppercase text-5xl">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine creative excellence with technical expertise to deliver solutions that not only look great but perform exceptionally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 tracking-wide ">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-4xl mb-2 logo uppercase">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-balance">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center py-20 border-t border-black/5">
        <div className="w-[95%] max-w-container text-center">
          <h2 className="mb-6 tracking-normal logo uppercase text-5xl">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="cursor-pointer px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
                Start Your Project
              </button>
            </Link>
            <Link href="/#projects">
              <button className="cursor-pointer px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesOverview