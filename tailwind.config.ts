import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        background: "#F7F7FA",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        primary: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
        secondary: "linear-gradient(225deg, #6675F7 0%, #57007B 100%)",
        card: "linear-gradient(225deg, #F1F1F5 0%, #E4ECF7 100%)",
        buttonBackground: "linear-gradient(225deg, #FFC656 0%, #F16063 100%)",
      },
      textColor: {
        primary: "#1A202C",
        secondary: "#4A5568",
        review: "#57007B",
        "gradient-text":
          "linear-gradient(180deg, #DE4396 0%, rgba(13, 28, 159, 0) 100%)",
      },
      boxShadow: {
        custom: "0px 4px 40px 0px rgba(0, 0, 0, 0.1)",
        "card-active": "0px 4px 30px 0px #0000001A",
        card: "0 10px 10px rgba(0, 0, 0, 0.1)",
      },
      borderColor: {
        gradient: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
        primary: "#E7DAED",
      },
    },
  },
  plugins: [],
};
export default config;
