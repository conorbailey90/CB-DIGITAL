
// components/Blog.tsx
import Image from "next/image";
export default function Blog() {
  const posts = [
    {
      title: '5 Web Design Trends to Watch in 2025',
      excerpt: 'Discover the latest trends shaping the future of web design, from bold typography to immersive storytelling.',
      date: 'May 10, 2025',
      image: '/images/Hero.jpg',
    },
    {
      title: 'How to Optimize Your Website for SEO',
      excerpt: 'Learn practical tips to boost your website’s visibility and drive organic traffic with smart SEO strategies.',
      date: 'April 28, 2025',
      image: '/images/Hero.jpg',
    },
    {
      title: 'The Power of User-Centered Design',
      excerpt: 'Why putting your users first is the key to creating websites that engage and convert.',
      date: 'April 15, 2025',
     image: '/images/Hero.jpg',
    },
  ];

  return (
    <section id="blog" className="py-16 w-full flex justify-center bg-white">
      <div className="w-[95%]">
        <h2 className="tracking-normal logo uppercase text-6xl mb-8">Blog</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="py-6">
                <p className="text-sm text-forest-green mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}