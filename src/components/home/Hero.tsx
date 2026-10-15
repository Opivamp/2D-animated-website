'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-between overflow-hidden px-6 pt-36 pb-16 bg-[#0C0C0C]">
      {/* Background Hero Vehicle Photography with Smooth Cinematic Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className={`relative w-full h-full transition-transform duration-[4000ms] ease-out ${
            mounted ? 'scale-100' : 'scale-105'
          }`}
        >
          <Image
            src="/images/02dd1fb0de568518e405be67ae7dc3ef47fe383a-1320x2388.jpg"
            alt="A custom Forge Porsche 911 GT3, Lamborghini Huracán, Lotus Emira, Land Rover Defender, and Mercedes G-Wagen parked on a wet surface."
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-75 contrast-110"
          />
        </div>
        {/* Soft Vignettes for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]/80" />
        <div className="absolute inset-0 bg-[#0C0C0C]/35" />
      </div>

      {/* Main Hero Typography with Smooth Reveal Transition */}
      <div className="relative z-10 w-full max-w-[130rem] mx-auto text-center mt-12 sm:mt-16">
        <div className="overflow-hidden">
          <h1
            className={`font-editorial text-[clamp(4.8rem,9vw,9.8rem)] font-extralight tracking-[-0.03em] leading-[1.05] text-[#F2F1ED] capitalize max-w-[110rem] mx-auto text-balance transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
          >
            For Those Who Refuse Ordinary
          </h1>
        </div>
      </div>

      {/* Hero Supporting Description & Atelier Tag */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto text-center">
        <div className="overflow-hidden">
          <p
            className={`font-geist text-[clamp(1.5rem,2.2vw,2.2rem)] font-light text-[#F2F1ED]/80 leading-relaxed max-w-[70rem] mx-auto text-balance transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            A luxury automotive atelier for bespoke styling, performance and craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}
