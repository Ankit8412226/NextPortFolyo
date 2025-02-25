import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", ...fontFamily.sans],
        ovo: ["var(--font-ovo)", ...fontFamily.serif],
      },
      boxShadow: {
        dark: "4px 4px 0 #fff",
        light: "4px 4px 0 #000",
      },
    },
  },
  plugins: [],
};
