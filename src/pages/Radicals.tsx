import { motion } from "framer-motion";
import { ExternalLink, BookOpen, PenTool, Search } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

const ZIDIAN_URL = "https://www.zdic.net/";

const features = [
  {
    icon: BookOpen,
    title: "540 部首体系",
    desc: "《说文解字》以 540 部首统系 9353 字，自「一」部始，至「亥」部终，构建汉字史上第一套系统检字法。",
  },
  {
    icon: PenTool,
    title: "形音义兼备",
    desc: "汉典收录每个部首的甲骨、金文、小篆字形演变，及《说文》原注与历代训诂。",
  },
  {
    icon: Search,
    title: "便捷检索",
    desc: "支持按部首、拼音、笔画、四角号码多维检索，是汉字学习与研究的权威在线工具。",
  },
];

export default function Radicals() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader
        index="壹"
        subtitle="RADICALS · 部首溯源"
        title="五百四十部 · 字之根"
        description="《说文解字》540 部首体系浩瀚精深，本站不另作逐一展示，直接跳转汉典查阅最为详尽。"
        backdropCharacter="部"
      />

      {/* 跳转汉典 CTA */}
      <section className="container py-20 md:py-28">
        <SectionTitle
          index="典"
          title="查阅 540 部首"
          subtitle="ZIDIAN · 汉典"
          description="汉典（zdic.net）是收录最全、检索最便捷的在线汉语字典，540 部首的形音义演变均可于此查询。"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="paper-layer classic-border mt-16 flex flex-col items-center gap-8 p-12 text-center md:p-16"
        >
          <span className="font-brush text-7xl text-vermilion-dark md:text-8xl">
            部
          </span>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
              前往汉典 · 检索部首
            </h3>
            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-ink-mute md:text-base">
              点击下方按钮跳转汉典网站，按部首检字表查阅 540 部首的释义、字形与字源。
            </p>
          </div>

          <a
            href={ZIDIAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-seal-filled"
          >
            访问汉典 zdic.net
            <ExternalLink size={16} />
          </a>

          <p className="font-sans text-xs text-ink-mute">
            外部链接 · 将在新窗口打开
          </p>
        </motion.div>

        {/* 三大特色 */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="paper-layer classic-border p-6"
            >
              <f.icon size={20} className="text-vermilion" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-ink">
                {f.title}
              </h3>
              <div className="ink-underline my-3 w-12" />
              <p className="font-sans text-sm leading-relaxed text-ink-mute">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
