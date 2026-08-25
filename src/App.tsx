import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { StoreProvider, useStore } from "./context/StoreContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { IconCheck } from "./components/icons";
import { cn } from "./lib/utils";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function Toast() {
  const { toast } = useStore();
  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 transition-all duration-300",
        toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
      role="status"
    >
      {toast && (
        <div className="toast-in flex items-center gap-2.5 border border-volt/40 bg-asphalt px-5 py-3.5 text-[13px] font-bold text-bone shadow-2xl">
          <IconCheck className="h-4 w-4 text-volt" />
          {toast}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <StoreProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-asphalt">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <CartDrawer />
        <Toast />
      </StoreProvider>
    </HashRouter>
  );
}
