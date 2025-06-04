// app/layout.tsx
import type { Metadata } from 'next';
import { SmoothScroll } from '@/components/ui/smooth-scroll'
import './globals.css';

import Navbar from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';


export const metadata: Metadata = {
  title: 'CB Web Design | Creative Web Solutions',
  description: 'CB Web Design crafts stunning, user-focused websites for businesses and creatives.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
         <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
