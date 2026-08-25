import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface FooterLink {
  label: string;
  path: string;
}

const footerNav: FooterLink[] = [
  { label: "首页", path: "/" },
  { label: "部首溯源", path: "/radicals" },
  { label: "背景知识", path: "/background" },
  { label: "影像记录", path: "/gallery" },
];

/**
 * 页脚
 * 含品牌标识、章节索引
 */
export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-bronze/30 bg-paper-dark/40">
      <div className="container relative grid gap-12 py-16 md:grid-cols-12">
        {/* 品牌 */}
        <div className="md:col-span-8">
          <p className="font-serif text-xl font-semibold tracking-wider text-ink">
            许慎文化园社会实践
          </p>
          <p className="mt-1 font-sans text-xs tracking-[0.3em] text-bronze-dark">
            TRACING HANZI RADICALS
          </p>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-ink-mute">
            一群青年学子于许慎故里溯源汉字部首根脉，
            以现代影像记录《说文解字》540 部的文化遗产。
          </p>
          <p className="mt-6 flex items-center gap-2 font-sans text-xs text-ink-mute">
            <MapPin size={14} className="text-vermilion" />
            <span>河南省漯河市召陵区 · 许慎文化园</span>
          </p>
        </div>

        {/* 章节索引 */}
        <nav className="md:col-span-4" aria-label="页脚导航">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-bronze-dark">
            章节索引
          </p>
          <ul className="flex flex-col gap-2">
            {footerNav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="font-serif text-sm tracking-wider text-ink-soft transition-colors hover:text-vermilion-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
