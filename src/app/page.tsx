import React from 'react';
import Hero from '@/components/home/Hero';
import MouseTrail from '@/components/home/MouseTrail';
import ApproachSlider from '@/components/home/ApproachSlider';
import MarqueStrip from '@/components/home/MarqueStrip';
import ServicesGrid from '@/components/home/ServicesGrid';
import StatementBanner from '@/components/home/StatementBanner';
import BuildsShowcase from '@/components/home/BuildsShowcase';
import StockShowcase from '@/components/home/StockShowcase';

export default function HomePage() {
  return (
    <>
      {/* 1. Atelier Philosophy & Mouse Image Trail */}
      <MouseTrail />

      {/* 2. Hero Presentation */}
      <Hero />

      {/* 3. The 3-Pillar Approach Slider */}
      <ApproachSlider />

      {/* 4. Luxury Automotive Marques Marquee */}
      <MarqueStrip />

      {/* 5. The 6 Bespoke Atelier Services */}
      <ServicesGrid />

      {/* 6. Editorial Statement Banner */}
      <StatementBanner />

      {/* 7. Previous Builds Archive Showcase */}
      <BuildsShowcase />

      {/* 8. Available Stock Acquisition Showcase */}
      <StockShowcase />
    </>
  );
}
