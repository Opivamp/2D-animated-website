import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BUILDS, Build } from '@/data/builds';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BUILDS.map((build) => ({
    slug: build.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const build = BUILDS.find((b) => b.id.toLowerCase() === slug.toLowerCase());
  if (!build) return { title: 'Build Not Found | Forge Automotive' };

  return {
    title: `${build.code} ${build.model} | Forge Automotive`,
    description: build.summary,
  };
}

export default async function BuildDetailPage({ params }: Props) {
  const { slug } = await params;
  const build = BUILDS.find((b) => b.id.toLowerCase() === slug.toLowerCase());

  if (!build) {
    notFound();
  }

  const nextBuild = BUILDS.find((b) => b.id === build.nextBuild) || BUILDS[0];

  return (
    <article className="pt-36 pb-32">
      {/* Intro Header Container */}
      <div className="px-6 sm:px-12 max-w-[150rem] mx-auto mb-20">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/builds"
            className="inline-flex items-center gap-3 text-[1.3rem] text-[#F2F1ED]/70 hover:text-[#F2F1ED] transition-colors uppercase tracking-widest font-mono"
          >
            <span>&larr;</span>
            <span>All Builds</span>
          </Link>
          <span className="font-mono text-[1.3rem] text-[#C5A064] tracking-widest uppercase bg-[#161616] px-4 py-1.5 rounded-full border border-[#C5A064]/20">
            {build.code}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h1 className="font-editorial text-[clamp(4.8rem,8vw,9.6rem)] font-light leading-[1.05] tracking-tight mb-6">
              {build.model}
            </h1>
            <p className="font-editorial text-[clamp(2.2rem,3vw,3.6rem)] font-light text-[#F2F1ED]/90 leading-tight">
              {build.summary}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-8 lg:pt-4">
            <p className="font-geist text-[1.7rem] text-[#F2F1ED]/70 leading-relaxed font-light">
              {build.description}
            </p>
            <Link href="/contact" className="forge-btn group">
              <span>Commission A Similar Build</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Multi-Angle Editorial Gallery */}
      <div className="px-6 sm:px-12 max-w-[160rem] mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Cover Frame */}
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-lg overflow-hidden border border-[#F2F1ED]/10 shadow-2xl bg-black">
          <Image
            src={build.gallery[0] || build.coverImage}
            alt={`${build.code} ${build.model} primary view`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Gallery Grid (Two columns for detailed craftsmanship) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {build.gallery.slice(1, 5).map((imgUrl, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/5] sm:aspect-[3/4] rounded-lg overflow-hidden border border-[#F2F1ED]/10 shadow-xl bg-black"
            >
              <Image
                src={imgUrl}
                alt={`${build.code} ${build.model} craftsmanship angle ${idx + 2}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center card-hover-image"
              />
            </div>
          ))}
        </div>

        {/* Remaining Panoramic Shots if available */}
        {build.gallery.length > 5 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {build.gallery.slice(5).map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#F2F1ED]/10 shadow-xl bg-black"
              >
                <Image
                  src={imgUrl}
                  alt={`${build.code} ${build.model} detail ${idx + 6}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center card-hover-image"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Next Build Navigation Block */}
      <div className="mt-32 border-t border-[#F2F1ED]/10 pt-20 px-6 sm:px-12 max-w-[150rem] mx-auto">
        <Link
          href={`/builds/${nextBuild.id}`}
          className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 sm:p-12 bg-[#161616] rounded-xl border border-[#F2F1ED]/10 hover:border-[#F2F1ED]/30 transition-all duration-500 shadow-2xl"
        >
          <div>
            <span className="font-mono text-[1.2rem] text-[#C5A064] tracking-widest uppercase mb-2 block">
              Next Build &mdash; {nextBuild.code}
            </span>
            <h2 className="font-editorial text-[clamp(3.6rem,5vw,6rem)] font-light text-[#F2F1ED] group-hover:text-[#C5A064] transition-colors">
              {nextBuild.model}
            </h2>
            <p className="font-geist text-[1.6rem] text-[#F2F1ED]/70 font-light max-w-[50rem] mt-2">
              {nextBuild.summary}
            </p>
          </div>

          <div className="mt-8 md:mt-0 flex items-center gap-6">
            <div className="relative w-28 h-20 rounded-md overflow-hidden hidden sm:block border border-[#F2F1ED]/20">
              <Image
                src={nextBuild.coverImage}
                alt={nextBuild.model}
                fill
                className="object-cover"
              />
            </div>
            <span className="forge-btn group-hover:bg-[#F2F1ED] group-hover:text-black transition-all">
              <span>View Build</span>
              <span>&rarr;</span>
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
}
