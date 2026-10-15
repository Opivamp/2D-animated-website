'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import CinematicWords from '@/components/ui/CinematicWords';

const TRAIL_ASSETS = [
  { src: '/images/8f648e094847c376b6b560dfe9f0e9d6e0ce2fed-216x270.jpg', alt: 'Matte black Lamborghini' },
  { src: '/images/0288035a4aa68ca32da6fc23258d68e5d64d6119-216x270.jpg', alt: 'Forge Lambo Interior' },
  { src: '/images/e782a9a843ea48782e06daf1fbb95fb60d0a1a77-216x270.jpg', alt: 'Man in black hoodie' },
  { src: '/images/8b80ab77e6e599ccf253d8d0928e0542363f10a5-216x270.jpg', alt: 'Two technicians applying PPF' },
  { src: '/images/63662a78dca265f912de70e8af02611ae6185428-216x270.jpg', alt: 'Rear view of a Porsche GT3RS' },
  { src: '/images/63e0cfeb21911e7f46f7892a0fcdc4c56ab5a06f-216x270.jpg', alt: 'Craftsman applying PPF' },
  { src: '/images/8d385d32be7a6f0eb6b8b207fcba594d172238ef-216x270.jpg', alt: 'Land Rover Defender in workshop' },
  { src: '/images/2bb9c0275c1fd738b3d8d6eab67da5371f4ff30c-216x270.jpg', alt: 'McLaren on grass' },
  { src: '/images/116085dcd0540b42fceb7cdeaf7ac1a05f3bb44d-216x270.jpg', alt: 'Audi R8 in orange outside warehouse' },
  { src: '/images/4ffe9f6ba94c0cc2c4a25a0d11e825835a551928-216x270.jpg', alt: 'Range Rover getting a new wrap' },
];

interface TrailItem {
  id: number;
  x: number;
  y: number;
  src: string;
  alt: string;
  rotation: number;
}

export default function MouseTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<TrailItem[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const imgIndex = useRef(0);
  const nextId = useRef(0);

  const spawnImage = (x: number, y: number) => {
    const asset = TRAIL_ASSETS[imgIndex.current % TRAIL_ASSETS.length];
    imgIndex.current += 1;
    const rotation = (Math.random() - 0.5) * 14;

    const newItem: TrailItem = {
      id: nextId.current++,
      x,
      y,
      src: asset.src,
      alt: asset.alt,
      rotation,
    };

    setItems((prev) => [...prev.slice(-12), newItem]);

    // Self cleanup after animation completes
    setTimeout(() => {
      setItems((prev) => prev.filter((it) => it.id !== newItem.id));
    }, 1200);
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);
    if (dist > 65) {
      lastPos.current = { x, y };
      spawnImage(x, y);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
      onTouchMove={(e) => {
        if (e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }}
      className="relative min-h-[60vh] sm:min-h-[78vh] flex items-center justify-center overflow-hidden px-6 py-28 select-none cursor-crosshair bg-[#0C0C0C] border-b border-[#F2F1ED]/5"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(65,3,6,0.35)_0%,transparent_70%)]" />

      {/* Dynamic Image Trail Container */}
      <div data-trail="wrapper" aria-hidden="true" className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {items.map((item) => (
          <div
            key={item.id}
            data-trail="item"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
            }}
            className="absolute w-[180px] h-[230px] sm:w-[220px] sm:h-[280px] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 animate-trail-fade pointer-events-none"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 180px, 220px"
              className="object-cover brightness-95 contrast-105"
            />
          </div>
        ))}
      </div>

      {/* Philosophy Statement with Cinematic Reveal */}
      <div className="relative z-10 w-full max-w-[120rem] mx-auto text-center pointer-events-none">
        <h2 className="font-editorial text-[clamp(3.8rem,7.5vw,8.4rem)] font-extralight tracking-[-0.03em] leading-[1.08] text-[#F2F1ED] capitalize max-w-[100rem] mx-auto text-balance">
          <CinematicWords text="We don’t modify vehicles" as="span" />
          <br />
          <span className="italic font-light text-[#F2F1ED]/95">
            <CinematicWords text="We build them for you" as="span" delay={0.2} />
          </span>
        </h2>
      </div>
    </section>
  );
}
