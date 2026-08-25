import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DataStatProps {
  /** 大数字 */
  value: string;
  /** 单位 */
  unit?: string;
  /** 标签 */
  label: string;
  /** 描述 */
  description?: string;
  className?: string;
}

/**
 * 数据统计卡 - 用于首页实践概览
 * 大号衬线数字 + 细分隔线 + 标签说明
 */
export default function DataStat({
  value,
  unit,
  label,
  description,
  className,
}: DataStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col gap-2", className)}
    >
      <div className="flex items-baseline gap-2">
        <span className="font-serif text-5xl font-semibold text-ink md:text-6xl">
          {value}
        </span>
        {unit && (
          <span className="font-serif text-base text-bronze-dark">{unit}</span>
        )}
      </div>
      <div className="ink-underline w-12" />
      <p className="font-sans text-sm font-medium tracking-wider text-ink-soft">
        {label}
      </p>
      {description && (
        <p className="font-sans text-xs leading-relaxed text-ink-mute">
          {description}
        </p>
      )}
    </motion.div>
  );
}
