'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const mixAnimChars = "▀▊▋▌▍▎▏▐▕▖▗▘▙▚▛▜▝▞▟"

const getRandomChar = () =>
  mixAnimChars[Math.floor(Math.random() * mixAnimChars.length)]

const AnimatedLink = ({ href, text }: { href: string; text: string }) => {
  const [displayChars, setDisplayChars] = useState<string[]>(text.split(''))

  useEffect(() => {
    setDisplayChars(text.split(''))
  }, [text])

  const handleMouseEnter = () => {
    const originalChars = text.split('')
    let iteration = 0
    const maxIterations = 10
    const scrambleInterval = 30

    const interval = setInterval(() => {
      setDisplayChars((prevChars) =>
        prevChars.map((char, i) => {
          if (iteration < maxIterations) {
            // Occasionally leave the correct character to create effect
            return Math.random() > iteration / maxIterations
              ? getRandomChar()
              : originalChars[i]
          } else {
            return originalChars[i]
          }
        })
      )

      iteration++
      if (iteration > maxIterations) {
        clearInterval(interval)
        setDisplayChars(originalChars)
      }
    }, scrambleInterval)
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
  return (
    <header className="sticky top-0 z-50 bg-main-bg w-full flex justify-center">
      <nav className=" w-[95%] py-4 flex justify-between items-center">
        <Link href="/" className='logo'>
          CB Web Design
        </Link>
        <ul className="flex space-x-8">
          <li><AnimatedLink href="/" text="Home" /></li>
          <li><AnimatedLink href="#about" text="About" /></li>
          <li><AnimatedLink href="#projects" text="Projects" /></li>
          <li><AnimatedLink href="#blog" text="Blog" /></li>
          <li><AnimatedLink href="/contact" text="Contact" /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar