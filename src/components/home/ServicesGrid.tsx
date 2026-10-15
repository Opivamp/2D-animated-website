'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import CinematicWords from '@/components/ui/CinematicWords';

export default function ServicesGrid() {
  return (
    <section className="relative px-6 py-28 sm:py-36 bg-[#0C0C0C] border-b border-[#F2F1ED]/5">
      <div className="w-full max-w-[140rem] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-[#F2F1ED]/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A064] mb-3 block">
              Atelier Disciplines
            </span>
            <h2 className="font-editorial text-[clamp(3.6rem,6vw,6.4rem)] font-extralight tracking-[-0.03em] text-[#F2F1ED]">
              <CinematicWords text="Bespoke Services" as="span" />
            </h2>
          </div>
          <p className="font-geist text-lg font-light text-[#F2F1ED]/60 max-w-[40rem] mt-4 sm:mt-0">
            Engineered precision and artisanal execution across every facet of automotive customization.
          </p>
        </div>

        {/* 6 Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-lg overflow-hidden bg-[#161616] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-xl"
            >
              {/* Media Imagery with Smooth Hover Zoom */}
              <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden bg-[#0C0C0C]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                
                {/* Discipline Index Badge */}
                <span className="absolute top-6 left-6 font-mono text-xs tracking-widest text-[#F2F1ED]/70 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 uppercase">
                  {service.tag} 0{index + 1}
                </span>
              </div>

              {/* Service Meta Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-editorial text-3xl sm:text-4xl font-light text-[#F2F1ED] mb-4 group-hover:text-[#C5A064] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-geist text-base sm:text-lg font-light text-[#F2F1ED]/70 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 font-geist text-xs uppercase tracking-widest text-[#F2F1ED]/80 hover:text-[#F2F1ED] group/link"
                  >
                    <span>Start your project</span>
                    <span className="transform group-hover/link:translate-x-1.5 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
