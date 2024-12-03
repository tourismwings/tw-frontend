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
        NavBackground: "#f34b14", 
        NavText: "#f34b14",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
