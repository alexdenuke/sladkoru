import { Metadata } from 'next';
import ProductClient from '@/components/productClient';

export async function generateStaticParams() {
  return [];
}
export default async function ProductPage(props: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
  const params = await props.params;
  console.log('🟢 slug:', params.slug);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/slug/${params.slug}`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error('Товар не найден');
  }

  const product = await res.json();

  return <ProductClient product={product} />;
}
