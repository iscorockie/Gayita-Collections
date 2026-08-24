import { products } from "@/lib/products";
import ProductClient from "./client";

export function generateStaticParams() {
  return products.map(p => ({ id: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProductClient slugProp={id} />;
}
