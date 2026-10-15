import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Forge Automotive',
  description: 'How Forge Automotive collects, safeguards, and processes personal client information.',
};

export default function PrivacyPage() {
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
        Client Confidentiality
      </span>
      <h1 className="font-editorial text-[clamp(4.2rem,7vw,7.2rem)] font-light leading-tight mb-12">
        Privacy Policy
      </h1>

      <div className="space-y-8 font-geist text-[1.6rem] text-[#F2F1ED]/80 font-light leading-relaxed">
        <p>
          At Forge Automotive Ltd, client discretion and confidentiality are foundational principles. We handle all personal records and commission specifications with the highest degree of security and integrity.
        </p>

        <h2 className="font-editorial text-[2.6rem] text-[#F2F1ED] font-light pt-6">
          1. Information We Collect
        </h2>
        <p>
          When you initiate a commission enquiry, request acquisition details for an available stock build, or contact our concierge, we collect your name, email address, telephone contact number, and details regarding your motor vehicle and desired styling requirements.
        </p>

        <h2 className="font-editorial text-[2.6rem] text-[#F2F1ED] font-light pt-6">
          2. Purpose of Processing
        </h2>
        <p>
          Your information is utilized solely to:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Evaluate your build requirements and prepare bespoke quotations.</li>
          <li>Coordinate studio appointments in Yorkshire or the North West.</li>
          <li>Arrange secure nationwide vehicle collection and delivery logistics.</li>
          <li>Maintain build provenance and warranty records for registered commissions.</li>
        </ul>

        <h2 className="font-editorial text-[2.6rem] text-[#F2F1ED] font-light pt-6">
          3. Data Retention and Sharing
        </h2>
        <p>
          We do not sell, rent, or distribute client information to third parties. Data is shared strictly with authorized logistics partners (e.g., covered vehicle transport services) when required to fulfill your commission agreement.
        </p>
      </div>
    </div>
  );
}
