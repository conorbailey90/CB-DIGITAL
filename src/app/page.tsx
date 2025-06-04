// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";


export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <About />
      <Projects />

      <Services />
      {/* <Process /> */}
      <Blog />
      <CTA />
      {/* <Contact /> */}

    </main>
  );
}
