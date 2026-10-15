import type { Metadata } from 'next';
import './globals.css';
import { MenuProvider } from '@/context/MenuContext';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bespoke Vehicle Builds & Styling | Forge Automotive',
  description:
    'A luxury automotive atelier for bespoke styling, performance and craftsmanship — one-off Defender, G63, Range Rover, Urus and 911 builds.',
  openGraph: {
    title: 'Bespoke Vehicle Builds & Styling | Forge Automotive',
    description:
      'A luxury automotive atelier for bespoke styling, performance and craftsmanship — one-off Defender, G63, Range Rover, Urus and 911 builds.',
    url: 'https://forgeautomotive.co.uk/',
    siteName: 'Forge Automotive',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0C0C0C] text-[#F2F1ED] font-geist antialiased">
        <MenuProvider>
          <SmoothScroll>
            <Header />
            <Menu />
            <main id="page" className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </MenuProvider>
      </body>
    </html>
  );
}
