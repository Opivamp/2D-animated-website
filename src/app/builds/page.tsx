import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BUILDS } from '@/data/builds';

export const metadata: Metadata = {
  title: 'Builds | Forge Automotive',
  description: 'The archive — a collection of bespoke builds shaped by craft, character and the people behind the wheel.',
};

export default function BuildsArchivePage() {
  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[160rem] mx-auto">
      {/* Archive Header */}
      <div className="max-w-[100rem] mb-20">
        <span className="font-mono text-[1.3rem] text-[#C5A064] tracking-widest uppercase mb-4 block">
          The Archive
        </span>
        <h1 className="font-editorial text-[clamp(4.8rem,8vw,8.8rem)] font-light leading-[1.05] tracking-tight mb-8">
          Previous Builds
        </h1>
        <p className="font-geist text-[clamp(1.7rem,2.2vw,2.2rem)] text-[#F2F1ED]/70 font-light leading-relaxed max-w-[80rem]">
          A collection of previous bespoke builds, shaped by craft, character and the people behind the wheel.
        </p>
      </div>

      {/* Complete Builds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BUILDS.map((build) => (
          <Link
            key={build.id}
            href={`/builds/${build.id}`}
            className="group flex flex-col bg-[#161616] border border-[#F2F1ED]/10 rounded-lg overflow-hidden hover:border-[#F2F1ED]/40 transition-all duration-500 shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative aspect-[9/13] overflow-hidden bg-black/50">
              <Image
                src={build.coverImage}
                alt={`${build.code} ${build.model}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center card-hover-image brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
              <div className="absolute top-6 left-6 font-mono text-[1.2rem] tracking-wider text-[#C5A064] bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A064]/20">
                {build.code}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="font-editorial text-[3.2rem] font-light text-[#F2F1ED] mb-3 group-hover:text-[#C5A064] transition-colors">
                  {build.model}
                </h2>
                <p className="font-geist text-[1.5rem] text-[#F2F1ED]/70 leading-relaxed font-light mb-8">
                  {build.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2F1ED]/10 flex items-center justify-between text-[1.3rem] uppercase tracking-wider text-[#F2F1ED] font-medium">
                <span>View Build</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
