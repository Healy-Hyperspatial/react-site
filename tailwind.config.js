const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"], // Adjust paths for your project
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
