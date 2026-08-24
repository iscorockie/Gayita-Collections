import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Gayita Collections — 1 OF 1 Hand-Painted, No Prints | Kampala",
  description: "Gayita Collections paints directly on clothes. No prints, no copies. Each piece is 1 of 1, hand-painted in Kabalagala studio, Kampala. Once sold, never recreated. Order via WhatsApp: 0763813315, +256 707 548383",
  keywords: ["Gayita Collections", "1 of 1", "hand-painted clothes Uganda", "painted not printed", "Kampala atelier", "no copies", "custom painted"],
  openGraph: {
    title: "Gayita Collections — Painted Direct, Not Printed. 1 OF 1 Only.",
    description: "We don't print. We paint directly on the clothes. Each piece is 1 of 1, no copies ever. Hand-painted in Kampala.",
    images: ["/images/hero.jpg"],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#faf6ee] text-black antialiased">
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
