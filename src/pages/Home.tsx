import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ============ 主题首屏 ============ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* 背景墨色晕染 */}
        <div aria-hidden className="absolute inset-0 bg-ink-splash opacity-90" />
        {/* 背景大字 */}
        <span
          aria-hidden
          className="pointer-events-none absolute select-none font-brush text-[42vw] leading-none text-paper-light opacity-[0.08]"
        >
          部
        </span>

        <div className="container relative z-10 flex flex-col items-center text-center text-paper-light">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs uppercase tracking-[0.5em] text-bronze-light"
          >
            XU SHEN CULTURAL PARK
          </motion.span>

          {/* 竖排副标题（桌面） */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute left-8 top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <p className="vertical-rl font-serif text-sm tracking-widest text-bronze-light">
              说文解字 · 五百四十部
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-hero font-semibold text-paper-light text-shadow-ink"
          >
            溯源汉字部首根脉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-paper-light/80 md:text-base"
          >
            于许慎故里溯源《说文解字》540 部首的文化根脉，
            欲查阅部首形音义，可前往部首溯源。
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-10"
          >
            <Link to="/radicals" className="btn-seal-filled">
              查阅部首渊源
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
