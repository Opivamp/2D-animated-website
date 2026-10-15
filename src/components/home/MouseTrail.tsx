'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { TRAIL_IMAGES } from '@/data/trail';

interface TrailItem {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
}

export default function MouseTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const imgIndex = useRef(0);
  const nextId = useRef(0);

  const spawnImage = (x: number, y: number) => {
    const currentSrc = TRAIL_IMAGES[imgIndex.current % TRAIL_IMAGES.length];
    imgIndex.current += 1;
    const rotation = (Math.random() - 0.5) * 12; // -6deg to +6deg

    const newItem: TrailItem = {
      id: nextId.current++,
      x,
      y,
      src: currentSrc,
      rotation,
    };

    setTrail((prev) => [...prev.slice(-14), newItem]);

    setTimeout(() => {
      setTrail((prev) => prev.filter((item) => item.id !== newItem.id));
    }, 1100);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);

    if (dist > 75) {
      lastPos.current = { x, y };
      spawnImage(x, y);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);

    if (dist > 75) {
      lastPos.current = { x, y };
      spawnImage(x, y);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative min-h-[65vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden px-6 py-28 select-none cursor-crosshair border-b border-[#F2F1ED]/5 bg-[#0C0C0C]"
    >
      {/* Background Interactive Image Trail */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {trail.map((item) => (
          <div
            key={item.id}
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
            }}
            className="absolute w-[190px] h-[240px] sm:w-[230px] sm:h-[290px] rounded-sm overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] animate-trail-fade pointer-events-none"
          >
            <Image
              src={item.src}
              alt="Atelier craft preview"
              fill
              sizes="(max-width: 768px) 190px, 230px"
              className="object-cover brightness-95 contrast-105"
            />
          </div>
        ))}
      </div>

      {/* Prominent Philosophy Heading with reveal styling */}
      <div className="relative z-10 max-w-[120rem] text-center pointer-events-none">
        <span className="font-mono text-[1.2rem] uppercase tracking-[0.25em] text-[#C5A064] block mb-6 opacity-80 animate-fade-in">
          Forge Automotive Atelier
        </span>
        <h2 className="font-editorial text-[clamp(4.2rem,8.5vw,9.2rem)] font-light leading-[1.06] tracking-tight text-[#F2F1ED] drop-shadow-md">
          We don’t modify vehicles
          <br />
          <span className="italic font-light opacity-90 text-[#F2F1ED]/95">We build them for you</span>
        </h2>
        <p className="font-geist text-[1.4rem] uppercase tracking-widest text-[#F2F1ED]/40 mt-8 font-light">
          ( Move cursor across the atelier canvas )
        </p>
      </div>
    </section>
  );
}
