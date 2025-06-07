'use client'

import { Code, Palette, LayoutGrid, Server } from 'lucide-react'
import Link from 'next/link'

function Services() {
  const services = [
      {
        title: 'Web Design',
        description: 'Strategic design solutions that elevate your brand and engage your audience through thoughtful user experiences and UI/UX design.',
        icon: <Palette className="w-6 h-6" />,
        href: '/services'
      },
      {
        title: 'Development',
        description: 'Custom web applications and websites built with modern technologies and best practices for optimal performance.',
        icon: <Code className="w-6 h-6" />,
        href: '/services'
      },
      {
        title: 'Hosting',
        description: 'Reliable, secure web hosting solutions with fast performance, regular backups, and 24/7 monitoring for your peace of mind.',
        icon: <Server className="w-6 h-6" />,
        href: '/services'
      },
      {
        title: 'Digital Strategy',
        description: 'Data-driven approach to digital presence with SEO best practices, ensuring your platform aligns with business goals and drives organic growth.',
        icon: <LayoutGrid className="w-6 h-6" />,
        href: '/services'
      },
    ]

    return (
      <section id='services' className="w-full flex justify-center py-16 border-t border-black/5 bg-white">
        <div className="w-[95%] max-w-container">
          <h2 className="mb-8 tracking-normal logo uppercase text-6xl">Our Services</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Link href={service.href} key={service.title} scroll={true} >
                  <div 
                    className="group relative p-6 shadow-[0_0_0_1px_#c0c0c0] bg-[#ffffff] cursor-pointer h-full transition-all duration-300 hover:bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]"
                  
                  >
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    <span className="block text-sm mb-2">0{index + 1}</span>
                    <h3 className="text-4xl mb-4 tracking-normal logo uppercase">{service.title}</h3>
                    <p className='tracking-tight'>{service.description}</p>
                    <div 
                      className="mt-6 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              
                    >
                      Learn more
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Services 