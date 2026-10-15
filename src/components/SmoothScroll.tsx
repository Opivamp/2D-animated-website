'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMenu } from '@/context/MenuContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const { menuOpen } = useMenu();

  useEffect(() => {
    // 1. Initialize Lenis smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // 2. Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // 3. Make Lenis instance globally accessible for Back to Top and navigation
    (window as any).__lenis = lenis;

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.off('scroll', ScrollTrigger.update);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as any).__lenis;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      if (menuOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [menuOpen]);

  return <>{children}</>;
}
