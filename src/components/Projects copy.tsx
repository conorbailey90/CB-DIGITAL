'use client'

import { useEffect, useRef, useState } from "react";
import { scrambleText } from '@/utils/scramble'
import Project from "./ui/Project";

const projects = [
  {
    title: 'Faceworx',
    description: 'A serene, responsive website for a luxury eco-retreat, featuring immersive visuals and seamless booking integration.',
    image: '/images/fw-mockup.png',
  },
  {
    title: 'BPC Essex',
    description: 'A vibrant e-commerce platform for a local coffee shop, with a focus on user experience and brand storytelling.',
       image: '/images/bpc-mockup.png',
  },
  {
    title: 'Creative Agency Portfolio',
    description: 'A bold, interactive portfolio for a creative agency, showcasing their work with dynamic animations and clean design.',
    image: '/images/axios-mockup.png',
  },
];

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [displayText, setDisplayText] = useState(projects[0].title);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Trigger scramble animation when project index changes
  useEffect(() => {
    const newTitle = projects[currentProjectIndex].title;
    scrambleText(newTitle, (chars) => setDisplayText(chars.join('')), {
      maxIterations: 25,
      scrambleInterval: 30
    });
  }, [currentProjectIndex]);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      let closestIndex = currentProjectIndex;
      let minDistance = Infinity;

      entries.forEach((entry) => {
        const { top, bottom } = entry.target.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = (top + bottom) / 2;
        const distance = Math.abs(viewportCenter - elementCenter);

        if (entry.isIntersecting && distance < minDistance) {
          minDistance = distance;
          const projectIndex = projectRefs.current.findIndex((ref) => ref === entry.target);
          if (projectIndex !== -1) {
            closestIndex = projectIndex;
          }
        }
      });

      if (closestIndex !== currentProjectIndex) {
        setCurrentProjectIndex(closestIndex);
      }
    },
    {
      threshold: [0, 0.5, 1], // Multiple thresholds for smoother detection
      rootMargin: '0px',
    }
  );

  projectRefs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => observer.disconnect();
}, [currentProjectIndex]);

  const setProjectRef = (index: number) => (el: HTMLDivElement | null) => {
    projectRefs.current[index] = el;
  };

  return (
    <section id="projects" className="flex justify-center py-8 bg-white">
      <div className="relative w-full">
        {/* Sticky Scrambled Title */}
        <div className="absolute top-0 z-10 w-full h-[150vh] mix-blend-difference md:h-[300vh]">
          <div className="sticky top-0 w-full h-[50vh] flex items-center justify-center md:h-screen">
            <p className="text-white text-4xl font-bold whitespace-pre tracking-normal w-[95%] ">
              {displayText}
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col relative z-0">
          {projects.map((project, index) => (
            <div key={index} ref={setProjectRef(index)} className="h-[50vh] md:h-screen">
              <Project title={project.title} image={project.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}