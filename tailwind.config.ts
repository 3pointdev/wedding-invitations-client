import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiay: "var(--tertiay)",
      },
      fontFamily: {
        ahnchangho: ["var(--font-ahnchangho)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
