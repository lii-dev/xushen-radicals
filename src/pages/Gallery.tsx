import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, ExternalLink, Play, QrCode } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";

// GitHub Pages 子路径 base，保证资源路径正确
const BASE = import.meta.env.BASE_URL;

// 部首语音二维码小卡图片
const RADICAL_IMAGE = `${BASE}images/部首.jpg`;

// 视频封面图（截一张代表性画面，保存至 public/images/video-cover.jpg）
const VIDEO_COVER = `${BASE}images/video-cover.jpg`;

// 连续介绍视频 0-5 —— 已压缩后置于 public/videos/，点击新标签页在线播放
const VIDEOS = [
  { id: "序", title: "字从遇见你", src: `${BASE}videos/0.mp4` },
  { id: "第一集", title: "部首的奥秘", src: `${BASE}videos/1.mp4` },
  { id: "第二集", title: "田-农耕文明的编码", src: `${BASE}videos/2.mp4` },
  { id: "第三集", title: "家-安居与亲情的符号", src: `${BASE}videos/3.mp4` },
  { id: "第四集", title: "心-情感与思维的字符", src: `${BASE}videos/4.mp4` },
  { id: "第五集", title: "言-语言、道德与沟通", src: `${BASE}videos/5.mp4` },
];

export default function Gallery() {
  const [coverError, setCoverError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader
        index="叁"
        subtitle="GALLERY · 影像记录"
        title="部首影像 · 字之形象"
        description="部首语音二维码小卡与连续介绍视频，记录团队在文化园的影像采集成果。"
        backdropCharacter="影"
      />

      {/* 部首语音二维码小卡图片 */}
      <section className="container py-20 md:py-28">
        <SectionTitle
          index="图"
          title="部首语音二维码小卡"
          subtitle="RADICAL CARDS · 语音二维码"
          description="扫码即听部首读音与释义，将 540 部首凝于方寸之间。"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="paper-layer classic-border mt-16 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* 图片 */}
            <div className="flex-1 bg-paper-light/40">
              <img
                src={RADICAL_IMAGE}
                alt="部首语音二维码小卡"
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
            {/* 说明 */}
            <div className="flex w-full flex-col justify-center gap-4 p-8 md:w-80 md:border-l md:border-bronze/30">
              <QrCode size={28} className="text-vermilion" />
              <h3 className="font-serif text-xl font-semibold text-ink">
                部首语音小卡
              </h3>
              <div className="ink-underline w-12" />
              <p className="font-sans text-sm leading-relaxed text-ink-mute">
                每张小卡对应一个部首，印有字形与语音二维码，
                扫码可聆听部首读音、释义与文化典故，
                是本次实践的核心文创成果之一。
              </p>
              <div className="mt-2 flex items-center gap-2 font-sans text-xs text-bronze-dark">
                <ImageIcon size={14} />
                <span>部首.jpg</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 连续介绍视频（封面图 + 外链播放） */}
      <section className="border-t border-bronze/20 bg-paper-dark/30 py-20 md:py-28">
        <div className="container">
          <SectionTitle
            index="影"
            title="连续介绍视频"
            subtitle="VIDEO · 0 → 5"
            description="点击各集按钮，将在新标签页打开奶牛快传链接在线播放，无需下载注册。"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-12 md:items-start">
            {/* 视频封面图 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="paper-layer classic-border relative overflow-hidden md:col-span-7"
            >
              {coverError ? (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-ink/5 text-ink-mute">
                  <ImageIcon size={32} />
                  <p className="font-serif text-sm tracking-widest">
                    视频封面 · 待插入
                  </p>
                  <p className="font-sans text-xs">public/images/video-cover.jpg</p>
                </div>
              ) : (
                <img
                  src={VIDEO_COVER}
                  alt="视频封面"
                  className="aspect-video w-full object-cover"
                  onError={() => setCoverError(true)}
                />
              )}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink/40 text-paper-light backdrop-blur-sm">
                  <Play size={28} className="ml-1" />
                </span>
              </div>
            </motion.div>

            {/* 各集外链列表 */}
            <div className="md:col-span-5">
              <ul className="flex flex-col gap-3">
                {VIDEOS.map((v, i) => (
                  <motion.li
                    key={v.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <a
                      href={v.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group flex items-center gap-4 p-4 transition-all",
                        "rounded-sm border border-bronze/30 hover:border-vermilion hover:bg-vermilion/5"
                      )}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-vermilion font-serif text-sm text-paper-light">
                        {v.id}
                      </span>
                      <div className="flex-1">
                        <p className="font-serif text-sm text-ink group-hover:text-vermilion-dark">
                          {v.title}
                        </p>
                        <p className="font-sans text-xs text-ink-mute">
                          在线播放（新标签页）
                        </p>
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-ink-mute transition-colors group-hover:text-vermilion"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
