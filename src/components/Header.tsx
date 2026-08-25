import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  index: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "首页", index: "〇", path: "/" },
  { label: "部首溯源", index: "壹", path: "/radicals" },
  { label: "背景知识", index: "贰", path: "/background" },
  { label: "影像记录", index: "叁", path: "/gallery" },
];

/**
 * 顶部导航
 * 半透明宣纸纸面 + 朱红下划线激活态 + 移动端抽屉
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-paper-light/85 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(26,26,26,0.25)]"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* 品牌标识 */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold tracking-wider text-ink">
              溯源汉字部首根脉
            </span>
            <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.3em] text-bronze-dark">
              XU SHEN · RADICALS
            </span>
          </div>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "group relative flex items-center gap-2 px-4 py-2 font-serif text-sm tracking-widest transition-colors",
                  active ? "text-vermilion-dark" : "text-ink-soft hover:text-ink"
                )}
              >
                <span
                  className={cn(
                    "font-brush text-xs transition-colors",
                    active ? "text-vermilion" : "text-bronze"
                  )}
                >
                  {item.index}
                </span>
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 bg-vermilion transition-all duration-300",
                    active ? "w-2/3" : "w-0 group-hover:w-1/2"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* 移动端汉堡 */}
        <button
          type="button"
          aria-label="切换导航"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-bronze/40 text-ink md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* 移动端抽屉 */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-bronze/20 bg-paper-light/95 backdrop-blur-md md:hidden"
          >
            <div className="container flex flex-col py-4">
              {navItems.map((item) => {
                const active = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 border-l-2 px-4 py-3 font-serif text-base tracking-widest transition-colors",
                      active
                        ? "border-vermilion bg-vermilion/5 text-vermilion-dark"
                        : "border-transparent text-ink-soft"
                    )}
                  >
                    <span className="font-brush text-base text-bronze">
                      {item.index}
                    </span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
