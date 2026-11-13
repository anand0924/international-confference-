import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        soil: {
          DEFAULT: "var(--soil)",
          dark: "var(--soil-dark)",
        },
        terracotta: {
          DEFAULT: "var(--terracotta)",
          hover: "var(--terracotta-hover)",
        },
        paddy: {
          DEFAULT: "var(--paddy)",
          light: "var(--paddy-light)",
        },
        "leaf-light": "var(--leaf-light)",
        marigold: {
          DEFAULT: "var(--marigold)",
          hover: "var(--marigold-hover)",
        },
        indigo: {
          DEFAULT: "var(--indigo)",
          dark: "var(--indigo-dark)",
        },
        khadi: "var(--khadi)",
        "cream-card": "var(--cream-card)",
        mist: "var(--mist)",
        track1: "#C4622D",
        track2: "#F2A900",
        track3: "#2B3A67",
        track4: "#2F7D4F",
        track5: "#1FA3A3",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        tamil: ["var(--font-tamil)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "khadi-pattern": "radial-gradient(rgba(59, 42, 32, 0.04) 1px, transparent 1px)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
