import { motion } from "framer-motion";
import { BookOpen, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

export default function Background() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader
        index="贰"
        subtitle="BACKGROUND · 背景知识"
        title="许慎其人 · 说文其书"
        description="认识《说文解字》的成书背景与许慎文化园的场所精神。"
        backdropCharacter="慎"
      />

      {/* 许慎其人 */}
      <section className="container py-20 md:py-28">
        <SectionTitle
          index="人"
          title="许慎与《说文解字》"
          subtitle="XU SHEN · 58-147"
        />

        <div className="mt-12 max-w-3xl">
          <div className="flex items-center gap-3">
            <BookOpen size={18} className="text-vermilion" />
            <span className="font-sans text-xs tracking-[0.3em] text-bronze-dark">
              五经无双 · 叔重之学
            </span>
          </div>

          <p className="mt-6 font-serif text-xl leading-relaxed text-ink">
            "仓颉之初作书，盖依类象形，故谓之文；其后形声相益，即谓之字。"
          </p>

          <p className="mt-6 font-sans text-sm leading-relaxed text-ink-mute md:text-base">
            许慎，字叔重，东汉汝南召陵人（今河南漯河），历时 22 年编撰《说文解字》，
            以 540 部首统系 9353 字，自「一」部始至「亥」部终，
            构建汉字史上第一套系统的部首检字体系，影响后世两千年。
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-bronze/30 pt-6">
            <div>
              <p className="font-serif text-3xl text-vermilion-dark">22</p>
              <p className="font-sans text-xs text-ink-mute">编撰年数</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-vermilion-dark">540</p>
              <p className="font-sans text-xs text-ink-mute">部首总数</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-vermilion-dark">9353</p>
              <p className="font-sans text-xs text-ink-mute">收录正篆</p>
            </div>
          </div>
        </div>
      </section>

      {/* 文化园巡礼 */}
      <section className="border-t border-bronze/20 bg-paper-dark/30 py-20 md:py-28">
        <div className="container">
          <SectionTitle
            index="地"
            title="许慎文化园"
            subtitle="THE PARK · 漯河召陵"
            description="建于许慎故里的文化纪念园，是本次实践的实地考察场所。"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              { name: "六书广场", desc: "园南端六根花岗岩石柱，镌刻象形、指事、形声、会意、转注、假借六书理论与例字。" },
              { name: "汉字大道", desc: "80 米长的大道，按汉字发展十个阶段摹刻历代名碑名帖，寓意一部汉字发展史。" },
              { name: "字圣殿", desc: "园区核心建筑，仿汉重檐庑殿，供奉字圣许慎，九开五进、四十八根红柳桉木立柱。" },
              { name: "说文馆", desc: "展示《说文解字》及其贡献，陈列历代刻本抄本，可互动查阅汉字篆体本源与演变。" },
            ].map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="paper-layer classic-border p-6"
              >
                <MapPin size={20} className="text-vermilion" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
                  {s.name}
                </h3>
                <div className="ink-underline my-4 w-12" />
                <p className="font-sans text-sm leading-relaxed text-ink-mute">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
