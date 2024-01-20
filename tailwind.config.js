/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#242a2b",
        secondary: "#808080",
        grey: "#e8f0f1",
        accent: {
          DEFAULT: "#1cbccf",
          secondary: "#18abbc",
          tertiary: "#90c6cd",
        },
      },
      fontFamily: {
        primary: "poppins",
      },
      backgroundImage: {
        "bg-service": "./src/assets/img/services/bg.svg",
      },
    },
  },
  plugins: [],
};
