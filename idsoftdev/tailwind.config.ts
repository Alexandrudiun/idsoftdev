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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#86FF70",

          secondary: "#86FF70",

          accent: "#E0AAFF",

          neutral: "#101925",

          "base-100": "#101925",

          info: "#0000ff",

          success: "blue",

          warning: "red",

          error: "red",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
