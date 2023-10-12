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
        hero: "url('/images/tim-mossholder.jpg')",
        heroLg: "url('/images/markus-winkler-lg.jpg')",
        about: "url('/images/andriyko-podilnyk.jpg')",
        aboutLg: "url('/images/andriyko-podilnyk-lg.jpg')",
        reviews: "url('/images/nathan-dumlao.jpg')",
        reviewsLg: "url('/images/nathan-dumlao.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
