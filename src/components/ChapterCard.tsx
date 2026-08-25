import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChapterCardProps {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  path: string;
  /** 占位渐变色 */
  accent?: "vermilion" | "bronze" | "slatey";
  className?: string;
}

const accentMap = {
  vermilion: "from-vermilion/15 to-vermilion/0 text-vermilion-dark",
  bronze: "from-bronze/20 to-bronze/0 text-bronze-dark",
  slatey: "from-slatey/15 to-slatey/0 text-slatey-dark",
} as const;

/**
 * 章节卡片
 * 用于首页章节导航网格，悬停时翻起露出预览
 */
export default function ChapterCard({
  index,
  title,
  subtitle,
  description,
  path,
  accent = "bronze",
  className,
}: ChapterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={cn("h-full", className)}
    >
      <Link
        to={path}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-sm border border-bronze/30 bg-gradient-to-b paper-layer p-6 transition-all duration-500 hover:border-vermilion/40 hover:shadow-paper",
          accentMap[accent]
        )}
      >
        {/* 大序号水印 */}
        <span className="pointer-events-none absolute -right-4 -top-8 select-none font-brush text-8xl leading-none opacity-10 transition-opacity duration-500 group-hover:opacity-20">
          {index}
        </span>

        <div className="relative flex items-start justify-between">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-vermilion/10 font-brush text-base text-vermilion">
            {index}
          </span>
          <ArrowUpRight
            size={20}
            className="text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-vermilion"
          />
        </div>

        <div className="relative mt-6 flex-1">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-bronze-dark">
            {subtitle}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold tracking-wider text-ink">
            {title}
          </h3>
          <div className="ink-underline my-4 w-12" />
          <p className="font-sans text-sm leading-relaxed text-ink-mute">
            {description}
          </p>
        </div>

        <span className="relative mt-6 inline-flex items-center gap-2 font-serif text-xs tracking-widest text-vermilion-dark">
          进入章节
          <span className="h-px w-8 bg-vermilion transition-all duration-300 group-hover:w-12" />
        </span>
      </Link>
    </motion.div>
  );
}
