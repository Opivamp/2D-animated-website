import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { STOCK_ITEMS } from '@/data/stock';
import StockDetailClient from '@/components/stock/StockDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return STOCK_ITEMS.map((item) => ({
    slug: item.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = STOCK_ITEMS.find((s) => s.id.toLowerCase() === slug.toLowerCase());
  if (!item) return { title: 'Stock Not Found | Forge Automotive' };

  return {
    title: `${item.code} ${item.model} for Sale | Forge Automotive`,
    description: item.summary,
  };
}

export default async function StockDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = STOCK_ITEMS.find((s) => s.id.toLowerCase() === slug.toLowerCase());

  if (!item) {
    notFound();
  }

  return <StockDetailClient item={item} />;
}
