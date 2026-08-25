import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductClient from "./client";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!products.some((product) => product.slug === id)) notFound();
  return <ProductClient slugProp={id} />;
}
