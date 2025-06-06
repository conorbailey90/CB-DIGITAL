// components/About.tsx
import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="py-16 flex flex-col items-center bg-white" >
      <div className="grid grid-cols-12 w-[95%]">
        <h2 className="mb-4 col-span-6 tracking-normal logo uppercase text-6xl">About Us</h2>
        <div className="col-span-12 md:col-span-6">
          <p className=" mb-4 text-sm md:text-base">
            <strong>Bespoke websites designed to elevate your business.</strong> <br />
            CB Digital specialises in clean, minimal web design that communicates clearly and looks sharp on every device. Each website is purpose-built — no templates, no clutter — just custom design that reflects your brand and delivers a smooth, engaging user experience.</p>
          <p className="mb-4 text-sm md:text-base">
            <strong>Modern development with performance in mind.</strong> <br />
            Every site is built using best-in-class tools and frameworks to ensure fast load times, responsive layouts, and long-term maintainability. Whether it&apos;s a simple brochure site or a more complex solution, development is handled with precision to ensure performance, accessibility, and SEO readiness from day one.</p>
          <p className=" mb-4 text-sm md:text-base">
            <strong>Fully managed hosting and ongoing support.</strong><br />
            CB Digital offers reliable, secure hosting options with technical support and site maintenance included. From setup to launch and beyond, everything is handled to keep your website running smoothly — including updates, backups, and performance monitoring — so you can focus on your business.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 w-[95%] py-8 ">
        <div className="relative  mb-4 col-span-12 md:col-span-4 col-start-1 aspect-video">
          <Image
           
            src="/images/Hero.jpg" 
            alt="Descriptive alt text"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <p className="col-span-8 md:col-span-3 md:col-start-7 text-sm">CB Digital delivers end-to-end digital solutions — from design and development to hosting and support — for businesses that value quality, clarity, and long-term growth.</p>
       
      </div>
    </section>
  );
}
