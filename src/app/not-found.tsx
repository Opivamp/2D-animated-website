import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-20">
      <span className="font-mono text-[1.4rem] text-[#C5A064] tracking-widest uppercase mb-4 block">
        404 &mdash; Page Not Found
      </span>
      <h1 className="font-editorial text-[clamp(4.8rem,8vw,8rem)] font-light leading-tight mb-6">
        Beyond The Horizon
      </h1>
      <p className="font-geist text-[1.7rem] text-[#F2F1ED]/70 font-light max-w-[55rem] mb-10 leading-relaxed">
        The destination you are seeking cannot be located in the atelier archive. Please return to the homepage or explore our recent bespoke commissions.
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        <Link href="/" className="forge-btn forge-btn-fill">
          <span>Return Home</span>
          <span>&rarr;</span>
        </Link>
        <Link href="/builds" className="forge-btn">
          <span>Browse Builds</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
