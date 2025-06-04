'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { scrambleText } from '@/utils/scramble'

const socialLinks = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>, href: 'https://instagram.com' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#000000" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>, href: 'https://linkedin.com' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#000000" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>, href: 'https://facebook.com' },
]


const AnimatedLink = ({ href, text }: { href: string; text: string }) => {
  const [displayChars, setDisplayChars] = useState<string[]>(text.split(''))

  useEffect(() => {
    setDisplayChars(text.split(''))
  }, [text])

  const handleMouseEnter = () => {
    scrambleText(text, setDisplayChars, {
      maxIterations: 10,
      scrambleInterval: 30
    })
  }

  return (
    <Link
      href={href}
      className="relative tracking-tighter px-2 flex justify-center"
      onMouseEnter={handleMouseEnter}
    >
      <div className='relative overflow-hidden'>
        {/* Invisible text to maintain layout */}
        <span className="invisible" aria-hidden="true">
          {text}
        </span>
        
        {/* Animated text positioned absolutely */}
        <span className="absolute inset-0" style={{ color: 'white' }}>
          {displayChars.map((char, index) => (
            <span
              key={index}
              className="transition-all duration-100"
            >
              {char}
            </span>
          ))}
        </span>
      </div>
    </Link>
  )
}

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const navLinks = useRef(null)
  const menuOpen = () => {
      setIsActive(true);
  }

  const menuClose = () => {
    setIsActive(false);
  }

  return (
    <header className={`fixed top-0 z-50 w-full flex justify-center items-center ${isActive ? '' : ' mix-blend-difference'}`}>
      <nav className=" w-[95%] py-4 flex justify-between items-center">
        <Link href="/" className='text-white logo uppercase text-3xl tracking-normal leading-1 pt-2 '>
          BAILEY DIGITAL
        </Link>
        <div onClick={menuOpen} className='relative cursor-pointer md:hidden'>
          <p className='text-white'>Menu</p>
        </div>
        <ul ref={navLinks} className={`hidden md:flex space-x-8`}>
          <li><AnimatedLink href="/#hero" text="Home" /></li>
          <li><AnimatedLink href="/#about" text="About" /></li>
          <li><AnimatedLink href="/#projects" text="Projects" /></li>
          <li><AnimatedLink href="/#services" text="Services" /></li>
          <li><AnimatedLink href="/#blog" text="Blog" /></li>
          <li><AnimatedLink href="contact" text="Contact" /></li>
        </ul>
      </nav>
      <div className={`absolute ${isActive ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] top-[0] left-0 w-full h-screen flex flex-col items-center transition duration-500 md:hidden`}>
        <div onClick={menuClose} className='absolute right-[2.5%] cursor-pointer py-4'>
          <p className=''>Close</p>
        </div>
        <ul className='w-[95%] py-8'>
          <li><Link onClick={menuClose}  className='logo text-6xl uppercase' href="/#hero">Home</Link></li>
          <li><Link onClick={menuClose}  className='logo text-6xl uppercase' href="/#about">About</Link></li>
          <li><Link onClick={menuClose}  className='logo text-6xl uppercase' href="/#projects">Projects</Link></li>
          <li><Link onClick={menuClose}  className='logo text-6xl uppercase' href="/#blog">Blog</Link></li>
          <li><Link onClick={menuClose}  className='logo text-6xl uppercase' href="/contact">Contact</Link></li>
        </ul>

        <div className='relative w-[95%] bg-black h-[2px]'></div>
          <div className="w-[95%] flex items-start py-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white/70 hover:opacity-50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
      </div>
    </header>
  )
}

export default Navbar