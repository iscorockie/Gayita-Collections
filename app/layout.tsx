import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Gayita Collections — Vintage Apparel & Custom Streetwear | Uganda",
  description: "Gayita Collections is a Kampala-based vintage & custom streetwear label. Hand-drawn artworks, artisanal denim, and stories stitched in Uganda. Shop curated vintage, art jackets, crane tees, and more.",
  keywords: ["Gayita Collections", "Uganda streetwear", "vintage apparel Uganda", "Kampala fashion", "custom streetwear", "hand drawn art", "crested crane tee", "denim jacket Uganda"],
  openGraph: {
    title: "Gayita Collections — Wear The Story",
    description: "Vintage apparel & customised streetwear with hand-drawn artworks. Designed in Uganda for designers and everyone.",
    images: ["/images/hero.jpg"],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
