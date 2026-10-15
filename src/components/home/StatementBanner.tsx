'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicWords from '@/components/ui/CinematicWords';

export default function StatementBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const img = imageRef.current;
    if (!el || !img) return;

    const ctx = gsap.context(() => {
      // Smooth vertical parallax scrub matching reference site
      gsap.fromTo(
        img,
        { yPercent: 20 },
        {
          yPercent: -20,
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
      className="relative min-h-[80vh] flex items-center overflow-hidden px-6 py-28 sm:py-36 bg-[#0C0C0C] border-b border-[#F2F1ED]/5"
    >
      <div className="w-full max-w-[140rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Vertical Image with Scroll Scrub Parallax */}
        <div className="lg:col-span-5 relative h-[500px] sm:h-[650px] w-full rounded-md overflow-hidden bg-[#161616] border border-white/5 shadow-2xl">
          <div ref={imageRef} className="relative w-full h-[130%] -top-[15%] will-change-transform">
            <Image
              src="/images/9c69426f1711db9bc458b27925b9ac7e0d81d0aa-540x960.jpg"
              alt="Close-up luxury vehicle craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center brightness-90 contrast-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Column: Statement Heading & Philosophy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="font-editorial text-[clamp(3.4rem,5.5vw,6.4rem)] font-extralight tracking-[-0.03em] leading-[1.08] text-[#F2F1ED] mb-8 text-balance">
            <CinematicWords
              text="A vehicle should say something before it moves. Every line, material, and finish is considered."
              as="span"
            />
          </h2>

          <p className="font-geist text-xl sm:text-2xl font-light text-[#F2F1ED]/75 leading-relaxed max-w-[62rem] mb-12 text-balance">
            Our services are shaped with intent, from exterior styling and interior refinement to performance upgrades, detailing and bespoke finishes; each detail sharpens the vehicle’s character without overpowering it.
          </p>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-9 py-5 rounded-full border border-[#F2F1ED]/20 hover:border-[#F2F1ED] hover:bg-[#F2F1ED] hover:text-[#0C0C0C] font-geist text-sm tracking-wider uppercase transition-all duration-300 group shadow-lg"
            >
              <span>Start Your Project</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
