'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface ProjectProps {
  title: string;
  image: string;
}

const Project = ({ title, image }: ProjectProps) => {
  const trigger = useRef<HTMLDivElement | null>(null);
  const target = useRef<HTMLDivElement | null>(null);

  const triggerId = `animated-project-${title}`
  useEffect(() => {
    if (trigger.current && target.current) {
      const animation = gsap.fromTo(
        target.current,
        {
        yPercent: 0, // Start position (15% down)
        },
        {
          yPercent: -15, // End position (15% up)
          ease: 'none', // Critical: No easing for constant speed
          scrollTrigger: {
            trigger: trigger.current,
            start: 'top bottom', // When trigger enters viewport from bottom
            end: 'bottom top',   // When trigger exits viewport from top
            scrub: true,
          //   markers: true,
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
    <div style={{border: '1px solid black'}} ref={trigger} className="relative h-[50vh] overflow-hidden md:h-screen">
      <div
        ref={target}
        className="absolute w-full h-[130%] -top-[0%] will-change-transform" // Extra height, centered
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Project;