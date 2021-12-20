const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx,vue}/",
    "./src/components/*/*.{js,jsx,ts,tsx,vue}",
    "./src/components/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
      },
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
      },
      backgroundImage: {
        "profil-bubble": "url('../src/images/logo_transparent.png')",
        "bg": "url('../src/images/bg.svg')",
      },
      gridTemplateColumns: {
        timeline: "calc(100% / 12 * 5) calc(100% / 12 * 2) calc(100% / 12 * 5)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
