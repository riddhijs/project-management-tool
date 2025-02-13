import type { Config } from "tailwindcss";

export default {
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: '#fff',
        gray:{
          100:'#f3f4f6',
          200:'#e5e7eb',
          500:'#6b7280',
          700:'#374151',
          800:'#1f2937'
        },
        blue:{
          200:"#93c5fd",
          400:"#60a5fa",
          500:"3b82f6",
        },
        "dark-bg":"#101214",
        "dark-secondary":'#1d1f21',
        "dark-tertiar":"#3b3d40",
        "blue-primary":"#0275ff",
        "stoke-dark":"#2d3135"
      },
    },
  },
  plugins: [],
} satisfies Config;
