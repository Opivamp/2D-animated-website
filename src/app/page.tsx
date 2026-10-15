import React from 'react';
import Hero from '@/components/home/Hero';
import MouseTrail from '@/components/home/MouseTrail';
import ApproachSection from '@/components/home/ApproachSection';
import StatementBanner from '@/components/home/StatementBanner';
import ServicesGrid from '@/components/home/ServicesGrid';
import BuildsIntroduction from '@/components/home/BuildsIntroduction';
import BuildsShowcase from '@/components/home/BuildsShowcase';
import StockShowcase from '@/components/home/StockShowcase';

export default function HomePage() {
  return (
    <>
      {/* 1. Section 1: Atelier Philosophy & Interactive Mouse Image Trail */}
      <MouseTrail />

      {/* 2. Section 2: Hero Presentation with Cinematic Word Reveal & Scroll Scrub */}
      <Hero />

      {/* 3. Section 3 to 6: Our Approach To Every Build + Marquee + 3 Sticky Pinned Pillars */}
      <ApproachSection />

      {/* 4. Section 7: Editorial Statement Banner with Vertical Parallax Scrub */}
      <StatementBanner />

      {/* 5. Section 8 to 13: 6 Core Bespoke Atelier Services */}
      <ServicesGrid />

      {/* 6. Section 14: SIGNATURE SHOWSTOPPER — "Ordinary Ends Here" 3-Car Multi-Layer Parallax */}
      <BuildsIntroduction />

      {/* 7. Section 15: Previous Builds Full-Bleed Showcase */}
      <BuildsShowcase />

      {/* 8. Section 16: Available Stock Full-Bleed Fleet Showcase */}
      <StockShowcase />
    </>
  );
}
