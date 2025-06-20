'use client'

import { Code, Palette, Server, LayoutGrid, CheckCircle, Users, Zap, Shield, TrendingUp, Star } from 'lucide-react'
import Link from 'next/link'

function ServicesOverview() {
  const services = [
    {
      title: 'Web Design',
      description: 'We specialize in crafting clean, minimal, and functional websites that put your business/brand front and center. My focus is on creating intuitive, user-friendly designs with sleek UI/UX that drive engagement and deliver results.',
      icon: <Palette className="w-6 h-6" />,
      features : [
        'Clean & Impactful Brand Identity',
        'Intuitive UX Design',
        'Minimalist UI Design',
        'Responsive & Streamlined Design Systems',
        'Strategic Wireframing & Prototyping'
        ],
      process: 'We begin by diving deep into your brand and audience to align with your vision. Next, we craft clear, functional wireframes and prototypes to lay a solid foundation. Finally, we deliver a fully functional, clean, minimal, and high-performing website that engages and converts.',
    },
    {
      title: 'Development',
      description: 'We develop custom websites and web applications with tailored features designed to meet your unique needs, emphasizing clean, minimal, and functional design. Using modern technologies and best practices, we deliver fast, reliable, and high-performing solutions that drive results.',
      icon: <Code className="w-6 h-6" />,
      features : [
        'Tailored Website Features',
        'User-Friendly Website Interfaces',
        'Custom Data Management Solutions',
        'Seamless Website Integrations',
        'Fast & Reliable Website Performance'
        ],
      process: 'From concept to launch, we create tailored, user-friendly websites with custom features, built using modern tools to ensure fast, reliable, and scalable results that grow with your business.',
    },
    {
      title: 'Hosting',
      description: 'We provide reliable, secure web hosting with fast performance and 24/7 monitoring, ensuring your website stays online and runs smoothly for your peace of mind.',
      icon: <Server className="w-6 h-6" />,
      features: [
        'Fast & Reliable Website Performance',
        'Top-Notch Website Security',
        'Easy Website Management Tools',
        'Round-the-Clock Monitoring & Support',
        ],
      process: 'We take care of all hosting details, from setup to ongoing support, so you can focus on growing your business with a fast, secure, and reliable website.'
    },
    {
      title: 'Digital Strategy',
      description: 'We create simple, effective plans to boost your online presence, making your website easier to find on search engines and tailored to help your business grow.',
      icon: <LayoutGrid className="w-6 h-6" />,
      features: [
        'SEO Strategy & Implementation',
        'Analytics & Performance Tracking',
        'Content Strategy Planning',
        'Conversion Rate Optimization',

      ],
      process: 'We study your audience, make your website easier to find on search engines, and build clear, practical plans to drive real results and steady business growth.',
   
    },
  ]

  const pricingPlans = [
    {
      name: 'Essential',
      price: '£500',
      description: 'Perfect for small businesses and personal brands looking to establish their online presence.',
      features: [
        'Custom Responsive Design',
        'Up to 5 Pages',
        'SEO Optimization',
        'Mobile-First Approach',
        'Contact Forms',
        'Social Media Integration',
        '1 Year Free Hosting',
        'Basic Analytics Setup',
        '2 Rounds of Revisions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '£800',
      description: 'Ideal for growing businesses requiring advanced functionality and database integration.',
      features: [
        'Everything in Essential',
        'Custom Database Integration',
        'Content Management System',
        'Performance Optimization',
        '1 Year Free Hosting',
        'Google Analytics & Search Console',
        'Email Marketing Integration',
        'Backup & Security Features',
        'Unlimited Revisions',
      ],
      timeline: '4-8 weeks',
      popular: true
    }
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-normal tracking-tight text-balance">
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
                  <h4 className="font-semibold mb-3 text-gray-900">What&apos;s Included:</h4>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full flex justify-center py-16 border-t border-black/5">
        <div className="w-[95%] max-w-container">
          <div className="text-center mb-12">
            <h2 className="mb-4 tracking-normal logo uppercase text-5xl">Pricing Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Transparent pricing with no hidden fees. Choose the package that best fits your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative p-8 shadow-[0_0_0_1px_#c0c0c0] bg-white transition-all duration-300 ${
                  plan.popular ? 'shadow-[0_0_0_2px_#000]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black text-white px-4 py-1 text-sm flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-4xl mb-2 tracking-normal logo uppercase">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold logo tracking-wide">{plan.price}</span>
                    <span className="text-gray-500 ml-2">starting from</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">What&apos;s Included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

            

                <Link href="/contact">
                  <button className={`w-full cursor-pointer px-8 py-3 transition-all ${
                    plan.popular 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'border border-black text-black hover:bg-black hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need something custom? We offer bespoke solutions tailored to your specific requirements.
            </p>
            <Link href="/contact">
              <button className="cursor-pointer px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all">
                Request Custom Quote
              </button>
            </Link>
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
            Let&apos;s discuss your project and create something exceptional together.
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