import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InkBackdropProps {
  /** 装饰汉字（如 "部"、"源"、"漢"） */
  character?: string;
  className?: string;
}

/**
 * 背景装饰大字组件
 * 以水墨晕染式样在背景中呈现一个超大部首/汉字
 */
export default function InkBackdrop({
  character = "漢",
  className,
}: InkBackdropProps) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <span
        className="font-brush text-stroke-ink select-none text-[40vw] leading-none opacity-[0.06] md:text-[28vw]"
      >
        {character}
      </span>
    </motion.div>
  );
}
