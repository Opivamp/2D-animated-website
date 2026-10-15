import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BUILDS } from '@/data/builds';
import { STOCK_ITEMS } from '@/data/stock';

export const metadata: Metadata = {
  title: 'Sitemap | Forge Automotive',
  description: 'Complete index of all atelier destinations, bespoke builds, and stock inventory.',
};

export default function SitemapPage() {
  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[120rem] mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-3 text-[1.3rem] text-[#F2F1ED]/70 hover:text-[#F2F1ED] transition-colors uppercase tracking-widest font-mono mb-12"
      >
        <span>&larr;</span>
        <span>Return Home</span>
      </Link>

      <span className="font-mono text-[1.2rem] text-[#C5A064] tracking-widest uppercase mb-4 block">
        Directory
      </span>
      <h1 className="font-editorial text-[clamp(4.2rem,7vw,7.2rem)] font-light leading-tight mb-16">
        Sitemap
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Core Sections */}
        <div>
          <h2 className="font-editorial text-[2.6rem] font-light text-[#F2F1ED] mb-6 border-b border-[#F2F1ED]/10 pb-3">
            Atelier Pages
          </h2>
          <ul className="space-y-4 font-geist text-[1.6rem]">
            <li>
              <Link href="/" className="text-[#F2F1ED]/70 hover:text-[#C5A064] transition-colors">
                Home / Atelier
              </Link>
            </li>
            <li>
              <Link href="/builds" className="text-[#F2F1ED]/70 hover:text-[#C5A064] transition-colors">
                Previous Builds Archive
              </Link>
            </li>
            <li>
              <Link href="/stock" className="text-[#F2F1ED]/70 hover:text-[#C5A064] transition-colors">
                Available Stock
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#F2F1ED]/70 hover:text-[#C5A064] transition-colors">
                Contact &amp; Commissions
              </Link>
            </li>
          </ul>
        </div>

        {/* Previous Builds */}
        <div>
          <h2 className="font-editorial text-[2.6rem] font-light text-[#F2F1ED] mb-6 border-b border-[#F2F1ED]/10 pb-3">
            Builds Catalog
          </h2>
          <ul className="space-y-3 font-mono text-[1.4rem]">
            {BUILDS.map((b) => (
              <li key={b.id}>
                <Link
                  href={`/builds/${b.id}`}
                  className="text-[#F2F1ED]/70 hover:text-[#C5A064] transition-colors flex items-center justify-between"
                >
                  <span>{b.code}</span>
                  <span className="font-geist text-[1.4rem]">{b.model}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Available Stock & Legal */}
        <div>
          <h2 className="font-editorial text-[2.6rem] font-light text-[#F2F1ED] mb-6 border-b border-[#F2F1ED]/10 pb-3">
            Stock &amp; Legal
          </h2>
          <ul className="space-y-4 font-geist text-[1.6rem] mb-8">
            {STOCK_ITEMS.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.status === 'Available' ? `/stock/${s.id}` : '/stock'}
                  className="text-[#F2F1ED]/70 hover:text-[#C5A064] transition-colors flex items-center justify-between"
                >
                  <span>{s.model}</span>
                  <span className="font-mono text-[1.2rem] text-[#C5A064]">{s.price}</span>
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="font-editorial text-[2.2rem] font-light text-[#F2F1ED] mb-4 border-b border-[#F2F1ED]/10 pb-2">
            Legal &amp; Policy
          </h3>
          <ul className="space-y-3 font-geist text-[1.4rem]">
            <li>
              <Link href="/cookies" className="text-[#F2F1ED]/60 hover:text-[#F2F1ED] transition-colors">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-[#F2F1ED]/60 hover:text-[#F2F1ED] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-[#F2F1ED]/60 hover:text-[#F2F1ED] transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
