'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/data/services';

export default function ServicesGrid() {
  return (
    <section className="relative bg-[#0C0C0C] text-[#F2F1ED] py-28 sm:py-36 px-6 sm:px-12 border-b border-[#F2F1ED]/10">
      <div className="max-w-[150rem] mx-auto">
        {/* Section Lead Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          <div className="lg:col-span-8">
            <h2 className="font-editorial text-[clamp(3.6rem,5.5vw,6.4rem)] font-light leading-[1.1] tracking-tight text-balance">
              A vehicle should say something before it moves. Every line, material, and finish is considered.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <p className="font-geist text-[1.7rem] text-[#F2F1ED]/70 leading-relaxed font-light">
              Our services are shaped with intent, from exterior styling and interior refinement to performance upgrades, detailing and bespoke finishes; each detail sharpens the vehicle’s character without overpowering it.
            </p>
            <Link href="/contact" className="forge-btn group">
              <span>Start Your Project</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* 6 Services Grid (2 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-[#161616] border border-[#F2F1ED]/10 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#F2F1ED]/30 transition-all duration-500 shadow-xl"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-[320px] sm:h-[360px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`Forge Service: ${service.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center card-hover-image brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                <div className="absolute top-6 left-6 font-mono text-[1.1rem] tracking-widest uppercase text-[#C5A064] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A064]/20">
                  {service.tag}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-editorial text-[3rem] sm:text-[3.4rem] font-light text-[#F2F1ED] mb-4">
                    {service.title}
                  </h3>
                  <p className="font-geist text-[1.5rem] text-[#F2F1ED]/70 leading-relaxed font-light mb-8">
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-[1.3rem] uppercase tracking-wider text-[#F2F1ED] font-medium group-hover:text-[#C5A064] transition-colors"
                >
                  <span>Start your project</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
