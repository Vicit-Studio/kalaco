import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F8F8F8",
        dark: "#0F0F0F",
        "brand-100": "#217BCF",
        "brand-200": "#005BBC",
        "brand-300": "#39485A",
        "gray-50": "#FAFAFA",
        "gray-100": "#F4F4F5",
        "gray-200": "#E4E4E7",
        "gray-300": "#D4D4D8",
        "gray-400": "#A1A1AA",
        "gray-500": "#71717A",
        "gray-600": "#52525B",
        "gray-700": "#3F3F46",
        "gray-800": "#27272A",
        "gray-900": "#18181B",
      },
    },
  },
  plugins: [],
} satisfies Config;
