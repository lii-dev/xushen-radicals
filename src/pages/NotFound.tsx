import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute select-none font-brush text-[40vw] leading-none text-ink opacity-[0.05]"
      >
        失
      </span>

      <div className="container relative flex flex-col items-center text-center">
        <h1 className="font-serif text-hero font-semibold text-ink">
          404
        </h1>
        <p className="mt-4 font-serif text-xl text-ink-soft">
          此页未见 · 字之不存
        </p>
        <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-ink-mute">
          所寻之页或许已被迁至他处，或从未着录于本站索引之中。
        </p>
        <Link to="/" className="btn-seal-filled mt-8">
          <Home size={16} />
          返回首页
        </Link>
      </div>
    </motion.section>
  );
}
