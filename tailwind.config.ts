import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 背景色（クリーム系）
        cream: {
          50: '#fffdf7',
          100: '#fffbe6',  // メイン背景
          200: '#fff8d6',
          300: '#fff3c4',
        },
        // アクセントカラー（ゴールド系）
        gold: {
          300: '#f5d67a',
          400: '#e8b000',  // メインゴールド
          500: '#d4a000',
          600: '#b8860b',
        },
        // テキスト（グレー系）
        text: {
          primary: '#403f3b',   // 濃いグレー（見出し）
          secondary: '#606060', // 本文グレー
          light: '#888888',     // 薄いグレー
        },
        // サブカラー
        teal: {
          400: '#3db5a6',
          500: '#2a9d8f',
          600: '#238b7e',
        },
      },
      fontFamily: {
        sans: ['M PLUS Rounded 1c', 'Zen Maru Gothic', 'sans-serif'],
        rounded: ['Zen Maru Gothic', 'M PLUS Rounded 1c', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
