import React from 'react';
import type { Metadata } from 'next';
import ContactClient from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact & Commissions | Forge Automotive',
  description:
    'Every build starts with a conversation. Call, email or visit by appointment in Yorkshire or the North West to begin a bespoke vehicle commission.',
};

export default function ContactPage() {
  return <ContactClient />;
}
