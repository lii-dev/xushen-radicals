import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  /** 序号文字，如 "壹" / "02" */
  index?: string;
  /** 主标题 */
  title: string;
  /** 副标题或英文释义 */
  subtitle?: string;
  /** 描述段落 */
  description?: string;
  /** 对齐方式 */
  align?: "left" | "center";
  className?: string;
}

/**
 * 章节标题组件
 * 编辑式排版：毛笔序号 + 衬线大字 + 细线分隔 + 副标题
 */
export default function SectionTitle({
  index,
  title,
  subtitle,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col gap-4",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {index && (
          <span className="font-brush text-2xl text-vermilion-dark">
            {index}
          </span>
        )}
        <div className="flex flex-col">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-bronze-dark">
            {subtitle}
          </span>
        </div>
      </div>

      <h2 className="chapter-title text-display">{title}</h2>

      <div
        className={cn(
          "ink-underline",
          isCenter ? "w-32" : "w-24"
        )}
      />

      {description && (
        <p
          className={cn(
            "max-w-2xl font-sans text-sm leading-relaxed text-ink-mute md:text-base",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
