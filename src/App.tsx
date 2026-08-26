import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Background from "@/pages/Background";
import Radicals from "@/pages/Radicals";
import Gallery from "@/pages/Gallery";
import NotFound from "@/pages/NotFound";

function SpaRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const saved = sessionStorage.getItem("spa-redirect");
    if (saved) {
      sessionStorage.removeItem("spa-redirect");
      navigate(saved, { replace: true });
    }
  }, [navigate]);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/background" element={<Background />} />
        <Route path="/radicals" element={<Radicals />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router basename="/xushen-radicals">
      <SpaRedirect />
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
