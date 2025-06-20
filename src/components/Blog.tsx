
// components/Blog.tsx
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  const posts = [
    {
      title: 'How a Custom Website Can Skyrocket Your Business Growth',
      date: 'May 10, 2025',
      image: '/images/rocket.avif',
      link: '/customwebsite'
    },
    {
      title: 'Why a Clean, Minimal Website Design Is Key to Your Business Success',
      date: 'April 28, 2025',
      image: '/images/minimal.avif',
      link: '/cleandesign'
    },
    {
      title: 'Why SEO Is Essential for Your Business',
      date: 'April 15, 2025',
      image: '/images/seo.avif',
      link: '/seo'
    },
  ];

  return (
    <section id="blog" className="py-16 w-full flex justify-center bg-white">
      <div className="w-[95%]">
        <h2 className="tracking-normal logo uppercase text-6xl mb-8">Blog</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {posts.map((post, index) => (
            <Link key={index} href={post.link}>
            <div className="overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                style={{border: '1px solid black'}}
              />
              <div className="py-6">
              
                <h3 className="text-xl tracking-tight font-bold mb-2">{post.title}</h3>
             
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}