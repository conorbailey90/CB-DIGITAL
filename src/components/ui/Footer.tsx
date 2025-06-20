import Link from 'next/link'

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Web Design', href: '/services' },
      { label: 'Development', href: '/services' },
      { label: 'Digital Strategy', href: '/services' },
      { label: 'UI/UX Design', href: '/services' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Projects', href: '/#projects' },
      { label: 'Blog', href: '/#blog' },
      { label: 'Contact', href: '/contact' },
    ]
  }
]


const socialLinks = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>, href: 'https://instagram.com' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>, href: 'https://linkedin.com' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>, href: 'https://facebook.com' },
]

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="w-full flex justify-center py-8 md:py-16">
        <div className="w-[95%] max-w-container">
          <div className="grid grid-cols-12 gap-y-12">
 
            <div className="col-span-12 md:col-span-4 space-y-6">
              <Link href="/" className="tracking-tighter uppercase text-2xl">
                <strong>CB </strong>DIGITAL
              </Link>
              <div className="space-y-2">
                <p className="text-sm text-white/70">
           
                </p>
                <p className="text-sm text-white/70">
              
                </p>
              </div>
              <div className="flex gap-6 md:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white/70 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links - Responsive Grid */}
            <div className="col-span-12 md:col-span-4 grid grid-cols-2">
              {footerLinks.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link 
                          href={link.href}
                          className="text-sm text-white/70 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="col-span-12 md:col-span-4">
              {/* <h3 className="text-sm font-semibold mb-4">Stay Updated</h3> */}
              {/* <p className="text-sm text-white/70 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 px-4 py-2 text-sm rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="px-4 py-2 bg-white text-black rounded-md text-sm hover:bg-white/90 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </form> */}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 md:mt-16 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4">
            <p className="text-sm text-white/70 text-center md:text-left">
              {/* © {new Date().getFullYear()} CB Web Design. All rights reserved. */}
            </p>
            {/* <div className="flex gap-8 md:gap-6">
              <Link href="/privacy" className="text-sm text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/70 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
} 