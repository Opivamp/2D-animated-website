'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MARQUES } from '@/data/marques';
import CinematicWords from '@/components/ui/CinematicWords';

const PILLARS = [
  {
    step: '01',
    title: 'Identity',
    description:
      'Every build begins with the person behind the wheel, shaped around their individual taste, lifestyle, presence and personal sense of identity on the road.',
    image: '/images/da57e5f387ccdbcac3a5062687c96077cce58732-2880x2234.jpg',
    alt: 'Forge Identity – Spirit of Ecstasy',
  },
  {
    step: '02',
    title: 'Insight',
    description:
      'Exterior, interior and performance are brought together through a considered, detail-led approach, creating one complete and fully resolved vision.',
    image: '/images/7e3618f8e7e2adade4756571eb45bc5b269c945f-2880x2174.jpg',
    alt: 'Forge Intent – Custom Carbon Fibre',
  },
  {
    step: '03',
    title: 'Cohesion',
    description:
      'Every modification is chosen with precision, ensuring each detail adds purpose, balance and distinction to the final bespoke automotive build.',
    image: '/images/6ae234c0882d982601f3c56bb5949218746831a5-2880x2218.jpg',
    alt: 'Forge Cohesion – Backend McLaren',
  },
];

export default function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Create ScrollTriggers for each pillar step to switch sticky preview and active indicators
      PILLARS.forEach((_, idx) => {
        ScrollTrigger.create({
          trigger: `#approach-step-${idx}`,
          start: 'top center+=100',
          end: 'bottom center+=100',
          onEnter: () => setActiveStep(idx),
          onEnterBack: () => setActiveStep(idx),
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#0C0C0C] text-[#F2F1ED]">
      {/* 1. Header Banner & Marquee Strip */}
      <section className="relative min-h-[60vh] flex flex-col justify-between overflow-hidden px-6 pt-28 pb-16 border-b border-[#F2F1ED]/5">
        {/* Background Stitching Craftsmanship Photography */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/1ebe90ab77d2912275ef15f9ba86fe2fea1f451f-2880x3600.jpg"
            alt="Hands meticulously stitching red automotive leather"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-40 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/70 to-[#0C0C0C]/85" />
        </div>

        {/* Section Heading */}
        <div className="relative z-10 w-full max-w-[130rem] mx-auto text-center mb-16">
          <h2 className="font-editorial text-[clamp(3.6rem,6.5vw,7.2rem)] font-extralight tracking-[-0.03em] leading-[1.08] text-[#F2F1ED] capitalize">
            <CinematicWords text="Our Approach To Every Build" as="span" />
          </h2>
        </div>

        {/* Infinite Luxury Marques Marquee */}
        <div className="relative z-10 w-full overflow-hidden py-4">
          <div className="flex w-max items-center animate-marquee hover:pause gap-16 sm:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            {[...MARQUES, ...MARQUES, ...MARQUES].map((marque, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center h-12 w-28 sm:w-36">
                <Image
                  src={marque.logo}
                  alt={`${marque.name} logo`}
                  width={120}
                  height={50}
                  className="max-h-10 w-auto object-contain brightness-90 hover:brightness-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Pinned Sticky Storytelling Track */}
      <section ref={trackRef} className="relative w-full max-w-[140rem] mx-auto px-6 py-24 sm:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Pinning Image Showcase (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-32 h-[75vh] rounded-md overflow-hidden bg-[#161616] border border-white/5 shadow-2xl">
            {PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeStep === idx ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
                }`}
                style={{ transitionProperty: 'opacity, transform' }}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="50vw"
                  className="object-cover brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent" />
                
                {/* Active Pillar Pill Counter */}
                <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
                  <span className="font-editorial text-4xl text-[#F2F1ED]">{pillar.step}</span>
                  <span className="h-[1px] w-12 bg-[#F2F1ED]/40" />
                  <span className="font-geist text-sm uppercase tracking-widest text-[#F2F1ED]/70">{pillar.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Narrative Steps that scroll past */}
          <div className="lg:col-span-6 flex flex-col gap-36 sm:gap-48 py-12">
            {PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                id={`approach-step-${idx}`}
                className="min-h-[50vh] flex flex-col justify-center border-t border-[#F2F1ED]/10 pt-12"
              >
                {/* Mobile Preview Image */}
                <div className="lg:hidden relative w-full h-[320px] rounded-md overflow-hidden mb-8 border border-white/10">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center gap-3 mb-6 font-mono text-sm tracking-widest text-[#F2F1ED]/50 uppercase">
                  <span>{pillar.step}</span>
                  <span>/</span>
                  <span>03</span>
                </div>

                <h3 className="font-editorial text-[clamp(3.2rem,5vw,5.6rem)] font-light tracking-[-0.02em] text-[#F2F1ED] mb-6">
                  {pillar.title}
                </h3>

                <p className="font-geist text-xl sm:text-2xl font-light text-[#F2F1ED]/75 leading-relaxed max-w-[50rem] mb-10 text-balance">
                  {pillar.description}
                </p>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-[#F2F1ED]/20 hover:border-[#F2F1ED] hover:bg-[#F2F1ED] hover:text-[#0C0C0C] font-geist text-sm tracking-wider uppercase transition-all duration-300 group"
                  >
                    <span>Start Your Project</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
