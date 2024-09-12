import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      boxShadow: {
        custom: "0px 2px 4px 0px rgba(16, 24, 40, 0.06)", // equivalent of #1018280F
      },
      colors: {
        primary: "#364152",
        purple: "#6C65FF",
        secondary: "#0D121C",
        light: "#F8FAFC",
        border: "#EEF2F6",
        blue: "#1B1F3F",
        workCard: "#282D54",
        services: "#E3E8EF",
        footerText: "#CDD5DF",
        "gradient-from": "#5037E4",
        "gradient-to": "##A576FF",
        "hover-from": "#372bb0",
        "hover-to": "##8941e6",
      },
      fontFamily: {
        syneRegular: ["var(--syneRegular)"],
        syneMedium: ["var(--syneMedium)"],
        syneSemiBold: ["var(--syneSemiBold)"],
        syneBold: ["var(--syneBold)"],
        syneExtraBold: ["var(--syneExtraBold)"],
        inter: ["var(--inter)"],
        leagueSpartan: ["var(--leagueSpartan)]"],
      },
    },
  },
  plugins: [],
};
export default config;
