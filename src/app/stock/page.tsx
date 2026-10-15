import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { STOCK_ITEMS } from '@/data/stock';

export const metadata: Metadata = {
  title: 'Bespoke Builds for Sale | Forge Automotive',
  description:
    'Finished Forge Automotive builds for sale now, each with a full specification. Viewings by appointment in Yorkshire and the North West.',
};

export default function StockListingPage() {
  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[160rem] mx-auto">
      {/* Header */}
      <div className="max-w-[100rem] mb-20">
        <span className="font-mono text-[1.3rem] text-[#C5A064] tracking-widest uppercase mb-4 block">
          Current Inventory
        </span>
        <h1 className="font-editorial text-[clamp(4.8rem,8vw,8.8rem)] font-light leading-[1.05] tracking-tight mb-8">
          Available Stock
        </h1>
        <p className="font-geist text-[clamp(1.7rem,2.2vw,2.2rem)] text-[#F2F1ED]/70 font-light leading-relaxed max-w-[80rem]">
          Finished Forge Automotive builds for sale now, each with a full specification. Viewings by appointment in Yorkshire and the North West.
        </p>
      </div>

      {/* Stock Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {STOCK_ITEMS.map((item) => {
          const isClickable = item.status === 'Available';
          const CardWrapper = isClickable ? Link : 'div';
          const cardProps = isClickable ? { href: `/stock/${item.id}` } : {};

          return (
            // @ts-expect-error dynamic wrapper element
            <CardWrapper
              key={item.id}
              {...cardProps}
              className={`group flex flex-col bg-[#161616] border border-[#F2F1ED]/10 rounded-lg overflow-hidden transition-all duration-500 shadow-2xl ${
                isClickable ? 'hover:border-[#F2F1ED]/40 cursor-pointer' : 'cursor-default'
              }`}
            >
              {/* Image Box */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                <Image
                  src={item.coverImage}
                  alt={`${item.code} ${item.model}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center card-hover-image brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="font-mono text-[1.2rem] tracking-wider text-[#C5A064] bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A064]/20">
                    {item.code}
                  </span>
                  <span className="font-mono text-[1.2rem] tracking-wider text-[#F2F1ED] bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F2F1ED]/20">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="font-editorial text-[3.4rem] sm:text-[4rem] font-light text-[#F2F1ED] mb-3 group-hover:text-[#C5A064] transition-colors">
                    {item.model}
                  </h2>
                  <p className="font-geist text-[1.6rem] text-[#F2F1ED]/70 leading-relaxed font-light mb-8">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2F1ED]/10 flex items-center justify-between text-[1.3rem] uppercase tracking-wider font-medium text-[#F2F1ED]">
                  <span>{isClickable ? 'View Specification' : 'Coming Soon'}</span>
                  {isClickable && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  )}
                </div>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </div>
  );
}
