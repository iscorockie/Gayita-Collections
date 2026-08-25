import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://iscorockie.github.io/Gayita-Collections/"),
  title: "Gayita Collections — Wear the artwork | Kampala, Uganda",
  description: "Vintage apparel and customised streetwear with hand-drawn artworks. Shop one-off pieces or start a custom commission with Gayita Collections in Kabalagala, Kampala.",
  keywords: ["Gayita Collections", "Uganda streetwear", "Kampala vintage clothing", "customised clothing Uganda", "hand-drawn apparel", "designer collaborations", "Kabalagala"],
  openGraph: {
    title: "Gayita Collections — Wear the artwork.",
    description: "Vintage apparel and customised streetwear with hand-drawn stories. Made in Kampala.",
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f1e8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
