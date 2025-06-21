
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

function BlogPostCustomWebsite() {
  const post = {
    title: 'How a Custom Website Can Skyrocket Your Small Business Growth',
    description: 'As a business owner, you wear many hats, but your website shouldn’t be a burden. A custom website designed by professionals like CB Digital can be a game-changer, helping you attract more customers, build credibility, and grow your brand. Here’s how a tailored web design can take your business to new heights.',
    sections: [
      {
        title: 'Why Generic Templates Fall Short',
        content: 'Free or low-cost website builders might seem tempting, but they often lead to generic, cookie-cutter sites that fail to stand out. Templates can also come with bloated code, slow load times, and limited customization, all of which hurt your SEO and user experience. A custom website, on the other hand, is built specifically for your brand, ensuring it reflects your unique value and performs at its best.'
      },
      {
        title: 'The Power of a Custom Website',
        content: [
          {
            point: 'Brand Identity',
            detail: 'A custom site showcases your personality, from colors to fonts, making your business memorable and trustworthy.'
          },
          {
            point: 'Optimized Performance',
            detail: 'We build websites with clean code and fast load times, critical for keeping users and ranking high on Google.'
          },
          {
            point: 'Tailored Functionality',
            detail: 'Need an e-commerce store, booking system, or blog? CB Digital creates features that align with your business goals.'
          },
          {
            point: 'SEO Advantage',
            detail: 'Our custom sites are designed with SEO in mind, from keyword-rich content to mobile optimization, helping you get found online.'
          }
        ]
      },
      {
        title: 'A CB Digital Success Story',
        content: 'One of our clients, a local cosmetic and beauty clinic, needed a website to establish credibility and showcase their offerings. Their outdated site failed to highlight their range of treatments or professional image. CB Digital built them a custom website with a user-friendly interface, SEO-optimized treatment pages, clear pricing, and a stunning photo gallery of their work. Within six months, their online bookings increased by 50%, and their site ranked on the first page of Google for key local search terms. That’s the kind of growth we can deliver for your business.'
      },
      {
        title: 'Let CB Digital Build Your Success',
        content: 'At CB Digital, we believe every small business deserves a website that works as hard as they do. Our team takes the time to understand your vision, crafting a custom site that drives traffic and converts visitors into customers. From design to launch, we handle everything, so you can focus on running your business.'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-20 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
        <div className="w-[95%] max-w-container text-center">
          <h1 className="mb-6 tracking-normal logo uppercase text-5xl md:text-6xl">{post.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-normal tracking-tight text-balance">
            {post.description}
          </p>
        </div>
      </section>

       <section className="w-full flex justify-center relative">
          <div className='relative w-[95%] max-w-[800px] aspect-video overflow-hidden my-2 border border-black'>
              <Image
                  src="/images/rocket.avif" 
                  alt="Rocket ship image"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
              />
          </div>
      </section>

      {/* Blog Content Section */}
      <section className="w-full flex justify-center py-16 border-t border-black/5">
        <div className="w-[95%] max-w-[800px]">
          {post.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl mb-4 tracking-tight ">{section.title}</h2>
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

export default BlogPostCustomWebsite