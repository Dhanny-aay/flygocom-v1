/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        LatoBold: ["LatoBold", "sans-serif"],
        LatoRegular: ["LatoRegular", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        PoppinsBold: ["PoppinsBold", "sans-serif"],
        PoppinsSemiBold: ["PoppinsSemiBold", "sans-serif"],
        PoppinsMedium: ["PoppinsMedium", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".custom-scrollbar": {
          // Customize scrollbar width, height, and color
          "scrollbar-width": "thin", // Or "auto" for default scrollbar
          "scrollbar-color": "#1F3E68 #00000040", // Cross-browser scrollbar color
          "scrollbar-arrow-color": "transparent",
        },
        ".custom-scrollbar-thumb": {
          // Customize scrollbar thumb
          "scrollbar-color": "rgba(0, 255, 0, 0.5) rgba(255, 255, 0, 0.5)", // Cross-browser scrollbar thumb color
        },
      });
    }),
  ],
};
