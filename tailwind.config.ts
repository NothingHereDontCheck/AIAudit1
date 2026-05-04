import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:      "#0D1B2A",
        teal:      "#00796B",
        "teal-lt": "#00ACC1",
        "teal-bg": "#E0F7FA",
        amber:     "#E65100",
        "brand-red":   "#B71C1C",
        "brand-green": "#1B5E20",
        "mid-gray":    "#546E7A",
        "light-bg":    "#F0F4F8",
        divider:   "#CFD8DC",
      },
      fontFamily: {
        display: ["Orbitron", "system-ui", "sans-serif"],
        body:    ["Rajdhani", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
