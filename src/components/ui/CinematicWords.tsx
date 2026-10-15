'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CinematicWordsProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';
  className?: string;
  delay?: number;
  triggerOnScroll?: boolean;
}

export default function CinematicWords({
  text,
  as: Component = 'div',
  className = '',
  delay = 0,
  triggerOnScroll = true,
}: CinematicWordsProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>('.cinematic-word');
    if (!words.length) return;

    // Set initial cinematic hidden state (y, blur, opacity)
    gsap.set(words, {
      opacity: 0,
      y: 16,
      filter: 'blur(10px)',
      display: 'inline-block',
      willChange: 'transform, opacity, filter',
    });

    const animVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.85,
      stagger: 0.04,
      ease: 'power3.out',
      delay,
      onComplete: () => {
        gsap.set(words, { willChange: 'auto' });
      },
    };

    if (triggerOnScroll) {
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(words, animVars);
        },
      });
      return () => st.kill();
    } else {
      const tween = gsap.to(words, animVars);
      return () => tween.kill();
    }
  }, [text, delay, triggerOnScroll]);

  // Split string into words preserving whitespace
  const words = text.split(' ');

  return (
    // @ts-expect-error dynamic tag
    <Component ref={containerRef} className={className} data-cinematic-words="true">
      {words.map((word, index) => (
        <span key={index} className="inline-block whitespace-nowrap mr-[0.28em]">
          <span className="cinematic-word inline-block">{word}</span>
        </span>
      ))}
    </Component>
  );
}
