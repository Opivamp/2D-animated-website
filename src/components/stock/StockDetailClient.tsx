'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StockItem } from '@/data/stock';

export default function StockDetailClient({ item }: { item: StockItem }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <article className="pt-36 pb-32">
      {/* Intro Header */}
      <div className="px-6 sm:px-12 max-w-[150rem] mx-auto mb-20">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/stock"
            className="inline-flex items-center gap-3 text-[1.3rem] text-[#F2F1ED]/70 hover:text-[#F2F1ED] transition-colors uppercase tracking-widest font-mono"
          >
            <span>&larr;</span>
            <span>All Stock</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[1.3rem] text-[#C5A064] tracking-widest uppercase bg-[#161616] px-4 py-1.5 rounded-full border border-[#C5A064]/20">
              {item.code}
            </span>
            <span className="font-mono text-[1.3rem] text-[#F2F1ED] tracking-widest uppercase bg-[#161616] px-4 py-1.5 rounded-full border border-[#F2F1ED]/20">
              {item.price}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h1 className="font-editorial text-[clamp(4.8rem,8vw,9.6rem)] font-light leading-[1.05] tracking-tight mb-6">
              {item.model}
            </h1>
            <p className="font-editorial text-[clamp(2.2rem,3vw,3.6rem)] font-light text-[#F2F1ED]/90 leading-tight">
              {item.summary}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-8 lg:pt-4">
            <p className="font-geist text-[1.7rem] text-[#F2F1ED]/70 leading-relaxed font-light">
              {item.description}
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-[#F2F1ED]/10 font-mono text-[1.3rem]">
              <div>
                <span className="text-[#F2F1ED]/50 block uppercase tracking-wider mb-1">Status</span>
                <span className="text-[#3ADB76] font-medium">{item.status}</span>
              </div>
              <div>
                <span className="text-[#F2F1ED]/50 block uppercase tracking-wider mb-1">Price</span>
                <span className="text-[#F2F1ED] font-medium">{item.price}</span>
              </div>
              <div>
                <span className="text-[#F2F1ED]/50 block uppercase tracking-wider mb-1">Mileage</span>
                <span className="text-[#F2F1ED] font-medium">{item.mileage}</span>
              </div>
              <div>
                <span className="text-[#F2F1ED]/50 block uppercase tracking-wider mb-1">Model Year</span>
                <span className="text-[#F2F1ED] font-medium">{item.year}</span>
              </div>
            </div>

            <a href="#enquiry" className="forge-btn forge-btn-fill group w-full text-center">
              <span>Enquire To Purchase</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Multi-Angle Gallery */}
      <div className="px-6 sm:px-12 max-w-[160rem] mx-auto flex flex-col gap-10 sm:gap-14 mb-32">
        {/* Cover Hero */}
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-lg overflow-hidden border border-[#F2F1ED]/10 shadow-2xl bg-black">
          <Image
            src={item.gallery[0] || item.coverImage}
            alt={item.model}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {item.gallery.slice(1, 5).map((imgUrl, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/5] sm:aspect-[3/4] rounded-lg overflow-hidden border border-[#F2F1ED]/10 shadow-xl bg-black"
            >
              <Image
                src={imgUrl}
                alt={`${item.model} angle ${idx + 2}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center card-hover-image"
              />
            </div>
          ))}
        </div>

        {/* Additional Shots */}
        {item.gallery.length > 5 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {item.gallery.slice(5).map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#F2F1ED]/10 shadow-xl bg-black"
              >
                <Image
                  src={imgUrl}
                  alt={`${item.model} detail ${idx + 6}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center card-hover-image"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Acquisition Enquiry Form Container */}
      <section id="enquiry" className="px-6 sm:px-12 max-w-[120rem] mx-auto">
        <div className="bg-[#161616] p-8 sm:p-16 rounded-2xl border border-[#F2F1ED]/10 shadow-2xl">
          <div className="max-w-[70rem] mb-12">
            <span className="font-mono text-[1.2rem] text-[#C5A064] tracking-widest uppercase mb-2 block">
              Direct Acquisition
            </span>
            <h2 className="font-editorial text-[clamp(3.6rem,5vw,6rem)] font-light leading-tight mb-4">
              Purchase This Build
            </h2>
            <p className="font-geist text-[1.6rem] text-[#F2F1ED]/70 leading-relaxed font-light">
              Available from {item.price}. To receive the full vehicle specification, discuss further customisation options or begin the purchasing process, complete the form and a member of our team will be in touch shortly.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 sm:p-12 rounded-xl bg-[#0C0C0C] border border-[#3ADB76]/40 text-center">
              <span className="text-[3rem] text-[#3ADB76] block mb-4">&#10003;</span>
              <h3 className="font-editorial text-[3rem] font-light text-[#F2F1ED] mb-3">
                Enquiry Received
              </h3>
              <p className="font-geist text-[1.6rem] text-[#F2F1ED]/70 max-w-[50rem] mx-auto leading-relaxed">
                Thank you for your interest in {item.code} {item.model}. Our atelier specialist will review your details and contact you within 1 business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-[1.2rem] font-mono uppercase tracking-wider text-[#F2F1ED]/60 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. James Harrington"
                  className="w-full bg-[#0C0C0C] border border-[#F2F1ED]/20 rounded-md px-5 py-4 text-[#F2F1ED] placeholder-[#F2F1ED]/30 focus:border-[#C5A064] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[1.2rem] font-mono uppercase tracking-wider text-[#F2F1ED]/60 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="james@example.com"
                  className="w-full bg-[#0C0C0C] border border-[#F2F1ED]/20 rounded-md px-5 py-4 text-[#F2F1ED] placeholder-[#F2F1ED]/30 focus:border-[#C5A064] transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[1.2rem] font-mono uppercase tracking-wider text-[#F2F1ED]/60 mb-2">
                  Contact Telephone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 7000 000000"
                  className="w-full bg-[#0C0C0C] border border-[#F2F1ED]/20 rounded-md px-5 py-4 text-[#F2F1ED] placeholder-[#F2F1ED]/30 focus:border-[#C5A064] transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[1.2rem] font-mono uppercase tracking-wider text-[#F2F1ED]/60 mb-2">
                  Additional Notes / Part Exchange Details
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Let us know if you have a vehicle for part exchange or specific delivery requirements..."
                  className="w-full bg-[#0C0C0C] border border-[#F2F1ED]/20 rounded-md px-5 py-4 text-[#F2F1ED] placeholder-[#F2F1ED]/30 focus:border-[#C5A064] transition-colors"
                />
              </div>

              <div className="sm:col-span-2 pt-4">
                <button type="submit" className="forge-btn forge-btn-fill w-full sm:w-auto px-12 py-5 text-[1.4rem]">
                  <span>Submit Acquisition Request</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </article>
  );
}
