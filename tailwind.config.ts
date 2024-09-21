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
        'primary-bg': '#FBF1D1'
      },
      maxWidth: {
        grid: '77.5rem',
      },
      backgroundImage: {
        'hero': "url('/bg-main.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
