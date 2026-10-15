'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUILDS } from '@/data/builds';

export default function BuildsShowcase() {
  return (
    <section className="relative bg-[#0C0C0C] text-[#F2F1ED] py-28 sm:py-36 px-6 sm:px-12 border-b border-[#F2F1ED]/10">
      <div className="max-w-[150rem] mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <h2 className="font-editorial text-[clamp(3.6rem,6vw,6.4rem)] font-light leading-[1.1] tracking-tight mb-4">
              Previous Builds
            </h2>
            <p className="font-geist text-[1.7rem] text-[#F2F1ED]/70 font-light max-w-[65rem]">
              A collection of previous bespoke builds, shaped by craft, character and the people behind the wheel.
            </p>
          </div>
          <Link href="/builds" className="forge-btn group shrink-0">
            <span>Explore Builds</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* Builds Showcase Grid (4 columns or 2x4 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BUILDS.map((build) => (
            <Link
              key={build.id}
              href={`/builds/${build.id}`}
              className="group flex flex-col bg-[#161616] border border-[#F2F1ED]/10 rounded-lg overflow-hidden hover:border-[#F2F1ED]/40 transition-all duration-500 shadow-xl"
            >
              {/* Image Aspect Box */}
              <div className="relative aspect-[9/14] overflow-hidden bg-black/40">
                <Image
                  src={build.coverImage}
                  alt={`${build.code} ${build.model}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center card-hover-image brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 font-mono text-[1.2rem] tracking-wider text-[#C5A064] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A064]/20">
                  {build.code}
                </div>
              </div>

              {/* Build Info */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-editorial text-[2.6rem] font-light text-[#F2F1ED] mb-3 group-hover:text-[#C5A064] transition-colors">
                    {build.model}
                  </h3>
                  <p className="font-geist text-[1.4rem] text-[#F2F1ED]/70 leading-relaxed font-light line-clamp-2">
                    {build.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2F1ED]/10 flex items-center justify-between text-[1.2rem] uppercase tracking-wider text-[#F2F1ED] font-medium">
                  <span>View Build</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
