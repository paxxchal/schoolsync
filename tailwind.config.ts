import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        caesarSky: "#9F98D8",
        caesarSkyLight: "#ECEAFF",
        caesarBlue: "#4335B2",
        caesarBlueLight: "#D3CEFF",
        caesarPink: "#F652A0",
        caesarPinkLight: "#FFE4F1",
        caesarRed: "#E63946",
      },
    },
  },
  plugins: [],
};
export default config;
