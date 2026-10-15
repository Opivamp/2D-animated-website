'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Builds', href: '/builds' },
    { label: 'Stock', href: '/stock' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Cookies', href: '/cookies' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap' },
  ];

  return (
    <footer data-global-cta="true" className="relative bg-[#0C0C0C] text-[#F2F1ED] overflow-hidden">
      {/* Upper CTA Banner with Full-Bleed Vehicle Backdrop */}
      <div className="relative min-h-[70vh] sm:min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden">
        {/* Background Dark Reflective Vehicle Photography */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/02dd1fb0de568518e405be67ae7dc3ef47fe383a-1320x2388.jpg"
            alt="Three custom Forge vehicles parked on a dark surface"
            fill
            sizes="100vw"
            className="object-cover object-bottom brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Callout */}
        <div className="relative z-10 max-w-[120rem] mx-auto flex flex-col items-center">
          <p className="font-geist text-[clamp(1.6rem,2.5vw,2.4rem)] uppercase tracking-[0.2em] text-[#C5A064] mb-4 font-light">
            Are you ready to
          </p>
          <h2 className="font-editorial text-[clamp(5.4rem,10vw,11.2rem)] font-light leading-[1.02] tracking-tight mb-10 text-[#F2F1ED] capitalize">
            Refuse Ordinary
          </h2>
          <Link href="/contact" className="forge-btn forge-btn-fill group text-[1.5rem] px-12 py-5">
            <span>Start Your Project</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* Back to Top Trigger */}
        <div className="absolute bottom-8 right-8 z-10">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="forge-nav-toggle group"
          >
            <span>Back to Top</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">&uarr;</span>
          </button>
        </div>
      </div>

      {/* Lower Atelier Identity & Navigation Bar */}
      <div className="relative z-10 border-t border-[#F2F1ED]/10 bg-[#0C0C0C] px-6 sm:px-12 py-16">
        <div className="max-w-[150rem] mx-auto flex flex-col gap-12">
          {/* Main Statement */}
          <div className="max-w-[80rem]">
            <p className="font-editorial text-[clamp(2.4rem,3.5vw,3.8rem)] font-light leading-snug text-[#F2F1ED]/90">
              Bespoke vehicles built on distinction, desire, and identity. Not simply to be modified.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-[#F2F1ED]/10">
            {/* Primary Navigation */}
            <div className="md:col-span-5 flex flex-wrap gap-8 text-[1.4rem] uppercase tracking-wider font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#F2F1ED]/70 hover:text-[#F2F1ED] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="md:col-span-4 flex flex-wrap gap-6 text-[1.3rem] uppercase tracking-wider">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#F2F1ED]/50 hover:text-[#F2F1ED] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Attribution */}
            <div className="md:col-span-3 flex md:justify-end items-center gap-6 text-[1.2rem] text-[#F2F1ED]/40 font-mono">
              <span>&copy; {new Date().getFullYear()} Forge Automotive</span>
              <a
                href="https://12.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2F1ED] transition-colors"
              >
                12.studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
