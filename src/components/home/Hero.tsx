'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicWords from '@/components/ui/CinematicWords';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    const img = imageRef.current;
    const content = contentRef.current;
    if (!el || !img || !content) return;

    // Scroll scrub parallax effect on hero
    const ctx = gsap.context(() => {
      gsap.to(img, {
        scale: 1.15,
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(content, {
        yPercent: -25,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      data-page-route="/"
      className="relative min-h-[96vh] flex flex-col items-center justify-between overflow-hidden px-6 pt-36 pb-20 bg-[#0C0C0C]"
    >
      {/* Background Hero Vehicle Photography with Scroll Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={imageRef} className="relative w-full h-full will-change-transform scale-100">
          <Image
            src="/images/02dd1fb0de568518e405be67ae7dc3ef47fe383a-1320x2388.jpg"
            alt="A custom Forge Porsche 911 GT3, Lamborghini Huracán, Lotus Emira, Land Rover Defender, and Mercedes G-Wagen parked on a wet surface."
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-75 contrast-110"
          />
        </div>
        {/* Soft Vignettes & Atelier Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]/85" />
        <div className="absolute inset-0 bg-[#0C0C0C]/40" />
      </div>

      {/* Main Hero Content (Headline + Description) */}
      <div ref={contentRef} className="relative z-10 w-full max-w-[130rem] mx-auto text-center mt-12 sm:mt-20">
        <div data-text="top" className="overflow-hidden mb-8">
          <h1 className="font-editorial text-[clamp(4.8rem,9vw,9.8rem)] font-extralight tracking-[-0.03em] leading-[1.04] text-[#F2F1ED] capitalize max-w-[110rem] mx-auto text-balance">
            <CinematicWords text="For Those Who Refuse Ordinary" as="span" delay={0.1} triggerOnScroll={false} />
          </h1>
        </div>

        <div data-text="bottom" className="overflow-hidden max-w-[85rem] mx-auto">
          <CinematicWords
            as="p"
            delay={0.4}
            triggerOnScroll={false}
            className="font-geist text-[clamp(1.5rem,2.2vw,2.2rem)] font-light text-[#F2F1ED]/80 leading-relaxed max-w-[70rem] mx-auto text-balance"
            text="A luxury automotive atelier for bespoke styling, performance and craftsmanship."
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[120rem] flex justify-center items-center opacity-60">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#F2F1ED]">
          Scroll to explore atelier
        </span>
      </div>
    </section>
  );
}
