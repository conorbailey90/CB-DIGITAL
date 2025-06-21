
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

function BlogPostSEO() {
  const post = {
    title: 'Why SEO Is Essential for Your Business ',
    description: 'In today’s digital landscape, having a website isn’t enough—you need to be found. At CB Digital, we know that Search Engine Optimization (SEO) is the key to driving traffic, attracting customers, and growing your business. Here’s why SEO matters and how we can help you dominate search results in 2025 and beyond.',
    sections: [
      {
        title: 'What Is SEO and Why Does It Matter?',
        content: 'SEO is the process of optimizing your website to rank higher on search engines like Google, making it easier for potential customers to find you. In 2025, with over 80% of consumers researching online before making a purchase, a strong SEO strategy is critical. At CB Digital, we craft websites with SEO at their core, ensuring your business gets noticed by the right audience.'
      },
      {
        title: 'Key Benefits of SEO for Your Business',
        content: [
          {
            point: 'Increased Visibility',
            detail: 'Ranking higher on Google means more people see your website when searching for services you offer, putting your brand front and center.'
          },
          {
            point: 'Targeted Traffic',
            detail: 'SEO attracts users actively looking for your products or services, increasing the likelihood of conversions and sales.'
          },
          {
            point: 'Cost-Effective Marketing',
            detail: 'Unlike paid ads, organic SEO delivers long-term results without ongoing costs, making it ideal for small businesses with tight budgets.'
          },
          {
            point: 'Builds Credibility',
            detail: 'Websites that appear on the first page of Google are seen as more trustworthy, enhancing your brand’s reputation.'
          }
        ]
      },
      {
        title: 'How CB Digital Boosts Your SEO',
        content: 'At CB Digital, we integrate SEO into every website we build, from keyword research to mobile optimization and fast-loading pages. Our process includes optimizing on-page elements like meta tags, headings, and content, as well as technical SEO to ensure your site is crawlable and indexable. We also set up analytics to track performance and refine your strategy, helping your business stay ahead in 2025 and beyond.'
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
                    src="/images/seo.avif" 
                    alt="SEO Image"
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
              <h2 className="text-xl mb-4 tracking-tights">{section.title}</h2>
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

export default BlogPostSEO