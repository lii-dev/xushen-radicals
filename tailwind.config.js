/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        // 主色：宣纸米白 / 墨黑
        paper: {
          DEFAULT: "#F5EDE0",
          dark: "#ECE1CE",
          light: "#FBF5E9",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#2E2A26",
          mute: "#5C534A",
        },
        // 辅色：印章朱红 / 古铜金 / 青墨蓝
        vermilion: {
          DEFAULT: "#C8392E",
          dark: "#9E2B22",
          light: "#E15B4F",
        },
        bronze: {
          DEFAULT: "#B89968",
          dark: "#8E7244",
          light: "#D4B687",
        },
        slatey: {
          DEFAULT: "#3A4F5C",
          dark: "#283944",
          light: "#5A6E7B",
        },
      },
      fontFamily: {
        // 标题/展示字：思源宋体
        serif: ['"Noto Serif SC"', "Songti SC", "STSong", "serif"],
        // 正文：思源黑体
        sans: ['"Noto Sans SC"', "PingFang SC", "Microsoft YaHei", "sans-serif"],
        // 部首/汉字装饰
        brush: ['"ZCOOL XiaoWei"', '"Ma Shan Zheng"', "KaiTi", "STKaiti", "serif"],
      },
      fontSize: {
        "hero": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "1.05", letterSpacing: "0.02em" }],
        "display": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.15" }],
        "chapter": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.3" }],
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(circle at 20% 30%, rgba(184,153,104,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(200,57,46,0.03) 0%, transparent 55%), linear-gradient(180deg, #FBF5E9 0%, #F5EDE0 100%)",
        "ink-splash":
          "radial-gradient(ellipse at center, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.4) 40%, transparent 75%)",
      },
      boxShadow: {
        seal: "0 2px 6px rgba(158,43,34,0.25), inset 0 0 0 1px rgba(255,255,255,0.12)",
        paper: "0 8px 24px -12px rgba(26,26,26,0.18), 0 2px 6px -3px rgba(26,26,26,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "brush-in": {
          "0%": { opacity: "0", transform: "scale(0.96)", filter: "blur(6px)" },
          "100%": { opacity: "1", transform: "scale(1)", filter: "blur(0)" },
        },
        "seal-stamp": {
          "0%": { opacity: "0", transform: "scale(1.6) rotate(-12deg)" },
          "60%": { opacity: "1", transform: "scale(0.92) rotate(-3deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-3deg)" },
        },
        "scroll-unfurl": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "100%": { transform: "scaleY(1)", transformOrigin: "top" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        "brush-in": "brush-in 1.2s ease-out forwards",
        "seal-stamp": "seal-stamp 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
    },
  },
  plugins: [],
};
