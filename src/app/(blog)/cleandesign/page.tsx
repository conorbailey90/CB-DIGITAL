'use client'

import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

function BlogPostMinimalDesign() {
  const post = {
    title: 'Why a Clean, Minimal Website Design Is Key to Your Business Success',
    description: 'In a world full of digital noise, a clean, minimal website design can make your business stand out. At CB Digital, we believe simplicity is powerful—it enhances user experience, boosts SEO, and drives conversions. Here’s why a minimal design is essential for your business and how we can help you achieve it.',
    sections: [
      {
        title: 'What Is a Clean, Minimal Design?',
        content: 'A clean, minimal website design focuses on simplicity, clarity, and functionality. It strips away unnecessary elements, using ample white space, simple typography, and a cohesive color palette to create an intuitive and visually appealing experience. At CB Digital, we craft minimal designs that prioritize your brand’s message without overwhelming your visitors.'
      },
      {
        title: 'The Benefits of Minimal Design',
        content: [
          {
            point: 'Enhanced User Experience',
            detail: 'Minimal designs make navigation effortless, helping users find what they need quickly. Clear layouts and intuitive interfaces reduce frustration and keep visitors engaged.'
          },
          {
            point: 'Faster Load Times',
            detail: 'Fewer elements and optimized code mean your site loads quickly, improving user satisfaction and boosting your Google rankings.'
          },
          {
            point: 'Stronger Brand Identity',
            detail: 'A minimal design highlights your brand’s essence through thoughtful visuals, making your business memorable and professional.'
          },
          {
            point: 'Higher Conversion Rates',
            detail: 'By focusing on clear calls-to-action and eliminating distractions, minimal designs guide users toward booking, buying, or contacting you.'
          }
        ]
      },
      {
        title: 'How CB Digital Delivers Minimalist Excellence',
        content: 'At CB Digital, we start by understanding your brand and audience to create a minimal design that’s both beautiful and functional. Our process includes strategic wireframing, responsive design, and SEO optimization to ensure your site performs as well as it looks. Whether you’re a small business or a growing enterprise, we tailor every detail to drive results.'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-20 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
        <div className="w-[95%] max-w-[800px] text-center">
          <h1 className="mb-6 tracking-normal logo uppercase text-5xl md:text-6xl">{post.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-normal tracking-tight text-balance">
            {post.description}
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="w-full flex justify-center py-16 border-t border-black/5">
        <div className="w-[95%] max-w-[800px]">
          {post.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl mb-4 tracking-tights">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="space-y-4">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">{item.point}: </span>
                        {item.detail}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>


    </div>
  )
}

export default BlogPostMinimalDesign