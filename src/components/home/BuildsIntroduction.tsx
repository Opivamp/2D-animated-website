'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicWords from '@/components/ui/CinematicWords';

export default function BuildsIntroduction() {
  const containerRef = useRef<HTMLElement>(null);
  const leftCarRef = useRef<HTMLDivElement>(null);
  const mainCarRef = useRef<HTMLDivElement>(null);
  const rightCarRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const leftCar = leftCarRef.current;
    const mainCar = mainCarRef.current;
    const rightCar = rightCarRef.current;
    const topText = topTextRef.current;
    const bottomText = bottomTextRef.current;
    if (!el || !leftCar || !mainCar || !rightCar) return;

    const ctx = gsap.context(() => {
      // 1. Left Car Parallax (Slides vertically on scroll)
      gsap.fromTo(
        leftCar,
        { yPercent: 35 },
        {
          yPercent: -35,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.3,
          },
        }
      );

      // 2. Right Car Parallax (Slides in differential phase)
      gsap.fromTo(
        rightCar,
        { yPercent: -30 },
        {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.3,
          },
        }
      );

      // 3. Center Main Car (Porsche GT3RS) Subtle dynamic breathing scale
      gsap.fromTo(
        mainCar,
        { scale: 0.92 },
        {
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      );

      // 4. Headline drift
      if (topText) {
        gsap.to(topText, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'center top',
            scrub: true,
          },
        });
      }

      if (bottomText) {
        gsap.fromTo(
          bottomText,
          { yPercent: 20 },
          {
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'center bottom',
              end: 'bottom bottom',
              scrub: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[140vh] sm:min-h-[160vh] flex flex-col justify-between overflow-hidden px-6 py-28 sm:py-36 bg-[#0C0C0C] border-b border-[#F2F1ED]/5"
    >
      {/* Background Carbon Pattern Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/1ae29c489c262e30eeef1b5f2c27aea51088455a-740x740.jpg')",
            backgroundRepeat: 'repeat',
            backgroundSize: '370px 370px',
          }}
        />
      </div>

      {/* Top Header Statement: "Ordinary" */}
      <div ref={topTextRef} data-placement="top" className="relative z-10 w-full max-w-[130rem] mx-auto text-center pt-8">
        <div className="overflow-hidden">
          <em className="font-editorial text-[clamp(5.4rem,11vw,12.8rem)] font-extralight tracking-[-0.04em] leading-none text-[#F2F1ED] not-italic select-none block">
            <CinematicWords text="Ordinary" as="span" />
          </em>
        </div>
      </div>

      {/* Center 3-Car Multi-Layer Parallax Composition */}
      <div className="relative z-10 w-full max-w-[120rem] mx-auto my-auto flex items-center justify-center min-h-[600px] sm:min-h-[800px]">
        <div className="relative w-full max-w-[900px] h-[600px] sm:h-[850px] flex items-center justify-center">
          
          {/* Left Car: Mercedes G-Wagon (Eagle eye POV) */}
          <div
            ref={leftCarRef}
            data-car="side"
            data-side="left"
            className="absolute left-0 sm:left-4 lg:-left-12 w-[220px] sm:w-[320px] lg:w-[380px] h-[440px] sm:h-[640px] lg:h-[760px] z-0 opacity-80 lg:opacity-95 will-change-transform drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
          >
            <Image
              src="/images/9e787594ef2847dbc40ccfad10a2d216286d948b-708x1402.png"
              alt="Mercedes G wagon eagle eye POV"
              fill
              sizes="(max-width: 1024px) 35vw, 50vw"
              className="object-contain"
            />
          </div>

          {/* Center Main Car: Porsche 992 GT3RS in Red */}
          <div
            ref={mainCarRef}
            data-car="main"
            className="relative w-[260px] sm:w-[380px] lg:w-[460px] h-[520px] sm:h-[760px] lg:h-[920px] z-10 will-change-transform drop-shadow-[0_35px_60px_rgba(0,0,0,0.95)]"
          >
            <Image
              src="/images/682e73d1b2acb4f13627274e87a4177e916e71ac-708x1402.png"
              alt="Porsche 992 GT3RS in Red with carbon fibre modifications"
              fill
              priority
              sizes="(min-width: 1024px) 70.7rem, 100vw"
              className="object-contain"
            />
          </div>

          {/* Right Car: Land Rover Defender 110 (Eagle eye POV) */}
          <div
            ref={rightCarRef}
            data-car="side"
            data-side="right"
            className="absolute right-0 sm:right-4 lg:-right-12 w-[220px] sm:w-[320px] lg:w-[380px] h-[440px] sm:h-[640px] lg:h-[760px] z-0 opacity-80 lg:opacity-95 will-change-transform drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
          >
            <Image
              src="/images/ba98741cf2c606538db469ad0ae866ba4a03829e-707x1402.png"
              alt="Landrover Defender 110"
              fill
              sizes="(max-width: 1024px) 35vw, 50vw"
              className="object-contain"
            />
          </div>

        </div>
      </div>

      {/* Bottom Header Statement: "Ends Here" */}
      <div ref={bottomTextRef} data-placement="bottom" className="relative z-10 w-full max-w-[130rem] mx-auto text-center pb-8">
        <h2 className="font-editorial text-[clamp(5.4rem,11vw,12.8rem)] font-extralight tracking-[-0.04em] leading-none text-[#F2F1ED] capitalize mb-6">
          <CinematicWords text="Ends Here" as="span" />
        </h2>
        <p className="font-geist text-xl sm:text-2xl font-light text-[#F2F1ED]/75 leading-relaxed max-w-[65rem] mx-auto text-balance">
          Complete expressions of taste, intent and individuality, shaped through detail, restraint and presence.
        </p>
      </div>
    </section>
  );
}
