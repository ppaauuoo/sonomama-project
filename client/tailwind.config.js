/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1d4ed8",

          secondary: "#3b82f6",

          accent: "#38bdf8",

          neutral: "#9ca3af",

          "base-100": "#fcfcfd",

          info: "#3c6fcd",

          success: "#4ade80",

          warning: "#fde047",

          error: "#f87171",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
