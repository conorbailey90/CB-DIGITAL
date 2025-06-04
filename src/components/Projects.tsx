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
    title: 'Axionet',
    description: 'A bold, interactive portfolio for a creative agency, showcasing their work with dynamic animations and clean design.',
    image: '/images/axios-mockup.png',
  },
];

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [displayText, setDisplayText] = useState(projects[0].title);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projectTitle = useRef<(HTMLDivElement | null)>(null);

  // Trigger scramble animation when project index changes
  useEffect(() => {
    const newTitle = projects[currentProjectIndex].title;
    scrambleText(newTitle, (chars) => setDisplayText(chars.join('')), {
      maxIterations: 25,
      scrambleInterval: 30
    });
  }, [currentProjectIndex]);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if(projectTitle.current?.getBoundingClientRect().top == 0){
  //       projectRefs.current.forEach((ref, idx) => {
  //         const {top, bottom} = ref!.getBoundingClientRect();
  //         const threshold = window.innerWidth < 768 ? window.innerHeight * .25 : window.innerHeight * .5 
  //         if(top < threshold && bottom > threshold){
  //           setCurrentProjectIndex(idx)
  //         }
  //       })
  //     }
  //   })
    
  // }, [])

 useEffect(() => {
  const handleScroll = () => {
    const titleTop = projectTitle.current?.getBoundingClientRect().top;
    if (titleTop == null || Math.abs(titleTop) > 1) return;

    const threshold = window.innerWidth < 768 ? window.innerHeight * 0.25 : window.innerHeight * 0.5;
    let newIndex = currentProjectIndex;

    projectRefs.current.some((ref, idx) => {
      if (ref) {
        const { top, bottom } = ref.getBoundingClientRect();
        if (top <= threshold && bottom >= threshold) {
          newIndex = idx;
          return true;
        }
      }
      return false;
    });

    if (newIndex !== currentProjectIndex) {
      setCurrentProjectIndex(newIndex);
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, [currentProjectIndex]);

  const setProjectRef = (index: number) => (el: HTMLDivElement | null) => {
    projectRefs.current[index] = el;
  };

  return (
    <section id="projects" className="flex justify-center py-8 bg-white">
      <div className="relative w-full">
        {/* Sticky Scrambled Title */}
        <div className="absolute top-0 z-10 w-full h-[150vh] mix-blend-difference md:h-[300vh]">
          <div ref={projectTitle} className="sticky top-0 w-full h-[50vh] flex items-center justify-center md:h-screen">
            <p className="text-white text-4xl pt-3 md:text-6xl whitespace-pre tracking-normal w-[95%] logo uppercase leading-[.7] overflow-hidden relative ">
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