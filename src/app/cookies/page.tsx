import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookies Policy | Forge Automotive',
  description: 'How Forge Automotive uses cookies and analytical tracking technologies.',
};

export default function CookiesPage() {
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
        Legal Notice
      </span>
      <h1 className="font-editorial text-[clamp(4.2rem,7vw,7.2rem)] font-light leading-tight mb-12">
        Cookies Policy
      </h1>

      <div className="space-y-8 font-geist text-[1.6rem] text-[#F2F1ED]/80 font-light leading-relaxed">
        <p>
          Forge Automotive Ltd uses cookies and similar storage technologies to ensure our digital atelier experience operates reliably, preserves your browsing preferences, and gathers anonymous performance telemetry.
        </p>

        <h2 className="font-editorial text-[2.6rem] text-[#F2F1ED] font-light pt-6">
          1. What Are Cookies
        </h2>
        <p>
          Cookies are small text records deposited on your device when you load our website. They permit our server and client application to remember your interactive session, active configurations, and preferences.
        </p>

        <h2 className="font-editorial text-[2.6rem] text-[#F2F1ED] font-light pt-6">
          2. Categories of Cookies We Use
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Essential Operational Cookies:</strong> Required to enable smooth page transitions, navigation drawer state, and security tokens.</li>
          <li><strong>Performance &amp; Telemetry:</strong> Anonymized metrics on viewport performance, WebCodecs capability, and asset caching efficiency.</li>
          <li><strong>Preference Cookies:</strong> Retaining reduced-motion preferences and device orientation layouts.</li>
        </ul>

        <h2 className="font-editorial text-[2.6rem] text-[#F2F1ED] font-light pt-6">
          3. Managing Your Preferences
        </h2>
        <p>
          You can adjust or reject cookies through your web browser settings. Disabling essential storage may affect the smooth playback of certain interactive components.
        </p>
      </div>
    </div>
  );
}
