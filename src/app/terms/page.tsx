import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Forge Automotive',
  description: 'Terms and conditions governing bespoke commissions and vehicle acquisitions at Forge Automotive.',
};

export default function TermsPage() {
  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[100rem] mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-3 text-[1.3rem] text-[#F2F1ED]/70 hover:text-[#F2F1ED] transition-colors uppercase tracking-widest font-mono mb-12"
      >
        <span>&larr;</span>
        <span>Return Home</span>
      </Link>

      <span className="font-mono text-[1.2rem] text-[#C5A064] tracking-widest uppercase mb-4 block">
        Agreement
      </span>
      <h1 className="font-editorial text-[clamp(4.2rem,7vw,7.2rem)] font-light leading-tight mb-12">
        Terms of Service
      </h1>

      <div className="space-y-8 font-geist text-[1.6rem] text-[#F2F1ED]/80 font-light leading-relaxed">
        <p>
          These Terms govern the commissioning, acquisition, and delivery of bespoke automotive styling and performance builds executed by Forge Automotive Ltd.
        </p>

        <h2 className="font-editorial text-[2.6rem] text-[#F2F1ED] font-light pt-6">
          1. Bespoke Commissions
        </h2>
        <p>
          Each Forge build is a bespoke creation tailored to individual client specifications. Work commences upon formal acceptance of a proposal and receipt of the agreed deposit. Detailed specifications, including aero bodywork, custom upholstery, forged wheel fitments, and protective finishes, are documented in the Commission Schedule.
        </p>

        <h2 className="font-editorial text-[2.6rem] text-[#F2F1ED] font-light pt-6">
          2. Inventory Acquisitions
        </h2>
        <p>
          Vehicles listed under Available Stock are offered subject to prior sale. Mileage and vehicle specifications are verified at the time of cataloging. Viewings are arranged by appointment at our Yorkshire and North West atelier studios.
        </p>

        <h2 className="font-editorial text-[2.6rem] text-[#F2F1ED] font-light pt-6">
          3. Craftsmanship and Warranty
        </h2>
        <p>
          All paint protection films, carbon aero components, custom upholstery, and bespoke modifications are performed to the highest industry standards by certified master technicians. Specific manufacturer warranties for third-party components (e.g., wheels, exhaust systems) are transferred to the client upon completion.
        </p>
      </div>
    </div>
  );
}
