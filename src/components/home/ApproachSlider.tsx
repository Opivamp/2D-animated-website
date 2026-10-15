'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { APPROACH_PILLARS } from '@/data/approach';

export default function ApproachSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-advance active pillar with progress bar
  useEffect(() => {
    setProgress(0);
    const intervalTime = 60; // ms
    const totalDuration = 6000; // 6s per slide
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % APPROACH_PILLARS.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const selectPillar = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  return (
    <section className="relative bg-[#0C0C0C] text-[#F2F1ED] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#F2F1ED]/10">
      <div className="max-w-[150rem] mx-auto">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-editorial text-[clamp(3.6rem,6vw,6.4rem)] font-light leading-[1.1] tracking-tight">
              Our Approach To Every Build
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <p className="font-geist text-[1.8rem] text-[#F2F1ED]/70 leading-relaxed font-light">
              Every decision is intentional, every detail has purpose based on your taste, your lifestyle, and your standards.
            </p>
            <Link href="/contact" className="forge-btn group">
              <span>Start Your Project</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Interactive 3-Pillar Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Pillar Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {APPROACH_PILLARS.map((pillar, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => selectPillar(idx)}
                  className={`relative text-left p-6 sm:p-8 rounded-lg transition-all duration-500 border overflow-hidden ${
                    isActive
                      ? 'bg-[#161616] border-[#F2F1ED]/20 shadow-2xl'
                      : 'bg-transparent border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  {/* Subtle Top Progress Line for Active Tab */}
                  {isActive && (
                    <div
                      className="absolute top-0 left-0 h-[2px] bg-[#C5A064] transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}

                  <div className="flex items-center gap-4 mb-3 font-mono text-[1.3rem] text-[#C5A064] tracking-widest uppercase">
                    <span>{pillar.id}</span>
                    <span className="h-[1px] w-8 bg-[#C5A064]/40" />
                  </div>
                  <h3 className="font-editorial text-[2.8rem] sm:text-[3.4rem] font-light text-[#F2F1ED] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-geist text-[1.6rem] text-[#F2F1ED]/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Showcase Container */}
          <div className="lg:col-span-7 relative h-[450px] sm:h-[620px] rounded-lg overflow-hidden border border-[#F2F1ED]/10 shadow-2xl bg-black">
            {APPROACH_PILLARS.map((pillar, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={pillar.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[#F2F1ED]/70 font-mono text-[1.2rem] uppercase tracking-wider">
                    <span className="text-[#C5A064]">{pillar.id} &mdash; {pillar.title}</span>
                    <span>Forge Atelier Process</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
