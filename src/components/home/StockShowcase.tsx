'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { STOCK_ITEMS } from '@/data/stock';

export default function StockShowcase() {
  return (
    <section className="relative bg-[#0C0C0C] text-[#F2F1ED] py-28 sm:py-36 px-6 sm:px-12 border-b border-[#F2F1ED]/10">
      <div className="max-w-[150rem] mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <h2 className="font-editorial text-[clamp(3.6rem,6vw,6.4rem)] font-light leading-[1.1] tracking-tight mb-4">
              Available Stock
            </h2>
            <p className="font-geist text-[1.7rem] text-[#F2F1ED]/70 font-light max-w-[65rem]">
              Builds available for purchase, refined with intent, engineered with purpose, and ready to make a statement.
            </p>
          </div>
          <Link href="/stock" className="forge-btn group shrink-0">
            <span>Browse Stock</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* Stock Cards Grid (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {STOCK_ITEMS.map((item) => {
            const isClickable = item.status === 'Available';
            const CardWrapper = isClickable ? Link : 'div';
            const cardProps = isClickable ? { href: `/stock/${item.id}` } : {};

            return (
              // @ts-expect-error dynamic wrapper element
              <CardWrapper
                key={item.id}
                {...cardProps}
                className={`group flex flex-col bg-[#161616] border border-[#F2F1ED]/10 rounded-lg overflow-hidden transition-all duration-500 shadow-xl ${
                  isClickable ? 'hover:border-[#F2F1ED]/40 cursor-pointer' : 'cursor-default'
                }`}
              >
                {/* Image Aspect Box */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={item.coverImage}
                    alt={`${item.code} ${item.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center card-hover-image brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <span className="font-mono text-[1.2rem] tracking-wider text-[#C5A064] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A064]/20">
                      {item.code}
                    </span>
                    <span className="font-mono text-[1.2rem] tracking-wider text-[#F2F1ED] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#F2F1ED]/20">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-editorial text-[3rem] sm:text-[3.6rem] font-light text-[#F2F1ED] mb-3 group-hover:text-[#C5A064] transition-colors">
                      {item.model}
                    </h3>
                    <p className="font-geist text-[1.5rem] text-[#F2F1ED]/70 leading-relaxed font-light mb-8">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F2F1ED]/10 flex items-center justify-between text-[1.3rem] uppercase tracking-wider font-medium text-[#F2F1ED]">
                    <span>{isClickable ? 'View Build' : 'Coming Soon'}</span>
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
    </section>
  );
}
