'use client';

import React from 'react';

export default function StatementBanner() {
  return (
    <section className="relative bg-[#0C0C0C] py-32 sm:py-44 px-6 sm:px-12 text-center border-b border-[#F2F1ED]/10 overflow-hidden">
      <div className="max-w-[100rem] mx-auto">
        <h2 className="font-editorial text-[clamp(4.2rem,8vw,8rem)] font-extralight text-[#F2F1ED] leading-[1.05] tracking-tight mb-8">
          Ends Here
        </h2>
        <p className="font-geist text-[clamp(1.7rem,2.4vw,2.4rem)] font-light text-[#F2F1ED]/70 leading-relaxed max-w-[75rem] mx-auto text-balance">
          Complete expressions of taste, intent and individuality, shaped through detail, restraint and presence.
        </p>
      </div>
    </section>
  );
}
