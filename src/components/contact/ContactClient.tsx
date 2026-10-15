'use client';

import React, { useState } from 'react';

export default function ContactClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    services: [] as string[],
    message: '',
  });

  const availableServices = [
    'Bodystyling & Aero',
    'Bespoke Interior',
    'Custom Wheels & Stance',
    'Signature Lighting',
    'Performance Exhaust',
    'Paint Protection (PPF) & Satin Wraps',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="pt-36 pb-32">
      {/* Hero Contact Intro */}
      <section className="px-6 sm:px-12 max-w-[150rem] mx-auto mb-28">
        <div className="max-w-[110rem]">
          <span className="font-mono text-[1.3rem] text-[#C5A064] tracking-widest uppercase mb-4 block">
            Commissions &amp; Concierge
          </span>
          <h1 className="font-editorial text-[clamp(4.8rem,8.5vw,9.6rem)] font-light leading-[1.05] tracking-tight mb-8 text-[#F2F1ED]">
            Every build starts with a conversation
          </h1>
          <a href="#form" className="forge-btn group">
            <span>Start the conversation</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Atelier Contact Channels Grid */}
      <section className="px-6 sm:px-12 max-w-[150rem] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <div className="bg-[#161616] p-8 sm:p-10 rounded-xl border border-[#F2F1ED]/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[1.2rem] text-[#C5A064] tracking-widest uppercase mb-3 block">
                Direct Atelier Line
              </span>
              <h2 className="font-editorial text-[2.8rem] font-light text-[#F2F1ED] mb-3">
                Phone
              </h2>
              <a
                href="tel:+443330417965"
                className="font-geist text-[1.6rem] text-[#F2F1ED] hover:text-[#C5A064] transition-colors block mb-2 font-medium"
              >
                +44(0) 3330 417 965
              </a>
            </div>
            <p className="font-geist text-[1.4rem] text-[#F2F1ED]/50 font-light mt-6">
              Monday to Friday, 9am &mdash; 6pm
            </p>
          </div>

          {/* Email */}
          <div className="bg-[#161616] p-8 sm:p-10 rounded-xl border border-[#F2F1ED]/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[1.2rem] text-[#C5A064] tracking-widest uppercase mb-3 block">
                Electronic Correspondence
              </span>
              <h2 className="font-editorial text-[2.8rem] font-light text-[#F2F1ED] mb-3">
                Email
              </h2>
              <a
                href="mailto:builds@forgeautomotive.co.uk"
                className="font-geist text-[1.6rem] text-[#F2F1ED] hover:text-[#C5A064] transition-colors block mb-2 font-medium"
              >
                builds@forgeautomotive.co.uk
              </a>
            </div>
            <p className="font-geist text-[1.4rem] text-[#F2F1ED]/50 font-light mt-6">
              We aim to respond within 1&ndash;3 business days
            </p>
          </div>

          {/* Concierge */}
          <div className="bg-[#161616] p-8 sm:p-10 rounded-xl border border-[#F2F1ED]/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[1.2rem] text-[#C5A064] tracking-widest uppercase mb-3 block">
                Transport Logistics
              </span>
              <h2 className="font-editorial text-[2.8rem] font-light text-[#F2F1ED] mb-3">
                Concierge
              </h2>
              <p className="font-geist text-[1.6rem] text-[#F2F1ED] font-medium mb-2">
                Nationwide Collection Available
              </p>
            </div>
            <p className="font-geist text-[1.4rem] text-[#F2F1ED]/50 font-light mt-6">
              Ask about our enclosed secure vehicle delivery service
            </p>
          </div>

          {/* Studios */}
          <div className="bg-[#161616] p-8 sm:p-10 rounded-xl border border-[#F2F1ED]/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[1.2rem] text-[#C5A064] tracking-widest uppercase mb-3 block">
                Studio Viewings
              </span>
              <h2 className="font-editorial text-[2.8rem] font-light text-[#F2F1ED] mb-3">
                Visit Us
              </h2>
              <p className="font-geist text-[1.6rem] text-[#F2F1ED] font-medium mb-3">
                Viewings By Appointment
              </p>
              <div className="flex gap-4 text-[1.4rem]">
                <a
                  href="https://maps.app.goo.gl/NmTzBYkb544jSnia8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A064] hover:underline"
                >
                  Yorkshire &rarr;
                </a>
                <a
                  href="https://maps.app.goo.gl/sppHgGfo8j5p6x2LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A064] hover:underline"
                >
                  North West &rarr;
                </a>
              </div>
            </div>
            <p className="font-geist text-[1.4rem] text-[#F2F1ED]/50 font-light mt-6">
              Visit our bespoke studios in person to discuss your build
            </p>
          </div>
        </div>
      </section>

      {/* Commission Specification Form */}
      <section id="form" className="px-6 sm:px-12 max-w-[120rem] mx-auto mb-36">
        <div className="bg-[#161616] p-8 sm:p-16 rounded-2xl border border-[#F2F1ED]/10 shadow-2xl">
          <div className="max-w-[70rem] mb-12">
            <span className="font-mono text-[1.2rem] text-[#C5A064] tracking-widest uppercase mb-2 block">
              Bespoke Commission
            </span>
            <h2 className="font-editorial text-[clamp(3.6rem,5vw,6rem)] font-light leading-tight mb-4 text-[#F2F1ED]">
              Define Your Specification
            </h2>
            <p className="font-geist text-[1.6rem] text-[#F2F1ED]/70 leading-relaxed font-light">
              Share your build details so we can prepare a tailored quote. We aim to respond within 1&ndash;3 business days.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 sm:p-12 rounded-xl bg-[#0C0C0C] border border-[#3ADB76]/40 text-center">
              <span className="text-[3rem] text-[#3ADB76] block mb-4">&#10003;</span>
              <h3 className="font-editorial text-[3rem] font-light text-[#F2F1ED] mb-3">
                Specification Received
              </h3>
              <p className="font-geist text-[1.6rem] text-[#F2F1ED]/70 max-w-[50rem] mx-auto leading-relaxed">
                Thank you, {formData.name}. Our design and engineering atelier will review your vehicle requirements and deliver an initial briefing within 1&ndash;3 business days.
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
                  placeholder="e.g. Richard Crawford"
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
                  placeholder="richard@example.com"
                  className="w-full bg-[#0C0C0C] border border-[#F2F1ED]/20 rounded-md px-5 py-4 text-[#F2F1ED] placeholder-[#F2F1ED]/30 focus:border-[#C5A064] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[1.2rem] font-mono uppercase tracking-wider text-[#F2F1ED]/60 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 7123 456789"
                  className="w-full bg-[#0C0C0C] border border-[#F2F1ED]/20 rounded-md px-5 py-4 text-[#F2F1ED] placeholder-[#F2F1ED]/30 focus:border-[#C5A064] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[1.2rem] font-mono uppercase tracking-wider text-[#F2F1ED]/60 mb-2">
                  Vehicle Make &amp; Model
                </label>
                <input
                  type="text"
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  placeholder="e.g. Land Rover Defender 110 (2024)"
                  className="w-full bg-[#0C0C0C] border border-[#F2F1ED]/20 rounded-md px-5 py-4 text-[#F2F1ED] placeholder-[#F2F1ED]/30 focus:border-[#C5A064] transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[1.2rem] font-mono uppercase tracking-wider text-[#F2F1ED]/60 mb-3">
                  Services of Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {availableServices.map((service) => {
                    const isSelected = formData.services.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => handleServiceToggle(service)}
                        className={`text-left text-[1.3rem] p-4 rounded-md border transition-all duration-300 flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#0C0C0C] border-[#C5A064] text-[#F2F1ED]'
                            : 'bg-[#0C0C0C]/50 border-[#F2F1ED]/10 text-[#F2F1ED]/60 hover:border-[#F2F1ED]/30'
                        }`}
                      >
                        <span>{service}</span>
                        <span className={`text-[1.4rem] ${isSelected ? 'text-[#C5A064]' : 'opacity-20'}`}>
                          {isSelected ? '✓' : '+'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[1.2rem] font-mono uppercase tracking-wider text-[#F2F1ED]/60 mb-2">
                  Project Vision &amp; Notes
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your design aspirations, preferred timeline, or aesthetic directions..."
                  className="w-full bg-[#0C0C0C] border border-[#F2F1ED]/20 rounded-md px-5 py-4 text-[#F2F1ED] placeholder-[#F2F1ED]/30 focus:border-[#C5A064] transition-colors"
                />
              </div>

              <div className="sm:col-span-2 pt-4">
                <button type="submit" className="forge-btn forge-btn-fill w-full sm:w-auto px-12 py-5 text-[1.4rem]">
                  <span>Submit Specification</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 3-Step Considered Process */}
      <section className="px-6 sm:px-12 max-w-[150rem] mx-auto">
        <div className="border-t border-[#F2F1ED]/10 pt-24">
          <div className="max-w-[80rem] mb-16">
            <h2 className="font-editorial text-[clamp(3.6rem,5vw,5.6rem)] font-light leading-tight text-[#F2F1ED]">
              A considered process built around you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-[#161616] rounded-xl border border-[#F2F1ED]/10">
              <span className="font-mono text-[1.4rem] text-[#C5A064] tracking-widest block mb-4">
                01
              </span>
              <h3 className="font-editorial text-[2.6rem] font-light text-[#F2F1ED] mb-3">
                We’ll Review Your Enquiry
              </h3>
              <p className="font-geist text-[1.5rem] text-[#F2F1ED]/70 leading-relaxed font-light">
                Our team will review your details and get back to you to learn more about your vision and goals.
              </p>
            </div>

            <div className="p-8 bg-[#161616] rounded-xl border border-[#F2F1ED]/10">
              <span className="font-mono text-[1.4rem] text-[#C5A064] tracking-widest block mb-4">
                02
              </span>
              <h3 className="font-editorial text-[2.6rem] font-light text-[#F2F1ED] mb-3">
                Discovery Call Or Studio Visit
              </h3>
              <p className="font-geist text-[1.5rem] text-[#F2F1ED]/70 leading-relaxed font-light">
                We’ll arrange a call or meeting to explore ideas, expectations and potential solutions.
              </p>
            </div>

            <div className="p-8 bg-[#161616] rounded-xl border border-[#F2F1ED]/10">
              <span className="font-mono text-[1.4rem] text-[#C5A064] tracking-widest block mb-4">
                03
              </span>
              <h3 className="font-editorial text-[2.6rem] font-light text-[#F2F1ED] mb-3">
                Tailored Proposal Delivered
              </h3>
              <p className="font-geist text-[1.5rem] text-[#F2F1ED]/70 leading-relaxed font-light">
                You’ll receive a bespoke proposal outlining the approach, timeline and investment required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
