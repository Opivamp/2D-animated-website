'use client';

import React from 'react';
import Image from 'next/image';
import { MARQUES } from '@/data/marques';

export default function MarqueStrip() {
  // Duplicate array to achieve continuous looping marquee
  const marquesDouble = [...MARQUES, ...MARQUES];

  return (
    <section className="relative py-16 sm:py-20 bg-[#0C0C0C] border-y border-[#F2F1ED]/10 overflow-hidden select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee items-center gap-16 sm:gap-24">
        {marquesDouble.map((marque, idx) => (
          <div
            key={`${marque.name}-${idx}`}
            className="flex items-center justify-center shrink-0 w-32 sm:w-40 h-16 opacity-40 hover:opacity-100 transition-opacity duration-300 filter invert"
          >
            <Image
              src={marque.logo}
              alt={`${marque.name} logo`}
              width={120}
              height={40}
              className="max-h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
