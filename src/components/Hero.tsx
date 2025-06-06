'use client'
import { useRef, useEffect } from "react";
import Image from "next/image";
import Time from "./ui/Time";
import gsap from "gsap";

export default function Hero() {

  const trigger = useRef<HTMLDivElement | null>(null);
  const target = useRef<HTMLDivElement | null>(null);

  const triggerId = `hero-image`
  useEffect(() => {
    if (trigger.current && target.current) {
      const animation = gsap.fromTo(
        target.current,
        { yPercent: 0 }, // Start position
        {
          yPercent: -15, // End position
          ease: 'none',
          scrollTrigger: {
            id: triggerId, // Assign the ID for ScrollTrigger
            trigger: trigger.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            // markers: true, // Uncomment for debugging
            invalidateOnRefresh: true,
          },
        }
      );

      // Cleanup on unmount
      return () => {
        animation.scrollTrigger?.kill(); // Kill the specific ScrollTrigger instance
      };
    }
  }, []);

  return (
    <section id="hero" className="relative flex flex-col items-center w-full">
      <div className="relative w-full flex justify-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] " />
        <div className="w-[95%] grid grid-cols-12 auto-rows-min pt-24 pb-12 md:pt-24 md:pb-12">
            <div className=" col-span-6">
              <h1 className="text-6xl mb-4 tracking-normal text-black logo uppercase lg:text-8xl">CB DIGITAL</h1>
              <h5 className="tracking-tighter">Billericay, UK</h5>
              <Time />
  
            </div>
            <p className="col-start-1 col-span-12 md:col-span-4 md:col-start-9 text-sm mb-2 tracking-tighter text-black">
              Custom websites and smart automation built to grow your business.
              I&apos;m Conor Bailey, a freelance web designer and developer behind CB Digital. I build clean, fast, and mobile-friendly websites that help small businesses stand out online, attract more customers, and save time with custom automation tools.
            </p>
        </div>
      </div>
      <div ref={trigger} style={{border: '1px solid black'}} className="relative w-full h-[60vh] bg-cover overflow-x-hidden pointer-events-none select-none">
        <div ref={target} className="absolute w-full h-[130%] -top-[0%] will-change-transform">
          <Image
              src={'/images/Hero1.avif'}
              alt={'Hero image'}
              fill
              className="object-cover"
              priority
              
          />
        </div>
      </div>
    </section>
  );
}