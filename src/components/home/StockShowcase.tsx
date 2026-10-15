'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicWords from '@/components/ui/CinematicWords';

export default function StockShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const bg = bgRef.current;
    if (!el || !bg) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { scale: 1.05, yPercent: 0 },
        {
          scale: 1.18,
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] sm:min-h-[100vh] flex flex-col justify-end overflow-hidden px-6 pb-20 sm:pb-28 pt-36 bg-[#0C0C0C] border-b border-[#F2F1ED]/5"
    >
      {/* Background Fleet Acquisition Photography with Scroll Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={bgRef} className="relative w-full h-full will-change-transform">
          <Image
            src="/images/2bd7f1455a34d387b7cab13cfe092e2bd89f49fb-2880x1868.jpg"
            alt="A custom Forge vehicle parked in the atelier courtyard"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-70 contrast-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/40 to-transparent" />
      </div>

      {/* Foreground Editorial Content */}
      <div className="relative z-10 w-full max-w-[140rem] mx-auto">
        <div className="max-w-[80rem]">
          <h2 className="font-editorial text-[clamp(4.2rem,8vw,8.4rem)] font-extralight tracking-[-0.03em] leading-none text-[#F2F1ED] mb-6">
            <CinematicWords text="Available Stock" as="span" />
          </h2>

          <p className="font-geist text-xl sm:text-2xl font-light text-[#F2F1ED]/80 leading-relaxed mb-10 text-balance">
            Builds available for purchase, refined with intent, engineered with purpose, and ready to make a statement.
          </p>

          <div>
            <Link
              href="/stock"
              className="inline-flex items-center gap-4 px-9 py-5 rounded-full border border-[#F2F1ED]/25 hover:border-[#F2F1ED] bg-[#0C0C0C]/60 backdrop-blur-md hover:bg-[#F2F1ED] hover:text-[#0C0C0C] font-geist text-sm tracking-wider uppercase transition-all duration-300 group shadow-2xl"
            >
              <span>Browse Stock</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
