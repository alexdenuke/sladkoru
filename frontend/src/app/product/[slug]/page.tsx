import { Metadata } from "next";
import ProductClient from "@/components/productClient";

export async function generateStaticParams() {
  return [];
}
export default async function ProductPage({ params }: { params: { slug: string } }): Promise<JSX.Element> {
  console.log("🟢 slug:", params.slug);
  const res = await fetch(`http://localhost:5000/api/products/slug/${params.slug}`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error("Товар не найден");
  }

  const product = await res.json();

  return <ProductClient product={product} />;
}
