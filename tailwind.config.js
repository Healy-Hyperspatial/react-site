const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"], // Adjust paths for your project
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lora", ...defaultTheme.fontFamily.sans],
        oxanium: ["Oxanium", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
