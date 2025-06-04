'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Setup GSAP ticker for Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Disable GSAP's default lag smoothing to work better with Lenis
    gsap.ticker.lagSmoothing(0)

    // Alternative method using requestAnimationFrame (comment out gsap.ticker approach above if using this)
    /*
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    */

    return () => {
      // Clean up
      lenis.off('scroll', ScrollTrigger.update)
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
      lenis.destroy()
      ScrollTrigger.killAll()
    }
  }, [])

  return <>{children}</>
}

// Optional: Export a hook for using ScrollTrigger in components
export function useScrollTrigger() {
  useEffect(() => {
    // Refresh ScrollTrigger when component mounts
    ScrollTrigger.refresh()
    
    return () => {
      // Clean up any ScrollTriggers created by this component
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id?.startsWith('component-')) {
          trigger.kill()
        }
      })
    }
  }, [])
}