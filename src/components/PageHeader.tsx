import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import InkBackdrop from "@/components/InkBackdrop";

interface PageHeaderProps {
  /** 序号 */
  index: string;
  /** 副标题（英文释义） */
  subtitle: string;
  /** 主标题 */
  title: string;
  /** 描述 */
  description?: string;
  /** 背景装饰大字 */
  backdropCharacter?: string;
}

/**
 * 内页通用头部
 * 毛笔序号 + 标题 + 背景水墨大字
 */
export default function PageHeader({
  index,
  subtitle,
  title,
  description,
  backdropCharacter = "部",
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <InkBackdrop character={backdropCharacter} />

      <div className="container relative">
        {/* 面包屑 */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-sans text-xs tracking-widest text-bronze-dark"
        >
          <Link to="/" className="hover:text-vermilion-dark">
            首页
          </Link>
          <ChevronRight size={14} />
          <span className="text-ink-soft">{title}</span>
        </motion.nav>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="font-brush text-4xl text-vermilion-dark">
                {index}
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.4em] text-bronze-dark">
                {subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 chapter-title text-display"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="ink-underline mt-6 w-32 origin-left"
            />
          </div>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl font-sans text-sm leading-relaxed text-ink-mute md:text-base"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
